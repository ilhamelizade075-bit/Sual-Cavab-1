document.addEventListener('DOMContentLoaded', () => {
    // ---  For Firebase JS SDK v7.20.0 and later, measurementId is optional ---
    const firebaseConfig = {
        apiKey: "AIzaSyAsQZCRqSyXQEsJuxv75G68BeW-9XTciDQ",
        authDomain: "sual-cavab-1.firebaseapp.com",
        databaseURL: "https://SENIN_PROEKT-default-rtdb.firebaseio.com",
        projectId: "sual-cavab-1",
        storageBucket: "sual-cavab-1.firebasestorage.app",
        messagingSenderId: "787196691754",
        appId: "1:787196691754:web:c6c2b25435289044fd0a53"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.database();

    // --- OYUN DƏYİŞƏNLƏRİ ---
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timeLeft = 20;
    let timerInterval;
    let isAnswered = false;
    let highScore = localStorage.getItem('triviaHighScore') || 0;

    let isMultiplayer = false;
    let currentRoomCode = null;
    let myPlayerId = 'p_' + Math.random().toString(36).substring(2, 9);
    let isHost = false;
    let lifelineUsed = false;

    let currentUtterance = null;
    let availableVoices = [];

    // Səs sintezi (Speech Synthesis) hazırlığı
    if ('speechSynthesis' in window) {
        function populateVoices() {
            availableVoices = window.speechSynthesis.getVoices();
        }
        populateVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = populateVoices;
        }
    }

    // --- DOM ELEMENTLƏRİ ---
    const mainMenu = document.getElementById('main-menu');
    const categoryScreen = document.getElementById('category-screen');
    const multiplayerScreen = document.getElementById('multiplayer-screen');
    const gameScreen = document.getElementById('game-screen');
    
    const questionText = document.getElementById('question-text');
    const optionButtons = document.querySelectorAll('.option-btn');
    const timerDisplay = document.getElementById('timer');
    const scoreDisplay = document.getElementById('score');
    const highScoreDisplay = document.getElementById('high-score-display');
    const statusMessage = document.getElementById('status-message');
    const catTitle = document.getElementById('cat-title');
    const lifelineBtn = document.getElementById('lifeline-btn');
    
    const roomLobbyBox = document.getElementById('room-lobby-box');
    const displayRoomCode = document.getElementById('display-room-code');
    const lobbyPlayersList = document.getElementById('lobby-players-list');
    const startMpGameBtn = document.getElementById('start-mp-game-btn');
    const mpScoreboard = document.getElementById('mp-scoreboard');
    const mpScoresList = document.getElementById('mp-scores-list');

    updateHighScoreDisplay();

    function updateHighScoreDisplay() {
        if (highScoreDisplay) highScoreDisplay.innerText = `🏆 Rekord: ${highScore}`;
    }

    // --- MENYU KEÇİDLƏRİ ---
    document.getElementById('btn-singleplayer').addEventListener('click', () => {
        mainMenu.style.display = 'none';
        categoryScreen.style.display = 'block';
        isMultiplayer = false;
    });

    document.getElementById('btn-multiplayer-menu').addEventListener('click', () => {
        mainMenu.style.display = 'none';
        multiplayerScreen.style.display = 'block';
        isMultiplayer = true;
    });

    document.getElementById('back-to-main').addEventListener('click', () => {
        categoryScreen.style.display = 'none';
        mainMenu.style.display = 'block';
    });

    document.getElementById('back-to-menu-from-mp').addEventListener('click', () => {
        multiplayerScreen.style.display = 'none';
        mainMenu.style.display = 'block';
        roomLobbyBox.style.display = 'none';
    });

    document.getElementById('back-to-menu').addEventListener('click', () => {
        clearInterval(timerInterval);
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        gameScreen.style.display = 'none';
        mainMenu.style.display = 'block';
        mpScoreboard.style.display = 'none';
        updateHighScoreDisplay();
    });

    // --- SUALLARI QARIŞDIRMAQ ÜÇÜN ALQORİTM ---
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // --- SOLO OYUNU BAŞLAT ---
    document.querySelectorAll('.cat-btn[data-category]').forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedCategory = e.currentTarget.getAttribute('data-category');
            startSoloGame(selectedCategory);
        });
    });

    function startSoloGame(category) {
        score = 0;
        currentQuestionIndex = 0;
        scoreDisplay.innerText = `Xal: ${score}`;

        if (category === "Ümumi") {
            currentQuestions = [...quizData.az];
            catTitle.innerText = "🌐 Ümumi Sual";
        } else {
            currentQuestions = quizData.az.filter(q => q.category === category);
            catTitle.innerText = `📁 ${category}`;
        }

        // Sualları qarışdırırıq ki, ordan-burdan təsadüfi gəlsin
        currentQuestions = shuffleArray(currentQuestions);

        categoryScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        loadQuestion();
    }

    // --- MULTİPLAYER OTAQ MƏNTİQİ ---
    document.getElementById('create-room-btn').addEventListener('click', () => {
        const name = document.getElementById('player-name').value.trim();
        if (!name) {
            alert("Zəhmət olmasa adınızı daxil edin!");
            return;
        }

        isHost = true;
        currentRoomCode = Math.random().toString(36).substring(2, 6).toUpperCase();
        displayRoomCode.innerText = currentRoomCode;
        roomLobbyBox.style.display = 'block';
        startMpGameBtn.style.display = 'block';

        db.ref('rooms/' + currentRoomCode).set({
            status: 'waiting',
            players: { [myPlayerId]: { name: name, score: 0 } }
        });

        listenToRoom();
    });

    document.getElementById('join-room-btn').addEventListener('click', () => {
        const name = document.getElementById('player-name').value.trim();
        const code = document.getElementById('room-code-input').value.trim().toUpperCase();

        if (!name || !code) {
            alert("Ad və otaq kodunu daxil edin!");
            return;
        }

        isHost = false;
        currentRoomCode = code;

        db.ref('rooms/' + currentRoomCode).once('value', (snapshot) => {
            if (snapshot.exists()) {
                db.ref(`rooms/${currentRoomCode}/players/${myPlayerId}`).set({ name: name, score: 0 });
                displayRoomCode.innerText = currentRoomCode;
                roomLobbyBox.style.display = 'block';
                startMpGameBtn.style.display = 'none';
                listenToRoom();
            } else {
                alert("Belə bir otaq tapılmadı!");
            }
        });
    });

    startMpGameBtn.addEventListener('click', () => {
        if (!currentRoomCode) return;
        db.ref('rooms/' + currentRoomCode + '/status').set('playing');
    });

    function listenToRoom() {
        db.ref('rooms/' + currentRoomCode).on('value', (snapshot) => {
            const data = snapshot.val();
            if (!data) return;

            if (data.players) {
                lobbyPlayersList.innerHTML = '';
                Object.values(data.players).forEach(p => {
                    const li = document.createElement('li');
                    li.innerText = `👤 ${p.name}`;
                    li.style.padding = "4px 0";
                    li.style.color = "#fff";
                    lobbyPlayersList.appendChild(li);
                });
            }

            if (data.status === 'playing' && multiplayerScreen.style.display !== 'none') {
                multiplayerScreen.style.display = 'none';
                gameScreen.style.display = 'block';
                mpScoreboard.style.display = 'block';
                
                currentQuestions = shuffleArray([...quizData.az]);
                catTitle.innerText = "👥 Multiplayer Arena";
                loadQuestion();
                listenToLiveScores();
            }
        });
    }

    function listenToLiveScores() {
        db.ref(`rooms/${currentRoomCode}/players`).on('value', (snapshot) => {
            const players = snapshot.val();
            if (!players) return;

            mpScoresList.innerHTML = '';
            Object.values(players).forEach(p => {
                const span = document.createElement('span');
                span.innerText = `${p.name}: ${p.score} xal`;
                span.style.background = "#3b3b5c";
                span.style.padding = "3px 8px";
                span.style.borderRadius = "5px";
                span.style.color = "#ffcc00";
                mpScoresList.appendChild(span);
            });
        });
    }

    // --- SƏSLƏNDİRMƏ (AZ-AZ / TR-TR) ---
function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Əvvəlki oxunan səsi dayandırır
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Cihazdaki mövcud səsləri yoxlayırıq
        const voices = window.speechSynthesis.getVoices();
        
        // Əvvəlcə azərbaycan dili, tapılmasa türk dili səsi axtarırıq
        const selectedVoice = voices.find(v => v.lang.startsWith('az') || v.lang.startsWith('tr')) 
                           || voices.find(v => v.lang.includes('az') || v.lang.includes('tr'));
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
            utterance.lang = selectedVoice.lang;
        } else {
            utterance.lang = 'az-AZ'; // Əgər heç biri yoxdursa standart azeri qoyur
        }
        
        window.speechSynthesis.speak(utterance);
    }

                currentUtterance.rate = 0.95;
                currentUtterance.pitch = 1.0;
                window.speechSynthesis.speak(currentUtterance);
            }, 200);
        }
    }

    // --- SUAL YÜKLƏMƏ MƏNTİQİ ---
    function loadQuestion() {
        clearInterval(timerInterval);
        timeLeft = 20;
        isAnswered = false;
        lifelineUsed = false;
        timerDisplay.innerText = `⏱️ ${timeLeft}`;
        statusMessage.innerText = "";

        if (lifelineBtn) {
            lifelineBtn.disabled = false;
            lifelineBtn.style.display = 'block';
        }

        optionButtons.forEach(btn => {
            btn.style.backgroundColor = "";
            btn.style.opacity = "1";
            btn.disabled = false;
        });

        if (currentQuestionIndex >= currentQuestions.length) {
            questionText.innerText = `Oyun bitdi! Son xalınız: ${score}`;
            document.querySelector('.options-grid').style.display = 'none';
            if (lifelineBtn) lifelineBtn.style.display = 'none';
            
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();

            if (!isMultiplayer && score > highScore) {
                highScore = score;
                localStorage.setItem('triviaHighScore', highScore);
                updateHighScoreDisplay();
            }
            return;
        } else {
            document.querySelector('.options-grid').style.display = 'flex';
        }

        const q = currentQuestions[currentQuestionIndex];
        questionText.innerText = q.question;

        speakText(q.question);

        q.options.forEach((opt, index) => {
            optionButtons[index].querySelector('.opt-text').innerText = opt;
        });

        startTimer();
    }

    // --- 50/50 KÖMƏK DÜYMƏSİ ---
    if (lifelineBtn) {
        lifelineBtn.addEventListener('click', () => {
            if (lifelineUsed || isAnswered) return;
            lifelineUsed = true;
            lifelineBtn.disabled = true;

            const q = currentQuestions[currentQuestionIndex];
            let hiddenCount = 0;

            optionButtons.forEach((btn, index) => {
                if (index !== q.correct && hiddenCount < 2) {
                    btn.style.opacity = "0.2";
                    btn.disabled = true;
                    hiddenCount++;
                }
            });
        });
    }

    // --- TAYMER VƏ CAVAB MƏNTİQİ ---
    function startTimer() {
        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.innerText = `⏱️ ${timeLeft}`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                timeOut();
            }
        }, 1000);
    }

    function timeOut() {
        isAnswered = true;
        const q = currentQuestions[currentQuestionIndex];
        statusMessage.innerText = "⏳ Vaxt qurtardı!";
        statusMessage.style.color = "#ff4444";
        optionButtons[q.correct].style.backgroundColor = "#4CAF50";
        disableAllOptions();
        setTimeout(nextQuestion, 2500);
    }

    optionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (isAnswered) return;
            isAnswered = true;
            clearInterval(timerInterval);

            if ('speechSynthesis' in window) window.speechSynthesis.cancel();

            const selectedIndex = parseInt(e.currentTarget.getAttribute('data-index'));
            const q = currentQuestions[currentQuestionIndex];

            if (selectedIndex === q.correct) {
                e.currentTarget.style.backgroundColor = "#4CAF50";
                statusMessage.innerText = "🎉 Düzdür!";
                statusMessage.style.color = "#4CAF50";
                score += 10;
                scoreDisplay.innerText = `Xal: ${score}`;

                if (isMultiplayer && currentRoomCode) {
                    db.ref(`rooms/${currentRoomCode}/players/${myPlayerId}/score`).set(score);
                }
            } else {
                e.currentTarget.style.backgroundColor = "#f44336";
                optionButtons[q.correct].style.backgroundColor = "#4CAF50";
                statusMessage.innerText = "❌ Səhvdir!";
                statusMessage.style.color = "#ff4444";
            }

            disableAllOptions();
            setTimeout(nextQuestion, 2500);
        });
    });

    function disableAllOptions() {
        optionButtons.forEach(btn => btn.disabled = true);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        loadQuestion();
    }
});
