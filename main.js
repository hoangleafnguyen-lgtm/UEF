// ==========================================================================
// LANDING PAGE UEF - MAIN SCRIPT (CẬP NHẬT THEO SPEC DOCX MỚI NHẤT)
// ==========================================================================

// ===== NỘI DUNG CHI TIẾT 4 NĂM - CHỈ CẦN SỬA KHỐI NÀY =====
const YEAR_DETAILS = [
    {
        year: 1,
        summary: "Khám phá",
        title: "Năm 1: Khám phá",
        body: "Bước vào cánh cổng đại học, 2K9 được hòa mình vào môi trường song ngữ - quốc tế năng động, tự do khám phá tiềm năng bản thân và xây dựng những mối quan hệ bạn bè gắn kết.",
        highlights: [
            "Môi trường song ngữ - quốc tế",
            "Khai phá bản thân qua các câu lạc bộ tài năng",
            "Mở rộng mối quan hệ bạn bè"
        ],
        image: "assets/hinh 2.jpg"
    },
    {
        year: 2,
        summary: "Hội nhập",
        title: "Năm 2: Hội nhập",
        body: "Mở rộng góc nhìn toàn cầu, tự tin giao tiếp ngoại ngữ và trải nghiệm học tập cùng các chuyên gia, giảng viên quốc tế.",
        highlights: [
            "Kết nối với giảng viên nước ngoài",
            "Rèn luyện kỹ năng ngoại ngữ",
            "Tham gia Học kỳ quốc tế"
        ],
        image: "assets/hinh 3.jpg"
    },
    {
        year: 3,
        summary: "Trải nghiệm",
        title: "Năm 3: Trải nghiệm",
        body: "Đưa kiến thức vào bài toán thực tiễn qua các dự án doanh nghiệp và sự dẫn dắt trực tiếp từ các CEO, doanh nhân đầu ngành.",
        highlights: [
            "Tham quan các doanh nghiệp, tập đoàn",
            "Học cùng “người thầy doanh nhân”",
            "Cọ xát thực tế nghề nghiệp"
        ],
        image: "assets/hinh 5.jpg"
    },
    {
        year: 4,
        summary: "Cất cánh",
        title: "Năm 4: Cất cánh",
        body: "Hoàn thiện hành trang nghề nghiệp, sẵn sàng đón nhận cơ hội việc làm rộng mở và tự tin bước vào thị trường lao động toàn cầu.",
        highlights: [
            "100% cơ hội thực tập, việc làm từ 1000+ doanh nghiệp đối tác",
            "Tự tin gia nhập thị trường lao động"
        ],
        image: "assets/hinh 4.jpg"
    }
];
// ==========================================================

// ===== DANH SÁCH VIDEO SECTION 5 (CHUẨN DOCX) =====
const VIDEO_SECTION_5_DATA = [
    {
        id: "env-1",
        title: "Môi trường học tập hiện đại, giảng viên sát cánh",
        desc: "Không gian học tập năng động, giảng viên truyền lửa tận tâm.",
        defaultThumb: "assets/hinh 1.jpg",
        videos: [
            { type: "youtube", id: "updmRVIqrdE", label: "Môi trường học tập hiện đại, giảng viên sát cánh" }
        ]
    },
    {
        id: "env-2",
        title: "Hoạt động sinh viên đầy màu sắc, cá tính",
        desc: "CLB, sự kiện, cuộc thi, dự án và hoạt động ngoại khóa giúp sinh viên mở rộng trải nghiệm, khám phá bản thân.",
        defaultThumb: "assets/hinh 3.jpg",
        videos: [
            { type: "youtube", id: "f_-cpQas2iQ", label: "Hoạt động sinh viên đầy màu sắc, cá tính" }
        ]
    },
    {
        id: "env-3",
        title: "Định hình nghề nghiệp sớm",
        desc: "Kết nối doanh nghiệp, tư vấn nghề nghiệp, kiến tập, thực tập và trải nghiệm thực tế.",
        defaultThumb: "assets/hinh 5.jpg",
        videos: [
            { type: "youtube", id: "DOE_6fp9pig", label: "Định hình nghề nghiệp sớm" }
        ]
    },
    {
        id: "env-4",
        title: "Phát triển tư duy hội nhập",
        desc: "Môi trường song ngữ, cơ hội giao lưu quốc tế và tư duy toàn cầu.",
        defaultThumb: "assets/hinh 7.jpg",
        videos: [
            { type: "youtube", id: "3KGTTDHS1S4", label: "Phát triển tư duy hội nhập" }
        ]
    }
];

// Video nổi bật Section 6
const FEATURED_SECTION_6_VIDEO = [
    { type: "youtube", id: "4iKpNm-7kL0", label: "Hành trình thanh xuân rực rỡ tại mái nhà UEF" }
];

// ==========================================================================
// DOMContentLoaded SINGLE LISTENER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. LEAD FORM VALIDATION & SUBMIT
    // ----------------------------------------------------------------------
    const leadForm = document.getElementById('lead-form');
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const successMsgBanner = document.getElementById('form-success-msg');

    // Phone Regex: Vietnam standard (starts with 0, 10 digits total)
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (phoneInput && phoneError) {
        phoneInput.addEventListener('input', () => {
            if (phoneInput.value.trim() && !phoneRegex.test(phoneInput.value.trim())) {
                phoneError.classList.add('active');
            } else {
                phoneError.classList.remove('active');
            }
        });
    }

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const phoneVal = phoneInput ? phoneInput.value.trim() : '';
            if (!phoneRegex.test(phoneVal)) {
                if (phoneError) phoneError.classList.add('active');
                if (phoneInput) phoneInput.focus();
                return;
            }

            if (phoneError) phoneError.classList.remove('active');
            submitLeadForm();
        });
    }

    function submitLeadForm() {
        const formData = {
            fullname: document.getElementById('fullname') ? document.getElementById('fullname').value.trim() : '',
            phone: document.getElementById('phone') ? document.getElementById('phone').value.trim() : '',
            highschool: document.getElementById('highschool') ? document.getElementById('highschool').value.trim() : '',
            province: document.getElementById('province') ? document.getElementById('province').value : '',
            agree: document.getElementById('agree') ? document.getElementById('agree').checked : false,
            timestamp: new Date().toISOString()
        };

        console.log('[UEF Lead Form Submitted]:', formData);

        // Hiển thị thông báo thành công trực tiếp ngay trong form
        if (successMsgBanner) {
            successMsgBanner.innerHTML = `
                <div class="success-box">
                    <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
                    <div>
                        <strong>Đăng ký thành công!</strong><br>
                        Cảm ơn bạn <strong>${escapeHtml(formData.fullname)}</strong>. Ban tư vấn tuyển sinh UEF sẽ liên hệ sớm nhất qua số <strong>${escapeHtml(formData.phone)}</strong>.
                    </div>
                </div>
            `;
            successMsgBanner.style.display = 'block';
            successMsgBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        if (leadForm) {
            leadForm.reset();
        }
    }

    function escapeHtml(str) {
        return (str || '').replace(/[&<>"']/g, (m) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m]));
    }

    // ----------------------------------------------------------------------
    // 2. PARALLAX BACKGROUND WAVES
    // ----------------------------------------------------------------------
    const waveBlue = document.querySelector('.wave-blue');
    const waveRed = document.querySelector('.wave-red');

    if (waveBlue || waveRed) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (waveBlue) waveBlue.style.transform = `translateY(${scrollY * -0.15}px)`;
            if (waveRed) waveRed.style.transform = `translateY(${scrollY * -0.25}px)`;
        }, { passive: true });
    }

    // ----------------------------------------------------------------------
    // 3. SECTION 2: TOGGLE SHOW MORE BẢNG HỌC BỔNG
    // ----------------------------------------------------------------------
    const toggleTableBtn = document.getElementById('toggle-scholarship-table-btn');
    const tableWrapper = document.getElementById('scholarship-table-wrapper');

    if (toggleTableBtn && tableWrapper) {
        toggleTableBtn.addEventListener('click', () => {
            const isExpanded = toggleTableBtn.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                tableWrapper.style.display = 'none';
                toggleTableBtn.setAttribute('aria-expanded', 'false');
                toggleTableBtn.querySelector('span').textContent = 'Show more bảng học bổng';
                toggleTableBtn.classList.remove('is-open');
            } else {
                tableWrapper.style.display = 'block';
                toggleTableBtn.setAttribute('aria-expanded', 'true');
                toggleTableBtn.querySelector('span').textContent = 'Thu gọn bảng học bổng';
                toggleTableBtn.classList.add('is-open');
                tableWrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }

    // ----------------------------------------------------------------------
    // 4. SECTION 4: HÀNH TRÌNH 4 NĂM (MILESTONE STRIP)
    // ----------------------------------------------------------------------
    const nodesContainer = document.getElementById('journey-nodes-list');
    const progressBar = document.getElementById('journey-progress-bar');
    const panelContainer = document.getElementById('journey-panel');
    const panelArrow = document.getElementById('journey-panel-arrow');
    const panelWrapper = document.querySelector('.journey-panel-wrapper');

    let currentActiveYearIndex = 0;
    let hoverTimeout = null;

    function renderJourneySection() {
        if (!nodesContainer || !panelContainer) return;

        // Render 4 nodes
        nodesContainer.innerHTML = YEAR_DETAILS.map((item, index) => {
            const isActive = index === currentActiveYearIndex;
            return `
                <button type="button" 
                        class="journey-node-btn ${isActive ? 'active' : ''}" 
                        role="tab" 
                        aria-selected="${isActive ? 'true' : 'false'}" 
                        aria-controls="journey-panel"
                        id="journey-tab-${item.year}"
                        data-index="${index}">
                    <span class="journey-node-circle">${item.year}</span>
                    <span class="journey-node-label"><strong>Năm ${item.year}</strong></span>
                    <span class="journey-node-summary">${escapeHtml(item.summary)}</span>
                </button>
            `;
        }).join('');

        // Render initial panel content
        updateJourneyPanel(currentActiveYearIndex, false);

        // Bind events to node buttons
        const nodeButtons = nodesContainer.querySelectorAll('.journey-node-btn');
        nodeButtons.forEach((btn, idx) => {
            // Click / Touch event
            btn.addEventListener('click', () => {
                selectJourneyYear(idx);
            });

            // Hover intent (~80ms delay)
            btn.addEventListener('mouseenter', () => {
                clearTimeout(hoverTimeout);
                hoverTimeout = setTimeout(() => {
                    selectJourneyYear(idx);
                }, 80);
            });

            btn.addEventListener('mouseleave', () => {
                clearTimeout(hoverTimeout);
            });

            // Keyboard navigation (Left / Right Arrow)
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextIdx = (idx + 1) % YEAR_DETAILS.length;
                    selectJourneyYear(nextIdx);
                    const nextBtn = document.getElementById(`journey-tab-${YEAR_DETAILS[nextIdx].year}`);
                    if (nextBtn) nextBtn.focus();
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevIdx = (idx - 1 + YEAR_DETAILS.length) % YEAR_DETAILS.length;
                    selectJourneyYear(prevIdx);
                    const prevBtn = document.getElementById(`journey-tab-${YEAR_DETAILS[prevIdx].year}`);
                    if (prevBtn) prevBtn.focus();
                }
            });
        });

        // Reposition arrow on window resize
        window.addEventListener('resize', () => {
            updateArrowPosition();
        }, { passive: true });
    }

    function selectJourneyYear(index) {
        if (index === currentActiveYearIndex) return;
        currentActiveYearIndex = index;

        // Update active class on buttons
        const nodeButtons = nodesContainer ? nodesContainer.querySelectorAll('.journey-node-btn') : [];
        nodeButtons.forEach((btn, idx) => {
            const isActive = idx === currentActiveYearIndex;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        // Update progress fill
        updateProgressBar();

        // Update panel content with smooth animation
        updateJourneyPanel(currentActiveYearIndex, true);
    }

    function updateProgressBar() {
        if (!progressBar) return;
        const total = YEAR_DETAILS.length - 1;
        const percent = total > 0 ? (currentActiveYearIndex / total) * 100 : 0;
        progressBar.style.width = `${percent}%`;
    }

    function updateJourneyPanel(index, animate) {
        if (!panelContainer) return;

        const data = YEAR_DETAILS[index] || YEAR_DETAILS[0];
        const bodyContent = data.body ? `<p class="journey-panel-body">${escapeHtml(data.body)}</p>` : `<p class="journey-panel-body text-muted">Nội dung đang được cập nhật</p>`;
        
        const highlightsHtml = (data.highlights && data.highlights.length > 0) ? `
            <ul class="journey-panel-highlights">
                ${data.highlights.map(h => `<li><i class="fa-solid fa-circle-check" aria-hidden="true"></i> <span>${escapeHtml(h)}</span></li>`).join('')}
            </ul>
        ` : '';

        const imageSrc = data.image ? data.image : 'assets/hinh 2.jpg';

        const contentHtml = `
            <div class="journey-panel-inner ${animate ? 'journey-fade-in' : ''}">
                <div class="journey-panel-media">
                    <div class="journey-img-wrapper">
                        <img src="${imageSrc}" alt="Hành trình Năm ${data.year} tại UEF" loading="lazy">
                        <div class="journey-img-badges">
                            <span class="journey-img-badge"><i class="fa-solid fa-heart" aria-hidden="true"></i> Thỏa sức theo đuổi đam mê.</span>
                            <span class="journey-img-badge"><i class="fa-solid fa-bolt" aria-hidden="true"></i> Thử thách bản thân ở nhiều lĩnh vực mới.</span>
                        </div>
                    </div>
                </div>
                <div class="journey-panel-info">
                    <span class="journey-panel-tag">NĂM ${data.year}</span>
                    <h3 class="journey-panel-title">${escapeHtml(data.title)}</h3>
                    <div class="journey-panel-mobile-summary">${escapeHtml(data.summary)}</div>
                    ${bodyContent}
                    ${highlightsHtml}
                </div>
            </div>
        `;

        panelContainer.innerHTML = contentHtml;
        updateProgressBar();
        updateArrowPosition();
    }

    function updateArrowPosition() {
        if (!panelArrow || !panelWrapper || !nodesContainer) return;

        const activeNode = nodesContainer.querySelector(`.journey-node-btn[data-index="${currentActiveYearIndex}"]`);
        if (!activeNode) return;

        const nodeRect = activeNode.getBoundingClientRect();
        const wrapperRect = panelWrapper.getBoundingClientRect();

        const centerNodeX = nodeRect.left - wrapperRect.left + (nodeRect.width / 2);
        
        const minPadding = 24;
        const maxArrowX = wrapperRect.width - minPadding;
        const clampedX = Math.max(minPadding, Math.min(centerNodeX, maxArrowX));

        panelArrow.style.left = `${clampedX}px`;
    }

    renderJourneySection();

    // ----------------------------------------------------------------------
    // 5. SECTION 5: MÔI TRƯỜNG CHUẨN QUỐC TẾ (GRID 2x2)
    // ----------------------------------------------------------------------
    const envGrid = document.getElementById('environment-grid');
    if (envGrid) {
        envGrid.innerHTML = VIDEO_SECTION_5_DATA.map((item, index) => {
            const firstVideo = item.videos[0] || {};
            const thumbUrl = `https://i.ytimg.com/vi/${firstVideo.id}/hqdefault.jpg`;

            return `
                <div class="env-card" data-group="env" data-group-index="${index}" role="button" tabindex="0" aria-label="Xem video ${escapeHtml(item.title)}">
                    <div class="env-thumb-wrapper">
                        <img src="${thumbUrl}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.src='${item.defaultThumb}';">
                        <div class="video-play-indicator" aria-hidden="true">
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <span class="platform-tag yt-tag"><i class="fa-brands fa-youtube"></i> YouTube</span>
                    </div>
                    <div class="env-info">
                        <h3 class="env-title">${escapeHtml(item.title)}</h3>
                        <p class="env-desc">${escapeHtml(item.desc)}</p>
                    </div>
                </div>
            `;
        }).join('');

        // Card click bindings
        envGrid.querySelectorAll('.env-card').forEach(card => {
            const groupIdx = parseInt(card.getAttribute('data-group-index'), 10);
            const openModalAction = () => {
                const groupData = VIDEO_SECTION_5_DATA[groupIdx];
                if (groupData && groupData.videos) {
                    openVideoModal(groupData.videos, 0);
                }
            };

            card.addEventListener('click', openModalAction);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModalAction();
                }
            });
        });
    }

    // ----------------------------------------------------------------------
    // 6. SECTION 6: FEATURED VIDEO CLICK
    // ----------------------------------------------------------------------
    const featuredVideoBtn = document.getElementById('featured-testimonial-video');
    if (featuredVideoBtn) {
        const openFeaturedAction = () => {
            openVideoModal(FEATURED_SECTION_6_VIDEO, 0);
        };
        featuredVideoBtn.addEventListener('click', openFeaturedAction);
        featuredVideoBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openFeaturedAction();
            }
        });
    }

    // ----------------------------------------------------------------------
    // 7. VIDEO MODAL (IFRAME CONTROLLER)
    // ----------------------------------------------------------------------
    const videoModal = document.getElementById('video-modal');
    const modalIframe = document.getElementById('modal-iframe');
    const modalIframeFrame = document.getElementById('modal-iframe-frame');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalPrevBtn = document.getElementById('modal-prev-btn');
    const modalNextBtn = document.getElementById('modal-next-btn');
    const modalCounter = document.getElementById('modal-counter');
    const modalFallbackLink = document.getElementById('modal-fallback-link');

    let currentVideoPlaylist = [];
    let currentVideoIndex = 0;

    function openVideoModal(playlist, startIndex) {
        if (!videoModal || !playlist || playlist.length === 0) return;

        currentVideoPlaylist = playlist;
        currentVideoIndex = startIndex >= 0 && startIndex < playlist.length ? startIndex : 0;

        videoModal.style.display = 'flex';
        document.body.classList.add('modal-open');
        updateModalVideo();
        if (modalCloseBtn) modalCloseBtn.focus();
    }

    function closeVideoModal() {
        if (!videoModal) return;
        videoModal.style.display = 'none';
        document.body.classList.remove('modal-open');
        if (modalIframe) modalIframe.src = '';
        currentVideoPlaylist = [];
    }

    function updateModalVideo() {
        if (!currentVideoPlaylist || currentVideoPlaylist.length === 0) return;

        const video = currentVideoPlaylist[currentVideoIndex];
        if (!video) return;

        // Navigation visibility
        if (modalPrevBtn && modalNextBtn && modalCounter) {
            if (currentVideoPlaylist.length > 1) {
                modalPrevBtn.style.display = 'inline-flex';
                modalNextBtn.style.display = 'inline-flex';
                modalCounter.style.display = 'inline-block';
                modalCounter.textContent = `${currentVideoIndex + 1} / ${currentVideoPlaylist.length}`;
            } else {
                modalPrevBtn.style.display = 'none';
                modalNextBtn.style.display = 'none';
                modalCounter.style.display = 'none';
            }
        }

        // Generate embed URL and fallback link
        let embedUrl = '';
        let fallbackUrl = '';

        if (video.type === 'youtube') {
            const startParam = video.start ? `&start=${video.start}` : '';
            const originHost = (window.location.protocol === 'http:' || window.location.protocol === 'https:') 
                ? window.location.origin 
                : 'https://xettuyenhocbong.uef.edu.vn';
            
            embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(originHost)}${startParam}`;
            fallbackUrl = `https://www.youtube.com/watch?v=${video.id}${video.start ? `&t=${video.start}s` : ''}`;

            if (modalIframeFrame) {
                modalIframeFrame.classList.remove('aspect-tiktok');
                modalIframeFrame.classList.add('aspect-youtube');
            }
            if (modalFallbackLink) {
                modalFallbackLink.innerHTML = `<i class="fa-brands fa-youtube" aria-hidden="true"></i> Xem trực tiếp trên YouTube`;
                modalFallbackLink.href = fallbackUrl;
            }
        } else if (video.type === 'tiktok') {
            embedUrl = `https://www.tiktok.com/embed/v3/${video.id}`;
            fallbackUrl = `https://www.tiktok.com/@uef.official/video/${video.id}`;

            if (modalIframeFrame) {
                modalIframeFrame.classList.remove('aspect-youtube');
                modalIframeFrame.classList.add('aspect-tiktok');
            }
            if (modalFallbackLink) {
                modalFallbackLink.innerHTML = `<i class="fa-brands fa-tiktok" aria-hidden="true"></i> Xem trực tiếp trên TikTok`;
                modalFallbackLink.href = fallbackUrl;
            }
        }

        if (modalIframe) {
            modalIframe.src = embedUrl;
        }
    }

    // Modal navigation buttons
    if (modalPrevBtn) {
        modalPrevBtn.addEventListener('click', () => {
            if (currentVideoPlaylist.length > 1) {
                currentVideoIndex = (currentVideoIndex - 1 + currentVideoPlaylist.length) % currentVideoPlaylist.length;
                updateModalVideo();
            }
        });
    }

    if (modalNextBtn) {
        modalNextBtn.addEventListener('click', () => {
            if (currentVideoPlaylist.length > 1) {
                currentVideoIndex = (currentVideoIndex + 1) % currentVideoPlaylist.length;
                updateModalVideo();
            }
        });
    }

    // Close button & Background click
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeVideoModal);
    }

    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }

    // Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.style.display !== 'none') {
            closeVideoModal();
        }
    });

    // ----------------------------------------------------------------------
    // 8. SMOOTH SCROLL FOR IN-PAGE ANCHORS
    // ----------------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElem = document.querySelector(targetId);
            if (targetElem) {
                e.preventDefault();
                targetElem.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
