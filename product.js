document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. DICIONÁRIO DE DADOS DOS PRODUTOS
    // ==========================================
    const productsData = {
        fire: {
            name: "Champions Fire",
            logo: "img/logo-champions-fire-fundo-claro.png",
            icon: "img/icone-champions-fire.png",
            slogan: "Do Cinema aos Campeonatos: Definição Absoluta e Emoção Intensa",
            year: "2025",
            os: "Android 14.0",
            desc: "O Champions Fire foi projetado para elevar sua experiência de entretenimento a um patamar profissional. Equipado com conexões ultrarrápidas de última geração e processamento de ponta, é o dispositivo ideal para quem busca performance extrema, seja assistindo a campeonatos ao vivo ou desfrutando de sessões de cinema em casa.",
            // 5 imagens para a colagem
            collage: {
                main: "img/fire/fire-isometrico-direita.png",
                inputs: "img/Banner-miniatura-tema-filmes.jpg",
                expositor: "img/fire/champion-fire-espositor.png",
                remote: "img/fire/fire-controle.png",
                rear: "img/fire/fire-traseira-reto.png"
            },
            // Imagens do carrossel deslizante
            carousel: [
                "img/fire/fire-isometrico-direita.png",
                "img/fire/champion-fire-espositor.png",
                "img/fire/fire-caixa.png",
                "img/fire/fire-controle.png",
                "img/fire/fire-descricao-entradas.png",
                "img/fire/fire-traseira-reto.png"
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
                "Sistema Operacional": "Android 14.0",
                "Portas de Conexão": "TF Card, USB 2.0, HDMI 2.1",
                "Conectividade": "Bluetooth 5.0, Wi-Fi 6 (Dual Band 2.4/5GHz)",
                "Áudio": "2x DAC @ 95dB, SNR 3kHz–192kHz, Line Out, I2S, PCM, TDM"
            }
        },
        ultimate: {
            name: "Champions Ultimate",
            logo: "img/logo-champions-ultomate-fundo-claro.png",
            icon: "img/icone-champions-ultimate.png",
            slogan: "desfrute de desempenho excepcional e recursos avançados em sua TV",
            year: "2023",
            os: "Linux System",
            desc: "O Champions Ultimate GX PRO combina a simplicidade do sistema Linux com recursos avançados de hardware e sintonizador duplo. Projetado para quem prioriza estabilidade de recepção e qualidade de imagem clássica em Full HD 1080p.",
            collage: {
                main: "img/ultimate/ultimate-isometrico-direita.png",
                inputs: "img/Banner-miniatura-tema-series.jpg",
                expositor: "img/ultimate/champion-ultomate-expositor.png",
                remote: "img/ultimate/Champions-ultimate- Carrossel-extra.png",
                rear: "img/ultimate/ultimate-isometrico-direita.png" // Fallback
            },
            carousel: [
                "img/ultimate/Champions-ultimate- Carrossel-extra.png",
                "img/ultimate/ultimate-isometrico-direita.png",
                "img/ultimate/champion-ultomate-expositor.png",
                "img/Banner-miniatura-tema-series.jpg"
            ],
            highlights: [
                {
                    title: "SINTONIZADOR DUAL",
                    text: "Com suporte a Tuner Duplo e busca de canais automática/cega, desfrute de estabilidade máxima sem depender exclusivamente de internet.",
                    icon: "fas fa-satellite-dish"
                },
                {
                    title: "SISTEMA LINUX ESTÁVEL",
                    text: "Um sistema leve, veloz e otimizado que liga instantaneamente e responde aos comandos sem engasgos.",
                    icon: "fab fa-linux"
                },
                {
                    title: "RESOLUÇÃO FULL HD",
                    text: "Transmissão limpa e nítida em resolução Full HD 1080p com suporte a múltiplos decodificadores e codecs SD/HD.",
                    icon: "fas fa-photo-film"
                },
                {
                    title: "RECURSOS EXTRAS",
                    text: "Inclui EPG completo (Guia de Programação), Controle Parental, TimeShift, Timer, e compartilhamento via AirPlay e DLNA.",
                    icon: "fas fa-layer-group"
                }
            ],
            specs: {
                "Processador / Chipset": "GX6628 / GXPRO",
                "Gráficos": "Mali GPU Z",
                "Resolução Máxima": "Full HD 1080p",
                "Codecs de Vídeo": "SD MPEG2, HD MPEG4, H.264/265, AVC SD/HD, SCPC, MPC",
                "Sintonizador (Tuner)": "Dual Tuner (IKS/SKS)",
                "Rede": "Wi-Fi Integrado (2.4GHz) / Ethernet LAN RJ45",
                "Display Frontal": "Alpha Numérico Retroiluminado por LED",
                "Interface / Portas": "USB, HDMI, Porta Ethernet, A.V, RS232",
                "Recursos de Software": "EPG, Control Parental, TimeShift, Timer, Teletexto, AirPlay, DLNA",
                "Alimentação": "Bivolt Automático 110/220V ~ 50/60Hz",
                "Dimensões": "150mm * 110mm * 33mm"
            }
        },
        infinity: {
            name: "Champions Infinity",
            logo: "img/logo-champions-infinity-fundo-claro.png",
            icon: "img/icones-champions-infinity.png",
            slogan: "A escolha perfeita para sua diversão",
            year: "2023",
            os: "Linux System",
            desc: "A união perfeita de design elegante e o confiável chipset GXPRO. O Champions Infinity GX PRO oferece desempenho fluido com baixo consumo de energia, ideal para quem busca entretenimento estável e navegação ágil no dia a dia.",
            collage: {
                main: "img/inifinity/infinity-isometrico-direita.png",
                inputs: "img/Banner-miniatura-tema-filmes.jpg",
                expositor: "img/inifinity/infinity -expositor.png",
                remote: "img/inifinity/infinity-controle.png",
                rear: "img/inifinity/infinity-traseira-reto 1.png"
            },
            carousel: [
                "img/inifinity/infinity-controle.png",
                "img/inifinity/infinity-isometrico-direita.png",
                "img/inifinity/infinity -expositor.png",
                "img/Banner-miniatura-tema-filmes.jpg"
            ],
            highlights: [
                {
                    title: "DESIGN COMPACTO",
                    text: "Com apenas 29mm de espessura e acabamento elegante, o Infinity integra-se perfeitamente a qualquer painel de TV.",
                    icon: "fas fa-compress"
                },
                {
                    title: "DISPLAY DIGITAL LED",
                    text: "Display numérico frontal retroiluminado por LED para visualização de status e canais de forma simplificada.",
                    icon: "fas fa-square-nfi"
                },
                {
                    title: "ESTABILIDADE EXTRA",
                    text: "Sintonizadores duplos robustos com busca cega para garantir sinal contínuo em todas as situações.",
                    icon: "fas fa-signal"
                },
                {
                    title: "TECNOLOGIA DE COMPARTILHAMENTO",
                    text: "Transmita a tela de dispositivos móveis para a sua TV de forma simples com o AirPlay e DLNA integrados.",
                    icon: "fas fa-mobile-screen-button"
                }
            ],
            specs: {
                "Processador / Chipset": "GX6628 / GXPRO",
                "Gráficos": "Mali GPU Z",
                "Resolução Máxima": "Full HD 1080p",
                "Codecs de Vídeo": "SD MPEG2, HD MPEG4, H.264/265, AVC SD/HD, SCPC, MPC",
                "Sintonizador (Tuner)": "Dual Tuner (IKS/SKS)",
                "Rede": "Wi-Fi Integrado (2.4GHz) / Ethernet LAN RJ45",
                "Display Frontal": "Numérico Retroiluminado por LED",
                "Interface / Portas": "USB, HDMI, Porta Ethernet, A.V, RS232",
                "Recursos de Software": "EPG, Control Parental, TimeShift, Timer, Teletexto, AirPlay, DLNA",
                "Alimentação": "Bivolt Automático 110/220V ~ 50/60Hz",
                "Dimensões": "134mm * 103mm * 29mm"
            }
        },
        play: {
            name: "Champions Play",
            logo: "img/logo-champions-play-fundo-claro.png",
            icon: "img/icone-champions-play.png",
            slogan: "descubra uma nova dimensão de diversão com o Champions Play GX PRO",
            year: "2023",
            os: "Linux System",
            desc: "O modelo mais compacto e inteligente da linha GX PRO. Ideal para quem quer todas as funções premium da marca em um formato micro, sem abrir mão de alta velocidade, sintonizador digital estável e excelente custo-benefício.",
            collage: {
                main: "img/play/play-isometrico-direita.png",
                inputs: "img/Banner-miniatura-tema-series.jpg",
                expositor: "img/play/champion-play-expositor.png",
                remote: "img/play/Champions Play - Carrossel-extra.png",
                rear: "img/play/play-isometrico-direita.png" // Fallback
            },
            carousel: [
                "img/play/Champions Play - Carrossel-extra.png",
                "img/play/play-isometrico-direita.png",
                "img/play/champion-play-expositor.png",
                "img/Banner-miniatura-tema-series.jpg"
            ],
            highlights: [
                {
                    title: "MICRO DIMENSÕES",
                    text: "O menor receptor da marca: apenas 26.5mm de altura. Perfeito para espaços integrados e instalações discretas.",
                    icon: "fas fa-expand-arrows-alt"
                },
                {
                    title: "LINUX OTIMIZADO",
                    text: "Firmware customizado de resposta rápida com sistema de menus dinâmicos e fluidos.",
                    icon: "fas fa-gears"
                },
                {
                    title: "CONEXÃO DUAL",
                    text: "Compatível com conexões Wi-Fi 2.4GHz de alta estabilidade e entrada Ethernet para cabos de rede convencionais.",
                    icon: "fas fa-network-wired"
                },
                {
                    title: "MULTIMÍDIA AVANÇADA",
                    text: "Sistemas AirPlay e DLNA integrados, permitindo espelhamento rápido de fotos, vídeos e áudio diretamente da tela do celular.",
                    icon: "fas fa-circle-play"
                }
            ],
            specs: {
                "Processador / Chipset": "GX6628 / GXPRO",
                "Gráficos": "Mali GPU Z",
                "Resolução Máxima": "Full HD 1080p",
                "Codecs de Vídeo": "SD MPEG2, HD MPEG4, H.264/265, AVC SD/HD, SCPC, MPC",
                "Sintonizador (Tuner)": "Dual Tuner (IKS/SKS)",
                "Rede": "Wi-Fi Integrado (2.4GHz) / Ethernet LAN RJ45",
                "Display Frontal": "Numérico Retroiluminado por LED",
                "Interface / Portas": "USB, HDMI, Porta Ethernet, A.V, RS232",
                "Recursos de Software": "EPG, Control Parental, TimeShift, Timer, Teletexto, AirPlay, DLNA",
                "Alimentação": "Bivolt Automático 110/220V ~ 50/60Hz",
                "Dimensões": "120mm * 103mm * 26.5mm",
                "Acessórios inclusos": "Fonte de alimentação, cabo HDMI, controle Remoto"
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
        if (link.getAttribute('href') === `#product-${activeProductKey}`) {
            link.classList.add('active');
        }
    });

    // Logo / Ícone / Slogans do Hero Collage
    document.getElementById('collage-brand-icon').src = data.icon;
    document.getElementById('collage-brand-logo').src = data.logo;
    document.getElementById('collage-slogan-text').innerText = data.slogan;
    document.getElementById('collage-year-text').innerText = data.year;
    document.getElementById('collage-signature-title').innerText = data.name;
    document.getElementById('collage-signature-serif').innerText = data.os;

    // Imagens da Colagem do Hero
    document.getElementById('collage-img-main-tag').src = data.collage.main;
    document.getElementById('collage-img-inputs-tag').src = data.collage.inputs;
    document.getElementById('collage-img-expositor-tag').src = data.collage.expositor;
    document.getElementById('collage-img-remote-tag').src = data.collage.remote;
    document.getElementById('collage-img-rear-tag').src = data.collage.rear;

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
                if (e.button !== 0) return;
                startX = e.clientX;
                isDragging = true;
                dragDistance = 0;
                wrapper.style.cursor = 'grabbing';
                wrapper.setPointerCapture(e.pointerId);
            });

            wrapper.addEventListener('pointerup', (e) => {
                if (!isDragging) return;
                isDragging = false;
                wrapper.style.cursor = 'grab';
                wrapper.releasePointerCapture(e.pointerId);

                dragDistance = Math.abs(e.clientX - startX);
                const diffX = e.clientX - startX;
                if (dragDistance > swipeThreshold) {
                    if (diffX > 0) {
                        rotate('prev');
                    } else {
                        rotate('next');
                    }
                }
            });

            wrapper.addEventListener('pointercancel', () => {
                isDragging = false;
                wrapper.style.cursor = 'grab';
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
            gsap.to(card, { x: x * 0.15, y: y * 0.15, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
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
        lightboxImg.classList.remove('zoomed');
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
            lightboxImg.classList.remove('zoomed');
        }, 300);
    }

    function navigateLightbox(dir) {
        currentImgIndex = (currentImgIndex + dir + imagesList.length) % imagesList.length;
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.src = imagesList[currentImgIndex];
            lightboxImg.classList.remove('zoomed');
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

    // Alternar Zoom ao clicar na imagem
    lightboxImg.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxImg.classList.toggle('zoomed');
        if (!lightboxImg.classList.contains('zoomed')) {
            lightboxWrapper.scrollLeft = 0;
            lightboxWrapper.scrollTop = 0;
        }
    });

    // Arrastar para scrollar a imagem quando estiver em Zoom (Grab to Pan)
    let isDown = false;
    let startX, startY, scrollLeft, scrollTop;

    lightboxWrapper.addEventListener('mousedown', (e) => {
        if (!lightboxImg.classList.contains('zoomed')) return;
        isDown = true;
        lightboxWrapper.classList.add('grabbing');
        startX = e.pageX - lightboxWrapper.offsetLeft;
        startY = e.pageY - lightboxWrapper.offsetTop;
        scrollLeft = lightboxWrapper.scrollLeft;
        scrollTop = lightboxWrapper.scrollTop;
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

