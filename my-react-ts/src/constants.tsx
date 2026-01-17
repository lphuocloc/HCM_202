
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
        "Cách mệnh trước hết phải có 'đảng cách mệnh' (tr.69)",
        "Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy (tr.69)",
        "Sự ra đời của Đảng Cộng sản Việt Nam là kết quả của sự kết hợp chủ nghĩa Mác–Lênin với phong trào công nhân và phong trào yêu nước (tr.70)"
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
        "【🏛️ NHÀ NƯỚC CỦA DÂN】Nhân dân là chủ, mọi quyền lực thuộc về nhân dân. Nhân dân quyết định tổ chức và hoạt động của Nhà nước. Nhà nước phải lấy dân làm gốc. Dẫn chứng: Hiến pháp 1946 khẳng định quyền bầu cử tự do, bình đẳng.",
        "【🙋 NHÀ NƯỚC DO DÂN】Nhà nước do dân lập nên, thông qua bầu cử. Dân kiểm tra, giám sát, phê bình hoạt động của nhà nước. Dân có quyền bãi miễn những người không xứng đáng. Thông điệp của Bác: 'Dân chủ không phải là để nói suông'.",
        "【❤️ NHÀ NƯỚC VÌ DÂN】Nhà nước phục vụ lợi ích nhân dân, không đặc quyền, đặc lợi. Chính phủ là đầy tớ trung thành của nhân dân. Mọi chủ trương, chính sách phải vì đời sống nhân dân.",
        "【🔧 YÊU CẦU XÂY DỰNG NHÀ NƯỚC KIỂU MỚI】Nhà nước trong sạch, vững mạnh. Cán bộ liêm chính, không tham nhũng. Luôn đổi mới để phù hợp thời đại. Đề cao kỷ luật, pháp luật.",
        "【🌱 VẬN DỤNG TRONG THỜI ĐẠI NGÀY NAY】Phát huy dân chủ, minh bạch chính sách. Chính phủ số – phục vụ người dân nhanh, thuận lợi. Chống lãng phí, quan liêu, tham nhũng. Xây dựng đội ngũ công chức có đạo đức và năng lực.",
        "【🎤 KẾT LUẬN】Tư tưởng Hồ Chí Minh về Nhà nước của dân – do dân – vì dân là nền tảng cho bộ máy nhà nước hiện nay. Mỗi công dân, đặc biệt là thanh niên, phải: Nêu cao ý thức công dân • Tham gia xây dựng đất nước • Giám sát và đồng hành cùng chính quyền."
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
        "【KẾT LUẬN】Nhà nước pháp quyền theo Hồ Chí Minh có 3 đặc trưng: ① Hợp hiến – hợp pháp ② Thượng tôn pháp luật ③ Pháp quyền nhân nghĩa."
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
        "【1. KIỂM SOÁT QUYỀN LỰC NHÀ NƯỚC (tr.84-85)】Hồ Chí Minh cho rằng quyền lực luôn có xu hướng bị tha hóa nếu không được kiểm soát. Cách thức kiểm soát: Phải kết hợp giữa kiểm soát từ trên xuống (của Đảng, của cấp trên) và kiểm soát từ dưới lên (của nhân dân). Người nhấn mạnh: 'Dân có quyền bãi miễn đại biểu Quốc hội và đại biểu Hội đồng nhân dân nếu những đại biểu ấy tỏ ra không xứng đáng với sự tín nhiệm của nhân dân'. Về vai trò của nhân dân trong kiểm soát: 'Phải dựa vào quần chúng mà kiểm soát cán bộ.'",
        "【2. ĐẤU TRANH CHỐNG CÁC CĂN BỆNH 'GIẶC NỘI XÂM' (tr.85-87)】Hồ Chí Minh coi Tham ô, Lãng phí, Quan liêu là những kẻ thù nguy hiểm như giặc ngoại xâm vì chúng phá hoại từ bên trong. Người gọi đây là 'Giặc ở trong lòng', 'Giặc nội xâm'.",
        "• THAM Ô: Là hành động 'trộm cắp của công làm của riêng'.",
        "• LÃNG PHÍ: Tuy không ăn cắp nhưng gây thiệt hại cho dân, có khi tác hại còn hơn cả tham ô.",
        "• QUAN LIÊU: Là nguồn gốc đẻ ra tham ô, lãng phí. Người quan liêu là người 'không đi sâu đi sát, chỉ biết ngồi bàn giấy mà chỉ tay năm ngón'.",
        "Về tính nghiêm minh của pháp luật: 'Pháp luật phải thẳng tay trừng trị những kẻ bất liêm, bất kỳ kẻ ấy ở địa vị nào, làm nghề nghiệp gì' (tr.87).",
        "【3. XÂY DỰNG ĐỘI NGŨ CÁN BỘ, CÔNG CHỨC (tr.87-88)】Đây là 'cái gốc' của mọi công việc. Nhà nước mạnh hay yếu là do cán bộ.",
        "• TIÊU CHUẨN CÁN BỘ - Phải vừa có Đức, vừa có Tài (Vừa hồng vừa chuyên): ĐỨC - Phải tuyệt đối trung thành với cách mạng, cần, kiệm, liêm, chính; TÀI - Phải có năng lực quản lý nhà nước, hiểu biết pháp luật.",
        "• MỐI QUAN HỆ VỚI DÂN: Cán bộ không phải là 'ông cách mạng' mà là người phục vụ dân. 'Cán bộ nhà nước từ trên xuống dưới đều là đầy tớ của nhân dân'.",
        "【CÁC VẤN ĐỀ KHÁC (tr.88)】Hồ Chí Minh cũng nhắc nhở về việc chống Chủ nghĩa cá nhân, Đặc quyền đặc lợi và tình trạng Chia rẽ, kiêu ngạo trong bộ máy nhà nước."
      ],
      quotes: [
        "Cán bộ là cái gốc của mọi công việc. (tr.87)",
        "Việc gì lợi cho dân, ta phải hết sức làm. Việc gì hại cho dân, ta phải hết sức tránh. (tr.88)",
        "Cán bộ nhà nước từ trên xuống dưới đều là đầy tớ của nhân dân. (tr.88)",
        "Pháp luật phải thẳng tay trừng trị những kẻ bất liêm, bất kỳ kẻ ấy ở địa vị nào. (tr.87)",
        "Phải dựa vào quần chúng mà kiểm soát cán bộ."
      ]
    }
  ]
};

import type { Slide } from './types';

export const SLIDES_DATA: Slide[] = [
  // SECTION 1 - HERO
  {
    id: 1,
    icon: "🌟",
    title: "Tư tưởng Hồ Chí Minh về Đảng và Nhà nước",
    content: [
      "Chương IV – Bài 14-15",
      "Môn: Tư tưởng Hồ Chí Minh",
      "",
      "\"Của dân – Do dân – Vì dân\""
    ],
    highlight: "Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân.",
    bgColor: "from-amber-800 to-amber-950",
    image: "https://chinhtrivaphattrien.vn/uploads/2023/04/12/bac-ho-tu-tuong-nha-nuoc-1681315729.jpg"
  },
  // SECTION 2 - LÝ DO XUẤT HIỆN ĐẢNG
  {
    id: 2,
    icon: "📌",
    title: "Tính tất yếu ra đời của Đảng",
    content: [
      "✦ Đảng là đội tiên phong của giai cấp công nhân, đại biểu trung thành lợi ích của nhân dân và dân tộc",
      "✦ Đảng là nhân tố quyết định mọi thắng lợi của cách mạng Việt Nam",
      "",
      "Ba dòng chảy hợp nhất tạo ra ĐCSVN:",
      "✔ Chủ nghĩa Mác – Lênin",
      "✔ Phong trào công nhân",
      "✔ Phong trào yêu nước"
    ],
    highlight: "Đảng phải được trang bị lý luận chủ nghĩa Mác–Lênin và vận dụng sáng tạo vào thực tiễn Việt Nam",
    bgColor: "from-emerald-800 to-emerald-950",
    image: "https://cdn.accgroup.vn/wp-content/uploads/2022/11/download-22.jpg"
  },
  // SECTION 3 - ĐẢNG CẦM QUYỀN
  {
    id: 3,
    icon: "🏛️",
    title: "Đảng cầm quyền",
    content: [
      "✦ Đảng lãnh đạo Nhà nước và toàn xã hội",
      "✦ Không cầm quyền để hưởng đặc quyền đặc lợi",
      "✦ Đảng trong sạch, tiên phong, gương mẫu",
      "",
      "⚠️ Nguy cơ cần cảnh báo:",
      "✔ Quan liêu, xa dân",
      "✔ Tham nhũng, suy thoái",
      "✔ Chủ nghĩa cá nhân"
    ],
    highlight: "Hồ Chí Minh cảnh báo: quan liêu, xa dân, tham nhũng làm suy yếu Đảng",
    bgColor: "from-blue-800 to-blue-950",
    image: "https://cdn-i2.congthuong.vn/stores/news_dataimages/2023/092023/04/10/anh-1-1-52520230904103526.0641900.jpg"
  },
  // SECTION 4 - NHÀ NƯỚC CỦA DÂN
  {
    id: 4,
    icon: "🙋",
    title: "Nhà nước CỦA DÂN",
    content: [
      "✦ Dân làm chủ tối cao",
      "✦ Quyền lực thuộc về dân: bầu cử, ứng cử, kiến nghị, giám sát",
      "✦ Mọi công việc hệ trọng do dân quyết định",
      "✦ Công cụ nhà nước phục vụ nhân dân"
    ],
    highlight: "Hiến pháp 1946: Tất cả quyền bính trong nước là của toàn thể nhân dân Việt Nam",
    bgColor: "from-violet-800 to-violet-950",
    image: "https://chinhtrivaphattrien.vn/uploads/2023/04/12/bac-ho-tu-tuong-nha-nuoc-1681315729.jpg"
  },
  // SECTION 5 - NHÀ NƯỚC DO DÂN
  {
    id: 5,
    icon: "✋",
    title: "Nhà nước DO DÂN",
    content: [
      "✦ Dân lập nên Nhà nước qua tổng tuyển cử",
      "✦ Cán bộ là những người được nhân dân ủy quyền",
      "✦ Tuyển chọn cán bộ thông qua bầu cử dân chủ",
      "",
      "Quyền của dân:",
      "✔ Kiểm soát, đánh giá cán bộ",
      "✔ Phê bình, góp ý chính sách",
      "✔ Bãi miễn người không xứng đáng"
    ],
    highlight: "Dân biết, dân bàn, dân làm, dân kiểm tra",
    bgColor: "from-rose-800 to-rose-950",
    image: "https://cdn.accgroup.vn/wp-content/uploads/2022/11/download-22.jpg"
  },
  // SECTION 6 - NHÀ NƯỚC VÌ DÂN
  {
    id: 6,
    icon: "❤️",
    title: "Nhà nước VÌ DÂN",
    content: [
      "✦ Nhà nước phục vụ nhân dân, chăm lo đời sống dân sinh",
      "✦ Lợi ích nhân dân là tối thượng",
      "✦ Nhà nước phục vụ, không cai trị",
      "✦ Chống lại đặc quyền, đặc lợi, xa rời quần chúng",
      "",
      "✔ Cán bộ là \"công bộc\" của dân",
      "✔ Không phải \"quan cách mạng\""
    ],
    highlight: "Việc gì lợi cho dân, phải hết sức làm. Việc gì hại cho dân, phải hết sức tránh.",
    bgColor: "from-orange-800 to-orange-950",
    image: "https://cdn-i2.congthuong.vn/stores/news_dataimages/2023/092023/04/10/anh-1-1-52520230904103526.0641900.jpg"
  },
  // SECTION 7 - ĐẶC ĐIỂM NHÀ NƯỚC KIỂU MỚI
  {
    id: 7,
    icon: "⚖️",
    title: "Đặc điểm Nhà nước kiểu mới",
    content: [
      "✦ NHÀ NƯỚC DÂN CHỦ:",
      "   Quyền lực thống nhất, phân công: Lập pháp – Hành pháp – Tư pháp",
      "",
      "✦ NHÀ NƯỚC PHÁP QUYỀN XHCN:",
      "   Quản lý bằng hiến pháp và pháp luật",
      "   \"Mọi công dân đều bình đẳng trước pháp luật\"",
      "",
      "✦ NHÀ NƯỚC TRONG SẠCH:",
      "   Chống tham nhũng – nhiệm vụ cấp bách",
      "   Cán bộ phải có ĐỨC, có TÀI"
    ],
    bgColor: "from-teal-800 to-teal-950",
    image: "https://chinhtrivaphattrien.vn/uploads/2023/04/12/bac-ho-tu-tuong-nha-nuoc-1681315729.jpg"
  },
  // SECTION 8 - THỜI ĐẠI 4.0
  {
    id: 8,
    icon: "🌱",
    title: "Vận dụng trong thời đại 4.0",
    content: [
      "✦ Chính phủ điện tử – Chính phủ số",
      "✦ Minh bạch hóa dữ liệu công",
      "✦ Công dân số tham gia quản trị nhà nước",
      "✦ Cải cách thủ tục hành chính",
      "",
      "Nhiệm vụ trọng tâm:",
      "✔ Nâng cao dân chủ cơ sở",
      "✔ Dân tham gia hoạch định và phản biện chính sách",
      "✔ Kiên quyết chống quan liêu – tham nhũng – lãng phí"
    ],
    highlight: "Xây dựng đội ngũ cán bộ \"vừa hồng, vừa chuyên\"",
    bgColor: "from-cyan-800 to-cyan-950",
    image: "https://cdn.accgroup.vn/wp-content/uploads/2022/11/download-22.jpg"
  },
  // SECTION 9 - KẾT LUẬN
  {
    id: 9,
    icon: "🎤",
    title: "Kết luận & Thông điệp Thanh niên",
    content: [
      "Tư tưởng Hồ Chí Minh về Nhà nước của dân – do dân – vì dân là nền tảng xây dựng Nhà nước pháp quyền XHCN Việt Nam",
      "",
      "🎯 THANH NIÊN CẦN:",
      "✔ Hiểu biết quyền và nghĩa vụ công dân",
      "✔ Tôn trọng Hiến pháp và pháp luật",
      "✔ Góp ý và phản biện xã hội có trách nhiệm",
      "✔ Chung tay xây dựng Nhà nước pháp quyền"
    ],
    highlight: "\"Nước ta là nước dân chủ. Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân.\"",
    bgColor: "from-amber-700 to-red-900",
    image: "https://cdn-i2.congthuong.vn/stores/news_dataimages/2023/092023/04/10/anh-1-1-52520230904103526.0641900.jpg"
  }
];
