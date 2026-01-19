
import type { ChapterData, QuizQuestion, TimelinePeriod } from './types';

export const TIMELINE_DATA: TimelinePeriod[] = [
  {
    id: "period-1",
    period: "1890 – 1911",
    theme: "Hình thành lòng yêu nước – chí hướng cứu nước",
    themeIcon: "🌱",
    color: "#4ade80",
    events: [
      {
        year: "1890",
        title: "Khởi nguồn",
        icon: "👶",
        description: "Sinh tại Kim Liên, Nghệ An trong gia đình nhà nho yêu nước",
        details: [
          "Học chữ Hán, quốc ngữ; sớm tiếp xúc văn hoá dân tộc",
          "Cha là Nguyễn Sinh Sắc - nhà nho yêu nước"
        ]
      },
      {
        year: "1890-1910",
        title: "Chứng kiến thời cuộc",
        icon: "👁️",
        description: "Quan sát và suy tư về vận mệnh dân tộc",
        details: [
          "Nước mất vào tay thực dân Pháp",
          "Phong trào Cần Vương, phong trào Duy Tân thất bại",
          "Nhận ra con đường cũ (vũ trang, cải cách) không thành công"
        ],
        highlight: "Bước đầu hình thành ý chí cứu nước theo lối mới"
      }
    ]
  },
  {
    id: "period-2",
    period: "1911 – 1920",
    theme: "Tìm đường cứu nước – tiếp cận tinh hoa nhân loại",
    themeIcon: "🌍",
    color: "#60a5fa",
    events: [
      {
        year: "1911",
        title: "Rời Tổ quốc",
        icon: "⛵",
        description: "Ra đi từ Bến Nhà Rồng – bắt đầu hành trình tìm đường cứu nước",
        details: [
          "Làm nhiều nghề, đi nhiều châu lục",
          "Quan sát đời sống công – nông – thuộc địa",
          "Đến Pháp, Anh, Mỹ, Châu Phi, Mỹ La-tinh"
        ]
      },
      {
        year: "1917-1919",
        title: "Bước ngoặt tư tưởng",
        icon: "💡",
        description: "Tiếp cận các tư tưởng tiến bộ của thời đại",
        details: [
          "Ảnh hưởng sâu sắc Cách mạng Tháng Mười Nga (1917)",
          "Tiếp cận tư tưởng tự do, bình đẳng, nhân quyền",
          "1919: Gửi 'Bản yêu sách 8 điểm' đến Hội nghị Versailles"
        ]
      },
      {
        year: "1920",
        title: "Trở thành người cộng sản",
        icon: "⭐",
        description: "Đọc Luận cương Lênin về vấn đề dân tộc và thuộc địa",
        details: [
          "Nhận ra con đường cách mạng vô sản",
          "Tham gia Đảng Cộng sản Pháp tại Đại hội Tours"
        ],
        highlight: "Chuyển từ yêu nước tự phát → yêu nước cách mạng"
      }
    ]
  },
  {
    id: "period-3",
    period: "1920 – 1930",
    theme: "Xây dựng nền tảng tư tưởng – chuẩn bị cách mạng",
    themeIcon: "🔥",
    color: "#f97316",
    events: [
      {
        year: "1921-1923",
        title: "Hoạt động tại Pháp",
        icon: "📰",
        description: "Đấu tranh và truyền bá tư tưởng cách mạng",
        details: [
          "Sáng lập Hội Liên hiệp thuộc địa",
          "Viết hàng loạt tác phẩm báo chí đấu tranh chống thực dân",
          "Xuất bản báo Le Paria (Người cùng khổ)"
        ]
      },
      {
        year: "1923-1924",
        title: "Học tập tại Liên Xô",
        icon: "📚",
        description: "Nghiên cứu chủ nghĩa Mác–Lênin 'tại nguồn'",
        details: [
          "Học tập tại Trường Đại học Phương Đông",
          "Tham gia Quốc tế Cộng sản"
        ]
      },
      {
        year: "1925",
        title: "Thành lập tổ chức cách mạng",
        icon: "🏛️",
        description: "Thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu",
        details: [
          "Tổ chức huấn luyện cán bộ",
          "Truyền bá chủ nghĩa Mác–Lênin vào Việt Nam"
        ]
      },
      {
        year: "1927",
        title: "Đường Kách Mệnh",
        icon: "📖",
        description: "Xuất bản tác phẩm lý luận quan trọng",
        details: [
          "Hệ thống hóa lý luận cách mạng Việt Nam",
          "Xác định con đường cách mạng giải phóng dân tộc"
        ]
      },
      {
        year: "1930",
        title: "Thành lập Đảng",
        icon: "🎌",
        description: "Chủ trì hợp nhất các tổ chức → Thành lập Đảng Cộng sản Việt Nam",
        details: [
          "Soạn Cương lĩnh chính trị đầu tiên",
          "Định hướng lực lượng cách mạng"
        ],
        highlight: "Tư tưởng độc lập dân tộc gắn liền CNXH rõ nét"
      }
    ]
  },
  {
    id: "period-4",
    period: "1930 – 1945",
    theme: "Hoàn thiện tư tưởng giải phóng – lãnh đạo giành chính quyền",
    themeIcon: "🛡️",
    color: "#ef4444",
    events: [
      {
        year: "1931-1933",
        title: "Thời kỳ gian khó",
        icon: "⛓️",
        description: "Bị bắt, tù đày tại Hồng Kông",
        details: [
          "Tư tưởng vẫn tiếp tục phát triển trong ngục tù",
          "Viết nhiều tác phẩm quan trọng"
        ]
      },
      {
        year: "1941",
        title: "Về nước",
        icon: "🏠",
        description: "Trở về Tổ quốc sau 30 năm bôn ba",
        details: [
          "Thành lập Mặt trận Việt Minh",
          "Xây dựng mặt trận dân tộc thống nhất toàn dân",
          "Chủ trương: 'Dân tộc trên hết, Tổ quốc trên hết'"
        ]
      },
      {
        year: "1942-1943",
        title: "Chuẩn bị tổng khởi nghĩa",
        icon: "📋",
        description: "Cụ thể hóa chiến lược cách mạng dân tộc dân chủ",
        details: [
          "Lãnh đạo phong trào đấu tranh chống Nhật – Pháp",
          "Xây dựng lực lượng vũ trang"
        ]
      },
      {
        year: "1945",
        title: "Cách mạng Tháng Tám",
        icon: "🏆",
        description: "Chớp thời cơ, lãnh đạo toàn dân tổng khởi nghĩa",
        details: [
          "Nhật đầu hàng Đồng minh",
          "Thành công Cách mạng Tháng Tám",
          "2/9/1945: Đọc Tuyên ngôn Độc lập",
          "Khai sinh Nước Việt Nam Dân chủ Cộng hoà"
        ],
        highlight: "Tư tưởng giải phóng dân tộc thành hiện thực"
      }
    ]
  },
  {
    id: "period-5",
    period: "1945 – 1969",
    theme: "Phát triển toàn diện – xây dựng CNXH và bảo vệ Tổ quốc",
    themeIcon: "🌿",
    color: "#8b5cf6",
    events: [
      {
        year: "1945-1954",
        title: "Kháng chiến chống Pháp",
        icon: "⚔️",
        description: "Vừa kháng chiến vừa kiến quốc",
        details: [
          "Xây dựng nhà nước của dân – do dân – vì dân",
          "Phát triển quyền tự do dân chủ, đoàn kết toàn dân",
          "1954: Chiến thắng Điện Biên Phủ"
        ]
      },
      {
        year: "1954-1965",
        title: "Xây dựng CNXH ở miền Bắc",
        icon: "🏗️",
        description: "Phát triển kinh tế – xây dựng đời sống mới",
        details: [
          "Kết hợp các thành phần kinh tế trong thời kỳ quá độ",
          "Xây dựng con người mới XHCN"
        ]
      },
      {
        year: "1960s",
        title: "Tư tưởng văn hóa – con người",
        icon: "🌻",
        description: "Văn hóa là nền tảng tinh thần",
        details: [
          "Giáo dục con người toàn diện",
          "Đạo đức cách mạng: Cần – Kiệm – Liêm – Chính",
          "Chí công vô tư, nêu gương 'Nói đi đôi với làm'"
        ]
      },
      {
        year: "1965-1969",
        title: "Đoàn kết quốc tế",
        icon: "🕊️",
        description: "Kết hợp sức mạnh dân tộc & thời đại",
        details: [
          "Ủng hộ phong trào giải phóng thuộc địa",
          "Lãnh đạo kháng chiến chống Mỹ"
        ]
      },
      {
        year: "1969",
        title: "Di chúc thiêng liêng",
        icon: "📜",
        description: "Tổng kết tư tưởng cả đời",
        details: [
          "Niềm tin vào thắng lợi của nhân dân",
          "Tư tưởng nhân văn sâu sắc",
          "Để lại muôn vàn tình thương yêu cho toàn dân, toàn Đảng"
        ],
        highlight: "Tư tưởng Hồ Chí Minh trở nên hoàn chỉnh, toàn diện, mang tầm thời đại"
      }
    ]
  }
];

// COMPREHENSIVE QUIZ - 30 QUESTIONS FOR ROUND 1
export const COMPREHENSIVE_QUIZ_30: QuizQuestion[] = [
  // SET 1: ĐỊNH NGHĨA NHÀ NƯỚC DÂN CHỦ
  {
    id: "ds1",
    question: "Theo Hồ Chí Minh, Nhà nước dân chủ là Nhà nước 'của dân, do dân, vì dân' có bản chất là gì?",
    options: [
      "Quyền lực thuộc về các cán bộ được bầu chọn",
      "Quyền lực thực sự thuộc về toàn thể nhân dân, không phân biệt giai cấp, giới tính, dân tộc hay tôn giáo",
      "Quyền lực do Đảng Cộng sản quản lý toàn diện",
      "Quyền lực được chia sẻ giữa nhân dân và chính phủ"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh định nghĩa rõ ràng: Nhà nước dân chủ là Nhà nước 'của dân, do dân, vì dân' với bản chất quyền lực thực sự thuộc về toàn thể nhân dân, không phân biệt bất kỳ điều kiện gì."
  },
  {
    id: "ds2",
    question: "Nhà nước dân chủ theo Hồ Chí Minh có ba đặc trưng cốt lõi. Đặc trưng nào KHÔNG phải là ba đặc trưng đó?",
    options: [
      "Quyền lực thống nhất thuộc dân thông qua tổng tuyển cử phổ thông",
      "Dân chủ rộng rãi với nguyên tắc tập trung dân chủ",
      "Cán bộ là đầy tớ dân chứ không phải 'quan cách mạng'",
      "Quyền lực tập trung ở các lãnh đạo cấp trung ương"
    ],
    correctAnswer: 3,
    explanation: "Ba đặc trưng cốt lõi của Nhà nước dân chủ theo Hồ Chí Minh là: quyền lực thống nhất thuộc dân, dân chủ rộng rãi với tập trung dân chủ, và cán bộ là đầy tớ dân. Quyền lực tập trung ở trung ương là TRÁI ngược với nguyên tắc của Nhà nước dân chủ."
  },

  // SET 2: QUYỀN LỰC THỰC SỰ THUỘC DÂN
  {
    id: "ds3",
    question: "Hồ Chí Minh khẳng định: 'Bao nhiêu quyền hạn đều của dân. Chính quyền từ xã đến Chính phủ trung ương do dân cử ra.' Điều này có nghĩa là gì?",
    options: [
      "Nhân dân là ông chủ tối cao thông qua bầu cử trực tiếp",
      "Dân chỉ cử ra các cán bộ, còn quyền lực thực sự ở Đảng",
      "Nhân dân không quyền can thiệp vào công việc của chính quyền",
      "Các cấp chính quyền tự do hoạt động mà không cần chịu trách nhiệm với dân"
    ],
    correctAnswer: 0,
    explanation: "Đây là nguyên tắc cơ bản của Nhà nước dân chủ: Nhân dân là ông chủ tối cao, không chỉ bầu cử mà còn có quyền giám sát và kiểm soát các cơ quan chính quyền từ xã đến trung ương."
  },
  {
    id: "ds4",
    question: "Dân chủ trực tiếp và dân chủ đại diện mà Hồ Chí Minh đề cập có mục đích gì?",
    options: [
      "Giảm bớt số lượng cử tri để quản lý dễ dàng hơn",
      "Đảm bảo mọi người dân tham gia quản lý nhà nước",
      "Tạo ra lớp đại biểu có quyền lực tuyệt đối",
      "Thay thế hoàn toàn sự tham gia của nhân dân"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh nêu rõ: kết hợp dân chủ trực tiếp (hội nghị dân, trưng cầu ý dân) với dân chủ đại diện (đại biểu nhân dân) để đảm bảo mọi người dân tham gia quản lý nhà nước."
  },
  {
    id: "ds5",
    question: "Khác biệt chính giữa Nhà nước dân chủ của Hồ Chí Minh và các hình thức chính phủ độc裁là gì?",
    options: [
      "Nhà nước dân chủ có nhiều cán bộ hơn",
      "Nhà nước dân chủ tập trung quyền lực vào tay nhân dân, không phải tay cá nhân hay cấp độc tài",
      "Nhà nước dân chủ có quân đội mạnh hơn",
      "Nhà nước dân chủ không cần có Hiến pháp"
    ],
    correctAnswer: 1,
    explanation: "Điểm cốt lõi là quyền lực thuộc về toàn thể nhân dân, được thực hiện thông qua các tổ chức đại diện của nhân dân, chứ không tập trung ở tay cá nhân hay một cấp độc tài."
  },

  // SET 3: NGUYÊN TẮC TẬP TRUNG DÂN CHỦ
  {
    id: "ds6",
    question: "Nguyên tắc tập trung dân chủ mà Hồ Chí Minh nêu gồm những yếu tố nào?",
    options: [
      "Chỉ có dân chủ, không có tập trung",
      "Dân chủ để bày tỏ ý kiến tự do + tập trung thống nhất hành động",
      "Chỉ có tập trung, không có dân chủ",
      "Mọi vấn đề đều được bỏ phiếu từng cái riêng"
    ],
    correctAnswer: 1,
    explanation: "Dân chủ để nhân dân bày tỏ ý kiến tự do, tìm chân lý; tập trung thống nhất hành động với 'số ít phục tùng số nhiều, cấp dưới phục tùng cấp trên.' Đây là sự kết hợp khéo léo giữa dân chủ và tập trung."
  },
  {
    id: "ds7",
    question: "Mục đích của dân chủ trong nguyên tắc tập trung dân chủ là gì?",
    options: [
      "Để tạo ra nhiều tranh luận và xung đột",
      "Để bày tỏ ý kiến tự do, tìm chân lý",
      "Để chứng tỏ quyền tự do của cá nhân",
      "Để làm cho công việc kéo dài"
    ],
    correctAnswer: 1,
    explanation: "Theo Hồ Chí Minh, dân chủ trong nguyên tắc tập trung dân chủ là để nhân dân bày tỏ ý kiến tự do, tìm tòi chân lý, từ đó đạt được sự đồng thuận cao nhất."
  },
  {
    id: "ds8",
    question: "Công thức 'số ít phục tùng số nhiều, cấp dưới phục tùng cấp trên' phục vụ mục đích nào?",
    options: [
      "Áp chế số đông bởi số ít",
      "Thống nhất hành động sau khi đã thảo luận dân chủ",
      "Bãi bỏ quyền phát biểu của thiểu số",
      "Tập trung quyền lực trong tay lãnh đạo"
    ],
    correctAnswer: 1,
    explanation: "Đây là nguyên tắc để đảm bảo rằng sau khi có dân chủ đầy đủ (lắng nghe ý kiến thiểu số), tất cả mọi người phải tuân theo quyết định của đa số, đảm bảo sự thống nhất hành động."
  },

  // SET 4: CÁN BỘ LÀ ĐẦY TỚ DÂN
  {
    id: "ds9",
    question: "Cán bộ theo Hồ Chí Minh phải 'nói dân hiểu, làm dân theo, gần dân, sát dân' có ý nghĩa gì?",
    options: [
      "Cán bộ phải dùng ngôn ngữ đơn giản để tuyên truyền",
      "Cán bộ phải xem mình là công bộc phục vụ nhân dân, gần gũi và hiểu rõ đời sống dân chúng",
      "Cán bộ chỉ việc nghe theo lệnh của nhân dân",
      "Cán bộ phải làm việc mà không cần tư duy"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh dạy rằng cán bộ phải xem mình là đầy tớ, công bộc của dân, do đó phải: nói cách mà dân hiểu, hành động mà dân sẵn sàng theo, sống gần gũi và sát sao với dân chúng."
  },
  {
    id: "ds10",
    question: "Hồ Chí Minh nói: 'Trong chế độ dân chủ, địa vị cao nhất là dân. Nhà nước, Chính phủ và mọi cán bộ từ Chủ tịch đến nhân viên phục vụ đều là đầy tớ, công bộc của dân.' Điều này có ý nói gì?",
    options: [
      "Cán bộ không cần có kỹ năng chuyên môn",
      "Cán bộ không có địa vị trong xã hội",
      "Dù có địa vị cao nhất, cán bộ vẫn phải phục vụ lợi ích của nhân dân",
      "Nhân dân phải bị áp dục bởi cán bộ"
    ],
    correctAnswer: 2,
    explanation: "Hồ Chí Minh khẳng định một nguyên tắc cơ bản: dù cán bộ có địa vị hay quyền lực, họ vẫn là những người phục vụ, không phải là ông chủ. Nhân dân mới là địa vị cao nhất."
  },
  {
    id: "ds11",
    question: "Để chống quan liêu, Hồ Chí Minh đề xuất phương pháp nào?",
    options: [
      "Bỏ công việc hành chính",
      "Tự phê bình phê bình thường xuyên",
      "Bãi bỏ hết cán bộ quản lý",
      "Để nhân dân tự quản lý hoàn toàn"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh đề xuất cán bộ cần tự phê bình, phê bình thường xuyên - tức là liên tục đánh giá, sửa chữa những khiếm khuyết, chống lại tư tưởng quan liêu từ trong bản thân."
  },
  {
    id: "ds12",
    question: "Trong nội dung về cán bộ, Hồ Chí Minh nhấn mạnh yếu tố nào là quan trọng nhất?",
    options: [
      "Trình độ học vấn cao",
      "Kinh nghiệm công tác dài",
      "Đạo đức, liêm chính, chí công vô tư",
      "Khả năng ngoại giao"
    ],
    correctAnswer: 2,
    explanation: "Hồ Chí Minh coi đạo đức và liêm chính là nền tảng quan trọng nhất của cán bộ. Người dạy: 'Cần, Kiệm, Liêm, Chính, Chí công vô tư' là những đức tính bắt buộc."
  },

  // SET 5: CHẤT VẤN THỰC HÀNH ĐEM TỰA LẠI
  {
    id: "ds13",
    question: "Nếu một cán bộ tham nhũng, lãng phí tài sản công cộng, hành động đó vi phạm nguyên tắc nào của Nhà nước dân chủ?",
    options: [
      "Chỉ là vi phạm pháp luật, không liên quan đến Nhà nước dân chủ",
      "Vi phạm nguyên tắc 'của dân, do dân, vì dân' - không còn phục vụ lợi ích nhân dân",
      "Là lỗi của Nhà nước, không liên quan đến cán bộ",
      "Là việc bình thường trong hoạt động hành chính"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh gọi tham ô, lãng phí là 'giặc nội xâm' - những hành vi trực tiếp vi phạm nguyên tắc Nhà nước dân chủ vì nó chọn lợi ích cá nhân thay vì lợi ích nhân dân."
  },
  {
    id: "ds14",
    question: "Câu nói 'Đoàn thể từ Trung ương đến xã do dân tổ chức nên' có ý nói rằng:",
    options: [
      "Đoàn thể được Đảng tổ chức và kiểm soát tuyệt đối",
      "Đoàn thể là tổ chức tự nguyện của nhân dân để thực hiện dân chủ",
      "Nhân dân không có quyền tham gia đoàn thể",
      "Đoàn thể chỉ là cơ quan hành chính"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh nhấn mạnh đoàn thể là tổ chức của nhân dân, từ cơ sở đến trung ương, thể hiện sự tổ chức tự nguyện của nhân dân để thực hiện quyền dân chủ và quản lý xã hội."
  },
  {
    id: "ds15",
    question: "Theo Hồ Chí Minh, 'Quyền hành và lực lượng đều ở nơi dân' có nghĩa là:",
    options: [
      "Nhân dân chứng thực quyền lực và sức mạnh",
      "Dân chủ chỉ mang tính biểu tượng, quyền lực thực sự ở đảng",
      "Nhân dân phải từ bỏ quyền lực cho chính phủ",
      "Quyền lực phải được dân tích cực kiểm soát và thực hành"
    ],
    correctAnswer: 3,
    explanation: "Hồ Chí Minh nhấn mạnh rằng nguồn gốc thực sự của quyền lực và sức mạnh là ở nhân dân. Điều này có nghĩa là dân chủ không phải chỉ mang tính hình thức, mà nhân dân phải tích cực tham gia, kiểm soát."
  },
  {
    id: "ds16",
    question: "Hồ Chí Minh yêu cầu cán bộ phải 'nắm rõ tình hình dân chúng' có ý nói gì?",
    options: [
      "Cán bộ chỉ cần biết điều kiện kinh tế của dân",
      "Cán bộ phải hiểu sâu sắc nhu cầu, khó khăn và mong muốn của nhân dân để phục vụ tốt hơn",
      "Cán bộ không cần biết về tình hình dân chúng",
      "Cán bộ chỉ cần báo cáo cho cấp trên"
    ],
    correctAnswer: 1,
    explanation: "Để phục vụ dân chúng tốt, cán bộ phải hiểu rõ đời sống, nhu cầu thực tế của nhân dân. Đó là điều kiện tiên quyết để đưa ra những quyết định phù hợp với lợi ích của dân."
  },
  {
    id: "ds17",
    question: "Theo tư tưởng của Hồ Chí Minh, Nhà nước dân chủ cần có luật pháp vì lý do gì?",
    options: [
      "Để cán bộ có quyền lực tuyệt đối",
      "Để quản lý xã hội, bảo vệ quyền dân chủ của nhân dân, và đảm bảo công bằng",
      "Để hạn chế quyền lực của dân",
      "Vì luật pháp là biểu tượng của cấp quyền"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh nhấn mạnh luật pháp phải bảo vệ quyền tự do, dân chủ của nhân dân, không phải để áp chế hay hạn chế dân chúng."
  },
  {
    id: "ds18",
    question: "Nhân dân có quyền làm gì đối với những cán bộ không xứng đáng?",
    options: [
      "Chỉ có thể phàn nàn nhưng không thể làm gì",
      "Có quyền bãi miễn, không bầu cử họ nữa hoặc yêu cầu thay thế",
      "Phải chờ cấp trên xử lý",
      "Không có quyền gì"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh khẳng định: nhân dân có quyền bãi miễn những cán bộ tỏ ra không xứng đáng với sự tín nhiệm. Đây là cách nhân dân kiểm soát và giám sát quyền lực."
  },
  {
    id: "ds19",
    question: "Theo Hồ Chí Minh, khi một quyết định được đa số ủng hộ, những người không đồng ý phải làm gì?",
    options: [
      "Có quyền từ chối tuân theo quyết định",
      "Phải tuân theo quyết định của đa số, nhưng vẫn có quyền đề xuất cải tiến",
      "Có thể tiếp tục phản đối công khai",
      "Không cần tuân theo"
    ],
    correctAnswer: 1,
    explanation: "Nguyên tắc tập trung dân chủ yêu cầu: sau khi lắng nghe tất cả ý kiến (dân chủ), thiểu số phải tuân theo quyết định của đa số (tập trung). Tuy nhiên, thiểu số vẫn có quyền đề xuất những cải tiến."
  },
  {
    id: "ds20",
    question: "Hồ Chí Minh nói về sự liên kết giữa Đảng và nhân dân có nghĩa là gì?",
    options: [
      "Đảng hoàn toàn độc lập, không cần quan tâm đến dân",
      "Đảng phải gắn bó máu thịt với nhân dân, lắng nghe và phục vụ lợi ích của nhân dân",
      "Dân phải vô điều kiện tuân theo Đảng",
      "Đảng và dân là hai lực lượng tách biệt hoàn toàn"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh nhấn mạnh Đảng phải duy trì mối liên hệ chặt chẽ với nhân dân, lắng nghe ý kiến, hiểu nhu cầu của dân, và luôn đặt lợi ích nhân dân lên hàng đầu."
  },
  {
    id: "ds21",
    question: "Theo Hồ Chí Minh, điều gì là nguy hiểm nhất đối với một chế độ dân chủ?",
    options: [
      "Nhân dân quá tham gia vào chính trị",
      "Cán bộ không có đủ quyền lực",
      "Tư tưởng quan liêu, tham ô, lãng phí từ bên trong",
      "Luật pháp quá nghiêm minh"
    ],
    correctAnswer: 2,
    explanation: "Hồ Chí Minh cảnh báo rằng quan liêu, tham ô, lãng phí là 'giặc nội xâm' - những kẻ thù phá hoại từ bên trong, có thể làm suy yếu chế độ dân chủ nhanh hơn bất kỳ mối đe dọa ngoài nào."
  },
  {
    id: "ds22",
    question: "Khác biệt cơ bản giữa 'cán bộ là đầy tớ dân' và 'cán bộ là ông chủ' là gì?",
    options: [
      "Cán bộ là đầy tớ có quyền lực, cán bộ là ông chủ không có quyền lực",
      "Cán bộ là đầy tớ phục vụ lợi ích dân, ông chủ thì tư lợi",
      "Không có khác biệt gì, chỉ là cách nói khác nhau",
      "Cán bộ là đầy tớ để hưởng lương, ông chủ để quyền quyết định"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh khẳng định cán bộ là công bộc, đầy tớ của dân - có nghĩa là họ phục vụ lợi ích chung của nhân dân. Nếu coi mình là ông chủ, họ sẽ tư lợi và lạm dụng quyền lực."
  },
  {
    id: "ds23",
    question: "Trong Nhà nước dân chủ, quyền lực của nhân dân được thực hiện thông qua những hình thức nào?",
    options: [
      "Chỉ thông qua bầu cử",
      "Chỉ thông qua các cuộc hội nghị dân",
      "Dân chủ trực tiếp (hội nghị dân, trưng cầu ý dân) kết hợp dân chủ đại diện (bầu cử đại biểu)",
      "Chỉ qua các báo chí"
    ],
    correctAnswer: 2,
    explanation: "Hồ Chí Minh nhấn mạnh kết hợp cả dân chủ trực tiếp (nhân dân trực tiếp tham gia quyết định) và dân chủ đại diện (chọn đại biểu) để đảm bảo nhân dân tham gia toàn diện."
  },
  {
    id: "ds24",
    question: "Nguyên tắc 'dân chủ rộng rãi với tập trung dân chủ' có mục đích gì?",
    options: [
      "Để hạn chế dân chủ của nhân dân",
      "Để mọi người có cơ hội bày tỏ ý kiến, nhưng các quyết định phải tuân theo ý của đa số",
      "Để lãnh đạo có quyền quyết định một mình",
      "Để tránh bầu cử"
    ],
    correctAnswer: 1,
    explanation: "Dân chủ rộng rãi = mọi người được bày tỏ ý kiến tự do. Tập trung = sau thảo luận, phải thành một quyết định thống nhất theo đa số. Điều này kết hợp tính dân chủ với tính hiệu quả."
  },
  {
    id: "ds25",
    question: "Theo tư tưởng Hồ Chí Minh, sự 'trong sạch' của cán bộ liên quan đến yếu tố nào?",
    options: [
      "Chỉ liên quan đến vệ sinh cá nhân",
      "Liên quan đến đạo đức, liêm chính, không tham ô, không lãng phí",
      "Chỉ liên quan đến học vấn",
      "Chỉ liên quan đến tuân theo lệnh từ trên"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh nhấn mạnh 'trong sạch' của cán bộ - tức là không tham ô, không lãng phí, liêm chính, phục vụ lợi ích chung chứ không phục vụ lợi ích cá nhân."
  },
  {
    id: "ds26",
    question: "Tự phê bình phê bình theo Hồ Chí Minh là để làm gì?",
    options: [
      "Để chế nhạo những cán bộ khác",
      "Để tự đánh giá, nhận ra sai sót và cải thiện liên tục, chống lại tư tưởng quan liêu",
      "Để thể hiện sự khiêm tốn",
      "Để có lý do xin thôi việc"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh dạy cán bộ phải tự phê bình phê bình thường xuyên - liên tục đánh giá khiếm khuyết, sửa chữa bản thân, để ngăn chặn tư tưởng quan liêu phát triển."
  },
  {
    id: "ds27",
    question: "Nếu nhân dân bày tỏ ý kiến khác với quyết định của lãnh đạo, điều gì nên xảy ra?",
    options: [
      "Lãnh đạo có quyền không nghe ý kiến dân",
      "Lãnh đạo phải lắng nghe, giải thích, có thể điều chỉnh quyết định nếu cần",
      "Nhân dân phải im lặng",
      "Dân chỉ được nói nhưng không ảnh hưởng đến quyết định"
    ],
    correctAnswer: 1,
    explanation: "Trong Nhà nước dân chủ, lãnh đạo phải lắng nghe ý kiến của dân, giải thích rõ ràng, và sẵn sàng điều chỉnh quyết định nếu ý kiến dân có logic hơn."
  },
  {
    id: "ds28",
    question: "Hồ Chí Minh nói 'Nhân dân là ông chủ tối cao' nhưng lại nói 'Cán bộ là đầy tớ dân' - điều này mâu thuẫn không?",
    options: [
      "Có mâu thuẫn vì một cái là chủ một cái là tớ",
      "Không mâu thuẫn - nhân dân là chủ, nên cán bộ phải là tớ phục vụ nhân dân",
      "Mâu thuẫn vì không ai vừa là chủ vừa có tớ",
      "Không liên quan đến nhau"
    ],
    correctAnswer: 1,
    explanation: "Đây không phải mâu thuẫn mà là mối quan hệ chặt chẽ: nhân dân là ông chủ (có quyền lực tối cao), do đó cán bộ phải là công bộc, tớ, phục vụ lợi ích của ông chủ là dân."
  }
];

export const getRandomQuestions15 = (): QuizQuestion[] => {
  const shuffled = [...COMPREHENSIVE_QUIZ_30].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 15);
};

export const CHAPTER_IV_DATA: ChapterData = {
  title: "Chương IV: Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân",
  sections: [
    {
      id: "part-1-1",
      title: "I. Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam",
      subtitle: "1. Tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam",
      content: [
        "【LUẬN ĐIỂM TRUNG TÂM】Hồ Chí Minh khẳng định: cách mạng muốn thắng lợi 'trước hết phải có Đảng'; Đảng giữ vai trò hạt nhân lãnh đạo, quyết định phương hướng, tổ chức lực lượng và bảo đảm cách mạng đi tới thành công. Trích từ Đường cách mệnh (1927), Người nêu ý: cách mạng phải có 'đảng cách mệnh'; 'Đảng có vững, cách mệnh mới thành công', ví như người cầm lái vững thì thuyền mới chạy.",
        "【TÍNH TẤT YẾU - Cơ sở lý luận】Đảng Cộng sản Việt Nam do Hồ Chí Minh sáng lập và rèn luyện, tồn tại và phát triển theo quan điểm của V.I. Lênin về 'đảng kiểu mới của giai cấp vô sản'. Nền tảng lý luận tổ chức của Đảng là kiểu Đảng cách mạng của giai cấp vô sản, không phải đảng phái cải lương hay đảng 'điều đình'.",
        "【TÍNH TẤT YẾU - Cơ sở thực tiễn Việt Nam】Trên thế giới, sự ra đời Đảng cộng sản thường là kết quả kết hợp chủ nghĩa Mác–Lênin với phong trào công nhân. Đối với Việt Nam, Hồ Chí Minh chỉ ra sự ra đời của Đảng là kết quả kết hợp: Chủ nghĩa Mác–Lênin + Phong trào công nhân + Phong trào yêu nước. Người 'đưa thêm vào yếu tố thứ ba nữa, đó là phong trào yêu nước'.",
        "【Giải thích về yếu tố yêu nước】Vì Việt Nam thuộc địa–phong kiến, nên 'mâu thuẫn cơ bản' là 'giữa toàn thể nhân dân Việt Nam với các thế lực đế quốc và tay sai'. Thực tế cho thấy phong trào công nhân kết hợp rất nhuần nhuyễn với phong trào yêu nước; đấu tranh giai cấp quyện chặt với đấu tranh dân tộc, khó tách rời, nhưng mục tiêu chung là giành độc lập, tự do cho dân tộc.",
        "【Mục tiêu giải phóng】Giải phóng Dân tộc → Giải phóng Giai cấp → Giải phóng Xã hội → Giải phóng Con người.",
        "【KẾT LUẬN TẤT YẾU】Từ các điều kiện đó, Đảng Cộng sản Việt Nam ra đời, tồn tại và phát triển là nhu cầu tất yếu của xã hội Việt Nam từ đầu năm 1930; Đảng được nhân dân tin cậy giao sứ mệnh lãnh đạo sự nghiệp giải phóng dân tộc và đi lên chủ nghĩa xã hội.",
        "【VAI TRÒ LÃNH ĐẠO - Định hướng đường lối】Giữ vững mục tiêu giải phóng dân tộc và tiến lên CNXH; bảo đảm cách mạng đi đúng quỹ đạo. Đảng là 'người cầm lái' của 'con thuyền cách mạng': lãnh đạo xuyên suốt cả quá trình cách mạng dân tộc dân chủ và cách mạng xã hội chủ nghĩa.",
        "【VAI TRÒ LÃNH ĐẠO - Tổ chức quần chúng】Tổ chức, vận động và tập hợp quần chúng: 'trong thì vận động và tổ chức dân chúng'.",
        "【VAI TRÒ LÃNH ĐẠO - Đoàn kết quốc tế】Liên hệ, đoàn kết quốc tế: 'ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp ở mọi nơi'.",
        "【VAI TRÒ LÃNH ĐẠO - Điều kiện thắng lợi】Bảo đảm điều kiện thắng lợi: nhấn mạnh yêu cầu Đảng phải vững thì cách mạng mới thành công. Sự lãnh đạo của Đảng là một tất yếu khách quan, xuất phát từ yêu cầu phát triển của dân tộc. Bảo đảm và phát huy vai trò lãnh đạo của Đảng được xem là nguyên tắc vận hành của xã hội Việt Nam từ khi có Đảng."
      ],
      quotes: [
        "Cách mệnh trước hết phải có 'đảng cách mệnh'",
        "Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy",
        "Sự ra đời của Đảng Cộng sản Việt Nam là kết quả của sự kết hợp chủ nghĩa Mác–Lênin với phong trào công nhân và phong trào yêu nước"
      ]
    },
    {
      id: "part-1-2",
      title: "I. Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam",
      subtitle: "2. Đảng phải trong sạch, vững mạnh",
      content: [
        "【1. NỀN TẢNG TƯ TƯỞNG VÀ LÝ LUẬN - Cốt lõi của sự 'Vững mạnh'】Để Đảng vững mạnh, trước hết phải có nền tảng lý luận đúng đắn làm kim chỉ nam. Hồ Chí Minh ví von: 'Đảng mà không có chủ nghĩa cũng như người không có trí khôn, tàu không có bàn chỉ nam'. Chủ nghĩa Mác-Lênin là học thuyết 'chân chính nhất, chắc chắn nhất, cách mệnh nhất'. Tuy nhiên, việc tiếp thu không phải là giáo điều mà phải vận dụng sáng tạo, nắm vững tinh thần và phương pháp, kết hợp với tinh hoa văn hóa dân tộc.",
        "【2. NĂM NGUYÊN TẮC TỔ CHỨC VÀ SINH HOẠT ĐẢNG - Khung sườn của sự 'Vững mạnh'】Chủ tịch Hồ Chí Minh đề ra 5 nguyên tắc xây dựng Đảng kiểu mới:",
        "• Nguyên tắc 1 - TẬP TRUNG DÂN CHỦ: Là nguyên tắc cơ bản nhất. Dân chủ để mở rộng tối đa trí tuệ (mọi người tự do bày tỏ ý kiến), tập trung để thống nhất hành động (thiểu số phục tùng đa số, cấp dưới phục tùng cấp trên).",
        "• Nguyên tắc 2 - TẬP THỂ LÃNH ĐẠO, CÁ NHÂN PHỤ TRÁCH: Để tránh độc đoán chuyên quyền (nếu thiếu tập thể) và tránh bừa bãi, vô chính phủ (nếu thiếu cá nhân phụ trách).",
        "• Nguyên tắc 3 - TỰ PHÊ BÌNH VÀ PHÊ BÌNH: Đây là quy luật phát triển của Đảng, là vũ khí để rèn luyện Đảng viên. 'Một Đảng mà giấu giếm khuyết điểm của mình là một Đảng hỏng. Một Đảng có gan thừa nhận khuyết điểm của mình... là một Đảng tiến bộ, mạnh dạn, chắc chắn, chân chính'.",
        "• Nguyên tắc 4 - KỶ LUẬT NGHIÊM MINH VÀ TỰ GIÁC: Sức mạnh vô địch của Đảng nằm ở tính kỷ luật. Nghiêm minh thuộc về tổ chức, tự giác thuộc về cá nhân. Không ai được đứng trên kỷ luật và pháp luật.",
        "• Nguyên tắc 5 - ĐOÀN KẾT, THỐNG NHẤT: Phải giữ gìn sự đoàn kết 'như giữ gìn con ngươi của mắt mình'. Đoàn kết trong Đảng là nòng cốt để đoàn kết toàn dân.",
        "【3. ĐẠO ĐỨC CÁCH MẠNG VÀ MỐI QUAN HỆ VỚI NHÂN DÂN - Yếu tố 'Trong sạch'】Sự trong sạch của Đảng thể hiện qua đạo đức của cán bộ và mối quan hệ máu thịt với dân. Đảng là 'Người lãnh đạo' vừa là 'Người đầy tớ': không có lợi ích riêng, ngoài lợi ích của giai cấp, của nhân dân và dân tộc. Cán bộ không được làm 'quan cách mạng', đứng trên nhân dân. Phải chống chủ nghĩa cá nhân, loại bỏ các tệ nạn tham ô, lãng phí, quan liêu, bè cánh, hống hách.",
        "【4. CÔNG TÁC CHỈNH ĐỐN ĐẢNG - Giải pháp duy trì sự 'Trong sạch, vững mạnh'】Trong điều kiện Đảng cầm quyền, xây dựng và chỉnh đốn Đảng là nhiệm vụ thường xuyên và cấp bách. Quyền lực có thể xây dựng cái mới nhưng cũng có sức phá hoại ghê gớm nếu người nắm quyền tha hóa, biến chất. Theo Di chúc của Người: 'Việc cần phải làm trước tiên là chỉnh đốn lại Đảng'. Mục tiêu: Làm cho mỗi đảng viên, chi bộ đều ra sức hoàn thành nhiệm vụ, toàn tâm toàn ý phục vụ nhân dân; lọc bỏ cái xấu, phát huy cái tốt."
      ],
      quotes: [
        "Đảng mà không có chủ nghĩa cũng như người không có trí khôn, tàu không có bàn chỉ nam.",
        "Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thì thuyền mới chạy.",
        "Một Đảng mà giấu giếm khuyết điểm của mình là một Đảng hỏng.",
        "Phải giữ gìn sự đoàn kết như giữ gìn con ngươi của mắt mình.",
        "Việc cần phải làm trước tiên là chỉnh đốn lại Đảng. (Di chúc)"
      ]
    },
    {
      id: "part-2-1",
      title: "II. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
      subtitle: "1. Nhà nước dân chủ",
      content: [
        "【MỞ ĐẦU】Nhà nước XHCN Việt Nam hình thành và phát triển theo tư tưởng Hồ Chí Minh. Bác khẳng định: 'Nước ta là nước dân chủ, mọi quyền lực đều thuộc về nhân dân'.",
        "【NHÀ NƯỚC CỦA DÂN】Nhân dân là chủ, mọi quyền lực thuộc về nhân dân. Nhân dân quyết định tổ chức và hoạt động của Nhà nước. Nhà nước phải lấy dân làm gốc. Dẫn chứng: Hiến pháp 1946 khẳng định quyền bầu cử tự do, bình đẳng.",
        "【NHÀ NƯỚC DO DÂN】Nhà nước do dân lập nên, thông qua bầu cử. Dân kiểm tra, giám sát, phê bình hoạt động của nhà nước. Dân có quyền bãi miễn những người không xứng đáng. Thông điệp của Bác: 'Dân chủ không phải là để nói suông'.",
        "【NHÀ NƯỚC VÌ DÂN】Nhà nước phục vụ lợi ích nhân dân, không đặc quyền, đặc lợi. Chính phủ là đầy tớ trung thành của nhân dân. Mọi chủ trương, chính sách phải vì đời sống nhân dân.",
        "【YÊU CẦU XÂY DỰNG NHÀ NƯỚC KIỂU MỚI】Nhà nước trong sạch, vững mạnh. Cán bộ liêm chính, không tham nhũng. Luôn đổi mới để phù hợp thời đại. Đề cao kỷ luật, pháp luật.",
        "【VẬN DỤNG TRONG THỜI ĐẠI NGÀY NAY】Phát huy dân chủ, minh bạch chính sách. Chính phủ số – phục vụ người dân nhanh, thuận lợi. Chống lãng phí, quan liêu, tham nhũng. Xây dựng đội ngũ công chức có đạo đức và năng lực.",
        "【KẾT LUẬN】Tư tưởng Hồ Chí Minh về Nhà nước của dân – do dân – vì dân là nền tảng cho bộ máy nhà nước hiện nay. Mỗi công dân, đặc biệt là thanh niên, phải: Nêu cao ý thức công dân • Tham gia xây dựng đất nước • Giám sát và đồng hành cùng chính quyền."
      ],
      quotes: [
        "Nước ta là nước dân chủ, mọi quyền lực đều thuộc về nhân dân.",
        "Dân chủ không phải là để nói suông.",
        "Việc gì lợi cho dân, ta phải hết sức làm. Việc gì hại cho dân, ta phải hết sức tránh.",
        "Bao nhiêu quyền hạn đều của dân. Bao nhiêu lợi ích đều vì dân."
      ]
    },
    {
      id: "part-2-2",
      title: "II. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
      subtitle: "2. Nhà nước pháp quyền",
      content: [
        "【a. NHÀ NƯỚC HỢP HIẾN, HỢP PHÁP】Xây dựng Nhà nước trên nền tảng Hiến pháp và pháp luật. Hồ Chí Minh sớm đòi bình đẳng trước pháp luật qua bản Yêu sách 1919. Tổ chức Tổng tuyển cử 6-1-1946 theo nguyên tắc phổ thông đầu phiếu → Quốc hội khóa I thông qua Hiến pháp 1946.",
        "【b. NHÀ NƯỚC THƯỢNG TÔN PHÁP LUẬT】Quản lý xã hội bằng pháp luật, pháp luật giữ vị trí tối cao. Kết hợp giữa khoan hồng và nghiêm minh. Hồ Chí Minh trực tiếp xây dựng, ban hành nhiều văn bản pháp luật quan trọng.",
        "【c. PHÁP QUYỀN NHÂN NGHĨA】Pháp quyền gắn liền với nhân văn, đạo đức. Tôn trọng, bảo đảm quyền con người. Pháp luật vì lợi ích và hạnh phúc nhân dân.",
        "【KẾT LUẬN】Nhà nước pháp quyền theo Hồ Chí Minh có 3 đặc trưng: Hợp hiến – hợp pháp, Thượng tôn pháp luật, Pháp quyền nhân nghĩa."
      ],
      quotes: [
        "Pháp luật phải bảo vệ được quyền tự do, dân chủ của nhân dân.",
        "Bình đẳng trước pháp luật. (Yêu sách 1919)"
      ]
    },
    {
      id: "part-2-3",
      title: "II. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
      subtitle: "3. Nhà nước trong sạch, vững mạnh",
      content: [
        "【1. KIỂM SOÁT QUYỀN LỰC NHÀ NƯỚC 】Hồ Chí Minh cho rằng quyền lực luôn có xu hướng bị tha hóa nếu không được kiểm soát. Cách thức kiểm soát: Phải kết hợp giữa kiểm soát từ trên xuống (của Đảng, của cấp trên) và kiểm soát từ dưới lên (của nhân dân). Người nhấn mạnh: 'Dân có quyền bãi miễn đại biểu Quốc hội và đại biểu Hội đồng nhân dân nếu những đại biểu ấy tỏ ra không xứng đáng với sự tín nhiệm của nhân dân'. Về vai trò của nhân dân trong kiểm soát: 'Phải dựa vào quần chúng mà kiểm soát cán bộ.'",
        "【2. ĐẤU TRANH CHỐNG CÁC CĂN BỆNH 'GIẶC NỘI XÂM' 】Hồ Chí Minh coi Tham ô, Lãng phí, Quan liêu là những kẻ thù nguy hiểm như giặc ngoại xâm vì chúng phá hoại từ bên trong. Người gọi đây là 'Giặc ở trong lòng', 'Giặc nội xâm'.",
        "• THAM Ô: Là hành động 'trộm cắp của công làm của riêng'.",
        "• LÃNG PHÍ: Tuy không ăn cắp nhưng gây thiệt hại cho dân, có khi tác hại còn hơn cả tham ô.",
        "• QUAN LIÊU: Là nguồn gốc đẻ ra tham ô, lãng phí. Người quan liêu là người 'không đi sâu đi sát, chỉ biết ngồi bàn giấy mà chỉ tay năm ngón'.",
        "Về tính nghiêm minh của pháp luật: 'Pháp luật phải thẳng tay trừng trị những kẻ bất liêm, bất kỳ kẻ ấy ở địa vị nào, làm nghề nghiệp gì' .",
        "【3. XÂY DỰNG ĐỘI NGŨ CÁN BỘ, CÔNG CHỨC 】Đây là 'cái gốc' của mọi công việc. Nhà nước mạnh hay yếu là do cán bộ.",
        "• TIÊU CHUẨN CÁN BỘ - Phải vừa có Đức, vừa có Tài (Vừa hồng vừa chuyên): ĐỨC - Phải tuyệt đối trung thành với cách mạng, cần, kiệm, liêm, chính; TÀI - Phải có năng lực quản lý nhà nước, hiểu biết pháp luật.",
        "• MỐI QUAN HỆ VỚI DÂN: Cán bộ không phải là 'ông cách mạng' mà là người phục vụ dân. 'Cán bộ nhà nước từ trên xuống dưới đều là đầy tớ của nhân dân'.",
        "【CÁC VẤN ĐỀ KHÁC 】Hồ Chí Minh cũng nhắc nhở về việc chống Chủ nghĩa cá nhân, Đặc quyền đặc lợi và tình trạng Chia rẽ, kiêu ngạo trong bộ máy nhà nước."
      ],
      quotes: [
        "Cán bộ là cái gốc của mọi công việc.",
        "Việc gì lợi cho dân, ta phải hết sức làm. Việc gì hại cho dân, ta phải hết sức tránh",
        "Cán bộ nhà nước từ trên xuống dưới đều là đầy tớ của nhân dân.",
        "Pháp luật phải thẳng tay trừng trị những kẻ bất liêm, bất kỳ kẻ ấy ở địa vị nào.",
        "Phải dựa vào quần chúng mà kiểm soát cán bộ."
      ]
    }
  ]
};

import type { Slide } from './types';

export const SLIDES_DATA: Slide[] = [
  // SLIDE 0 – VIDEO GIỚI THIỆU
  {
    id: 0,
    icon: "",
    title: "Video minh họa",
    content: [],
    bgColor: "from-gray-800 to-gray-950",
    video: "/video.mp4",
    isVideoSlide: true
  },
  // SLIDE 1 – CÂU HỎI ĐẶT RA
  {
    id: 1,
    icon: "",
    title: "Làm sao Đảng giữ bản chất cách mạng – thích ứng mới – tạo niềm tin thanh niên?",
    content: [
      "",
      "• Đảng giữ được bản chất cách mạng",
      "• Vừa thích ứng yêu cầu thời đại mới",
      "• Vừa khơi dậy niềm tin của thanh niên",
      "",
      "• Dựa trên tư tưởng Hồ Chí Minh"
    ],
    bgColor: "from-amber-800 to-amber-950",
    image: "https://chinhtrivaphattrien.vn/uploads/2023/04/12/bac-ho-tu-tuong-nha-nuoc-1681315729.jpg"
  },
  // SLIDE 2 – GIỮ VỮNG BẢN CHẤT CÁCH MẠNG
  {
    id: 2,
    icon: "",
    title: "Giữ vững bản chất cách mạng",
    content: [
      "• Tư tưởng Hồ Chí Minh khẳng định:",
      "",
      "• Đảng là đại biểu trung thành lợi ích của nhân dân và dân tộc",
      "• Cách mạng phải vì dân, không vì quyền lợi riêng",
      "",
      "• Đảng giữ bản chất cách mạng bằng cách:",
      "• Kiên định mục tiêu độc lập dân tộc và CNXH",
      "• Dựa trên Chủ nghĩa Mác – Lênin & Tư tưởng Hồ Chí Minh",
      "• \"Tự soi – tự sửa – tự chỉnh đốn\" khi có sai lầm"
    ],
    highlight: "Đảng ta là đạo đức, là văn minh – Hồ Chí Minh",
    bgColor: "from-red-800 to-red-950",
    image: "https://cdn.accgroup.vn/wp-content/uploads/2022/11/download-22.jpg"
  },
  // SLIDE 3 – THÍCH ỨNG VỚI YÊU CẦU MỚI
  {
    id: 3,
    icon: "",
    title: "Thích ứng với yêu cầu mới",
    content: [
      "• Yêu cầu của thời đại:",
      "",
      "• Toàn cầu hóa",
      "• Cách mạng công nghiệp 4.0",
      "• Mạng xã hội – công dân số",
      "",
      "• Đảng cần:",
      "• Đổi mới tư duy lãnh đạo",
      "• Cải cách bộ máy – tinh gọn, hiệu quả",
      "• Ứng dụng khoa học – công nghệ",
      "• Xây dựng Chính phủ số – kinh tế số – xã hội số"
    ],
    highlight: "Vừa đổi mới phương thức hoạt động, vừa kiên định mục tiêu chiến lược",
    bgColor: "from-blue-800 to-blue-950",
    image: "https://cdn.tienphong.vn/images/65d5f052c0c6ddf1d67a2bbde83479fb5ee50daa9404f412cf27014a92c8de6ab031bafdb964665cc56058a0d6bab45d34bd1d76687848d1a7682213bf5a09aa/sac-mau-moi-8-7766-9983.jpg"
  },
  // SLIDE 4 – PHÒNG NGỪA SIÊU NGUY CƠ: QUAN LIÊU – THAM NHŨNG
  {
    id: 4,
    icon: "",
    title: "Phòng ngừa siêu nguy cơ: Quan liêu – Tham nhũng",
    content: [
      "• Hồ Chí Minh cảnh báo rất sớm:",
      "",
      "• Quan liêu, tham nhũng, lãng phí",
      "• = \"giặc nội xâm\" phá từ bên trong",
      "",
      "• Biện pháp theo tư tưởng Bác:",
      "• Kiểm soát quyền lực thực chất",
      "• Minh bạch tài chính – quy trình",
      "• Xử lý nghiêm mọi vi phạm không có vùng cấm",
      "• Dựa vào dân để giám sát cán bộ"
    ],
    highlight: "Muốn dân tin → Đảng phải trong sạch",
    bgColor: "from-red-700 to-orange-900",
    image: "https://printgo.vn/uploads/media/790919/hinh-anh-bac-ho-voi-nhan-dan-5_1620723583.jpg"
  },
  // SLIDE 5 – PHÁT HUY SỨC MẠNH CỦA NHÂN DÂN
  {
    id: 5,
    icon: "",
    title: "Phát huy sức mạnh của nhân dân",
    content: [
      "• Hồ Chí Minh nhấn mạnh:",
      "",
      "• \"Dân làm chủ\"",
      "• \"Dân biết – dân bàn – dân làm – dân kiểm tra\"",
      "",
      "• Đảng cần:",
      "• Lắng nghe ý kiến người dân",
      "• Công khai – minh bạch chính sách",
      "• Tăng cường phản biện xã hội",
      "• Đổi mới quản trị NNPQXHCN"
    ],
    highlight: "Nhân dân tin → Đảng mạnh → đất nước phát triển bền vững",
    bgColor: "from-green-800 to-green-950",
    image: "https://cdn.accgroup.vn/wp-content/uploads/2022/11/download-22.jpg"
  },
  // SLIDE 6 – KHƠI DẬY NIỀM TIN VÀ SỨC TRẺ THANH NIÊN
  {
    id: 6,
    icon: "",
    title: "Khơi dậy niềm tin và sức trẻ thanh niên",
    content: [
      "• Thanh niên là:",
      "",
      "• Lực lượng xung kích",
      "• Chủ nhân tương lai",
      "• Người kiến tạo đất nước",
      "",
      "• Đảng khơi dậy niềm tin bằng cách:",
      "• Tạo môi trường học tập – nghiên cứu – đổi mới",
      "• Trao cơ hội đóng góp ý tưởng",
      "• Giáo dục lý tưởng sống đẹp – trách nhiệm công dân",
      "• Ghi nhận vai trò thanh niên trong chuyển đổi số, khoa học, khởi nghiệp"
    ],
    highlight: "Khi thanh niên được trao quyền, tôn trọng, lắng nghe → niềm tin sẽ tự hình thành",
    bgColor: "from-yellow-600 to-orange-800",
    image: "https://cdn-i2.congthuong.vn/stores/news_dataimages/2023/092023/04/10/anh-1-1-52520230904103526.0641900.jpg"
  },
  // SLIDE 8 – KẾT LUẬN
  {
    id: 8,
    icon: "",
    title: "Kết luận",
    content: [
      "• Theo tư tưởng Hồ Chí Minh:",
      "",
      "• Muốn giữ vững vai trò lãnh đạo:",
      "• Đảng phải trong sạch – đạo đức – liêm chính",
      "• Luôn đổi mới phương thức lãnh đạo",
      "• Gắn bó máu thịt với nhân dân",
      "• Đặt niềm tin và đồng hành cùng thế hệ trẻ",
      "",
      "• Khi đó:",
      "• Đảng giữ được bản chất cách mạng",
      "• Vững vàng trước thách thức mới",
      "• Thanh niên sẽ tin tưởng và tiếp nối con đường của Bác"
    ],
    highlight: "Bao nhiêu quyền hạn đều của dân. Bao nhiêu lợi ích đều vì dân.",
    bgColor: "from-green-700 to-blue-900",
    image: "https://chinhtrivaphattrien.vn/uploads/2023/04/12/bac-ho-tu-tuong-nha-nuoc-1681315729.jpg"
  }
];

// GAME SCENARIOS AND INTERACTIVE ACTIVITIES ABOUT DEMOCRATIC STATE
export interface GameScenario {
  id: string;
  title: string;
  description: string;
  scenario: string;
  choices: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  difficulty: "easy" | "medium" | "hard";
  points: number;
  topic: string;
}

export const GAME_SCENARIOS: GameScenario[] = [
  // SCENARIO SET 1: QUYỀN LỰC CỦA DÂN
  {
    id: "scenario-1",
    title: "Quyền Lực Của Dân - Trường hợp 1",
    description: "Bạn là một nhân dân trong xã hội dân chủ. Một dự án xây dựng sắp bắt đầu trong khu phố của bạn nhưng dự án chưa được thảo luận với cộng đồng.",
    scenario: "Theo tư tưởng Hồ Chí Minh về Nhà nước dân chủ 'của dân, do dân, vì dân', bạn nên làm gì?",
    choices: [
      {
        text: "Chỉ nghe theo quyết định của chính quyền mà không có ý kiến gì",
        isCorrect: false,
        explanation: "Sai. Nhân dân là ông chủ tối cao, có quyền tham gia, bàn bạc và giám sát các quyết định của chính quyền."
      },
      {
        text: "Yêu cầu chính quyền tổ chức hội nghị dân, lắng nghe ý kiến của cộng đồng trước khi thực hiện dự án",
        isCorrect: true,
        explanation: "Đúng. Hồ Chí Minh nhấn mạnh dân chủ trực tiếp (hội nghị dân, trưng cầu ý dân) kết hợp đại diện là cách đảm bảo mọi người dân tham gia quản lý nhà nước."
      },
      {
        text: "Phá hoại dự án mà không nói gì với chính quyền",
        isCorrect: false,
        explanation: "Sai. Dân chủ có tính xây dựng, không phải hành động bạo lực. Nhân dân phải biểu đạt ý kiến thông qua các cơ chế dân chủ."
      },
      {
        text: "Chuyển hết quyền lực cho các cán bộ để quyết định",
        isCorrect: false,
        explanation: "Sai. Cán bộ là đầy tớ, công bộc của dân, không phải chủ nhân. Quyền lực cuối cùng vẫn thuộc dân."
      }
    ],
    difficulty: "easy",
    points: 10,
    topic: "Quyền lực thuộc dân"
  },

  {
    id: "scenario-2",
    title: "Quyền Lực Của Dân - Trường hợp 2",
    description: "Các cơ sở chính quyền từ xã đến tỉnh cần được lựa chọn. Theo nguyên tắc Nhà nước dân chủ của Hồ Chí Minh, qui trình này phải diễn ra như thế nào?",
    scenario: "Ai nên có quyền lựa chọn những người đứng đầu các cơ sở chính quyền?",
    choices: [
      {
        text: "Đảng Cộng sản Việt Nam tuyển chọn những người xứng đáng",
        isCorrect: false,
        explanation: "Sai. Dù Đảng có vai trò lãnh đạo, nhưng trong Nhà nước dân chủ, quyền bầu cử là của nhân dân."
      },
      {
        text: "Chính quyền cấp trên chỉ định những người có khả năng",
        isCorrect: false,
        explanation: "Sai. Chỉ định từ trên xuống không phù hợp với tư tưởng dân chủ của Hồ Chí Minh."
      },
      {
        text: "Nhân dân bầu chọn trực tiếp thông qua tổng tuyển cử phổ thông",
        isCorrect: true,
        explanation: "Đúng. Hồ Chí Minh khẳng định: 'Chính quyền từ xã đến Chính phủ trung ương do dân cử ra.' Tổng tuyển cử phổ thông là cơ chế để nhân dân thực hiện quyền lực."
      },
      {
        text: "Dân chỉ có quyền đề xuất, còn quyết định cuối cùng ở chính quyền",
        isCorrect: false,
        explanation: "Sai. Quyền lực thực sự thuộc dân, không phải quyền đề xuất. Dân bầu cử, dân quyết định."
      }
    ],
    difficulty: "easy",
    points: 10,
    topic: "Quyền lực thuộc dân"
  },

  // SCENARIO SET 2: NGUYÊN TẮC TẬP TRUNG DÂN CHỦ
  {
    id: "scenario-3",
    title: "Tập Trung Dân Chủ - Cuộc Họp Dân",
    description: "Một xã tổ chức hội nghị dân để thảo luận về xây dựng trường học mới. Mỗi gia đình được phát biểu ý kiến, nhưng sau đó chính quyền không thực hiện theo quyết định của đa số.",
    scenario: "Theo nguyên tắc tập trung dân chủ của Hồ Chí Minh, hành động của chính quyền có phù hợp không?",
    choices: [
      {
        text: "Có. Chính quyền có quyền không tuân theo quyết định của dân",
        isCorrect: false,
        explanation: "Sai. Hồ Chí Minh nêu nguyên tắc: 'số ít phục tùng số nhiều, cấp dưới phục tùng cấp trên'. Một khi đã có dân chủ, quyết định của đa số phải được thực hiện."
      },
      {
        text: "Không. Sau khi lắng nghe ý kiến dân chủ, quyết định của đa số phải được thực hiện nghiêm túc",
        isCorrect: true,
        explanation: "Đúng. Nguyên tắc tập trung dân chủ kết hợp dân chủ (bày tỏ ý kiến tự do) với tập trung (thực hiện thống nhất theo quyết định của đa số)."
      },
      {
        text: "Không thể xác định được vì chính quyền cũng được dân bầu",
        isCorrect: false,
        explanation: "Sai. Dù được dân bầu, chính quyền vẫn phải tuân theo quyết định của dân. Đó là bản chất của dân chủ."
      },
      {
        text: "Tùy thuộc vào sự phán đoán của từng cán bộ",
        isCorrect: false,
        explanation: "Sai. Cán bộ là đầy tớ của dân, không có quyền tự ý phán đoán. Phải tuân theo quyết định của nhân dân."
      }
    ],
    difficulty: "medium",
    points: 15,
    topic: "Nguyên tắc tập trung dân chủ"
  },

  {
    id: "scenario-4",
    title: "Tập Trung Dân Chủ - Tranh Luận Rối Rắm",
    description: "Một cộng đồng bàn bạc về cách sử dụng quỹ công cộng. Có ba ý kiến khác nhau: 40% muốn xây trường, 35% muốn xây bệnh viện, 25% muốn xây đường giao thông.",
    scenario: "Theo tư tưởng dân chủ của Hồ Chí Minh, cộng đồng nên lựa chọn phương án nào?",
    choices: [
      {
        text: "Lựa chọn phương án xây trường vì đó là ý kiến của đa số (40%)",
        isCorrect: true,
        explanation: "Đúng. Theo nguyên tắc 'số ít phục tùng số nhiều' của Hồ Chí Minh, quyết định phải theo ý kiến của số người nhiều nhất, dù không phải tất cả mọi người đều đồng ý."
      },
      {
        text: "Bỏ phiếu để lựa chọn theo khiêu lệ của từng người",
        isCorrect: false,
        explanation: "Sai. Lựa chọn phải dựa trên nguyên tắc số đông, không phải khiêu lệ cá nhân."
      },
      {
        text: "Dân chủ đúng, nhưng nên chọn phương án mà tất cả người dân đều thích",
        isCorrect: false,
        explanation: "Sai. Trong xã hội, luôn có những ý kiến khác nhau. Dân chủ là lắng nghe rồi quyết định theo đa số, không phải chờ sự đồng ý tuyệt đối."
      },
      {
        text: "Để chính quyền quyết định, dân chỉ cần trình ý kiến",
        isCorrect: false,
        explanation: "Sai. Chính quyền là đầy tớ của dân. Quyền quyết định cuối cùng vẫn ở dân, thông qua dân chủ trực tiếp hoặc đại diện."
      }
    ],
    difficulty: "medium",
    points: 15,
    topic: "Nguyên tắc tập trung dân chủ"
  },

  // SCENARIO SET 3: CÁN BỘ LÀ ĐẦY TỚ DÂN
  {
    id: "scenario-5",
    title: "Cán Bộ Là Đầy Tớ Dân - Tham Ô",
    description: "Một cán bộ huyện quyết định tự dùng tiền xây dựng công cộng để sửa nhà riêng, nói rằng cơ sở hạ tầng của anh ta tồi tệ và anh ta xứng đáng được cải thiện.",
    scenario: "Hành động của cán bộ này vi phạm nguyên tắc nào của Nhà nước dân chủ?",
    choices: [
      {
        text: "Chỉ vi phạm quy định tài chính, không liên quan đến Nhà nước dân chủ",
        isCorrect: false,
        explanation: "Sai. Tham ô là vi phạm trực tiếp nguyên tắc 'vì dân' - lấy tiền của dân để phục vụ lợi ích cá nhân."
      },
      {
        text: "Vi phạm nguyên tắc 'cán bộ là đầy tớ dân' - lấy tài sản của dân cho mục đích cá nhân thay vì phục vụ dân",
        isCorrect: true,
        explanation: "Đúng. Hồ Chí Minh gọi tham ô, lãng phí là 'giặc nội xâm'. Cán bộ phải là công bộc của dân, phục vụ lợi ích chung, không phải cá nhân."
      },
      {
        text: "Vi phạm pháp luật nhưng cán bộ có quyền cải thiện điều kiện sống của mình",
        isCorrect: false,
        explanation: "Sai. Cán bộ không có quyền sử dụng tài sản công cộng cho mục đích cá nhân, bất kể lý do gì."
      },
      {
        text: "Không vi phạm gì cả, vì cán bộ cũng là người dân",
        isCorrect: false,
        explanation: "Sai. Cán bộ có trách nhiệm cao hơn. Họ là công bộc của dân, phải mẫu gương và liêm chính."
      }
    ],
    difficulty: "easy",
    points: 10,
    topic: "Cán bộ là đầy tớ dân"
  },

  {
    id: "scenario-6",
    title: "Cán Bộ Là Đầy Tớ Dân - Tiếp Xúc Với Dân",
    description: "Một chủ tịch xã luôn ở văn phòng, chỉ gặp dân khi có cuộc họp chính thức. Các vấn đề của dân không được lắng nghe hoặc được giải quyết chậm chạp.",
    scenario: "Theo tư tưởng của Hồ Chí Minh, cán bộ này đã thực hiện nguyên tắc 'nói dân hiểu, làm dân theo, gần dân, sát dân' chưa?",
    choices: [
      {
        text: "Có, vì chủ tịch xã vẫn thực hiện công việc hành chính",
        isCorrect: false,
        explanation: "Sai. Thực hiện công việc hành chính là nhiệm vụ tối thiểu. Hồ Chí Minh yêu cầu cán bộ phải gần gũi, sát sao với dân chúng."
      },
      {
        text: "Không. Cán bộ cần phải thường xuyên tiếp xúc, lắng nghe và nắm bắt nhu cầu của dân",
        isCorrect: true,
        explanation: "Đúng. 'Nói dân hiểu, làm dân theo, gần dân, sát dân' có nghĩa cán bộ phải hiểu rõ đời sống, nhu cầu của dân, và luôn sẵn sàng giải quyết vấn đề. Gần gũi là điều kiện tiên quyết."
      },
      {
        text: "Tùy thuộc vào lượng công việc của chủ tịch",
        isCorrect: false,
        explanation: "Sai. Gần dân, sát dân không phải là tùy chọn, mà là bắt buộc. Đó là bản chất của vai trò cán bộ."
      },
      {
        text: "Cán bộ chỉ cần gặp dân khi cần thống kê hoặc khi có sự kiện chính thức",
        isCorrect: false,
        explanation: "Sai. Tiếp xúc thường xuyên, chủ động là yêu cầu, không phải thụ động chỉ khi có sự kiện."
      }
    ],
    difficulty: "medium",
    points: 15,
    topic: "Cán bộ là đầy tớ dân"
  },

  {
    id: "scenario-7",
    title: "Cán Bộ Là Đầy Tớ Dân - Tự Phê Bình",
    description: "Một cán bộ nhận ra trong công việc hàng ngày, anh ta thường lười biếng, ít khi tiếp xúc với dân, và có xu hướng theo lệnh từ trên mà không suy nghĩ đến lợi ích của dân.",
    scenario: "Theo tư tưởng của Hồ Chí Minh, cán bộ này nên làm gì để cải thiện bản thân?",
    choices: [
      {
        text: "Chấp nhận những khiếm khuyết vì mọi người đều có lỗi",
        isCorrect: false,
        explanation: "Sai. Hồ Chí Minh dạy: 'Cần phải chống quan liêu bằng tự phê bình phê bình thường xuyên'. Cán bộ phải liên tục đánh giá, sửa chữa bản thân."
      },
      {
        text: "Chỉ chờ cấp trên chỉ ra những lỗi của mình",
        isCorrect: false,
        explanation: "Sai. Tự phê bình là thứ nhất. Cán bộ phải có ý thức tự kiểm điểm, không chỉ chờ phê bình từ bên ngoài."
      },
      {
        text: "Tự phê bình những khiếm khuyết, sửa chữa và lắng nghe phê bình của dân để cải thiện",
        isCorrect: true,
        explanation: "Đúng. Hồ Chí Minh nhấn mạnh: tự phê bình phê bình thường xuyên là cách chống lại tư tưởng quan liêu và bảo đảm cán bộ luôn hướng tới lợi ích của dân."
      },
      {
        text: "Thay đổi công việc để tránh những chỉ trích",
        isCorrect: false,
        explanation: "Sai. Thay đổi công việc không giải quyết vấn đề. Cán bộ phải đối diện với những khiếm khuyết và cải thiện."
      }
    ],
    difficulty: "medium",
    points: 15,
    topic: "Cán bộ là đầy tớ dân"
  },

  // SCENARIO SET 4: PHÂN TÍCH TÌNH HUỐNG PHỨC TẠP
  {
    id: "scenario-8",
    title: "Tình Huống Phức Tạp - Dự Án Xanh Hóa",
    description: "Một thành phố lên kế hoạch xanh hóa toàn thành phố. 60% dân muốn trồng cây ở quảng trường, 30% muốn xây công viên, 10% không đồng ý với kế hoạch. Lãnh đạo thành phố quyết định thực hiện cả ba ý kiến mặc dù ngân sách không đủ.",
    scenario: "Lãnh đạo thành phố đã áp dụng đúng nguyên tắc dân chủ tập trung của Hồ Chí Minh chưa?",
    choices: [
      {
        text: "Có, vì lãnh đạo đã xem xét tất cả ý kiến của dân",
        isCorrect: false,
        explanation: "Sai. Lãnh đạo có xem xét ý kiến nhưng không áp dụng nguyên tắc 'số ít phục tùng số nhiều'. Thực hiện cả ba phương án không khả thi và lãng phí."
      },
      {
        text: "Không, vì lãnh đạo nên chọn phương án được 60% dân ủng hộ",
        isCorrect: true,
        explanation: "Đúng. Nguyên tắc tập trung dân chủ yêu cầu sau khi lắng nghe ý kiến (dân chủ), phải thực hiện quyết định của đa số (tập trung). Lãnh đạo nên chọn phương án của 60%."
      },
      {
        text: "Không, vì lãnh đạo nên bỏ phiếu thêm lần nữa",
        isCorrect: false,
        explanation: "Sai. Bỏ phiếu lại chỉ lãng phí thời gian. Khi đã có ý kiến của đa số, phải hành động."
      },
      {
        text: "Không thể xác định vì ngân sách là vấn đề kinh tế, không liên quan đến dân chủ",
        isCorrect: false,
        explanation: "Sai. Dân chủ và kinh tế có liên hệ. Thực hiện phương án không khả thi về mặt tài chính là lãng phí tiền của dân."
      }
    ],
    difficulty: "hard",
    points: 20,
    topic: "Tập trung dân chủ"
  },

  {
    id: "scenario-9",
    title: "Tình Huống Phức Tạp - Cán Bộ Hành Động Nhanh",
    description: "Một trưởng ban xã hội nhận ra có vấn đề về nước sạch. Thay vì tổ chức hội nghị dân, ban nhanh chóng lập kế hoạch sửa chữa mà không lắng nghe ý kiến. Dân không phản đối vì vấn đề được giải quyết nhanh.",
    scenario: "Hành động của trưởng ban có tuân theo tư tưởng dân chủ của Hồ Chí Minh không?",
    choices: [
      {
        text: "Có, vì vấn đề được giải quyết nhanh và hiệu quả",
        isCorrect: false,
        explanation: "Sai. Tốc độ không phải là tiêu chí chính. Dân chủ yêu cầu lắng nghe ý kiến của dân, ngay cả khi cần nhanh."
      },
      {
        text: "Không, vì cán bộ không thực hiện dân chủ. Dù là vấn đề cấp bách, cần lắng nghe ý kiến của dân",
        isCorrect: true,
        explanation: "Đúng. Hồ Chí Minh nhấn mạnh dân chủ trực tiếp hay đại diện đều là cần thiết. Dù vấn đề cấp bách, cán bộ phải tìm cách lắng nghe dân một cách nhanh chóng."
      },
      {
        text: "Tùy thuộc vào mức độ cấp bách của vấn đề",
        isCorrect: false,
        explanation: "Sai. Dân chủ là nguyên tắc cơ bản, không phải là tùy chọn. Cán bộ phải tìm cách kết hợp dân chủ và hiệu quả."
      },
      {
        text: "Đúng, vì cán bộ phải chỉ huy nhanh chóng",
        isCorrect: false,
        explanation: "Sai. Cán bộ là đầy tớ của dân, không phải tư lệnh độc đoán. Dân chủ không mâu thuẫn với tốc độ nếu cán bộ biết cách tổ chức tốt."
      }
    ],
    difficulty: "hard",
    points: 20,
    topic: "Cán bộ phục vụ dân"
  }
];

// MATCHING GAME CONTENT - MÀN GHÉP KHÁI NIỆM
export interface MatchingItem {
  id: string;
  term: string;
  definition: string;
}

export const MATCHING_CONCEPTS: MatchingItem[] = [
  {
    id: "m1",
    term: "Nhà nước dân chủ",
    definition: "Nhà nước 'của dân, do dân, vì dân' - quyền lực thuộc toàn thể nhân dân"
  },
  {
    id: "m2",
    term: "Dân chủ trực tiếp",
    definition: "Hình thức dân chủ mà nhân dân trực tiếp tham gia quyết định (hội nghị dân, trưng cầu ý dân)"
  },
  {
    id: "m3",
    term: "Dân chủ đại diện",
    definition: "Hình thức dân chủ mà nhân dân chọn những đại biểu để đại diện cho mình tham gia quyết định"
  },
  {
    id: "m4",
    term: "Tập trung dân chủ",
    definition: "Kết hợp dân chủ (bày tỏ ý kiến tự do) với tập trung (thực hiện theo quyết định đa số)"
  },
  {
    id: "m5",
    term: "Cán bộ là đầy tớ dân",
    definition: "Cán bộ là công bộc của nhân dân, phục vụ lợi ích chung, không phải ông chủ"
  },
  {
    id: "m6",
    term: "Quyền giám sát của dân",
    definition: "Quyền của nhân dân kiểm soát, giám sát hoạt động của các cán bộ và chính quyền"
  },
  {
    id: "m7",
    term: "Tự phê bình phê bình",
    definition: "Phương pháp cán bộ tự đánh giá, sửa chữa những khiếm khuyết để chống quan liêu"
  },
  {
    id: "m8",
    term: "Giặc nội xâm",
    definition: "Hành vi tham ô, lãng phí, quan liêu - những kẻ thù nguy hiểm từ bên trong"
  }
];

// DEBATE TOPICS - ĐỀ TÀI TRANH LUẬN HOẶC THẢO LUẬN
export interface DebateTopic {
  id: string;
  topic: string;
  question: string;
  pros: string[];
  cons: string[];
  hoChiMinhPosition: string;
  difficulty: "easy" | "medium" | "hard";
}

// DEBATE TOPICS - ĐỀ TÀI TRANH LUẬN HOẶC THẢO LUẬN
export const DEBATE_TOPICS: DebateTopic[] = [
  {
    id: "debate-1",
    topic: "Dân chủ vs Hiệu quả",
    question: "Khi phải chọn giữa quy trình dân chủ chậm và quyết định nhanh nhưng không lắng nghe dân, nên chọn cái nào?",
    pros: [
      "Quyết định nhanh giải quyết vấn đề nhanh chóng",
      "Không lãng phí thời gian cho thảo luận",
      "Lãnh đạo có kinh nghiệm có thể đưa ra quyết định tốt"
    ],
    cons: [
      "Vi phạm quyền dân chủ của nhân dân",
      "Dân không hiểu, không ủng hộ quyết định",
      "Thiếu giám sát, dễ dẫn đến sai lầm"
    ],
    hoChiMinhPosition: "Hồ Chí Minh cho rằng dân chủ và hiệu quả không mâu thuẫn. Cán bộ phải tìm cách lắng nghe dân nhưng vẫn hành động nhanh chóng. Quyền lực thuộc dân không thể thỏa hiệp.",
    difficulty: "hard"
  },
  {
    id: "debate-2",
    topic: "Quyền của cán bộ",
    question: "Cán bộ nên có quyền gì? Họ có phải là công bộc vô điều kiện?",
    pros: [
      "Cán bộ cần quyền hành động để quản lý xã hội",
      "Cán bộ phải có tự chủ để đưa ra quyết định hiệu quả"
    ],
    cons: [
      "Nếu có quá nhiều quyền, cán bộ sẽ lạm dụng",
      "Cán bộ dễ quên mục đích phục vụ dân"
    ],
    hoChiMinhPosition: "Hồ Chí Minh khẳng định: cán bộ là công bộc, không phải ông chủ. Họ có quyền hành động để phục vụ dân, nhưng luôn dưới sự kiểm soát của nhân dân.",
    difficulty: "medium"
  }
];
