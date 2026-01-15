// Firebase + Local Storage Fallback
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  getDocs, 
  serverTimestamp 
} from "firebase/firestore";
import type { Timestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbQc9bCDYwYuDvgfpVodjXnNqzSSOU1PY",
  authDomain: "attaedu-19056.firebaseapp.com",
  projectId: "attaedu-19056",
  storageBucket: "attaedu-19056.firebasestorage.app",
  messagingSenderId: "70702699423",
  appId: "1:70702699423:web:d594929fb80b9bc5baa3aa",
  measurementId: "G-PLCS0K016C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Types
export type LeaderboardEntry = {
  id?: string;
  playerName: string;
  totalScore: number;
  flashScore: number;
  caseScore: number;
  bossScore: number;
  rank: string;
  badges: string[];
  timestamp: Timestamp | null;
};

// Local Storage Keys
const LOCAL_LEADERBOARD_KEY = 'hcm_quiz_leaderboard_local';
const CACHE_KEY = 'hcm_leaderboard_cache';
const CACHE_TIME_KEY = 'hcm_leaderboard_cache_time';

// Get local leaderboard
function getLocalLeaderboard(): LeaderboardEntry[] {
  try {
    const data = localStorage.getItem(LOCAL_LEADERBOARD_KEY);
    if (data) {
      const entries = JSON.parse(data) as LeaderboardEntry[];
      return entries.sort((a, b) => b.totalScore - a.totalScore).slice(0, 10);
    }
  } catch (e) {
    console.log("Local storage error:", e);
  }
  return [];
}

// Save to local leaderboard
function saveToLocalLeaderboard(entry: Omit<LeaderboardEntry, 'id' | 'timestamp'>): string {
  try {
    const entries = getLocalLeaderboard();
    const newEntry: LeaderboardEntry = {
      ...entry,
      id: 'local_' + Date.now(),
      timestamp: null
    };
    entries.push(newEntry);
    // Keep top 50
    const sorted = entries.sort((a, b) => b.totalScore - a.totalScore).slice(0, 50);
    localStorage.setItem(LOCAL_LEADERBOARD_KEY, JSON.stringify(sorted));
    return newEntry.id!;
  } catch (e) {
    console.log("Save local error:", e);
    return '';
  }
}

// Clear cache
export function clearLeaderboardCache() {
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(CACHE_TIME_KEY);
}

// Save score - try Firebase first, fallback to local
export async function saveScore(entry: Omit<LeaderboardEntry, 'id' | 'timestamp'>): Promise<string | null> {
  console.log("💾 Saving score...", entry);
  
  // Always save to local first
  const localId = saveToLocalLeaderboard(entry);
  
  // Try Firebase
  try {
    const docRef = await addDoc(collection(db, "leaderboard"), {
      ...entry,
      timestamp: serverTimestamp()
    });
    console.log("✅ Score saved to Firebase:", docRef.id);
    clearLeaderboardCache();
    return docRef.id;
  } catch (error: any) {
    console.log("⚠️ Firebase save failed, using local storage");
    console.log("✅ Score saved locally:", localId);
    return localId;
  }
}

// Timeout wrapper
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timeout = new Promise<T>((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), ms)
  );
  return Promise.race([promise, timeout]);
}

// Get leaderboard - try Firebase first, fallback to local
export async function getLeaderboard(limitCount: number = 10): Promise<LeaderboardEntry[]> {
  // Try Firebase first (with short timeout)
  try {
    console.log("📊 Trying Firebase...");
    
    const q = query(
      collection(db, "leaderboard"),
      orderBy("totalScore", "desc"),
      limit(limitCount)
    );
    
    const querySnapshot = await withTimeout(getDocs(q), 5000);
    const entries: LeaderboardEntry[] = [];
    
    querySnapshot.forEach((doc) => {
      entries.push({
        id: doc.id,
        ...doc.data()
      } as LeaderboardEntry);
    });
    
    if (entries.length > 0) {
      console.log("✅ Loaded from Firebase:", entries.length, "entries");
      return entries;
    }
  } catch (error: any) {
    console.log("⚠️ Firebase failed:", error.message);
  }
  
  // Fallback to local
  console.log("📦 Using local leaderboard");
  const localEntries = getLocalLeaderboard();
  console.log("✅ Loaded from local:", localEntries.length, "entries");
  return localEntries;
}

export { db };
