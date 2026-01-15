
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

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "Theo Hồ Chí Minh, điều gì là yếu tố tiên quyết để cách mạng thành công?",
    options: [
      "Phải có quân đội mạnh",
      "Phải có đảng cách mệnh",
      "Phải có nhiều tài chính",
      "Phải có sự ủng hộ quốc tế"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh khẳng định: 'Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh... Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy.'"
  },
  {
    id: "q2",
    question: "Đảng Cộng sản Việt Nam ra đời là kết quả của sự kết hợp giữa những yếu tố nào?",
    options: [
      "Chủ nghĩa Mác - Lênin với phong trào nông dân",
      "Chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước",
      "Phong trào công nhân với phong trào trí thức",
      "Chủ nghĩa dân tộc với phong trào quốc tế"
    ],
    correctAnswer: 1,
    explanation: "Sự ra đời của Đảng Cộng sản Việt Nam là kết quả của sự kết hợp giữa chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước."
  },
  {
    id: "q3",
    question: "Hồ Chí Minh đã khẳng định 'Đảng ta là...' gì?",
    options: [
      "...là sức mạnh, là chiến thắng",
      "...là đạo đức, là văn minh",
      "...là niềm tin, là hy vọng",
      "...là ánh sáng, là tương lai"
    ],
    correctAnswer: 1,
    explanation: "Người đã khẳng định: 'Đảng ta là đạo đức, là văn minh' - nhấn mạnh vai trò của đạo đức trong xây dựng Đảng."
  },
  {
    id: "q4",
    question: "Trong Nhà nước của dân, mọi quyền lực thuộc về ai?",
    options: [
      "Thuộc về Đảng",
      "Thuộc về nhân dân",
      "Thuộc về Chính phủ",
      "Thuộc về Quốc hội"
    ],
    correctAnswer: 1,
    explanation: "Nhà nước của dân: Mọi quyền lực trong nhà nước và trong xã hội đều thuộc về nhân dân."
  },
  {
    id: "q5",
    question: "Hồ Chí Minh gọi tham ô, lãng phí, quan liêu là gì?",
    options: [
      "Kẻ thù của nhân dân",
      "Giặc nội xâm",
      "Bệnh trầm kha",
      "Nạn tham nhũng"
    ],
    correctAnswer: 1,
    explanation: "Người gọi tham ô, lãng phí, quan liêu là 'giặc nội xâm' - những kẻ thù nguy hiểm từ bên trong."
  },
  {
    id: "q6",
    question: "Theo Hồ Chí Minh, cán bộ nhà nước phải là những người như thế nào?",
    options: [
      "Giỏi chuyên môn, thạo nghiệp vụ",
      "Vừa 'hồng' vừa 'chuyên' - 'công bộc' trung thành của nhân dân",
      "Trung thành với Đảng, tận tụy với công việc",
      "Có học thức cao, am hiểu pháp luật"
    ],
    correctAnswer: 1,
    explanation: "Xây dựng đội ngũ cán bộ, công chức vừa 'hồng' vừa 'chuyên' - là những 'công bộc' trung thành của nhân dân."
  },
  {
    id: "q7",
    question: "Nền tảng đạo đức của người cán bộ nhà nước theo Hồ Chí Minh là gì?",
    options: [
      "Trung - Hiếu - Nhân - Nghĩa",
      "Cần - Kiệm - Liêm - Chính - Chí công vô tư",
      "Nhân - Lễ - Nghĩa - Trí - Tín",
      "Trung thực - Khiêm tốn - Cần cù"
    ],
    correctAnswer: 1,
    explanation: "Cần, Kiệm, Liêm, Chính, Chí công vô tư là nền tảng đạo đức của người cán bộ nhà nước."
  },
  {
    id: "q8",
    question: "Hồ Chí Minh đã sớm có tư tưởng về hiến pháp qua văn bản nào?",
    options: [
      "Tuyên ngôn độc lập (1945)",
      "Yêu sách của nhân dân An Nam (1919)",
      "Đường Kách mệnh (1927)",
      "Lời kêu gọi toàn quốc kháng chiến (1946)"
    ],
    correctAnswer: 1,
    explanation: "Hồ Chí Minh đã sớm có tư tưởng về hiến pháp qua bản 'Yêu sách của nhân dân An Nam' (1919)."
  },
  {
    id: "q9",
    question: "Câu nói 'Cán bộ là cái gốc của mọi công việc' thể hiện quan điểm gì của Hồ Chí Minh?",
    options: [
      "Cán bộ quyết định mọi thành công của tổ chức",
      "Cán bộ là người lãnh đạo tối cao",
      "Vai trò then chốt của đội ngũ cán bộ",
      "Cán bộ phải được đào tạo bài bản"
    ],
    correctAnswer: 2,
    explanation: "Câu nói này nhấn mạnh vai trò then chốt, nền tảng của đội ngũ cán bộ trong mọi công việc của Đảng và Nhà nước."
  },
  {
    id: "q10",
    question: "Phương châm 'Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh' thể hiện nguyên tắc nào?",
    options: [
      "Nguyên tắc tập trung dân chủ",
      "Nguyên tắc phục vụ nhân dân",
      "Nguyên tắc pháp quyền",
      "Nguyên tắc đoàn kết dân tộc"
    ],
    correctAnswer: 1,
    explanation: "Đây là thể hiện rõ nét nhất nguyên tắc phục vụ nhân dân - Nhà nước vì dân, phục vụ lợi ích của nhân dân."
  }
];

export const CHAPTER_IV_DATA: ChapterData = {
  title: "Chương IV: Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân",
  sections: [
    {
      id: "part-1-1",
      title: "I. Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam",
      subtitle: "1. Tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam",
      content: [
        "Hồ Chí Minh khẳng định: 'Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy.'",
        "Sự ra đời của Đảng Cộng sản Việt Nam là kết quả của sự kết hợp giữa chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước.",
        "Vai trò lãnh đạo của Đảng: Đảng không chỉ là đội tiên phong của giai cấp công nhân mà còn là đội tiên phong của nhân dân lao động và của cả dân tộc Việt Nam."
      ],
      quotes: ["Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."]
    },
    {
      id: "part-1-2",
      title: "I. Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam",
      subtitle: "2. Đảng phải trong sạch, vững mạnh",
      content: [
        "Đảng phải thường xuyên tự đổi mới, tự chỉnh đốn. Người nhấn mạnh: 'Một dân tộc, một đảng và mỗi con người, ngày hôm qua là vĩ đại, có sức hấp dẫn lớn, không nhất định hôm nay và ngày mai vẫn được mọi người yêu mến và ca ngợi, nếu lòng dạ không trong sáng nữa, nếu sa vào chủ nghĩa cá nhân.'",
        "Xây dựng Đảng về chính trị, tư tưởng, tổ chức và đạo đức. Trong đó, 'Đảng ta là đạo đức, là văn minh'."
      ],
      quotes: ["Đảng ta là đạo đức, là văn minh."]
    },
    {
      id: "part-2-1",
      title: "II. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
      subtitle: "1. Nhà nước dân chủ",
      content: [
        "Nhà nước của dân: Mọi quyền lực trong nhà nước và trong xã hội đều thuộc về nhân dân. Nhân dân có quyền bầu ra các đại biểu và có quyền bãi miễn họ nếu họ không làm tròn nhiệm vụ.",
        "Nhà nước do dân: Dân làm chủ, dân tổ chức nên bộ máy nhà nước, dân ủng hộ, giúp đỡ và đóng thuế để nhà nước hoạt động.",
        "Nhà nước vì dân: Nhà nước phục vụ lợi ích của nhân dân, không có lợi ích nào khác ngoài lợi ích của nhân dân."
      ],
      quotes: ["Bao nhiêu quyền hạn đều của dân. Bao nhiêu lợi ích đều vì dân."]
    },
    {
      id: "part-2-2",
      title: "II. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
      subtitle: "2. Nhà nước pháp quyền",
      content: [
        "Đó là một nhà nước quản lý xã hội bằng Hiến pháp và Pháp luật. Hồ Chí Minh đã sớm có tư tưởng về hiến pháp qua bản 'Yêu sách của nhân dân An Nam' (1919).",
        "Người nhấn mạnh việc thượng tôn pháp luật gắn liền với công lý và tính nghiêm minh.",
        "Pháp luật phải bảo vệ được quyền tự do, dân chủ của nhân dân."
      ]
    },
    {
      id: "part-2-3",
      title: "II. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
      subtitle: "3. Nhà nước trong sạch, vững mạnh",
      content: [
        "Phòng chống các tiêu cực trong bộ máy nhà nước: Tham ô, lãng phí, quan liêu. Người gọi đó là 'giặc nội xâm'.",
        "Xây dựng đội ngũ cán bộ, công chức vừa 'hồng' vừa 'chuyên' - là những 'công bộc' trung thành của nhân dân.",
        "Cần, Kiệm, Liêm, Chính, Chí công vô tư là nền tảng đạo đức của người cán bộ nhà nước."
      ],
      quotes: ["Cán bộ là cái gốc của mọi công việc.", "Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh."]
    }
  ]
};
