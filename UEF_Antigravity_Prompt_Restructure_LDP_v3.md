# PROMPT v3: CHỈNH LANDING PAGE UEF (clip YouTube mới + Section 4 dải milestone có hiệu ứng)

## Cách dùng
- **Chưa chạy v2:** dùng **PROMPT ĐẦY ĐỦ** (Phần 1). Đây là bản thay thế hoàn toàn v2.
- **Đã chạy v2 xong:** chỉ dùng **PROMPT BỔ SUNG** (Phần 2), ngắn hơn, chỉ sửa Section 4 và Section 5.
- Cả hai đều dùng Plan Mode. Duyệt Plan trước khi cho chạy.
- Nội dung chi tiết từng năm ở Section 4 để trống có chủ đích. Sau này bạn chỉ cần sửa một khối dữ liệu duy nhất trong `main.js` (có chú thích sẵn).

---

# PHẦN 1: PROMPT ĐẦY ĐỦ

## BẮT ĐẦU PROMPT ĐẦY ĐỦ

````
Bạn là Senior Frontend Developer. Nhiệm vụ: CHỈNH SỬA landing page "Xét học bổng sớm" của Đại học UEF đang có trong workspace, để cấu trúc và nội dung khớp với "SPEC NỘI DUNG MỚI" bên dưới (phiên bản docx đã cập nhật, là nguồn đúng duy nhất).

Đây là CHỈNH SỬA, không phải làm lại từ đầu. Giữ nguyên hệ thống thiết kế và các component đã có, tái sử dụng tối đa. Nếu nội dung trong HTML cũ mâu thuẫn với spec, spec luôn thắng.

==================================================
A. HIỆN TRẠNG
==================================================
Workspace đang có: index.html, reset.css, variables.css, global.css, sections.css, main.js, và ảnh (hinh_2.jpg, hinh_3.jpg, hinh_4.jpg, hinh_5.jpg, hinh_7.jpg, hoc-bong.png, logo-truong-2023-09-29.png). Kiểm tra đường dẫn thực tế của từng file trước khi sửa.

Thứ tự section hiện tại trong index.html:
1. header.site-header
2. section.hero-section (hero-content, hero-timeline, hero-model, form #lead-form trong .hero-form-wrapper#register-form, countdown, .info-bar)
3. section.tabs-section (tab 3 trạng thái: .tab-btn-styled, .tab-pane#tab-1..3)
4. section.steps-section (3 bước đăng ký + OTP)
5. section.benefits-section
6. section.why-choose-section (accordion #uef-accordion)
7. section.timeline-section (tab năm 1-4: .tl-btn, .tl-pane#year-1..4)
8. section.video-section#video (carousel .video-card + modal #video-modal dùng thẻ <video>)
9. section.culture-section
10. section.final-cta-section
11. footer.site-footer

Design system cần giữ nguyên: font 'Be Vietnam Pro'; màu và token trong variables.css (--color-primary #ED1C24, --color-secondary #004F9F...); class dùng chung trong global.css (.container, .eyebrow, .badge, .btn, .btn-primary, .btn-submit, form-group, error-msg...); class layout trong sections.css (.section-padding, .section-header, .section-headline, .section-description, .highlight-red...).

==================================================
B. NGUYÊN TẮC BẮT BUỘC
==================================================
1. Không viết lại từ đầu. Sửa trực tiếp các file hiện có. Không đổi tên file, không đổi design token.
2. Nội dung chữ COPY NGUYÊN VĂN từ spec (đặc biệt dấu tiếng Việt). Không tự diễn giải, không thêm bớt, không tự viết mô tả/caption cho thành phần mà spec không có chữ. Ngoại lệ duy nhất: nội dung demo của Section 4 theo đúng quy định ở mục D (Section 4), phải đánh dấu rõ là demo.
3. Chỉ được lệch spec ở các điểm mục H "QUYẾT ĐỊNH MẶC ĐỊNH". Mọi nghi vấn khác: giữ nguyên spec và ghi vào báo cáo cuối.
4. Tái sử dụng component (card, video carousel, form, button) thay vì viết mới. Chỉ viết CSS mới khi thật sự cần.
5. Bỏ section nào thì gỡ luôn HTML, CSS, JS liên quan (sau khi kiểm tra không còn nơi nào tham chiếu). Với CSS dùng chung, kiểm tra class còn được dùng ở section giữ lại hay không rồi mới xóa.
6. JavaScript phải an toàn khi thiếu phần tử (null-safe). Không để lỗi console.
7. Giữ nguyên hành vi form (validate số điện thoại Việt Nam, hàm submitForm() placeholder để sau này gắn API).
8. Responsive mobile-first, kiểm tra 375px, 768px, 1440px. Không có thanh cuộn ngang.

==================================================
C. SƠ ĐỒ CHUYỂN ĐỔI (CŨ -> MỚI)
==================================================
| Cấu trúc cũ | Hành động | Cấu trúc mới |
|---|---|---|
| header.site-header | SỬA | Nav mới: "Thông tin Học bổng" + nút "Đăng ký xét học bổng" |
| hero-section | SỬA | Hero mới (Section 1). BỎ countdown, hero-timeline, audience badge, các mức 25/50/100, info-bar, hero-model nếu không còn dùng |
| tabs-section | BỎ | Được thay bằng Section 2, 3, 4 mới |
| steps-section | BỎ | Không còn trong spec (bỏ luôn luồng OTP và progress 01/02) |
| benefits-section | TÁI DÙNG component | Dùng lại .benefit-card cho 5 loại học bổng ở Section 2 |
| why-choose-section (accordion) | BỎ | Không còn trong spec |
| timeline-section | VIẾT LẠI | Section 4 mới: dải ngang 4 milestone có hiệu ứng (mục D). Xóa logic tab cũ .tl-btn/.tl-pane và các style .tl-* không còn dùng |
| video-section | TÁI DÙNG component | Dùng lại .video-card/carousel/modal cho Section 5 và Section 6 |
| culture-section | BỎ | Không còn trong spec |
| final-cta-section | BỎ | Section 6 kết thúc bằng 1 nút CTA rồi tới footer |
| footer | SỬA | Rút gọn đúng spec Footer |

Thứ tự section MỚI: Header -> S1 Hero -> S2 Học bổng -> S3 Chọn ngành -> S4 Hành trình 4 năm -> S5 Môi trường & truyền cảm hứng -> S6 Testimonial (+ nút CTA) -> Footer.

Anchor id: #hero, #hoc-bong (S2), #chon-nganh (S3), #hanh-trinh (S4), #moi-truong (S5), #cam-nhan (S6), #register-form (form ở hero, giữ id cũ).

==================================================
D. SPEC NỘI DUNG MỚI
==================================================

--- HEADER / NAVIGATION ---
- Logo: logo-truong-2023-09-29.png (giữ như hiện tại)
- Nav: "Thông tin Học bổng" (cuộn tới #hoc-bong) | nút "Đăng ký xét học bổng" (cuộn tới #register-form)

--- SECTION 1: HERO ---
Eyebrow: HÀNH TRÌNH ĐẦY CẢM XÚC
H1: Bắt đầu những bước đầu tiên cùng UEF
Cột trái (đoạn dẫn): "Tuổi 18, bạn không cần biết hết mọi câu trả lời. Chỉ cần bắt đầu từ một điểm xuất phát phù hợp. <strong>UEF đồng hành cùng 2K9 trên hành trình chọn ngành, tích luỹ tri thức, trải nghiệm đại học và từng bước trưởng thành</strong>"
Cột phải: form (giữ #lead-form và id fullname, phone, highschool, province, agree)
  - Mô tả form: "Điền thông tin để UEF tư vấn lộ trình phù hợp."
  - Field: Họ và tên | Số điện thoại | Trường THPT | Tỉnh / Thành phố (dropdown, giữ danh sách hiện có)
  - Checkbox: "Tôi đồng ý với chính sách bảo mật của UEF" (cụm "chính sách bảo mật" là link, giữ href hiện có)
  - Nhãn nút gửi: xem QUYẾT ĐỊNH MẶC ĐỊNH số 2
Dưới hero: 3 pill điều hướng ngang:
  - "Học bổng và tài chính" -> #hoc-bong
  - "Ngành học phù hợp" -> #chon-nganh
  - "Cuộc sống đại học" -> #hanh-trinh
Bỏ: countdown, hero-timeline, audience badge, các mức 25/50/100, info-bar.

--- SECTION 2: LỢI THẾ KHI ĐĂNG KÝ HỌC BỔNG SỚM (id="hoc-bong") ---
Tiêu đề: "2K9 đăng ký học bổng <span class="highlight-red">SỚM</span>"
Dòng phụ: "Thêm lợi thế cho hành trình tương lai."
Câu hỏi dẫn: "2K9 có cơ hội nhận các học bổng nào từ UEF?"
5 card (dùng lại .benefit-card; mỗi card gồm icon SVG đơn giản + tiêu đề; KHÔNG viết mô tả):
  1. Học bổng tuyển sinh
  2. Học bổng doanh nghiệp
  3. Học bổng tài năng
  4. Học bổng giáo dục
  5. Học bổng gia đình
Không có đoạn văn kết và không có nút CTA riêng ở section này.

--- SECTION 3: CHỦ ĐỘNG CHỌN NGÀNH (id="chon-nganh") ---
Tiêu đề: "2K9, bạn đang đứng trước những bước đầu tiên của hành trình đại học"
Dòng phụ: "Chương trình đào tạo, thiết kế cho những nghề nghiệp của kỷ nguyên số và môi trường làm việc quốc tế."
Hai chỉ số nổi bật (số lớn + nhãn):
  - 46 | chương trình đào tạo
  - 3 | phương thức xét tuyển
Tiêu đề nhỏ: "Chương trình học đáp ứng nhu cầu thực tiễn"
4 card (cụm in đậm là tiêu đề card, phần sau là mô tả):
  1. Chuẩn quốc tế: Định hướng International University, Global Career.
  2. Học cho kỷ nguyên số: Kiến thức số, dữ liệu và công nghệ được lồng vào từng ngành học.
  3. Học đi đôi với làm: Dự án thực tế, kiến tập và thực tập cùng doanh nghiệp đối tác.
  4. Tiếng Anh là lợi thế: chương trình song ngữ, sẵn sàng cho môi trường toàn cầu.

--- SECTION 4: HÀNH TRÌNH HỌC ĐẠI HỌC (id="hanh-trinh") ---
Đây là section có hiệu ứng tương tác. Nội dung chi tiết từng năm SẼ ĐƯỢC BỔ SUNG SAU, nên nhiệm vụ lúc này là dựng SƯỜN hoàn chỉnh, chạy được và hiển thị demo đẹp.

Phần chữ cố định (nguyên văn):
  - Tiêu đề: "4 năm tại UEF - Một hành trình, nhiều cột mốc đáng nhớ"
  - Mô tả: "Kết nối cộng đồng, tìm ra các kỹ năng mới của bản thân, thoải mái thể hiện chất riêng. Khám phá hành trình học tập, hoạt động sinh viên cùng những cơ hội để 2K9 là chính mình tại UEF."
  - Badge đè lên ảnh trong khung chi tiết: dòng 1 "Thỏa sức theo đuổi đam mê", dòng 2 "Thử thách bản thân ở nhiều lĩnh vực mới"

Bố cục (từ trên xuống), căn giữa, rộng bằng .container:
  (1) Tiêu đề + mô tả.
  (2) DẢI NGANG MILESTONE (journey strip): một dải ngang liền mạch (ribbon/đường lộ trình bo tròn, dùng màu từ token, ví dụ gradient từ --color-secondary sang --color-primary) với 4 mốc (node) đặt cách đều. Mỗi node là hình tròn lớn chứa số năm (1, 2, 3, 4). Bên dưới mỗi node có nhãn "Năm N" in đậm và dòng tóm tắt (nguyên văn):
        - Năm 1: Học tập trong môi trường song ngữ - quốc tế
        - Năm 2: Tham gia Học kỳ quốc tế
        - Năm 3: Học cùng “người thầy doanh nhân”
        - Năm 4: Tự tin gia nhập thị trường việc làm
     Có một lớp "tiến độ" (progress fill) chạy từ đầu dải tới node đang chọn.
  (3) KHUNG CHI TIẾT (journey panel): một card nằm ngay dưới dải, có mũi tên nhỏ chỉ lên đúng node đang chọn (mũi tên bị chặn trong khung, không tràn ra ngoài container). Bố cục bên trong card trên desktop: trái là ảnh (có badge ở trên), phải là nội dung chi tiết gồm: nhãn "Năm N", tiêu đề, đoạn mô tả, danh sách điểm nhấn (nếu có). Trên mobile xếp dọc.

Hành vi tương tác:
  - Trạng thái ban đầu: Năm 1 đang được chọn (để người xem thấy ngay khung chi tiết).
  - Desktop (chuột): rê chuột vào một node (và cả nhãn bên dưới nó) thì node đó thành "active": node phóng nhẹ + đổ bóng/viền nổi bật, progress fill chạy tới node đó, khung chi tiết đổi sang nội dung năm đó với hiệu ứng mờ dần + trượt nhẹ lên (khoảng 250ms), mũi tên di chuyển mượt tới node. Dùng độ trễ ý định (hover intent ~80ms) để không bị giật khi chuột lướt ngang qua các node. Rời chuột khỏi dải thì giữ nguyên node vừa chọn, không tự đóng.
  - Mobile/cảm ứng: chạm vào node để chọn (không phụ thuộc hover). Trên mobile dải vẫn nằm ngang với 4 node, chỉ hiển thị "Năm N" dưới node; dòng tóm tắt chuyển vào đầu khung chi tiết.
  - Bàn phím: mỗi node là một <button> focus được; focus cũng chọn node; phím mũi tên Trái/Phải di chuyển giữa các node. Có :focus-visible rõ ràng.
  - Khung chi tiết có aria-live="polite". Node dùng aria-pressed hoặc aria-current phù hợp.
  - prefers-reduced-motion: tắt hiệu ứng trượt/phóng, chỉ đổi nội dung tức thì.
  - Dùng JS thuần + CSS, không thêm thư viện. Chỉ dùng transform/opacity cho hiệu ứng để mượt.

Dữ liệu (QUAN TRỌNG: để tôi bổ sung nội dung sau mà không phải đụng vào HTML/CSS):
  - Đặt MỘT hằng số YEAR_DETAILS ở đầu main.js, trong một khối có chú thích rõ ràng:
        // ===== NỘI DUNG CHI TIẾT 4 NĂM - CHỈ CẦN SỬA KHỐI NÀY =====
  - Cấu trúc mỗi phần tử: { year: 1, summary: "...", title: "...", body: "...", highlights: ["...", "..."], image: "đường dẫn ảnh hoặc rỗng" }
  - summary lấy nguyên văn 4 dòng tóm tắt ở trên.
  - Khung chi tiết và nhãn dưới node phải được RENDER TỪ DỮ LIỆU NÀY (không hard-code lặp lại trong HTML).
  - Nội dung DEMO tạm thời (bắt buộc ghi rõ là demo để tôi dễ thay, và để comment // TODO: nội dung thật do UEF cung cấp):
        title: lấy bằng summary của năm đó
        body: "Nội dung chi tiết Năm N (demo): sẽ được thay bằng nội dung thật."
        highlights: ["Điểm nhấn 1 (demo)", "Điểm nhấn 2 (demo)", "Điểm nhấn 3 (demo)"]
        image: dùng một ảnh local có sẵn (chọn ảnh hợp nhất sau khi xem trực tiếp; có thể dùng cùng một ảnh cho cả 4 năm)
  - Nếu body rỗng thì hiển thị dòng "Nội dung đang được cập nhật"; nếu highlights rỗng thì ẩn danh sách; nếu image rỗng thì dùng ảnh mặc định, không để ô ảnh trống.

--- SECTION 5: MÔI TRƯỜNG CHUẨN QUỐC TẾ & TRUYỀN CẢM HỨNG (id="moi-truong") ---
Tiêu đề: "Ở UEF, bạn không trưởng thành một mình"
Dòng phụ: "Những người thầy tận tâm, những người bạn cùng chí hướng, và hàng trăm khoảnh khắc đáng nhớ."
4 khối nội dung (lưới 2x2 trên desktop, 1 cột trên mobile). Mỗi khối gồm media (thumbnail video) + 1 dòng chữ chính là tiêu đề khối bên dưới (đây chính là "1 dòng mô tả" của spec, KHÔNG thêm caption nào khác). Bấm khối mở modal phát video; khối có nhiều video thì modal có nút Trước/Sau.
  1. "Môi trường học tập hiện đại, “xịn sò”" (2 video)
  2. "Hoạt động sinh viên đa dạng" (3 video)
  3. "Định hướng nghề nghiệp từ năm 3" (3 video, gồm cả clip YouTube DOE_6fp9pig)
  4. "Phát triển tư duy hội nhập quốc tế" (2 video)

--- SECTION 6: TESTIMONIAL (id="cam-nhan") ---
Tiêu đề: "Lắng nghe những người đã chọn UEF làm điểm xuất phát."
(Không có dòng phụ.)
Dùng lại video carousel (.video-scroll-area / .video-card), vuốt ngang được trên mobile. 4 card, tiêu đề card nguyên văn:
  1. "Cảm xúc khi nhận học bổng sớm của khóa K26"
  2. "Cựu sinh viên chia sẻ về hành trình 4 năm tại UEF" (2 video)
  3. "Phụ huynh chia sẻ khi K26 tham gia kì thi V-SAT tại UEF"
  4. "Sau mỗi kỳ thực tập, doanh nghiệp đã có đánh giá cao sinh viên UEF"
Badge nhỏ trên mỗi card: xem QUYẾT ĐỊNH MẶC ĐỊNH số 6.
Cuối section: nút CTA lớn "ĐĂNG KÝ XÉT HỌC BỔNG" (cuộn tới #register-form), thay cho final-cta-section cũ.
Lưu ý: video-section cũ đang dùng inline style nền tối rgba(31,41,55,.85). Chuyển thành class CSS thay vì inline style.

--- FOOTER ---
- Trường Đại học Kinh tế - Tài chính TP.HCM - UEF
- Trụ sở: 141 - 145 Điện Biên Phủ, Phường Gia Định, Thành phố Hồ Chí Minh
- Cơ sở: 161 - 161A Điện Biên Phủ, Phường Gia Định, Thành phố Hồ Chí Minh
- Hotline: 028 2236 2222 - 094 998 1717
- Email: tuyensinh@uef.edu.vn
Giữ logo trong footer nếu đang có. Bỏ các cột/link khác không có trong spec.

==================================================
E. VIDEO DATA
==================================================
Tạo MỘT mảng dữ liệu duy nhất trong main.js để render và điều khiển, không hard-code rải rác.

Quy ước:
- type "youtube": embed https://www.youtube-nocookie.com/embed/{id}?autoplay=1&rel=0&start={giây nếu có}. Thumbnail: https://i.ytimg.com/vi/{id}/hqdefault.jpg, có onerror fallback về ảnh local (hinh_*.jpg).
- type "tiktok": embed https://www.tiktok.com/embed/v2/{id}. Không có thumbnail tự động nên dùng ảnh local (hinh_*.jpg), kèm nhãn nhỏ "TikTok".
- Modal hiện dùng thẻ <video> với data-video (mp4). Đổi sang <iframe>: tạo iframe khi mở, xóa src khi đóng để dừng video. Khung youtube 16:9, tiktok 9:16. Đóng bằng nút X, click nền, phím Esc, có aria phù hợp.
- Trong modal luôn có một link phụ "Xem trên YouTube" / "Xem trên TikTok" (mở tab mới) để dự phòng khi chủ video tắt chế độ nhúng.

Section 5:
Khối 1 "Môi trường học tập hiện đại, “xịn sò”":
  - tiktok 7668916500010421521
  - tiktok 7564599764411518229
Khối 2 "Hoạt động sinh viên đa dạng":
  - youtube f_-cpQas2iQ
  - tiktok 7688562257885678865
  - youtube ZANXG2rRQJY
Khối 3 "Định hướng nghề nghiệp từ năm 3":
  - youtube updmRVIqrdE
  - tiktok 7624443550138207509
  - youtube DOE_6fp9pig   <- ĐÃ XÁC NHẬN LÀ CLIP CỦA UEF, PHẢI NHÚNG VÀO. Link gốc: https://youtu.be/DOE_6fp9pig
Khối 4 "Phát triển tư duy hội nhập quốc tế":
  - youtube fQWHTlSCOP0
  - youtube 3KGTTDHS1S4

Yêu cầu riêng cho clip youtube DOE_6fp9pig:
  - Nhúng bằng đúng cơ chế youtube-nocookie như các video YouTube khác, đặt trong khối 3 theo thứ tự trên.
  - Trước khi báo hoàn thành, dùng trình duyệt tích hợp mở modal của video này và kiểm tra có phát được không. Nếu YouTube báo video không cho phép nhúng (lỗi kiểu "Video unavailable" hoặc "Playback on other websites has been disabled"), KHÔNG tự thay bằng video khác: giữ link "Xem trên YouTube" làm phương án dự phòng và ghi rõ vào báo cáo để tôi xử lý với chủ kênh.
  - Không tự đoán hay hiển thị tiêu đề cho video này.

Section 6:
Card 1: tiktok 7630691448580574484
Card 2 (2 video): youtube 0ZxH3Q-g5LY start=185; youtube TulfAQB2TS4 start=245
Card 3: youtube dJDcmt9KGns start=74
Card 4: youtube MqJayuq2n2o

URL gốc để đối chiếu: https://www.tiktok.com/@uef.official/video/{id} cho video tiktok; https://www.youtube.com/watch?v={id} cho youtube (tham số t=185s nghĩa là start=185 giây).

==================================================
F. YÊU CẦU KỸ THUẬT CHI TIẾT
==================================================
HTML
- Mỗi section có id anchor như mục C. Dùng thẻ ngữ nghĩa (header, main, section, footer); H1 duy nhất ở hero, các section còn lại dùng H2.
- Ảnh có alt tiếng Việt có nghĩa; ảnh dưới màn hình đầu dùng loading="lazy".
- Chỉ dùng ảnh local có sẵn. Xem trực tiếp từng ảnh (hinh_2/3/4/5/7.jpg, hoc-bong.png) để chọn ảnh hợp từng vị trí; thiếu ảnh thì dùng khối nền gradient theo token màu và ghi vào báo cáo, không tự lấy ảnh từ internet.
JavaScript (main.js)
- Gom toàn bộ vào MỘT listener DOMContentLoaded (hiện có code nằm ngoài listener).
- Xóa: countdown, cập nhật .progress-step, logic accordion, logic tab (.tab-btn-styled), logic tab timeline (.tl-btn/.tl-pane), parallax wave nếu phần tử không còn.
- Giữ: validate số điện thoại + submitForm() placeholder.
- Thay alert() sau khi gửi form bằng thông báo thành công hiển thị ngay trong form (không chuyển bước OTP).
- Thêm: smooth scroll cho anchor (dùng scroll-margin-top để không bị header che); logic Section 4 (YEAR_DETAILS, render, hover intent, click, bàn phím, vị trí mũi tên, progress); modal video dạng iframe + nút Trước/Sau; mảng dữ liệu video.
- Mọi querySelector đều kiểm tra null trước khi dùng.
- Tính vị trí mũi tên của khung chi tiết bằng JS dựa trên toạ độ node, tính lại khi resize.
CSS
- CSS mới đặt theo đúng thứ tự section trong sections.css, kèm comment phân đoạn như file hiện có. Section 4 dùng tiền tố class journey- (journey-strip, journey-track, journey-progress, journey-node, journey-panel...).
- Không dùng !important, không thêm inline style mới (riêng giá trị CSS variable do JS gán như --journey-progress thì được phép). Dùng token trong variables.css.
- Hero form giữ hành vi sticky trên desktop như hiện tại, khối bình thường trên mobile.
- Mọi nút và thẻ tương tác có :hover và :focus-visible.
Hiệu năng và truy cập
- Không thêm thư viện ngoài. Chỉ dùng embed YouTube/TikTok như mục E.
- Tương phản chữ/nền đủ đọc, vùng bấm tối thiểu 44px trên mobile.

==================================================
G. QUY TRÌNH LÀM VIỆC
==================================================
1. Đọc toàn bộ index.html, sections.css, global.css, main.js trước.
2. Trình bày PLAN gồm: (a) file sẽ sửa, (b) bảng ánh xạ section cũ -> mới, (c) danh sách class/ID sẽ xóa, (d) phác thảo cách dựng Section 4 (cấu trúc HTML, class, cách tính mũi tên), (e) rủi ro bạn thấy. Dừng lại chờ tôi duyệt rồi mới sửa.
3. Sau khi được duyệt, làm theo thứ tự: Header + Hero -> S2 -> S3 -> S4 -> S5 + modal video -> S6 + CTA -> Footer -> dọn CSS/JS thừa.
4. Sau mỗi 2 section, mở trình duyệt tích hợp, chụp ảnh màn hình để tôi xem. Với Section 4, chụp riêng 4 ảnh tương ứng 4 trạng thái node đang chọn.
5. Cuối cùng test 3 kích thước (375, 768, 1440) và: form validate, các anchor, Section 4 (hover, chạm, bàn phím trái/phải, mũi tên không tràn khung), modal video (nút X, nền, Esc, Trước/Sau, clip DOE_6fp9pig), carousel vuốt ngang, không lỗi console.
6. Báo cáo cuối gồm: thay đổi theo file, phần đã xóa, nơi sửa nội dung 4 năm (YEAR_DETAILS), kết quả kiểm tra clip DOE_6fp9pig, TODO còn lại, và mọi chỗ spec chưa rõ.

==================================================
H. QUYẾT ĐỊNH MẶC ĐỊNH (áp dụng nếu tôi chưa nói khác)
==================================================
1. Không hiển thị các mức học bổng 25% | 50% | 100% và countdown vì spec mới không có.
2. Nhãn nút gửi form: "ĐĂNG KÝ XÉT HỌC BỔNG" (spec Section 1 không nêu nhãn). Bỏ progress "01 Thông tin / 02 Xác thực OTP" và luồng OTP vì spec không còn bước này.
3. Ba pill dưới hero cuộn tới #hoc-bong, #chon-nganh, #hanh-trinh (spec chỉ nêu tên, không nêu đích).
4. Badge "Thỏa sức theo đuổi đam mê / Thử thách bản thân ở nhiều lĩnh vực mới" đặt đè lên ảnh trong khung chi tiết của Section 4 (spec không nói vị trí). Khi đổi năm, badge giữ nguyên, chỉ ảnh và nội dung đổi.
5. Nội dung demo của Section 4 chỉ là chỗ giữ chỗ, sẽ được thay bằng nội dung thật.
6. Badge nhỏ ở Section 6: "SINH VIÊN K26", "CỰU SINH VIÊN", "PHỤ HUYNH", "DOANH NGHIỆP" là nhãn tạm do tôi đặt, dựa trên tiêu đề card.
7. Section 2: card chỉ có icon + tên học bổng, không thêm mô tả.

KẾT THÚC PROMPT. Hãy bắt đầu bằng việc đọc các file hiện có và trình bày PLAN.
````

## KẾT THÚC PROMPT ĐẦY ĐỦ

---

# PHẦN 2: PROMPT BỔ SUNG (dùng khi Antigravity đã chạy xong v2)

## BẮT ĐẦU PROMPT BỔ SUNG

````
Landing page đã được chỉnh theo spec trước. Bây giờ cần 2 thay đổi nữa. Chỉ sửa đúng 2 việc này, không đụng vào phần khác. Giữ nguyên design token, class và cấu trúc đã có. Làm theo Plan Mode: trình bày Plan trước, chờ tôi duyệt rồi mới sửa.

VIỆC 1: NHÚNG THÊM CLIP YOUTUBE VÀO SECTION 5 (khối "Định hướng nghề nghiệp từ năm 3")
- Link: https://youtu.be/DOE_6fp9pig  (video id: DOE_6fp9pig). Đây là clip chính thức của UEF, tôi đã xác nhận, hãy nhúng vào.
- Trước đó clip này đã bị loại ra khỏi danh sách vì nghi dán nhầm. Hãy khôi phục: thêm vào mảng dữ liệu video của khối 3, đặt sau 2 video đã có (youtube updmRVIqrdE, tiktok 7624443550138207509). Khối này giờ có 3 video.
- Dùng đúng cơ chế đang dùng cho các video YouTube khác: embed https://www.youtube-nocookie.com/embed/DOE_6fp9pig?autoplay=1&rel=0, thumbnail https://i.ytimg.com/vi/DOE_6fp9pig/hqdefault.jpg có onerror fallback về ảnh local, modal có nút Trước/Sau cập nhật cho 3 video, và link phụ "Xem trên YouTube" trong modal.
- Không tự đoán hay hiển thị tiêu đề cho video này.
- Dùng trình duyệt tích hợp mở modal của clip này và kiểm tra có phát được không. Nếu YouTube báo không cho phép nhúng, KHÔNG thay bằng video khác: giữ link "Xem trên YouTube" làm dự phòng và báo tôi rõ trong báo cáo.

VIỆC 2: VIẾT LẠI SECTION 4 (id="hanh-trinh") THÀNH DẢI NGANG 4 MILESTONE CÓ HIỆU ỨNG
Nội dung chi tiết từng năm sẽ bổ sung sau, nên bây giờ dựng SƯỜN hoàn chỉnh, chạy được và có nội dung demo.

Chữ cố định (nguyên văn):
- Tiêu đề: "4 năm tại UEF - Một hành trình, nhiều cột mốc đáng nhớ"
- Mô tả: "Kết nối cộng đồng, tìm ra các kỹ năng mới của bản thân, thoải mái thể hiện chất riêng. Khám phá hành trình học tập, hoạt động sinh viên cùng những cơ hội để 2K9 là chính mình tại UEF."
- Badge đè lên ảnh trong khung chi tiết: dòng 1 "Thỏa sức theo đuổi đam mê", dòng 2 "Thử thách bản thân ở nhiều lĩnh vực mới"

Bố cục (căn giữa, rộng bằng .container):
(1) Tiêu đề + mô tả.
(2) Dải ngang milestone: một ribbon/đường lộ trình bo tròn dùng màu từ token (ví dụ gradient --color-secondary sang --color-primary), 4 node tròn cách đều, mỗi node chứa số năm. Dưới mỗi node: nhãn "Năm N" in đậm + dòng tóm tắt nguyên văn:
   - Năm 1: Học tập trong môi trường song ngữ - quốc tế
   - Năm 2: Tham gia Học kỳ quốc tế
   - Năm 3: Học cùng “người thầy doanh nhân”
   - Năm 4: Tự tin gia nhập thị trường việc làm
   Có lớp progress fill chạy từ đầu dải tới node đang chọn (gán qua CSS variable --journey-progress).
(3) Khung chi tiết (card) ngay dưới dải, có mũi tên nhỏ chỉ lên đúng node đang chọn (chặn trong khung container). Desktop: trái là ảnh (có badge), phải là nhãn "Năm N", tiêu đề, đoạn mô tả, danh sách điểm nhấn. Mobile: xếp dọc.

Hành vi:
- Ban đầu Năm 1 đang được chọn.
- Desktop: rê chuột vào node (hoặc nhãn bên dưới) thì node đó active: phóng nhẹ + nổi bật, progress fill chạy tới node, khung chi tiết đổi nội dung với hiệu ứng mờ dần + trượt nhẹ lên (~250ms), mũi tên trượt mượt tới node. Dùng hover intent ~80ms để không giật. Rời chuột thì giữ nguyên node đã chọn.
- Mobile/cảm ứng: chạm node để chọn. Dải vẫn ngang, 4 node chỉ hiện "Năm N"; dòng tóm tắt chuyển vào đầu khung chi tiết.
- Bàn phím: node là <button>, focus cũng chọn, phím Trái/Phải di chuyển giữa các node, có :focus-visible. Khung chi tiết có aria-live="polite".
- prefers-reduced-motion: tắt trượt/phóng, đổi nội dung tức thì.
- JS thuần + CSS, không thư viện, chỉ animate transform/opacity. Tính vị trí mũi tên bằng JS, tính lại khi resize.

Dữ liệu (để tôi bổ sung nội dung sau mà không đụng HTML/CSS):
- Đặt MỘT hằng số YEAR_DETAILS ở đầu main.js, trong khối chú thích:
    // ===== NỘI DUNG CHI TIẾT 4 NĂM - CHỈ CẦN SỬA KHỐI NÀY =====
- Mỗi phần tử: { year, summary, title, body, highlights: [], image }. summary là 4 dòng tóm tắt ở trên.
- Dải và khung chi tiết RENDER TỪ DỮ LIỆU NÀY, không hard-code lặp lại trong HTML.
- Nội dung demo, ghi rõ là demo và để comment // TODO: nội dung thật do UEF cung cấp:
    title = summary của năm đó
    body = "Nội dung chi tiết Năm N (demo): sẽ được thay bằng nội dung thật."
    highlights = ["Điểm nhấn 1 (demo)", "Điểm nhấn 2 (demo)", "Điểm nhấn 3 (demo)"]
    image = một ảnh local có sẵn (xem trực tiếp để chọn ảnh hợp; dùng chung cho 4 năm cũng được)
- body rỗng thì hiện "Nội dung đang được cập nhật"; highlights rỗng thì ẩn danh sách; image rỗng thì dùng ảnh mặc định.

Dọn dẹp: xóa logic JS tab timeline cũ (.tl-btn/.tl-pane) và các style .tl-* không còn dùng, sau khi kiểm tra không nơi nào tham chiếu. CSS mới dùng tiền tố journey- và đặt đúng vị trí Section 4 trong sections.css. Không dùng !important.

Kiểm tra trước khi báo xong: test 375px, 768px, 1440px; chụp 4 ảnh ứng với 4 node được chọn; kiểm tra hover, chạm, phím Trái/Phải, mũi tên không tràn khung, không lỗi console; kiểm tra clip DOE_6fp9pig như Việc 1.
Báo cáo cuối: file đã sửa, phần đã xóa, vị trí khối YEAR_DETAILS, kết quả kiểm tra clip, mọi điểm chưa rõ.
````

## KẾT THÚC PROMPT BỔ SUNG

---

## Ghi chú nhanh để bạn bổ sung nội dung sau này
Khi có nội dung thật cho 4 năm, bạn (hoặc Antigravity) chỉ cần sửa khối `YEAR_DETAILS` ở đầu `main.js`: điền `title`, `body`, `highlights` (danh sách ngắn) và `image` cho từng năm. Không cần đụng vào HTML hay CSS.
