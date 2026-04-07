const POINTS_PER_CORRECT = 10;
const MAX_HEALTH = 3;
const QUESTION_BIRDS = 10;
const MAX_BUFF_ON_SCREEN = 2; // Luôn duy trì 2 chim Buff

const MAX_ARROW_SPEED = 920;
const ARROW_GRAVITY = 420;
const HIT_RADIUS_FACTOR = 0.34;
const QUESTION_BIRD_SIZE = 56;
const BUFF_BIRD_SIZE = 52;

const questions = [
  {
    level: "Nhận biết",
    topic: "Nguồn điện",
    question: "Kết luận nào sau đây đúng khi nói về tác dụng của nguồn điện?",
    options: [
      "dùng để tạo ra và duy trì hiệu điện thế nhằm duy trì dòng điện trong mạch",
      "dùng để tạo ra các ion âm",
      "dùng để tạo ra các ion dương",
      "dùng để tạo ra các ion âm chạy trong vật dẫn"
    ],
    answer: 0,
    explanation: "Nguồn điện dùng để tạo ra và duy trì hiệu điện thế nhằm duy trì dòng điện trong mạch.",
    image: "images/questions/q1.png"
  },
  {
    level: "Nhận biết",
    topic: "Suất điện động",
    question: "Kết luận nào sau đây là sai khi nói về suất điện động của nguồn điện?",
    options: [
      "Suất điện động của nguồn điện đặc trưng cho khả năng thực hiện công của nguồn điện",
      "Suất điện động của nguồn điện được đo bằng thương số A/q",
      "Đơn vị của suất điện động là vôn (V)",
      "Suất điện động của nguồn điện đặc trưng cho khả năng tích điện của nguồn điện"
    ],
    answer: 3,
    explanation: "D sai vì suất điện động đặc trưng cho khả năng thực hiện công của nguồn điện trên một đơn vị điện tích, không phải khả năng tích điện.",
    image: "images/questions/q2.svg"
  },
  {
    level: "Vận dụng",
    topic: "Suất điện động",
    question: "Suất điện động của nguồn điện một chiều là E = 4V. Công của lực lạ làm dịch chuyển một lượng điện tích q = 5mC giữa hai cực bên trong nguồn điện là:",
    options: ["1,5mJ", "0,8mJ", "20mJ", "5mJ"],
    answer: 2,
    explanation: "Áp dụng công thức A = E.q. Ta có A = 4 × 5 = 20mJ.",
    image: "images/questions/q3.svg"
  },
  {
    level: "Nhận biết",
    topic: "Hiệu điện thế",
    question: "Hiệu điện thế giữa hai cực của một nguồn điện có độ lớn:",
    options: [
      "Luôn bằng suất điện động của nguồn điện khi không có dòng điện chạy qua nguồn.",
      "luôn lớn hơn suất điện động của nguồn điện khi không có dòng điện chạy qua nguồn.",
      "luôn nhỏ hơn suất điện động của nguồn điện khi không có dòng điện chạy qua nguồn.",
      "luôn khác không"
    ],
    answer: 0,
    explanation: "Khi chưa có dòng điện chạy qua nguồn, hiệu điện thế giữa hai cực của nguồn bằng suất điện động của nguồn.",
    image: "images/questions/q4.png"
  },
  {
    level: "Thông hiểu",
    topic: "Điện năng tiêu thụ",
    question: "Công thức nào trong các công thức sau đây cho phép xác định năng lượng điện tiêu thụ của đoạn mạch (trong trường hợp dòng điện không đổi)?",
    options: ["A = UI²t", "A = UI²It", "A = UIt", "A = U + I + t"],
    answer: 2,
    explanation: "Công thức xác định năng lượng điện tiêu thụ của đoạn mạch khi dòng điện không đổi là A = UIt.",
    image: "images/questions/q5.png"
  },
  {
    level: "Thông hiểu",
    topic: "Jun-Lenxơ",
    question: "Cho dòng điện I chạy qua hai điện trở R1 và R2 mắc nối tiếp. Mối liên hệ giữa nhiệt lượng tỏa ra trên mỗi điện trở và giá trị các điện trở là:",
    options: [
      "Q₁/Q₂ = R₁/R₂",
      "Q₂/Q₁ = R₁/R₂",
      "Q₁/Q₂ = (R₁/R₂)²",
      "(Q₁/Q₂)² = R₁/R₂"
    ],
    answer: 0,
    explanation: "Mắc nối tiếp thì dòng điện qua hai điện trở như nhau. Theo công thức Q = I²Rt, nhiệt lượng tỏa ra tỉ lệ thuận với điện trở. Vì vậy Q₁/Q₂ = R₁/R₂.",
    image: "images/questions/q6.svg"
  },
  {
    level: "Vận dụng",
    topic: "Công suất điện",
    question: "Một bếp điện hoạt động liên tục trong 4 giờ ở hiệu điện thế 220 V. Khi đó, số chỉ của công tơ điện tăng thêm 3 số. Công suất tiêu thụ của bếp điện và cường độ dòng điện chạy qua bếp trong thời gian trên là bao nhiêu?",
    options: [
      "P = 750kW; I = 341A",
      "P = 750W; I = 3,41A",
      "P = 750J; I = 3,41A",
      "P = 750W; I = 3,41mA"
    ],
    answer: 1,
    explanation: "Công tơ điện tăng 3 số nghĩa là tiêu thụ 3kWh. Trong 4 giờ, công suất của bếp là P = 3/4 = 0,75kW = 750W. Cường độ dòng điện qua bếp là I = P/U = 750/220 ≈ 3,41A.",
    image: "images/questions/q7.svg"
  },
  {
    level: "Vận dụng",
    topic: "Nguồn điện và biến trở",
    question: "Mắc hai đầu một biến trở vào hai cực của một nguồn điện có suất điện động E. Điều chỉnh biến trở và đo độ lớn hiệu điện thế giữa hai cực nguồn điện U. Chọn phát biểu đúng.",
    options: [
      "Tỉ số U/E càng lớn nếu giá trị biến trở càng lớn.",
      "Tỉ số U/E càng lớn nếu giá trị biến trở càng nhỏ.",
      "Hiệu E − U không đổi khi giá trị biến trở thay đổi.",
      "Tổng E + U không đổi khi giá trị biến trở thay đổi."
    ],
    answer: 0,
    explanation: "Khi tăng giá trị biến trở thì cường độ dòng điện giảm, nên độ giảm điện thế trong nguồn nhỏ đi. Vì vậy hiệu điện thế giữa hai cực nguồn U tăng và tỉ số U/E cũng tăng.",
    image: "images/questions/q8.svg"
  },
  {
    level: "Vận dụng",
    topic: "Điện trở trong",
    question: "Mắc hai đầu biến trở vào hai cực của một bình acquy. Điều chỉnh biến trở và đo công suất tỏa nhiệt P trên biến trở thì thấy kết quả là P có cùng giá trị tương ứng với hai giá trị của biến trở là 2Ω và 8Ω. Điện trở trong của acquy bằng:",
    options: ["2Ω", "4Ω", "6Ω", "8Ω"],
    answer: 1,
    explanation: "Công suất tỏa nhiệt trên biến trở được tính theo công thức P = R(E/(R + r))². Với mỗi giá trị P xác định, ta có hai giá trị biến trở R₁ và R₂ tương ứng, khi đó R₁R₂ = r². Suy ra r = √(2 × 8) = 4Ω.",
    image: "images/questions/q9.svg"
  },
  {
    level: "Vận dụng",
    topic: "Cường độ dòng điện",
    question: "Mắc hai đầu điện trở 3Ω vào hai cực của một nguồn điện có suất điện động ξ = 6V và điện trở trong r = 1Ω. Cường độ dòng điện chạy trong mạch là:",
    options: ["1A", "1,5A", "2A", "2,5A"],
    answer: 1,
    explanation: "Áp dụng công thức I = ξ/(R + r). Ta có I = 6/(3 + 1) = 1,5A.",
    image: "images/questions/q10.svg"
  }
];

const safeBuffPool = [
  {
    key: "double_next",
    badge: "x2",
    name: "Nhân đôi câu tiếp theo",
    message: "Buff x2: câu đúng kế tiếp sẽ được nhân đôi điểm!",
    apply(state) { state.nextCorrectMultiplier = 2; }
  },
  {
    key: "plus_five",
    badge: "+5",
    name: "+5 điểm",
    message: "+5 điểm bonus!",
    apply(state) { state.score += 5; }
  },
  {
    key: "minus_five",
    badge: "-5",
    name: "-5 điểm",
    message: "Ôi không, bị trừ 5 điểm!",
    apply(state) { state.score = Math.max(0, state.score - 5); }
  },
  {
    key: "love",
    badge: "❤",
    name: "Tôi yêu Vật Lí",
    message: "Tôi yêu Vật Lí 💙",
    apply(state) { state.loveCount += 1; }
  }
];

const state = {
  health: MAX_HEALTH,
  score: 0,
  correctCount: 0,
  answeredCount: 0,
  buffEaten: 0,
  loveCount: 0,
  nextCorrectMultiplier: 1,
  birds: [],
  arrows: [],
  answeredQuestions: new Set(),
  usedBuffs: new Set(),
  questionOrder: [],
  isRunning: false,
  isPaused: false,
  isAiming: false,
  pointerX: 0,
  pointerY: 0,
  pendingQuestionBirdId: null,
  lastTime: 0,
  arrowCooldownUntil: 0,
  stageRect: null,
  questionOpen: false,
  rafId: 0
};

// DOM Elements
const screens = {
  start: document.getElementById("startScreen"),
  game: document.getElementById("gameScreen"),
  result: document.getElementById("resultScreen")
};
const stage = document.getElementById("stage");
const birdsLayer = document.getElementById("birdsLayer");
const arrowsLayer = document.getElementById("arrowsLayer");
const heartsEl = document.getElementById("hearts");
const scoreText = document.getElementById("scoreText");
const answeredText = document.getElementById("answeredText");
const buffText = document.getElementById("buffText");
const progressFill = document.getElementById("progressFill");
const archerRig = document.getElementById("archerRig");
const bowRig = document.getElementById("bowRig");
const bowString = document.getElementById("bowString");
const loadedArrow = document.getElementById("loadedArrow");
const aimOverlay = document.getElementById("aimOverlay");
const aimLine = document.getElementById("aimLine");
const toast = document.getElementById("toast");

const guideModal = document.getElementById("guideModal");
const questionModal = document.getElementById("questionModal");
const questionMeta = document.getElementById("questionMeta");
const questionTitle = document.getElementById("questionTitle");
const questionText = document.getElementById("questionText");
const questionImageWrap = document.getElementById("questionImageWrap");
const questionImage = document.getElementById("questionImage");
const answersWrap = document.getElementById("answersWrap");
const questionFeedback = document.getElementById("questionFeedback");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");
const continueBtn = document.getElementById("continueBtn");

const finalScore = document.getElementById("finalScore");
const finalCorrect = document.getElementById("finalCorrect");
const finalBuff = document.getElementById("finalBuff");

const optionLetters = ["A", "B", "C", "D"];

// --- Logic Helpers ---

function shuffle(arr) {
  const clone = [...arr];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function showScreen(key) {
  Object.values(screens).forEach(el => el.classList.remove("active"));
  screens[key].classList.add("active");
}

function openModal(modal) {
  modal.classList.remove("hidden");
}

function closeModal(modal) {
  modal.classList.add("hidden");
}

function getBowOrigin() {
  const stageRect = stage.getBoundingClientRect();
  const rigRect = bowRig.getBoundingClientRect();
  return {
    x: rigRect.left - stageRect.left + rigRect.width * 0.18,
    y: rigRect.top - stageRect.top + rigRect.height * 0.62
  };
}

function updateHud() {
  heartsEl.innerHTML = "";
  for (let i = 0; i < MAX_HEALTH; i += 1) {
    const span = document.createElement("span");
    span.textContent = i < state.health ? "❤️" : "🖤";
    heartsEl.appendChild(span);
  }
  scoreText.textContent = String(state.score);
  answeredText.textContent = `${state.answeredCount}/${questions.length} câu`;
  const buffOnSky = state.birds.filter(b => b.type === "buff" && !b.hit).length;
  buffText.textContent = `${buffOnSky} buff hiện tại`;
  progressFill.style.width = `${(state.answeredCount / questions.length) * 100}%`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden", "show");
  void toast.offsetWidth;
  toast.classList.add("show");
  setTimeout(() => toast.classList.add("hidden"), 1900);
}

function buildBirdElement(bird) {
  const el = document.createElement("div");
  el.className = `bird ${bird.type}`;
  el.style.setProperty("--bird-size", `${bird.size}px`);
  el.dataset.badge = bird.type === "question" ? "?" : bird.badge;
  const img = document.createElement("img");
  img.src = bird.type === "question" ? "images/bird-question.svg" : "images/bird-buff.svg";
  el.appendChild(img);
  birdsLayer.appendChild(el);
  bird.el = el;
}

function spawnSingleBuff() {
  const stageRect = stage.getBoundingClientRect();
  const skyMinY = 24;
  const skyMaxY = Math.max(120, stageRect.height * 0.55);
  const buffConfig = safeBuffPool[Math.floor(Math.random() * safeBuffPool.length)];
  
  const bird = {
    id: `b-${Date.now()}-${Math.random()}`,
    type: "buff",
    buffKey: buffConfig.key,
    badge: buffConfig.badge,
    hit: false,
    x: 80 + Math.random() * (stageRect.width - 160),
    baseY: skyMinY + Math.random() * (skyMaxY - skyMinY),
    y: 0,
    vx: (Math.random() > 0.5 ? 1 : -1) * (32 + Math.random() * 24),
    vy: (Math.random() > 0.5 ? 1 : -1) * (6 + Math.random() * 12),
    amp: 14 + Math.random() * 16,
    phase: Math.random() * Math.PI * 2,
    phaseSpeed: 1.1 + Math.random() * 1.3,
    size: BUFF_BIRD_SIZE - Math.random() * 7,
    facing: 1
  };
  buildBirdElement(bird);
  state.birds.push(bird);
}

function createBirds() {
  birdsLayer.innerHTML = "";
  state.birds = [];
  const stageRect = stage.getBoundingClientRect();
  const skyMinY = 24;
  const skyMaxY = Math.max(120, stageRect.height * 0.55);

  state.questionOrder = shuffle(questions.map((_, index) => index));
  state.questionOrder.forEach((questionIndex, orderIndex) => {
    const bird = {
      id: `q-${orderIndex}`,
      type: "question",
      questionIndex,
      hit: false,
      x: 80 + Math.random() * (stageRect.width - 160),
      baseY: skyMinY + Math.random() * (skyMaxY - skyMinY),
      y: 0,
      vx: (Math.random() > 0.5 ? 1 : -1) * (30 + Math.random() * 28),
      vy: (Math.random() > 0.5 ? 1 : -1) * (4 + Math.random() * 10),
      amp: 10 + Math.random() * 18,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 1.2 + Math.random() * 1.4,
      size: QUESTION_BIRD_SIZE - Math.random() * 8,
      facing: 1
    };
    buildBirdElement(bird);
    state.birds.push(bird);
  });

  for (let i = 0; i < MAX_BUFF_ON_SCREEN; i++) {
    spawnSingleBuff();
  }
  updateHud();
}

function resetGame() {
  state.health = MAX_HEALTH;
  state.score = 0;
  state.correctCount = 0;
  state.answeredCount = 0;
  state.buffEaten = 0;
  state.loveCount = 0;
  state.nextCorrectMultiplier = 1;
  state.answeredQuestions = new Set();
  state.arrows = [];
  state.isPaused = false;
  state.isAiming = false;
  state.questionOpen = false;
  state.lastTime = 0;
  arrowsLayer.innerHTML = "";
  questionFeedback.className = "question-feedback hidden";
  closeModal(questionModal);
  state.stageRect = stage.getBoundingClientRect();
  createBirds();
  setAimVisible(false);
}

function setAimVisible(visible) {
  aimOverlay.classList.toggle("show", visible);
  loadedArrow.classList.toggle("hidden", !visible);
  archerRig.classList.toggle("drawing", visible);
}

function updateAimVisual(pointerX, pointerY) {
  const origin = getBowOrigin();
  const angle = Math.atan2(pointerY - origin.y, pointerX - origin.x);
  const distance = Math.min(170, Math.max(28, Math.hypot(pointerX - origin.x, pointerY - origin.y)));
  const pull = Math.min(28, Math.max(6, distance * 0.18));
  bowRig.style.transform = `rotate(${angle}rad)`;
  bowString.style.transform = `translateX(${pull * 0.2}px) scaleY(1)`;
  loadedArrow.style.transform = `translateY(-50%) translateX(${-pull}px)`;

  const rect = stage.getBoundingClientRect();
  aimOverlay.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
  aimLine.setAttribute("x1", origin.x);
  aimLine.setAttribute("y1", origin.y);
  aimLine.setAttribute("x2", pointerX);
  aimLine.setAttribute("y2", pointerY);
}

function startGame() {
  showScreen("game");
  if (state.rafId) cancelAnimationFrame(state.rafId);
  state.isRunning = true;
  resizeStage();
  resetGame();
  state.rafId = requestAnimationFrame(loop);
}

function createArrow(targetX, targetY) {
  const now = performance.now();
  if (now < state.arrowCooldownUntil) return;
  state.arrowCooldownUntil = now + 260;

  const origin = getBowOrigin();
  const dx = targetX - origin.x;
  const dy = targetY - origin.y;
  const distance = Math.max(20, Math.min(220, Math.hypot(dx, dy)));
  const angle = Math.atan2(dy, dx);
  const speed = Math.min(MAX_ARROW_SPEED, 460 + distance * 2.2);

  const arrow = {
    id: `arrow-${now}`,
    x: origin.x,
    y: origin.y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    angle,
    active: true,
    el: null
  };
  const el = document.createElement("div");
  el.className = "arrow";
  el.innerHTML = '<img src="images/arrow.svg" alt="Mũi tên" />';
  arrowsLayer.appendChild(el);
  arrow.el = el;
  state.arrows.push(arrow);
}

function handlePointerDown(event) {
  if (!state.isRunning || state.isPaused || state.questionOpen) return;
  const rect = stage.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  if (y > rect.height * 0.84) return;
  state.isAiming = true;
  state.pointerX = x;
  state.pointerY = y;
  setAimVisible(true);
  updateAimVisual(x, y);
}

function handlePointerMove(event) {
  if (!state.isAiming || state.isPaused || state.questionOpen) return;
  const rect = stage.getBoundingClientRect();
  state.pointerX = event.clientX - rect.left;
  state.pointerY = event.clientY - rect.top;
  updateAimVisual(state.pointerX, state.pointerY);
}

function handlePointerUp(event) {
  if (!state.isAiming) return;
  const rect = stage.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  state.isAiming = false;
  setAimVisible(false);
  createArrow(x, y);
}

// --- ĐOẠN FIX NẰM Ở ĐÂY ---
function updateBirds(delta, timeSeconds) {
  const rect = state.stageRect;
  state.birds.forEach((bird) => {
    if (bird.hit) return;
    
    // Di chuyển
    bird.x += bird.vx * delta;
    bird.baseY += bird.vy * delta;
    
    if (bird.x < 12 || bird.x > rect.width - bird.size - 12) bird.vx *= -1;
    if (bird.baseY < 18 || bird.baseY > rect.height * 0.58 - bird.size) bird.vy *= -1;
    
    bird.y = bird.baseY + Math.sin(timeSeconds * bird.phaseSpeed + bird.phase) * bird.amp;
    bird.facing = bird.vx >= 0 ? 1 : -1;

    // CHỈ CẬP NHẬT TỌA ĐỘ CHO THẺ CHA (Không dùng scaleX ở đây)
    bird.el.style.transform = `translate(${bird.x}px, ${bird.y}px)`;
    
    // CHỈ LẬT HÌNH ẢNH CON (Hướng chim thay đổi, text/badge vẫn đúng chiều)
    const birdImg = bird.el.querySelector("img");
    if (birdImg) {
      birdImg.style.transform = `scaleX(${bird.facing})`;
    }
  });
}

function hitBird(bird) {
  bird.hit = true;
  bird.el.classList.add("hit");
  setTimeout(() => {
    bird.el?.remove();
    state.birds = state.birds.filter(b => b.id !== bird.id);
  }, 180);

  if (bird.type === "question") {
    openQuestion(bird.questionIndex);
  } else {
    state.buffEaten += 1;
    const buff = safeBuffPool.find(item => item.key === bird.buffKey);
    if (buff) {
      buff.apply(state);
      showToast(buff.message);
      updateHud();
    }
  }
}

function checkArrowCollisions(arrow) {
  for (const bird of state.birds) {
    if (bird.hit) continue;
    const birdCx = bird.x + bird.size / 2;
    const birdCy = bird.y + bird.size * 0.38;
    const distance = Math.hypot(arrow.x + 34 - birdCx, arrow.y + 6 - birdCy);
    if (distance <= bird.size * HIT_RADIUS_FACTOR + 8) {
      arrow.active = false;
      arrow.el.remove();
      hitBird(bird);
      return true;
    }
  }
  return false;
}

function updateArrows(delta) {
  const rect = state.stageRect;
  state.arrows.forEach((arrow) => {
    if (!arrow.active) return;
    arrow.vy += ARROW_GRAVITY * delta;
    arrow.x += arrow.vx * delta;
    arrow.y += arrow.vy * delta;
    arrow.angle = Math.atan2(arrow.vy, arrow.vx);
    arrow.el.style.transform = `translate(${arrow.x}px, ${arrow.y}px) rotate(${arrow.angle}rad)`;
    if (checkArrowCollisions(arrow)) return;
    if (arrow.x > rect.width + 90 || arrow.y > rect.height + 50 || arrow.x < -90) {
      arrow.active = false;
      arrow.el.remove();
    }
  });
  state.arrows = state.arrows.filter(arrow => arrow.active);
}

function loop(timestamp) {
  if (!state.isRunning) return;
  if (!state.lastTime) state.lastTime = timestamp;
  const delta = Math.min(0.032, (timestamp - state.lastTime) / 1000);
  state.lastTime = timestamp;
  if (!state.isPaused) {
    updateBirds(delta, timestamp / 1000);
    updateArrows(delta);
  }
  state.rafId = requestAnimationFrame(loop);
}

function openQuestion(questionIndex) {
  state.isPaused = true;
  state.questionOpen = true;
  const q = questions[questionIndex];
  questionMeta.textContent = `${q.level} · ${q.topic}`;
  questionTitle.textContent = `Câu ${state.answeredCount + 1}`;
  questionText.textContent = q.question;
  if (q.image) {
    questionImage.src = q.image;
    questionImageWrap.classList.remove("hidden");
  } else {
    questionImageWrap.classList.add("hidden");
  }
  answersWrap.innerHTML = "";
  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.innerHTML = `<span class="letter">${optionLetters[index]}</span>${option}`;
    button.onclick = () => answerQuestion(questionIndex, index);
    answersWrap.appendChild(button);
  });
  openModal(questionModal);
}

function answerQuestion(questionIndex, selectedIndex) {
  const q = questions[questionIndex];
  const isCorrect = selectedIndex === q.answer;
  const buttons = [...answersWrap.querySelectorAll(".answer-btn")];
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add("correct");
    else if (idx === selectedIndex) btn.classList.add("wrong");
  });

  if (isCorrect) {
    state.score += POINTS_PER_CORRECT * state.nextCorrectMultiplier;
    state.correctCount += 1;
    feedbackTitle.textContent = `✅ Đúng rồi! +${POINTS_PER_CORRECT * state.nextCorrectMultiplier}đ`;
    state.nextCorrectMultiplier = 1;
  } else {
    state.health = Math.max(0, state.health - 1);
    feedbackTitle.textContent = "❌ Chưa đúng";
  }
  feedbackText.textContent = q.explanation;
  state.answeredCount++;
  updateHud();
  questionFeedback.classList.remove("hidden");
}

function continueAfterQuestion() {
  closeModal(questionModal);
  state.questionOpen = false;
  state.isPaused = false;
  state.lastTime = 0;

  if (state.health <= 0) {
    finishGame(false);
    return;
  }

  // Hồi sinh Buff
  const currentBuffs = state.birds.filter(b => b.type === "buff" && !b.hit).length;
  if (currentBuffs < MAX_BUFF_ON_SCREEN) {
    const need = MAX_BUFF_ON_SCREEN - currentBuffs;
    for (let i = 0; i < need; i++) spawnSingleBuff();
  }

  if (state.answeredCount >= questions.length) finishGame(true);
}

function finishGame(success) {
  state.isRunning = false;
  showScreen("result");
  finalScore.textContent = String(state.score);
  finalCorrect.textContent = `${state.correctCount}/${questions.length}`;
  finalBuff.textContent = String(state.buffEaten);
}

function resizeStage() {
  if (stage) state.stageRect = stage.getBoundingClientRect();
}

// Event Listeners
stage.addEventListener("pointerdown", handlePointerDown);
stage.addEventListener("pointermove", handlePointerMove);
stage.addEventListener("pointerup", handlePointerUp);
document.getElementById("startNowBtn").onclick = startGame;
continueBtn.onclick = continueAfterQuestion;
window.onresize = resizeStage;

showScreen("start");
