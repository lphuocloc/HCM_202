
export interface ContentSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  quotes?: string[];
}

export interface ChapterData {
  title: string;
  sections: ContentSection[];
}
