// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Loading screen animation
    const loadingScreen = document.querySelector('.loading-screen');
    
    setTimeout(() => {
        gsap.to(loadingScreen, {
            opacity: 0,
            visibility: 'hidden',
            duration: 0.8,
            onComplete: () => {
                loadingScreen.style.display = 'none';
                initAnimations();
            }
        });
    }, 2000);

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Initialize animations after loading screen
    function initAnimations() {
        // Hero section animations
        gsap.from('.hero-title', {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out'
        });

        gsap.from('.hero-subtitle', {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out'
        });

        gsap.from('.hero-buttons', {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.7,
            ease: 'power3.out'
        });

        // Astronaut floating animation
        gsap.to('.astronaut', {
            y: 20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });

        gsap.to('.astronaut-arm.left', {
            rotation: -30,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });

        gsap.to('.astronaut-arm.right', {
            rotation: 30,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });

        // Feature cards animation with ScrollTrigger
        gsap.from('.feature-card', {
            scrollTrigger: {
                trigger: '.features',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });

        // Galaxy cards animation with ScrollTrigger
        gsap.from('.galaxy-card', {
            scrollTrigger: {
                trigger: '.galaxy-section',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.2)'
        });

        // Solar system animation
        animateSolarSystem();

        // Quiz section animation
        gsap.from('.quiz-container', {
            scrollTrigger: {
                trigger: '.quiz-section',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 14, 39, 0.95)';
                navbar.style.backdropFilter = 'blur(15px)';
            } else {
                navbar.style.background = 'rgba(10, 14, 39, 0.8)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        });
    }

    // Solar system animation
    function animateSolarSystem() {
        const orbits = document.querySelectorAll('.orbit');
        
        orbits.forEach((orbit, index) => {
            const planet = orbit.querySelector('.planet');
            const duration = 10 + (index * 5); // Different speed for each planet
            
            gsap.to(orbit, {
                rotation: 360,
                duration: duration,
                repeat: -1,
                ease: 'none'
            });
            
            // Counter-rotate the planet to keep it upright
            gsap.to(planet, {
                rotation: -360,
                duration: duration,
                repeat: -1,
                ease: 'none'
            });
        });

        // Planet hover effects
        const planets = document.querySelectorAll('.planet');
        const planetName = document.getElementById('planet-name');
        const planetDescription = document.getElementById('planet-description');

        const planetData = {
            'Merkurius': 'Planet terkecil dalam tata surya dan yang terdekat dengan Matahari. Permukaannya dipenuhi kawah dan memiliki suhu ekstrem.',
            'Venus': 'Planet terpanas dalam tata surya dengan atmosfer tebal yang terbuat dari karbon dioksida. Sering disebut "Bintang Pagi" atau "Bintang Sore".',
            'Bumi': 'Planet kita, satu-satunya planet yang diketahui memiliki kehidupan. Memiliki satu satelit alami, yaitu Bulan.',
            'Mars': 'Dikenal sebagai "Planet Merah" karena kandungan oksida besi di permukaannya. Memiliki dua bulan kecil, Phobos dan Deimos.',
            'Jupiter': 'Planet terbesar dalam tata surya dengan "Bintang Merah Besar" yang merupakan badai raksasa. Memiliki lebih dari 75 bulan.',
            'Saturnus': 'Dikenal dengan sistem cincinnya yang spektakuler. Cincin ini terbuat dari es dan batuan.',
            'Uranus': 'Planet yang miring pada sisinya dengan kemiringan sumbu sekitar 98 derajat. Memiliki cincin yang tipis.',
            'Neptunus': 'Planet terjauh dari Matahari dengan angin tercepat dalam tata surya, mencapai kecepatan 2.100 km/jam.'
        };

        planets.forEach(planet => {
            planet.addEventListener('mouseenter', function() {
                const name = this.getAttribute('data-name');
                if (name && planetData[name]) {
                    gsap.to(planetName, {
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            planetName.textContent = name;
                            gsap.to(planetName, { opacity: 1, duration: 0.3 });
                        }
                    });
                    
                    gsap.to(planetDescription, {
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            planetDescription.textContent = planetData[name];
                            gsap.to(planetDescription, { opacity: 1, duration: 0.3 });
                        }
                    });
                }
            });
        });
    }

    // Quiz functionality
    initQuiz();
});

// Quiz functionality
function initQuiz() {
    const quizQuestions = [
        {
            question: "Planet manakah yang dikenal sebagai 'Planet Merah'?",
            options: ["Venus", "Mars", "Jupiter", "Saturnus"],
            correct: 1,
            explanation: "Mars dikenal sebagai Planet Merah karena kandungan oksida besi di permukaannya yang memberikan warna kemerahan."
        },
        {
            question: "Berapa jumlah planet dalam tata surya kita?",
            options: ["7", "8", "9", "10"],
            correct: 1,
            explanation: "Tata surya kita memiliki 8 planet setelah Pluto diklasifikasikan ulang sebagai planet kerdil pada tahun 2006."
        },
        {
            question: "Planet manakah yang memiliki cincin yang paling terkenal?",
            options: ["Jupiter", "Uranus", "Saturnus", "Neptunus"],
            correct: 2,
            explanation: "Saturnus dikenal dengan sistem cincinnya yang spektakuler yang terdiri dari partikel es dan batuan."
        },
        {
            question: "Apa nama galaksi tempat tata surya kita berada?",
            options: ["Andromeda", "Bima Sakti", "Triangulum", "Sombrero"],
            correct: 1,
            explanation: "Tata surya kita berada di galaksi Bima Sakti, sebuah galaksi spiral berdiameter sekitar 100.000 tahun cahaya."
        },
        {
            question: "Planet manakah yang terdekat dengan Matahari?",
            options: ["Venus", "Bumi", "Merkurius", "Mars"],
            correct: 2,
            explanation: "Merkurius adalah planet terdekat dengan Matahari, dengan jarak rata-rata sekitar 58 juta kilometer."
        },
        {
            question: "Apa yang menyebabkan terjadinya fase bulan?",
            options: ["Bayangan Bumi", "Perubahan jarak Bulan-Bumi", "Perubahan sudut illuminasi Matahari", "Rotasi Bulan"],
            correct: 2,
            explanation: "Fase bulan terjadi karena perubahan sudut illuminasi Matahari terhadap Bulan saat Bulan mengorbit Bumi."
        },
        {
            question: "Planet manakah yang dikenal sebagai 'Bintang Pagi' atau 'Bintang Sore'?",
            options: ["Mars", "Venus", "Merkurius", "Jupiter"],
            correct: 1,
            explanation: "Venus sering disebut 'Bintang Pagi' atau 'Bintang Sore' karena kemunculannya yang terang di langit saat matahari terbit atau terbenam."
        },
        {
            question: "Apa nama bintang terdekat dengan Bumi?",
            options: ["Proxima Centauri", "Alpha Centauri", "Sirius", "Matahari"],
            correct: 3,
            explanation: "Matahari adalah bintang terdekat dengan Bumi, berada pada jarak sekitar 150 juta kilometer."
        },
        {
            question: "Planet manakah yang memiliki jumlah bulan terbanyak?",
            options: ["Jupiter", "Saturnus", "Uranus", "Neptunus"],
            correct: 1,
            explanation: "Saturnus memiliki jumlah bulan terbanyak yang dikonfirmasi, dengan lebih dari 80 bulan."
        },
        {
            question: "Apa yang terjadi di pusat galaksi kita?",
            options: ["Tidak ada", "Lubang hitam supermasif", "Bintang terbesar", "Planet raksasa"],
            correct: 1,
            explanation: "Di pusat galaksi Bima Sakti terdapat lubang hitam supermasif yang disebut Sagittarius A*."
        }
    ];

    let currentQuestion = 0;
    let score = 0;
    let quizCompleted = false;

    const questionText = document.getElementById('question-text');
    const optionButtons = document.querySelectorAll('.option-btn');
    const quizQuestion = document.querySelector('.quiz-question');
    const quizResult = document.querySelector('.quiz-result');
    const resultTitle = document.getElementById('result-title');
    const resultText = document.getElementById('result-text');
    const nextQuestionBtn = document.querySelector('.next-question');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');

    // Load question
    function loadQuestion() {
        const question = quizQuestions[currentQuestion];
        questionText.textContent = question.question;
        
        optionButtons.forEach((button, index) => {
            button.textContent = question.options[index];
            button.classList.remove('correct', 'incorrect');
            button.disabled = false;
            button.onclick = () => selectAnswer(index);
        });

        // Update progress
        const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
        gsap.to(progressFill, {
            width: `${progress}%`,
            duration: 0.5,
            ease: 'power2.out'
        });
        progressText.textContent = `${currentQuestion + 1}/${quizQuestions.length}`;

        // Show question, hide result
        quizQuestion.classList.remove('hidden');
        quizResult.classList.add('hidden');
    }

    // Select answer
    function selectAnswer(answerIndex) {
        const question = quizQuestions[currentQuestion];
        const isCorrect = answerIndex === question.correct;

        // Disable all buttons
        optionButtons.forEach(button => {
            button.disabled = true;
        });

        // Show correct/incorrect styling
        optionButtons[question.correct].classList.add('correct');
        if (!isCorrect) {
            optionButtons[answerIndex].classList.add('incorrect');
        }

        // Update score
        if (isCorrect) {
            score++;
            resultTitle.textContent = "Jawaban Benar!";
        } else {
            resultTitle.textContent = "Jawaban Salah";
        }

        resultText.textContent = question.explanation;

        // Show result after a short delay
        setTimeout(() => {
            quizQuestion.classList.add('hidden');
            quizResult.classList.remove('hidden');
            
            gsap.from('.quiz-result', {
                y: 20,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        }, 1000);
    }

    // Next question
    nextQuestionBtn.addEventListener('click', () => {
        currentQuestion++;
        
        if (currentQuestion < quizQuestions.length) {
            loadQuestion();
        } else {
            // Quiz completed
            showFinalResult();
        }
    });

    // Show final result
    function showFinalResult() {
        const percentage = (score / quizQuestions.length) * 100;
        let message = '';
        
        if (percentage >= 80) {
            message = "Luar biasa! Anda adalah ahli astronomi!";
        } else if (percentage >= 60) {
            message = "Bagus! Anda memiliki pengetahuan astronomi yang baik.";
        } else if (percentage >= 40) {
            message = "Cukup baik. Terus belajar tentang astronomi!";
        } else {
            message = "Waktunya untuk mempelajari lebih banyak tentang alam semesta!";
        }
        
        resultTitle.textContent = "Quiz Selesai!";
        resultText.innerHTML = `
            <p>Anda mendapatkan ${score} dari ${quizQuestions.length} jawaban benar (${percentage.toFixed(0)}%).</p>
            <p>${message}</p>
        `;
        
        nextQuestionBtn.textContent = "Mulai Ulang Quiz";
        nextQuestionBtn.onclick = () => {
            currentQuestion = 0;
            score = 0;
            loadQuestion();
        };
    }

    // Initialize first question
    if (questionText) {
        loadQuestion();
    }
}