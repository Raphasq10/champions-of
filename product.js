document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. DICIONÁRIO DE DADOS DOS PRODUTOS
    // ==========================================
    const productsData = {
        fire: {
            name: "Champions Fire",
            logo: "img/logo_champions_fire.webp",
            icon: "img/icone_champions_fire.webp",
            slogan: "Alta definição e estabilidade para o seu entretenimento",
            year: "2025",
            os: "Android 14",
            resolution: "4K ULTRA HD",
            desc: "Desenvolvido para oferecer máxima estabilidade de sinal. Com processamento eficiente e conectividade avançada, é o aparelho ideal para acompanhar seus canais favoritos e curtir sessões de cinema em família com toda a tranquilidade.",
            // 5 imagens para a colagem
            collage: {
                main: "img/fire/fire_isometrico.webp",
                inputs: "img/assistindo-tv-1.jpg",
                inputsPos: "center",
                expositor: "img/fire/fire_expositor.webp",
                remote: "img/fire/fire_controle.webp",
                rear: "img/fire/fire_traseira.webp"
            },
            // Imagens do carrossel deslizante
            carousel: [
                "img/fire/fire_expositor.webp",
                "img/fire/fire_caixa.webp",
                "img/fire/fire_controle.webp",
                "img/fire/fire_entradas.webp"
            ],
            // 4 cards de destaques
            highlights: [
                {
                    title: "WI-FI DE ÚLTIMA GERAÇÃO",
                    text: "Com Wi-Fi otimizado e ainda mais estável, com conexão 5g/6g, o Champions Fire mantém conexões rápidas e seguras, garantindo streaming sem interrupções.",
                    icon: "fas fa-wifi"
                },
                {
                    title: "SUA VOZ NO CONTROLE",
                    text: "Com o novo controle remoto com comando de voz, ficou mais fácil usar o Google Assistente ou Alexa diretamente no seu aparelho champions.",
                    icon: "fas fa-microphone"
                },
                {
                    title: "PERFORMANCE DE ALTO NÍVEL",
                    text: "Equipado com o processador Allwinner H618 e 2GB de RAM, o Champions Fire garante velocidade e estabilidade para você assistir sem travamentos e com máxima fluidez.",
                    icon: "fas fa-microchip"
                },
                {
                    title: "ENTRETENIMENTO SEM LIMITES",
                    text: "Navegue com fluidez entre aplicativos, assista a filmes, séries e canais com desempenho superior e aproveite cada detalhe em 4K.",
                    icon: "fas fa-tv"
                }
            ],
            // Ficha técnica
            specs: {
                "Processador": "Allwinner H618 (Cortex A53 – 4 x 1.5 GHz)",
                "GPU": "ARM G31 MP2 (650 MHz)",
                "Vídeo / Codecs": "H.265 6K @ 30fps, H.265 4K @ 60fps, H.264 4K @ 30fps, H.264 1080p @ 60fps",
                "Memória RAM": "2GB",
                "Armazenamento": "16GB",
                "Sistema Operacional": "Android 14",
                "Portas de Conexão": "TF Card, USB 2.0, HDMI 2.1",
                "Conectividade": "Bluetooth 5.0, Wi-Fi 6 (Dual Band 2.4/5GHz)",
                "Áudio": "2x DAC @ 95dB, SNR 3kHz–192kHz, Line Out, I2S, PCM, TDM"
            }
        },
        ultimate: {
            name: "Champions Ultimate",
            logo: "img/logo_champions_ultimate.webp",
            icon: "img/icone_champions_ultimate.webp",
            slogan: "Desfrute de desempenho excepcional e recursos avançados em sua TV",
            year: "2023",
            os: "Linux System",
            resolution: "FULL HD 1080P",
            desc: "O Champions Ultimate GX PRO combina a simplicidade do sistema Linux com recursos avançados de hardware and sintonizador duplo. Projetado para quem prioriza estabilidade de recepção e qualidade de imagem clássica em Full HD 1080p.",
            collage: {
                main: "img/ultimate/ultimate_isometrico.webp",
                inputs: "img/assistindo-tv-2.jpg",
                inputsPos: "center 25%",
                expositor: "img/ultimate/ultimate_expositor.webp",
                remote: "img/ultimate/ultimate_remote.webp",
                rear: "img/ultimate/ultimate_traseira.webp"
            },
            carousel: [
                "img/ultimate/ultimate_caixa.webp",
                "img/ultimate/ultimate_botoes.webp",
                "img/ultimate/ultimate_entradas.webp",
                "img/ultimate/ultimate_remote.webp",
                "img/ultimate/ultimate_expositor.webp"
            ],
            highlights: [
                {
                    title: "VERSATILIDADE DE CONEXÕES",
                    text: "Conecte o Receptor Champions Ultimate GXPRO à sua rede doméstica via Wi-Fi 2.4GHz ou porta Ethernet. Além disso, aproveite as várias opções de conexão, como USB, HDMI, porta Ethernet, A.V e RS232, para expandir suas possibilidades de entretenimento.",
                    icon: "fas fa-sliders"
                },
                {
                    title: "NAVEGAÇÃO INTUITIVA E CONFORTÁVEL",
                    text: "Com sua interface amigável e controle remoto ergonômico, o Receptor Champions Ultimate GXPRO oferece uma navegação suave e rápida. O display Alpha Numérico retroiluminado por LED permite visualizar facilmente as informações importantes.",
                    icon: "fas fa-hand-pointer"
                },
                {
                    title: "IMAGENS NÍTIDAS E VIBRANTES",
                    text: "Desfrute de imagens de alta qualidade em Full HD 1080p com o Receptor Champions Ultimate GXPRO. Com seu poderoso processador e codec avançado, você terá uma experiência visual excepcional.",
                    icon: "fas fa-image"
                },
                {
                    title: "SINTONIZE UMA AMPLA VARIEDADE DE CANAIS",
                    text: "Com o sistema duplo de tuners, o Receptor Champions Ultimate GXPRO oferece uma variedade de opções de sintonização. Acesse uma ampla gama de canais para atender a todos os seus interesses de entretenimento.",
                    icon: "fas fa-tv"
                }
            ],
            specs: {
                "Processador": "GX6628",
                "Chipset": "GXPRO",
                "Gráfico": "Mali GPU Z",
                "Resolução": "Full HD 1080p",
                "Codec": "H.264",
                "Tuner": "Dual",
                "Busca de Canais": "Automática, cega",
                "Rede": "Wi-Fi 2.4 GHz - LAN RJ45",
                "Áudio": "Acc",
                "Interface": "USB - HDMI - Porta Ethernet - A.V - RS232",
                "Display": "Alpha Numérico Retroiluminado por LED",
                "Sistema": "Baseado em Linux",
                "Voltagem": "Bivolt 110/220 ~ 50/60 Hz",
                "Dimensões": "150 * 110 * 33 mm",
                "Acessórios": "Fonte de alimentação, cabo HDMI, controle remoto",
                "Recursos": "Funções EPG (Guia de Programação Eletrônica), Controle Parental, TimeShift, Timer, Teletexto",
                "Conectividade": "Permite compartilhar conteúdo através do recurso AirPlay e DLNA",
                "Codecs Suportados": "SD MPEG2, HD MPEG4, H.264/265, AVC SD/HD, SCPC, MPC"
            }
        },
        infinity: {
            name: "Champions Infinity",
            logo: "img/logo_champions_infinity.webp",
            icon: "img/icone_champions_infinity.webp",
            slogan: "A escolha perfeita para sua diversão",
            year: "2023",
            os: "Linux System",
            resolution: "FULL HD 1080P",
            desc: "A união perfeita de design elegante e o confiável chipset GXPRO. O Champions Infinity GX PRO oferece desempenho fluido com baixo consumo de energia, ideal para quem busca entretenimento estável e navegação ágil no dia a dia.",
            collage: {
                main: "img/infinity/infinity_isometrico.webp",
                inputs: "img/assistindo-tv-3.jpg",
                inputsPos: "center",
                expositor: "img/infinity/infinity_expositor.webp",
                remote: "img/infinity/infinity_controle.webp",
                rear: "img/infinity/infinity_traseira.webp"
            },
            carousel: [
                "img/infinity/infinity_caixa.webp",
                "img/infinity/infinity_botoes.webp",
                "img/infinity/infinity_entradas.webp",
                "img/infinity/infinity_controle.webp",
                "img/infinity/infinity_expositor.webp"
            ],
            highlights: [
                {
                    title: "INSTALAÇÃO E CONFIGURAÇÃO SIMPLES",
                    text: "Com um design compacto e um display numérico retroiluminado por LED, a instalação e a configuração do Receptor Champions INFINITY GXPRO são rápidas e fáceis. Comece a desfrutar do seu entretenimento favorito em pouco tempo.",
                    icon: "fas fa-sliders"
                },
                {
                    title: "RECURSOS AVANÇADOS E INTERFACE AMIGÁVEL",
                    text: "Explore um mundo de recursos e aplicativos com o sistema baseado em Linux do Receptor Champions INFINITY GXPRO. Sua interface amigável torna a navegação intuitiva e oferece uma experiência agradável ao usuário.",
                    icon: "fas fa-hand-pointer"
                },
                {
                    title: "EXPERIÊNCIA DE ENTRETENIMENTO",
                    text: "Desfrute do melhor entretenimento com o Receptor Champions INFINITY GXPRO. Com sua qualidade de som e imagem impecáveis, você terá uma experiência imersiva em todos os seus programas favoritos.",
                    icon: "fas fa-tv"
                },
                {
                    title: "VERSATILIDADE DE CONEXÕES",
                    text: "Conecte-se facilmente a outros dispositivos e expanda suas opções de entretenimento. Com suporte a USB, HDMI, Porta Ethernet, A.V e RS232, o Receptor Champions INFINITY GXPRO oferece várias opções de conectividade.",
                    icon: "fas fa-share-nodes"
                }
            ],
            specs: {
                "Processador": "GX6628",
                "Chipset": "GXPRO",
                "Gráfico": "Mali GPU Z",
                "Resolução": "Full HD 1080p",
                "Codec": "H.264",
                "Tuner": "Dual",
                "Busca de Canais": "Automática, cega",
                "Rede": "Wi-Fi 2.4 GHz - LAN RJ45",
                "Áudio": "Acc",
                "Interface": "USB - HDMI - Porta Ethernet - A.V - RS232",
                "Display": "Numérico Retroiluminado por LED",
                "Sistema": "Baseado em Linux",
                "Voltagem": "Bivolt 110/220 ~ 50/60 Hz",
                "Dimensões": "134 * 103 * 29 mm",
                "Acessórios": "Fonte de alimentação, cabo HDMI, controle remoto",
                "Informações Adicionais": "Com funções EPG (Guia de Programação Eletrônica), Control Parental, TimeShift, Timer, Teletexto. Permite compartilhar conteúdo através do recurso AirPlay e DLNA. Codecs suportados: SD MPEG2, HD MPEG4, H.264/265, AVC SD/HD, SCPC, MPC."
            }
        },
        play: {
            name: "Champions Play",
            logo: "img/logo_champions_play.webp",
            icon: "img/icone_champions_play.webp",
            slogan: "Descubra uma nova dimensão de diversão com o Champions Play GX PRO",
            year: "2023",
            os: "Linux System",
            resolution: "FULL HD 1080P",
            desc: "O modelo mais compacto e inteligente da linha GX PRO. Ideal para quem quer todas as funções premium da marca em um formato micro, sem abrir mão de alta velocidade, sintonizador digital estável e excelente custo-benefício.",
            collage: {
                main: "img/play/play_isometrico.webp",
                inputs: "img/assistindo-tv-4.jpg",
                inputsPos: "center 20%",
                expositor: "img/play/play_expositor.webp",
                remote: "img/play/play_remote.webp",
                rear: "img/play/play_traseira.webp"
            },
            carousel: [
                "img/play/play_caixa.webp",
                "img/play/play_botoes.webp",
                "img/play/play_entradas.webp",
                "img/play/play_remote.webp",
                "img/play/play_expositor.webp"
            ],
            highlights: [
                {
                    title: "DESIGN COMPACTO",
                    text: "O Champions Play GXPRO apresenta um design elegante e compacto, perfeitamente adequado para qualquer ambiente. Sua forma compacta, com dimensões de 120 * 103 * 26.5mm, permite uma instalação discreta e fácil integração com a sua configuração de entretenimento.",
                    icon: "fas fa-pen-nib"
                },
                {
                    title: "QUALIDADE DE SOM E IMAGEM",
                    text: "Desfrute de uma experiência imersiva com som e imagem de alta qualidade. Com suporte a resolução Full HD 1080p e codec H.264, o Champions Play GXPRO oferece uma reprodução de vídeo nítida e detalhada, permitindo que você aproveite seus programas favoritos com clareza e realismo.",
                    icon: "fas fa-tv"
                },
                {
                    title: "EXPERIÊNCIA DE ENTRETENIMENTO",
                    text: "Desfrute do melhor entretenimento com o Receptor Champions PLAY GXPRO. Com sua qualidade de som e imagem impecáveis, você terá uma experiência imersiva em todos os seus programas favoritos.",
                    icon: "fas fa-circle-play"
                },
                {
                    title: "VERSATILIDADE DE CONEXÕES",
                    text: "Conecte-se facilmente a outros dispositivos e expanda suas opções de entretenimento. Com suporte a USB, HDMI, Porta Ethernet, A.V e RS232, o Receptor Champions PLAY GXPRO oferece várias opções de conectividade.",
                    icon: "fas fa-share-nodes"
                }
            ],
            specs: {
                "Processador": "GX6628",
                "Chipset": "GXPRO",
                "Gráfico": "Mali GPU Z",
                "Resolução": "Full HD 1080p",
                "Codec": "H.264",
                "Tuner": "Dual",
                "Busca de Canais": "Automática, cega",
                "Rede": "Wi-Fi 2.4 GHz - LAN RJ45",
                "Áudio": "Acc",
                "Interface": "USB - HDMI - Porta Ethernet - A.V - RS232",
                "Display": "Numérico Retroiluminado por LED",
                "Sistema": "Baseado em Linux",
                "Voltagem": "Bivolt 110/220 ~ 50/60 Hz",
                "Dimensões": "120 * 103 * 26.5 mm",
                "Acessórios": "Fonte de alimentação, cabo HDMI, controle remoto",
                "Informações Adicionais": "Com funções EPG (Guia de Programação Eletrônica), Control Parental, TimeShift, Timer, Teletexto. Permite compartilhar conteúdo através do recurso AirPlay e DLNA. Codecs suportados: SD MPEG2, HD MPEG4, H.264/265, AVC SD/HD, SCPC, MPC."
            }
        }
    };

    // ==========================================
    // 2. PARSE DOS PARÂMETROS DA URL
    // ==========================================
    const urlParams = new URLSearchParams(window.location.search);
    let activeProductKey = urlParams.get('p') || 'fire';
    
    // Normalização caso o usuário insira com maiúsculas
    activeProductKey = activeProductKey.toLowerCase();
    
    // Validação de fallback
    if (!productsData[activeProductKey]) {
        activeProductKey = 'fire';
    }

    const data = productsData[activeProductKey];

    // ==========================================
    // 3. INJEÇÃO DINÂMICA DE CONTEÚDO
    // ==========================================
    
    // Título da página
    document.title = `${data.name} - Showroom Virtual Premium`;

    // Atualiza o Menu Ativo
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.includes(`p=${activeProductKey}`)) {
            link.classList.add('active');
        }
    });

    // Logo / Ícone / Slogans do Hero Collage
    const collageGrid = document.querySelector('.collage-grid');
    if (collageGrid) {
        collageGrid.className = 'collage-grid';
        collageGrid.classList.add(`product-${activeProductKey}`);
    }

    // Coluna da Esquerda: Marca e Textos
    const brandIcon = document.getElementById('hero-brand-icon');
    if (brandIcon) brandIcon.src = data.icon;

    const brandLogo = document.getElementById('hero-brand-logo');
    if (brandLogo) brandLogo.src = data.logo;

    const titleText = document.getElementById('hero-title-text');
    if (titleText) titleText.innerText = data.slogan;

    const descText = document.getElementById('hero-desc-text-id');
    if (descText) descText.innerText = data.desc;

    // Coluna da Direita: Mosaico Premium
    const metricVal = document.getElementById('mosaic-metric-value');
    if (metricVal && data.resolution) {
        metricVal.innerText = data.resolution;
    }

    const metricLabel = document.getElementById('mosaic-metric-label');
    if (metricLabel) {
        if (activeProductKey === 'fire') {
            metricLabel.innerText = 'Resolução de cinema e fidelidade de cores campeã';
        } else {
            metricLabel.innerText = 'Imagem limpa e detalhada em Full HD';
        }
    }

    const imgInputs = document.getElementById('mosaic-img-inputs');
    if (imgInputs) imgInputs.src = data.collage.rear; // Vista Traseira / Portas (fire_traseira)

    const imgPortrait = document.getElementById('mosaic-img-portrait');
    if (imgPortrait) imgPortrait.src = data.collage.main; // Vista Isometrica (fire_isometrico)

    const imgBanner = document.getElementById('mosaic-img-banner');
    if (imgBanner) {
        imgBanner.src = data.collage.inputs; // Banner Horizontal de Tema
        imgBanner.style.objectPosition = data.collage.inputsPos || 'center';
    }

    const bannerTitle = document.getElementById('mosaic-banner-title');
    if (bannerTitle) {
        if (activeProductKey === 'fire') {
            bannerTitle.innerText = 'Cinema e Campeonatos';
        } else if (activeProductKey === 'ultimate') {
            bannerTitle.innerText = 'Séries e Filmes';
        } else if (activeProductKey === 'infinity') {
            bannerTitle.innerText = 'Esportes e Futebol Ao Vivo';
        } else if (activeProductKey === 'play') {
            bannerTitle.innerText = 'Diversão Sem Limites';
        }
    }

    // Slider / Carousel Wrapper
    const carouselContainer = document.getElementById('carousel-static-dynamic');
    if (carouselContainer) {
        carouselContainer.innerHTML = '';
        
        const images = data.carousel;
        let activeIndex = 1; // Começa com o índice 1 ativo no meio
        let isTransitioning = false;

        // Renderiza os 3 cards estáticos iniciais
        function renderInitialCards() {
            carouselContainer.innerHTML = '';
            
            const leftIdx = (activeIndex - 1 + images.length) % images.length;
            const centerIdx = activeIndex;
            const rightIdx = (activeIndex + 1) % images.length;

            // Card Esquerdo
            const leftCard = document.createElement('div');
            leftCard.className = 'product-card-static';
            leftCard.innerHTML = `<img src="${images[leftIdx]}" alt="${data.name} Detalhe">`;
            carouselContainer.appendChild(leftCard);

            // Card Central (Ativo)
            const centerCard = document.createElement('div');
            centerCard.className = 'product-card-static active';
            centerCard.innerHTML = `<img src="${images[centerIdx]}" alt="${data.name} Detalhe">`;
            carouselContainer.appendChild(centerCard);

            // Card Direito
            const rightCard = document.createElement('div');
            rightCard.className = 'product-card-static';
            rightCard.innerHTML = `<img src="${images[rightIdx]}" alt="${data.name} Detalhe">`;
            carouselContainer.appendChild(rightCard);
        }
        renderInitialCards();

        // Rotação bidirecional do carrossel
        function rotate(direction) {
            if (isTransitioning) return;
            isTransitioning = true;

            if (direction === 'next') {
                // Roda para a esquerda (próxima imagem entra pela direita)
                const nextRightIdx = (activeIndex + 2) % images.length;
                
                const enteringCard = document.createElement('div');
                enteringCard.className = 'product-card-static entering-right';
                enteringCard.innerHTML = `<img src="${images[nextRightIdx]}" alt="${data.name} Detalhe">`;
                carouselContainer.appendChild(enteringCard);

                const cards = carouselContainer.querySelectorAll('.product-card-static:not(.exiting-left):not(.exiting)');
                const leftCard = cards[0];
                const centerCard = cards[1];
                const rightCard = cards[2];

                leftCard.classList.add('exiting-left');
                centerCard.classList.remove('active');
                rightCard.classList.add('active');

                // Força reflow
                enteringCard.offsetHeight;

                enteringCard.classList.remove('entering-right');
                leftCard.classList.add('animate-exit-left');

                activeIndex = (activeIndex + 1) % images.length;

                setTimeout(() => {
                    leftCard.remove();
                }, 650);
            } else {
                // Roda para a direita (imagem anterior entra pela esquerda, igual ao index)
                const cards = carouselContainer.querySelectorAll('.product-card-static:not(.exiting-left):not(.exiting)');
                const leftCard = cards[0];
                const centerCard = cards[1];
                const rightCard = cards[2];

                const nextLeftIdx = (activeIndex - 2 + images.length) % images.length;

                const enteringCard = document.createElement('div');
                enteringCard.className = 'product-card-static entering';
                enteringCard.innerHTML = `<img src="${images[nextLeftIdx]}" alt="${data.name} Detalhe">`;
                carouselContainer.insertBefore(enteringCard, carouselContainer.firstChild);

                rightCard.classList.add('exiting');
                centerCard.classList.remove('active');
                leftCard.classList.add('active');

                // Força reflow
                enteringCard.offsetHeight;

                enteringCard.classList.remove('entering');
                rightCard.classList.add('animate-exit');

                activeIndex = (activeIndex - 1 + images.length) % images.length;

                setTimeout(() => {
                    rightCard.remove();
                }, 650);
            }

            setTimeout(() => {
                isTransitioning = false;
            }, 650);
        }

        // Configuração dos botões de navegação física (setas)
        const prevBtn = document.querySelector('.carousel-btn.prev-btn');
        const nextBtn = document.querySelector('.carousel-btn.next-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                rotate('prev');
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                rotate('next');
            });
        }

        // Rotação automática (Autoplay de 4s, igual ao index)
        let autoplayInterval = null;
        function startAutoplay() {
            if (!autoplayInterval) {
                autoplayInterval = setInterval(() => {
                    rotate('next');
                }, 4000);
            }
        }
        function stopAutoplay() {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            }
        }

        startAutoplay();

        const containerEl = document.querySelector('.product-carousel-container');
        if (containerEl) {
            containerEl.addEventListener('mouseenter', stopAutoplay);
            containerEl.addEventListener('mouseleave', startAutoplay);
        }

        // Arraste lateral (Drag-to-Swipe com Pointer Events)
        let startX = 0;
        let isDragging = false;
        let dragDistance = 0;
        const swipeThreshold = 50;

        const wrapper = document.querySelector('.product-carousel-wrapper');
        if (wrapper) {
            // Previne o comportamento padrão do navegador de arrastar a imagem como "fantasma"
            wrapper.addEventListener('dragstart', (e) => {
                e.preventDefault();
            });

            wrapper.addEventListener('pointerdown', (e) => {
                if (e.pointerType === 'mouse' && e.button !== 0) return;
                stopAutoplay();
                startX = e.clientX;
                isDragging = true;
                dragDistance = 0;
                wrapper.style.cursor = 'grabbing';
                try {
                    wrapper.setPointerCapture(e.pointerId);
                } catch (err) {}
            });

            wrapper.addEventListener('pointerup', (e) => {
                if (!isDragging) return;
                isDragging = false;
                wrapper.style.cursor = 'grab';
                try {
                    wrapper.releasePointerCapture(e.pointerId);
                } catch (err) {}

                dragDistance = Math.abs(e.clientX - startX);
                const diffX = e.clientX - startX;
                if (dragDistance > swipeThreshold) {
                    if (diffX > 0) {
                        rotate('prev');
                    } else {
                        rotate('next');
                    }
                }
                startAutoplay();
            });

            wrapper.addEventListener('pointercancel', (e) => {
                if (!isDragging) return;
                isDragging = false;
                wrapper.style.cursor = 'grab';
                try {
                    wrapper.releasePointerCapture(e.pointerId);
                } catch (err) {}
                startAutoplay();
            });
        }

        if (wrapper) {
            // Cliques no carrossel (Ativar Lightbox ou Mudar Foco do Slide)
            wrapper.addEventListener('click', (e) => {
                // Ignora cliques se o usuário arrastou significativamente
                if (dragDistance > 15) return;

                // Encontra o card fisicamente sob a coordenada do clique
                const element = document.elementFromPoint(e.clientX, e.clientY);
                const clickedCard = element ? element.closest('.product-card-static') : null;
                if (!clickedCard) return;

                if (clickedCard.classList.contains('active')) {
                    // Abre o Lightbox da imagem ativa
                    const img = clickedCard.querySelector('img');
                    if (img) {
                        const src = img.getAttribute('src');
                        const index = imagesList.indexOf(src);
                        if (index !== -1) {
                            openLightbox(index);
                        }
                    }
                } else {
                    // Clique em card lateral -> Rotaciona para trazê-lo ao centro
                    const cards = Array.from(carouselContainer.querySelectorAll('.product-card-static:not(.exiting-left):not(.exiting)'));
                    const clickedIndex = cards.indexOf(clickedCard);
                    if (clickedIndex === 0) {
                        rotate('prev');
                    } else if (clickedIndex === 2) {
                        rotate('next');
                    }
                }
            });
        }
    }

    // Cards de Destaque (Highlights)
    const highlightsGrid = document.getElementById('highlights-grid-dynamic');
    highlightsGrid.innerHTML = '';
    data.highlights.forEach(hl => {
        const card = document.createElement('div');
        card.className = 'highlight-card';
        card.innerHTML = `
            <div class="icon-box">
                <i class="${hl.icon}"></i>
            </div>
            <h4>${hl.title}</h4>
            <p>${hl.text}</p>
        `;
        highlightsGrid.appendChild(card);
    });

    // Tabela de Especificações Técnicas
    const specsTable = document.getElementById('specs-table-dynamic');
    specsTable.innerHTML = '';
    for (const [key, val] of Object.entries(data.specs)) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="spec-name">${key}</td>
            <td class="spec-value">${val}</td>
        `;
        specsTable.appendChild(row);
    }






    // ==========================================
    // 5. ANIMAÇÕES GSAP (PREMIUM REVEAL & PARALLAX)
    // ==========================================
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Animação de entrada dos blocos da colagem (Staggered Entrance)
        gsap.from('.collage-text-dark, .collage-item, .collage-text-year, .collage-signature', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
            ease: 'power3.out'
        });


        // Efeito Parallax sutil ao rolar a página em telas maiores que 900px
        if (window.innerWidth > 900) {
            gsap.to('.collage-img-main img', {
                '--parallax-y': '40px',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.collage-grid',
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true
                }
            });

            gsap.to('.collage-img-rear img', {
                '--parallax-y': '-45px',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.collage-grid',
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true
                }
            });

            gsap.to('.collage-img-inputs img', {
                '--parallax-y': '-20px',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.collage-grid',
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true
                }
            });

            gsap.to('.collage-img-remote img', {
                '--parallax-y': '20px',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.collage-grid',
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }

        // Animação de Reveal on Scroll nos Cards de Destaque
        gsap.from('.highlight-card', {
            scrollTrigger: {
                trigger: '.product-highlights',
                start: 'top 75%'
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        });

        // Animação de entrada da tabela de especificações
        gsap.from('.specs-table tr', {
            scrollTrigger: {
                trigger: '.product-specs',
                start: 'top 80%'
            },
            opacity: 0,
            x: -20,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out'
        });
    }

    // Magnetic effect nas Cards de Destaque
    const highlightCards = document.querySelectorAll('.highlight-card');
    highlightCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(card, { x: x * 0.06, y: y * 0.06, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { x: 0, y: 0, duration: 0.8, ease: 'power3.out' });
        });
    });

    // ==========================================
    // 6. LIGHTBOX GALERIA PREMIUM COM ZOOM E NAVEGAÇÃO
    // ==========================================
    const lightboxHTML = `
        <div id="product-lightbox" class="lightbox-overlay">
            <span class="lightbox-close">&times;</span>
            <div class="lightbox-prev">&#10094;</div>
            <div class="lightbox-next">&#10095;</div>
            <div class="lightbox-content-wrapper">
                <img class="lightbox-img" src="" alt="Zoomed view">
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    const lightbox = document.getElementById('product-lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    const lightboxWrapper = lightbox.querySelector('.lightbox-content-wrapper');

    let currentImgIndex = 0;
    const imagesList = data.carousel; // Imagens do carrossel deslizante

    function openLightbox(index) {
        currentImgIndex = index;
        lightboxImg.src = imagesList[currentImgIndex];
        lightboxImg.style.width = '';
        lightboxImg.classList.remove('zoomed');
        lightboxWrapper.classList.remove('has-zoomed');
        lightboxWrapper.scrollLeft = 0;
        lightboxWrapper.scrollTop = 0;
        lightbox.style.display = 'flex';
        setTimeout(() => {
            lightbox.classList.add('active');
        }, 10);
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
            lightboxImg.style.width = '';
            lightboxImg.classList.remove('zoomed');
            lightboxWrapper.classList.remove('has-zoomed');
        }, 300);
    }

    function navigateLightbox(dir) {
        currentImgIndex = (currentImgIndex + dir + imagesList.length) % imagesList.length;
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.src = imagesList[currentImgIndex];
            lightboxImg.style.width = '';
            lightboxImg.classList.remove('zoomed');
            lightboxWrapper.classList.remove('has-zoomed');
            lightboxWrapper.scrollLeft = 0;
            lightboxWrapper.scrollTop = 0;
            lightboxImg.style.opacity = '1';
        }, 150);
    }



    // Fechar e Navegar
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
    });
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
    });

    // Fechar ao clicar fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxWrapper) {
            closeLightbox();
        }
    });

    // Alternar Zoom ao clicar na imagem (Centraliza no ponto do clique e limita zoom a 1.5x)
    lightboxImg.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (lightboxDragDistance > 10) {
            lightboxDragDistance = 0;
            return;
        }

        const isZoomed = lightboxImg.classList.contains('zoomed');
        const containerRect = lightboxWrapper.getBoundingClientRect();
        
        if (!isZoomed) {
            const rect = lightboxImg.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width;
            const relY = (e.clientY - rect.top) / rect.height;
            
            const targetWidth = rect.width * 1.5;
            lightboxImg.style.width = `${targetWidth}px`;
            lightboxImg.classList.add('zoomed');
            lightboxWrapper.classList.add('has-zoomed');
            
            const finalWidth = rect.width * 1.5;
            const finalHeight = rect.height * 1.5;
            const targetScrollLeft = (relX * finalWidth) - (e.clientX - containerRect.left);
            const targetScrollTop = (relY * finalHeight) - (e.clientY - containerRect.top);
            
            lightboxWrapper.scrollLeft = targetScrollLeft;
            lightboxWrapper.scrollTop = targetScrollTop;
        } else {
            lightboxImg.style.width = '';
            lightboxImg.classList.remove('zoomed');
            lightboxWrapper.classList.remove('has-zoomed');
            lightboxWrapper.scrollLeft = 0;
            lightboxWrapper.scrollTop = 0;
        }
    });

    // Arrastar para scrollar a imagem quando estiver em Zoom (Grab to Pan)
    let isDown = false;
    let startX, startY, scrollLeft, scrollTop;
    let lightboxDragDistance = 0;

    lightboxWrapper.addEventListener('mousedown', (e) => {
        if (!lightboxImg.classList.contains('zoomed')) return;
        isDown = true;
        lightboxWrapper.classList.add('grabbing');
        startX = e.pageX - lightboxWrapper.offsetLeft;
        startY = e.pageY - lightboxWrapper.offsetTop;
        scrollLeft = lightboxWrapper.scrollLeft;
        scrollTop = lightboxWrapper.scrollTop;
        lightboxDragDistance = 0;
    });

    lightboxWrapper.addEventListener('mouseleave', () => {
        isDown = false;
        lightboxWrapper.classList.remove('grabbing');
    });

    lightboxWrapper.addEventListener('mouseup', () => {
        isDown = false;
        lightboxWrapper.classList.remove('grabbing');
    });

    lightboxWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - lightboxWrapper.offsetLeft;
        const y = e.pageY - lightboxWrapper.offsetTop;
        const walkX = (x - startX) * 1.5;
        const walkY = (y - startY) * 1.5;
        lightboxWrapper.scrollLeft = scrollLeft - walkX;
        lightboxWrapper.scrollTop = scrollTop - walkY;
        lightboxDragDistance += Math.abs(walkX) + Math.abs(walkY);
    });

    // Fechar com ESC e navegar com setas do teclado
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            navigateLightbox(1);
        }
    });

    // Recalcula as posições do ScrollTrigger após todas as inicializações de animações
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
    }
});

