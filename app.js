/* ============================================================
   MEGA DENT — App JS
   Booking Modal · Language Switcher (RU/KZ) · UI Effects
   ============================================================ */

// ── Config ──────────────────────────────────────────────────
const WHATSAPP_NUMBER = '77715249535';
const TELEGRAM_BOT = 'https://t.me/MegaDentBot'; // placeholder — update when bot is ready

// ── State ───────────────────────────────────────────────────
let currentLang = localStorage.getItem('megadent_lang') || 'ru';

// ── Doctors list ────────────────────────────────────────────
const doctors = {
  ru: [
    { id: 'mammadova',  name: 'Маммадова Г.М.',          role: 'Стоматолог-терапевт' },
    { id: 'yunusov',    name: 'Юнусов А.Р.',             role: 'Детский стоматолог' },
    { id: 'tolen',      name: 'Толен М.Б.',              role: 'Хирург-имплантолог' },
    { id: 'ayagan',     name: 'Аяган Н.С.',              role: 'Стоматолог-терапевт' },
    { id: 'eshmukhan',  name: 'Ешмуханбетов Д.К.',      role: 'Стоматолог-ортопед' },
    { id: 'seifullin',  name: 'Сейфуллин Е.А.',         role: 'Стоматолог-хирург' },
    { id: 'malgazhdar', name: 'Малгаждар А.Т.',         role: 'Стоматолог-гигиенист' },
    { id: 'zhandosova', name: 'Жандосова У.Ж.',         role: 'Стоматолог-ортодонт' },
  ],
  kz: [
    { id: 'mammadova',  name: 'Маммадова Г.М.',          role: 'Стоматолог-терапевт' },
    { id: 'yunusov',    name: 'Юнусов А.Р.',             role: 'Балалар стоматологы' },
    { id: 'tolen',      name: 'Толен М.Б.',              role: 'Хирург-имплантолог' },
    { id: 'ayagan',     name: 'Аяган Н.С.',              role: 'Стоматолог-терапевт' },
    { id: 'eshmukhan',  name: 'Ешмуханбетов Д.К.',      role: 'Стоматолог-ортопед' },
    { id: 'seifullin',  name: 'Сейфуллин Е.А.',         role: 'Стоматолог-хирург' },
    { id: 'malgazhdar', name: 'Малгаждар А.Т.',         role: 'Стоматолог-гигиенист' },
    { id: 'zhandosova', name: 'Жандосова У.Ж.',         role: 'Стоматолог-ортодонт' },
  ]
};

// ── Services list ───────────────────────────────────────────
const services = {
  ru: [
    'Лечение зубов',
    'Детская стоматология',
    'Имплантация',
    'Ортодонтия',
    'Профессиональная гигиена',
    'Протезирование',
  ],
  kz: [
    'Тіс емдеу',
    'Балалар стоматологиясы',
    'Имплантация',
    'Ортодонтия',
    'Кәсіби гигиена',
    'Протездеу',
  ]
};

// ── UI Translations ─────────────────────────────────────────
const ui = {
  ru: {
    // Booking modal
    bookingTitle: 'Записаться на приём',
    bookingSubtitle: 'Заполните форму и мы свяжемся с вами для подтверждения',
    labelName: 'Ваше имя',
    labelPhone: 'Телефон',
    labelDoctor: 'Врач',
    labelService: 'Услуга',
    labelDate: 'Желаемая дата',
    labelComment: 'Комментарий',
    placeholderName: 'Как к вам обращаться',
    placeholderPhone: '+7 (___) ___-__-__',
    placeholderComment: 'Дополнительные пожелания...',
    selectDoctor: 'Любой врач',
    selectService: 'Выберите услугу',
    btnWhatsApp: 'WhatsApp',
    btnTelegram: 'Telegram',
    bookingNote: 'Мы ответим в течение 15 минут в рабочее время',
    // Floating button
    fabText: 'Записаться',
    // Nav
    navHome: 'Главная',
    navServices: 'Услуги',
    navAbout: 'О клинике',
    navDoctors: 'Врачи',
    navReviews: 'Отзывы',
    navContacts: 'Контакты',
    navCta: 'Записаться',
    // Footer
    footerDesc: 'Семейная стоматология для детей и взрослых.',
    footerServices: 'Услуги',
    footerClinic: 'Клиника',
    footerContacts: 'Контакты',
    footerAbout: 'О нас',
    footerDoctors: 'Врачи',
    footerReviews: 'Отзывы',
    footerTreatment: 'Лечение зубов',
    footerImplant: 'Имплантация',
    footerOrtho: 'Ортодонтия',
    footerRights: '© 2026 Mega Dent. Все права защищены.',
    footerDesign: 'Сайт-пример дизайна',
    // WhatsApp message
    msgGreeting: 'Здравствуйте! Хочу записаться на приём в Mega Dent.',
    msgName: 'Имя',
    msgPhone: 'Телефон',
    msgDoctor: 'Врач',
    msgService: 'Услуга',
    msgDate: 'Дата',
    msgComment: 'Комментарий',
    msgAnyDoctor: 'Любой врач',
    msgNotSpecified: 'Не указано',
    // Doctors page
    btnBookDoctor: 'Записаться',
  },
  kz: {
    bookingTitle: 'Қабылдауға жазылу',
    bookingSubtitle: 'Форманы толтырыңыз, біз растау үшін сізбен хабарласамыз',
    labelName: 'Атыңыз',
    labelPhone: 'Телефон',
    labelDoctor: 'Дәрігер',
    labelService: 'Қызмет',
    labelDate: 'Қалаған күні',
    labelComment: 'Пікір',
    placeholderName: 'Сізге қалай хабарласуға болады',
    placeholderPhone: '+7 (___) ___-__-__',
    placeholderComment: 'Қосымша тілектер...',
    selectDoctor: 'Кез келген дәрігер',
    selectService: 'Қызметті таңдаңыз',
    btnWhatsApp: 'WhatsApp',
    btnTelegram: 'Telegram',
    bookingNote: 'Біз жұмыс уақытында 15 минут ішінде жауап береміз',
    fabText: 'Жазылу',
    navHome: 'Басты бет',
    navServices: 'Қызметтер',
    navAbout: 'Клиника туралы',
    navDoctors: 'Дәрігерлер',
    navReviews: 'Пікірлер',
    navContacts: 'Байланыс',
    navCta: 'Жазылу',
    footerDesc: 'Балалар мен ересектерге арналған отбасылық стоматология.',
    footerServices: 'Қызметтер',
    footerClinic: 'Клиника',
    footerContacts: 'Байланыс',
    footerAbout: 'Біз туралы',
    footerDoctors: 'Дәрігерлер',
    footerReviews: 'Пікірлер',
    footerTreatment: 'Тіс емдеу',
    footerImplant: 'Имплантация',
    footerOrtho: 'Ортодонтия',
    footerRights: '© 2026 Mega Dent. Барлық құқықтар қорғалған.',
    footerDesign: 'Дизайн үлгісі',
    msgGreeting: 'Сәлеметсіз бе! Mega Dent қабылдауына жазылғым келеді.',
    msgName: 'Аты',
    msgPhone: 'Телефон',
    msgDoctor: 'Дәрігер',
    msgService: 'Қызмет',
    msgDate: 'Күні',
    msgComment: 'Пікір',
    msgAnyDoctor: 'Кез келген дәрігер',
    msgNotSpecified: 'Көрсетілмеген',
    btnBookDoctor: 'Жазылу',
  }
};

// ── Page-specific translations (keyed by data-i18n attribute) ──
const pageTranslations = {
  // ─── INDEX ───
  'hero-label':        { ru: 'Семейная стоматология', kz: 'Отбасылық стоматология' },
  'hero-title':        { ru: 'Забота о вашей <em>улыбке</em> — в&nbsp;наших руках', kz: 'Сіздің <em>күлкіңіз</em> — біздің қолымызда' },
  'hero-text':         { ru: 'Современная стоматология для детей и взрослых в Алматы. Безболезненное лечение, профессиональная команда и индивидуальный подход к каждому пациенту.', kz: 'Алматыдағы балалар мен ересектерге арналған заманауи стоматология. Ауырсызданусыз емдеу, кәсіби команда және әрбір пациентке жеке тәсіл.' },
  'stat-exp':          { ru: 'лет опыта', kz: 'жыл тәжірибе' },
  'stat-patients':     { ru: 'довольных пациентов', kz: 'риза пациент' },
  'stat-docs':         { ru: 'специалистов', kz: 'маман' },
  'services-label':    { ru: 'Услуги', kz: 'Қызметтер' },
  'services-title':    { ru: 'Полный спектр<br>стоматологических услуг', kz: 'Стоматологиялық<br>қызметтердің толық спектрі' },
  'services-subtitle': { ru: 'От профилактики до сложных хирургических вмешательств — всё в одной клинике для всей семьи', kz: 'Алдын алудан күрделі хирургиялық араласуларға дейін — бүкіл отбасы үшін бір клиникада' },
  'about-label':       { ru: 'О клинике', kz: 'Клиника туралы' },
  'about-title':       { ru: 'Почему выбирают<br>Mega Dent?', kz: 'Неліктен Mega Dent<br>таңдайды?' },
  'cta-title':         { ru: 'Запишитесь на бесплатную<br>консультацию', kz: 'Тегін кеңесге<br>жазылыңыз' },
  'cta-text':          { ru: 'Приходите на осмотр и получите персональный план лечения. Без скрытых платежей — только честная стоматология.', kz: 'Тексеруге келіңіз және жеке емдеу жоспарын алыңыз. Жасырын төлемдерсіз — тек адал стоматология.' },

  // ─── SERVICES PAGE ───
  'sp-bread':         { ru: 'Услуги', kz: 'Қызметтер' },
  'sp-label':         { ru: 'Наши услуги', kz: 'Біздің қызметтер' },
  'sp-title':         { ru: 'Полный спектр<br>стоматологических услуг', kz: 'Стоматологиялық<br>қызметтердің толық спектрі' },
  'sp-subtitle':      { ru: 'От профилактики до сложных хирургических вмешательств — всё в одной клинике для всей семьи. Современные методики и материалы мирового уровня.', kz: 'Алдын алудан күрделі хирургиялық араласуларға дейін — бүкіл отбасы үшін бір клиникада. Әлемдік деңгейдегі заманауи әдістемелер мен материалдар.' },
  'pay-label':        { ru: 'Оплата', kz: 'Төлем' },
  'pay-title':        { ru: 'Удобные условия<br>оплаты', kz: 'Ыңғайлы төлем<br>шарттары' },
  'pay-subtitle':     { ru: 'Гибкие варианты оплаты, чтобы качественная стоматология была доступна каждой семье', kz: 'Сапалы стоматология әрбір отбасына қолжетімді болуы үшін икемді төлем нұсқалары' },
  'pay-free':         { ru: 'Бесплатная консультация', kz: 'Тегін кеңес' },
  'pay-free-d':       { ru: 'Первичный осмотр и план лечения — бесплатно', kz: 'Алғашқы тексеру және емдеу жоспары — тегін' },
  'pay-kaspi':        { ru: 'Рассрочка Kaspi', kz: 'Kaspi бөліп төлеу' },
  'pay-kaspi-d':      { ru: 'Рассрочка на 12 и 24 месяца без переплат', kz: '12 және 24 айға артық төлемсіз бөліп төлеу' },
  'pay-ins':          { ru: 'Страховка и ЕНПФ', kz: 'Сақтандыру және БЖЗҚ' },
  'pay-ins-d':        { ru: 'Принимаем медицинскую страховку и пенсионные накопления', kz: 'Медициналық сақтандыру және зейнетақы жинақтарын қабылдаймыз' },
  'pay-cta':          { ru: 'Запишитесь на бесплатную консультацию', kz: 'Тегін кеңесге жазылыңыз' },
  'pay-cta-d':        { ru: 'Приходите на осмотр и получите персональный план лечения. Без скрытых платежей.', kz: 'Тексеруге келіңіз және жеке емдеу жоспарын алыңыз. Жасырын төлемдерсіз.' },
  'pay-cta-btn':      { ru: 'Записаться через WhatsApp', kz: 'WhatsApp арқылы жазылу' },

  // ─── ABOUT PAGE ───
  'ab-bread':         { ru: 'О клинике', kz: 'Клиника туралы' },
  'ab-label':         { ru: 'О нас', kz: 'Біз туралы' },
  'ab-title':         { ru: 'Клиника, которой<br>доверяют семьи', kz: 'Отбасылар<br>сенетін клиника' },
  'ab-subtitle':      { ru: 'Mega Dent — это место, где качественная стоматология сочетается с заботой о каждом пациенте. Мы работаем с 2017 года и помогли более 12 000 пациентов обрести здоровую улыбку.', kz: 'Mega Dent — сапалы стоматология мен әрбір пациентке қамқорлық үйлесетін орын. Біз 2017 жылдан бері жұмыс істейміз және 12 000-нан астам пациентке сау күлкі сыйладық.' },
  'ab-hist-label':    { ru: 'Наша история', kz: 'Біздің тарих' },
  'ab-hist-title':    { ru: 'Почему нам<br>доверяют?', kz: 'Бізге неге<br>сенеді?' },
  'ab-badge':         { ru: 'лет заботы<br>о пациентах', kz: 'жыл пациенттерге<br>қамқорлық' },
  'ab-val-label':     { ru: 'Наши ценности', kz: 'Біздің құндылықтар' },
  'ab-val-title':     { ru: 'Принципы нашей работы', kz: 'Біздің жұмыс қағидаларымыз' },
  'ab-tl-label':      { ru: 'История', kz: 'Тарих' },
  'ab-tl-title':      { ru: 'Наш путь', kz: 'Біздің жол' },
  'ab-cta-title':     { ru: 'Станьте частью<br>нашей семьи пациентов', kz: 'Біздің пациенттер<br>отбасының мүшесі болыңыз' },
  'ab-cta-text':      { ru: 'Приходите на бесплатную консультацию и убедитесь в нашем подходе сами.', kz: 'Тегін кеңесге келіңіз және біздің тәсілімізге өзіңіз көз жеткізіңіз.' },
  'ab-cta-btn':       { ru: 'Записаться через WhatsApp', kz: 'WhatsApp арқылы жазылу' },

  // ─── DOCTORS PAGE ───
  'dr-bread':         { ru: 'Врачи', kz: 'Дәрігерлер' },
  'dr-label':         { ru: 'Наша команда', kz: 'Біздің команда' },
  'dr-title':         { ru: 'Врачи, которым<br>вы можете доверять', kz: 'Сіз сене алатын<br>дәрігерлер' },
  'dr-subtitle':      { ru: '8 опытных специалистов, которые постоянно повышают квалификацию и владеют современными методиками лечения.', kz: '8 тәжірибелі маман, олар үнемі біліктілігін арттырады және заманауи емдеу әдістемелерін меңгерген.' },
  'dr-cta-title':     { ru: 'Запишитесь к нашим<br>специалистам', kz: 'Біздің мамандарға<br>жазылыңыз' },
  'dr-cta-text':      { ru: 'Наши врачи помогут решить любую стоматологическую проблему. Первая консультация — бесплатно.', kz: 'Біздің дәрігерлер кез келген стоматологиялық мәселені шешуге көмектеседі. Алғашқы кеңес — тегін.' },
  'dr-cta-btn':       { ru: 'Записаться через WhatsApp', kz: 'WhatsApp арқылы жазылу' },

  // ─── REVIEWS PAGE ───
  'rv-bread':         { ru: 'Отзывы', kz: 'Пікірлер' },
  'rv-label':         { ru: 'Отзывы', kz: 'Пікірлер' },
  'rv-title':         { ru: 'Что говорят наши<br>пациенты', kz: 'Біздің пациенттер<br>не айтады' },
  'rv-subtitle':      { ru: 'Мы гордимся каждым отзывом. Благодарность наших пациентов — лучшая награда для нашей команды.', kz: 'Біз әрбір пікірді мақтан тұтамыз. Пациенттеріміздің ризашылығы — біздің команда үшін ең жақсы марапат.' },

  // ─── CONTACTS PAGE ───
  'ct-bread':         { ru: 'Контакты', kz: 'Байланыс' },
  'ct-label':         { ru: 'Контакты', kz: 'Байланыс' },
  'ct-title':         { ru: 'Свяжитесь<br>с нами', kz: 'Бізбен<br>байланысыңыз' },
  'ct-subtitle':      { ru: 'Мы всегда рады ответить на ваши вопросы и помочь записаться на приём.', kz: 'Біз сіздің сұрақтарыңызға жауап беруге және қабылдауға жазылуға көмектесуге әрқашан дайынбыз.' },
};

// ══════════════════════════════════════════════════════════════
// BOOKING MODAL
// ══════════════════════════════════════════════════════════════
function injectBookingModal() {
  const t = ui[currentLang];
  const doctorList = doctors[currentLang];
  const serviceList = services[currentLang];

  const doctorOptions = doctorList.map(d =>
    `<option value="${d.name} — ${d.role}">${d.name} — ${d.role}</option>`
  ).join('');

  const serviceOptions = serviceList.map(s =>
    `<option value="${s}">${s}</option>`
  ).join('');

  const html = `
    <div class="booking-overlay" id="bookingOverlay" onclick="closeBooking()"></div>
    <div class="booking-modal" id="bookingModal">
      <button class="booking-close" onclick="closeBooking()" aria-label="Закрыть">✕</button>
      <h3 id="bk-title">${t.bookingTitle}</h3>
      <p class="booking-subtitle" id="bk-subtitle">${t.bookingSubtitle}</p>
      <form class="booking-form" id="bookingForm" onsubmit="return false;">
        <div class="form-row">
          <div class="form-group">
            <label id="bk-lbl-name">${t.labelName}</label>
            <input type="text" id="bkName" placeholder="${t.placeholderName}" required>
          </div>
          <div class="form-group">
            <label id="bk-lbl-phone">${t.labelPhone}</label>
            <input type="tel" id="bkPhone" placeholder="${t.placeholderPhone}" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label id="bk-lbl-doctor">${t.labelDoctor}</label>
            <select id="bkDoctor">
              <option value="">${t.selectDoctor}</option>
              ${doctorOptions}
            </select>
          </div>
          <div class="form-group">
            <label id="bk-lbl-service">${t.labelService}</label>
            <select id="bkService">
              <option value="">${t.selectService}</option>
              ${serviceOptions}
            </select>
          </div>
        </div>
        <div class="form-group">
          <label id="bk-lbl-date">${t.labelDate}</label>
          <input type="date" id="bkDate" min="${new Date().toISOString().split('T')[0]}">
        </div>
        <div class="form-group">
          <label id="bk-lbl-comment">${t.labelComment}</label>
          <textarea id="bkComment" rows="2" placeholder="${t.placeholderComment}"></textarea>
        </div>
        <div class="booking-channels">
          <button type="button" class="channel-btn whatsapp" onclick="submitBooking('whatsapp')">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span id="bk-btn-wa">${t.btnWhatsApp}</span>
          </button>
          <button type="button" class="channel-btn telegram" onclick="submitBooking('telegram')">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            <span id="bk-btn-tg">${t.btnTelegram}</span>
          </button>
        </div>
        <p class="booking-note" id="bk-note">${t.bookingNote}</p>
      </form>
    </div>
  `;

  // Remove existing modal if any
  const existingOverlay = document.getElementById('bookingOverlay');
  const existingModal = document.getElementById('bookingModal');
  if (existingOverlay) existingOverlay.remove();
  if (existingModal) existingModal.remove();

  document.body.insertAdjacentHTML('beforeend', html);

  // Add floating button if not exists
  if (!document.getElementById('bookingFab')) {
    const fab = document.createElement('button');
    fab.className = 'booking-fab';
    fab.id = 'bookingFab';
    fab.onclick = () => openBooking();
    fab.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><span id="fab-text">${t.fabText}</span>`;
    document.body.appendChild(fab);
  } else {
    document.getElementById('fab-text').textContent = t.fabText;
  }
}

function openBooking(doctorName) {
  const overlay = document.getElementById('bookingOverlay');
  const modal = document.getElementById('bookingModal');
  if (!overlay || !modal) return;
  overlay.classList.add('open');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Pre-select doctor if specified
  if (doctorName) {
    const select = document.getElementById('bkDoctor');
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value.includes(doctorName)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

function closeBooking() {
  const overlay = document.getElementById('bookingOverlay');
  const modal = document.getElementById('bookingModal');
  if (overlay) overlay.classList.remove('open');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function submitBooking(channel) {
  const t = ui[currentLang];
  const name = document.getElementById('bkName').value.trim();
  const phone = document.getElementById('bkPhone').value.trim();
  const doctor = document.getElementById('bkDoctor').value || t.msgAnyDoctor;
  const service = document.getElementById('bkService').value || t.msgNotSpecified;
  const date = document.getElementById('bkDate').value || t.msgNotSpecified;
  const comment = document.getElementById('bkComment').value.trim();

  if (!name || !phone) {
    // Highlight required fields
    if (!name) document.getElementById('bkName').style.borderColor = '#e74c3c';
    if (!phone) document.getElementById('bkPhone').style.borderColor = '#e74c3c';
    setTimeout(() => {
      document.getElementById('bkName').style.borderColor = '';
      document.getElementById('bkPhone').style.borderColor = '';
    }, 2000);
    return;
  }

  let msg = `${t.msgGreeting}\n\n`;
  msg += `${t.msgName}: ${name}\n`;
  msg += `${t.msgPhone}: ${phone}\n`;
  msg += `${t.msgDoctor}: ${doctor}\n`;
  msg += `${t.msgService}: ${service}\n`;
  msg += `${t.msgDate}: ${date}`;
  if (comment) msg += `\n${t.msgComment}: ${comment}`;

  if (channel === 'whatsapp') {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  } else {
    // Telegram — open bot with start parameter containing encoded data
    const encoded = encodeURIComponent(msg);
    window.open(`${TELEGRAM_BOT}?start=booking`, '_blank');
    // Note: full message pre-fill is limited in TG, so we open the bot
    // The AI agent can then ask for details
  }

  closeBooking();
}

// ══════════════════════════════════════════════════════════════
// LANGUAGE SWITCHER
// ══════════════════════════════════════════════════════════════
function injectLangSwitcher() {
  // Add to desktop nav (before CTA button)
  const navLinks = document.querySelector('.nav-links');
  if (navLinks && !document.querySelector('.lang-switch')) {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="lang-switch">
        <button class="lang-btn ${currentLang === 'ru' ? 'active' : ''}" onclick="switchLang('ru')">RU</button>
        <button class="lang-btn ${currentLang === 'kz' ? 'active' : ''}" onclick="switchLang('kz')">KZ</button>
      </div>`;
    // Insert before the CTA button (last li)
    const ctaLi = navLinks.querySelector('li:last-child');
    navLinks.insertBefore(li, ctaLi);
  }

  // Add to mobile menu
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu && !mobileMenu.querySelector('.lang-switch')) {
    const div = document.createElement('div');
    div.style.cssText = 'display:flex;justify-content:center;margin-top:16px;';
    div.innerHTML = `
      <div class="lang-switch" style="background:rgba(255,255,255,0.1);">
        <button class="lang-btn ${currentLang === 'ru' ? 'active' : ''}" onclick="switchLang('ru')" style="color:${currentLang === 'ru' ? '#fff' : 'rgba(255,255,255,0.7)'}">RU</button>
        <button class="lang-btn ${currentLang === 'kz' ? 'active' : ''}" onclick="switchLang('kz')" style="color:${currentLang === 'kz' ? '#fff' : 'rgba(255,255,255,0.7)'}">KZ</button>
      </div>`;
    mobileMenu.appendChild(div);
  }
}

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('megadent_lang', lang);
  applyTranslations();
  injectBookingModal(); // Rebuild modal with new lang
  updateLangButtons();
  updateDoctorBookButtons();
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.textContent.trim().toLowerCase();
    btn.classList.toggle('active', btnLang === currentLang);
  });
}

function applyTranslations() {
  const t = ui[currentLang];

  // Translate elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (pageTranslations[key] && pageTranslations[key][currentLang]) {
      el.innerHTML = pageTranslations[key][currentLang];
    }
  });

  // Translate nav links
  const navMappings = {
    'index.html': t.navHome,
    'services.html': t.navServices,
    'about.html': t.navAbout,
    'doctors.html': t.navDoctors,
    'reviews.html': t.navReviews,
    'contacts.html': t.navContacts,
  };

  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && navMappings[href]) {
      a.textContent = navMappings[href];
    }
    if (a.classList.contains('btn-primary') && !a.getAttribute('href')?.startsWith('http')) {
      a.textContent = t.navCta;
    }
    if (a.classList.contains('btn-primary') && a.getAttribute('href')?.includes('wa.me')) {
      a.textContent = t.navCta;
    }
  });

  // Translate footer
  document.querySelectorAll('footer h5').forEach(h5 => {
    const text = h5.textContent.trim();
    if (text === 'Услуги' || text === 'Қызметтер') h5.textContent = t.footerServices;
    if (text === 'Клиника' || text === 'Клиника') h5.textContent = t.footerClinic;
    if (text === 'Контакты' || text === 'Байланыс') h5.textContent = t.footerContacts;
  });

  // Footer brand description
  const footerBrand = document.querySelector('.footer-brand p');
  if (footerBrand) footerBrand.textContent = t.footerDesc;

  // Footer bottom
  const footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom) {
    const spans = footerBottom.querySelectorAll('span');
    if (spans[0]) spans[0].textContent = t.footerRights;
    if (spans[1]) spans[1].textContent = t.footerDesign;
  }

  // Footer links
  document.querySelectorAll('.footer-col a').forEach(a => {
    const href = a.getAttribute('href');
    const text = a.textContent.trim();
    if (href === 'about.html' || text === 'О нас' || text === 'Біз туралы') a.textContent = t.footerAbout;
    if (href === 'doctors.html' || text === 'Врачи' || text === 'Дәрігерлер') a.textContent = t.footerDoctors;
    if (href === 'reviews.html' || text === 'Отзывы' || text === 'Пікірлер') a.textContent = t.footerReviews;
  });

  // Translate "Записаться" buttons in page content
  document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.getAttribute('href')?.includes('wa.me') && !btn.closest('header') && !btn.closest('.mobile-menu') && !btn.closest('.booking-channels')) {
      // Check if it's a page CTA button with data-i18n, skip those
      if (!btn.hasAttribute('data-i18n')) {
        btn.textContent = t.navCta;
      }
    }
  });

  // Translate .btn-white CTA buttons
  document.querySelectorAll('.btn-white').forEach(btn => {
    if (!btn.hasAttribute('data-i18n')) {
      btn.textContent = currentLang === 'ru' ? 'Записаться через WhatsApp' : 'WhatsApp арқылы жазылу';
    }
  });

  // Doctor book buttons
  updateDoctorBookButtons();

  // FAB
  const fabText = document.getElementById('fab-text');
  if (fabText) fabText.textContent = t.fabText;

  // Breadcrumbs - "Главная" link
  document.querySelectorAll('.breadcrumb a').forEach(a => {
    if (a.getAttribute('href') === 'index.html') {
      a.textContent = t.navHome;
    }
  });
}

function updateDoctorBookButtons() {
  const t = ui[currentLang];
  document.querySelectorAll('.btn-book').forEach(btn => {
    const span = btn.querySelector('span');
    if (span) span.textContent = t.btnBookDoctor;
  });
}

// ══════════════════════════════════════════════════════════════
// ADD BOOKING BUTTONS TO DOCTOR CARDS
// ══════════════════════════════════════════════════════════════
function addDoctorBookButtons() {
  const doctorCards = document.querySelectorAll('.doctor-card');
  const t = ui[currentLang];

  doctorCards.forEach(card => {
    if (card.querySelector('.btn-book')) return; // Already has button

    const nameEl = card.querySelector('.doctor-name');
    if (!nameEl) return;
    const doctorName = nameEl.textContent.trim();

    const btn = document.createElement('button');
    btn.className = 'btn-book';
    btn.onclick = () => openBooking(doctorName);
    btn.innerHTML = `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><span>${t.btnBookDoctor}</span>`;

    const info = card.querySelector('.doctor-info');
    if (info) info.appendChild(btn);
  });
}

// ══════════════════════════════════════════════════════════════
// MAKE ALL CTA BUTTONS OPEN BOOKING MODAL
// ══════════════════════════════════════════════════════════════
function interceptCTAs() {
  // Convert WhatsApp links to open booking modal instead
  document.querySelectorAll('a.btn-primary[href*="wa.me"], a.btn-white[href*="wa.me"]').forEach(a => {
    // Skip nav and mobile menu CTAs
    if (a.closest('header') || a.closest('.mobile-menu') || a.closest('.booking-channels')) return;

    a.addEventListener('click', function(e) {
      e.preventDefault();
      openBooking();
    });
  });

  // Also intercept hero button
  const heroBtn = document.querySelector('[data-i18n="hero-btn"]');
  if (heroBtn) {
    heroBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openBooking();
    });
  }
}

// ══════════════════════════════════════════════════════════════
// INITIALIZATION
// ══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  // Header scroll
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // Reveal animations
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // Mobile menu
  window.toggleMenu = function() {
    document.getElementById('mobileMenu')?.classList.toggle('open');
  };

  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBooking();
  });

  // Init language switcher
  injectLangSwitcher();

  // Init booking modal
  injectBookingModal();

  // Add booking buttons to doctor cards
  addDoctorBookButtons();

  // Apply stored language
  applyTranslations();

  // Intercept CTAs to open booking modal
  interceptCTAs();
});
