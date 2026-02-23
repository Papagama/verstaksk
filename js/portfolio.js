/**
 * PORTFOLIO MODULE
 * Кейсы расположены от лучшего к худшему
 */

const ITEMS_PER_PAGE = 6;

const portfolioData = [
  // 1. Client Flow - самый сложный проект
  {
    id: 1,
    title: "Client Flow",
    tag: "Web Application",
    description: "Учебный концепт веб-приложения для управления клиентами и проектами с дашбордом, таблицами и интерактивными элементами.",
    image: "images/case1.png",
    link: "https://papagama.github.io/Client-flow/#/app/dashboard",
    
    overview: "Учебный концептуальный проект веб-приложения Client Flow — системы для управления клиентами, проектами и задачами. Цель — создать функциональный и визуально чистый интерфейс SaaS-приложения с дашбордом, таблицами данных, формами и навигацией.",
    client: "Учебный проект (самостоятельная работа)",
    year: "2026",
    
    tasks: [
      "Спроектировать архитектуру веб-приложения с множественными экранами",
      "Создать дашборд с ключевыми метриками и визуализацией данных",
      "Реализовать таблицы с данными клиентов и проектов",
      "Добавить формы создания и редактирования записей",
      "Обеспечить навигацию между разделами приложения"
    ],
    
    constraints: [
      "Проект учебный, без реальной базы данных и бэкенда",
      "Концепт без полноценной авторизации и безопасности",
      "Данные хранятся локально в браузере"
    ],
    
    solution: "Я начал с проектирования информационной архитектуры: разбил приложение на логические модули (Dashboard, Clients, Projects, Tasks) и спроектировал связи между ними. Создал систему навигации с боковым меню и breadcrumbs для понимания текущего местоположения. Дашборд спроектировал как центральную точку входа: карточки с ключевыми метриками (активные клиенты, проекты в работе, выполненные задачи), графики динамики и быстрые действия. Для таблиц реализовал сортировку, фильтрацию и поиск — базовые функции, которые ожидаются в любом CRM. Формы создания и редактирования сделал с валидацией полей и понятными сообщениями об ошибках. Все данные сохраняются в LocalStorage, что позволяет демонстрировать работу приложения без бэкенда. Особое внимание уделил состояниям интерфейса: загрузка, пустые списки, ошибки — каждое состояние имеет понятную визуализацию.",
    
    technologies: [
      { name: "HTML5", desc: "Семантическая структура компонентов приложения" },
      { name: "CSS3", desc: "Стилизация интерфейса, сетки, таблицы и формы" },
      { name: "JavaScript (ES6+)", desc: "Логика приложения, управление состоянием и роутинг" },
      { name: "LocalStorage API", desc: "Хранение данных в браузере пользователя" }
    ],
    
    results: [
      "Создан функциональный прототип SaaS-приложения",
      "Реализован дашборд с визуализацией ключевых метрик",
      "Добавлены таблицы с данными и формы управления",
      "Настроена навигация между разделами приложения"
    ],
    
    screenshots: { desktop: "images/screen1.jpg" },
    role: "UI/UX дизайнер и фронтенд-разработчик",
    summary: "Client Flow — практика создания полноценного веб-приложения."
  },

  // 2. Dream House - коммерческий лендинг
  {
    id: 2,
    title: "Dream House",
    tag: "Landing",
    description: "Лендинг строительной компании каркасных домов с калькулятором стоимости, галереей проектов и интерактивными элементами.",
    image: "images/case2.png",
    link: "https://papagama.github.io/dream-house/",
    
    overview: "Учебный проект лендинга для строительной компании Dream House, специализирующейся на каркасном домостроении. Цель — создать убедительный коммерческий сайт с акцентом на доверие, прозрачность процесса и конкретные цифры.",
    client: "Учебный проект (самостоятельная работа)",
    year: "2026",
    
    tasks: [
      "Создать убедительный первый экран с ценностным предложением",
      "Разработать интерактивный калькулятор для расчета стоимости дома",
      "Представить процесс строительства в понятной пошаговой форме",
      "Создать галерею проектов с карточками домов"
    ],
    
    constraints: [
      "Проект учебный, без реального заказчика",
      "Калькулятор должен быть простым, но давать реалистичные расчеты"
    ],
    
    solution: "Я начал с анализа целевой аудитории — людей, планирующих строительство дома. Это семьи 30-45 лет, которые ищут надёжного подрядчика и хотят понимать, во что вкладывают деньги. Выстроил структуру страницы по принципу воронки продаж: сильное ценностное предложение на первом экране → преимущества каркасного строительства → процесс работы с конкретными сроками → галерея реализованных проектов → калькулятор стоимости → отзывы → форма заявки. Калькулятор сделал центральным элементом конверсии: пользователь выбирает площадь, этажность, тип фундамента и сразу видит примерную стоимость. Это снимает барьер «страшно спросить цену» и даёт конкретику. Процесс строительства разбил на 6 понятных этапов с указанием сроков — это формирует доверие и показывает прозрачность работы. В галерее проектов добавил фильтры по площади и типу дома, чтобы посетитель быстро нашёл подходящий вариант.",
    
    technologies: [
      { name: "HTML5", desc: "Семантическая структура страницы и форм" },
      { name: "CSS3", desc: "Современная стилизация, сетки, карточки проектов" },
      { name: "JavaScript (ES6+)", desc: "Интерактивный калькулятор, слайдеры, формы" },
      { name: "UI/UX дизайн", desc: "Проектирование пользовательского пути" }
    ],
    
    results: [
      "Создан полноценный коммерческий лендинг",
      "Реализован работающий калькулятор стоимости",
      "Выстроена понятная структура процесса строительства"
    ],
    
    screenshots: { desktop: "images/screen2.jpg" },
    role: "Веб-дизайнер и фронтенд-разработчик",
    summary: "Dream House — практика создания коммерческого лендинга с акцентом на конверсию."
  },

  // 3. BRUTAL*STUDIO - креативный брутализм
  {
    id: 3,
    title: "BRUTAL STUDIO",
    tag: "Landing",
    description: "Учебный концепт сайта креативной студии в стиле брутализм: жирная типографика, жёсткие контрасты и смелая подача.",
    image: "images/case3.png",
    link: "https://papagama.github.io/brutalist/",
    
    overview: "Учебный концептуальный проект сайта креативной студии BRUTAL*STUDIO. Цель — собрать цельный «агентский» лендинг в бруталистичной эстетике.",
    client: "Учебный проект (самостоятельная работа)",
    year: "2026",
    
    tasks: [
      "Сформировать концепцию и характер студии",
      "Собрать структуру лендинга агентства",
      "Сделать бруталистичный UI: крупная типографика, сетка, резкие акценты",
      "Сверстать страницу и обеспечить адаптацию"
    ],
    
    constraints: [
      "Проект концептуальный: студия вымышленная",
      "Главный риск — «перебор» с брутализмом",
      "Нужно держать баланс между декоративными приёмами и удобством"
    ],
    
    solution: "Я начал с идеи студии: «мы создаём цифровые артефакты». Выстроил сценарий страницы с сильным первым экраном: крупная типографика, минимум текста, максимум характера. Брутализм использовал как инструмент, а не самоцель: жирные шрифты, резкие контрасты, асимметричная сетка, но при этом сохранил читаемость и логику навигации. Структуру выстроил через чередование полноэкранных блоков и контентных секций: манифест студии → услуги → подход к работе → кейсы → контакты. Типографику сделал главным визуальным элементом: огромные заголовки (80-120px на десктопе), жирное начертание, плотная высота строки. Цветовая схема жёсткая: чёрный, белый, один яркий акцент (красный или оранжевый) для кнопок и важных элементов. Сетку спроектировал асимметричной: блоки разного размера, наложения, смещённые колонки — это создаёт динамику и визуальное напряжение. Добавил грубые элементы: толстые рамки, резкие тени, монохромные изображения. Манифест написал коротко и ёмко: кто мы, что делаем, почему так — без корпоративной воды.",
    
    technologies: [
      { name: "HTML5", desc: "Семантическая структура секций" },
      { name: "CSS3", desc: "Сетка, контрастные блоки, типографика" },
      { name: "JavaScript (ES6+)", desc: "Базовая интерактивность интерфейса" }
    ],
    
    results: [
      "Собран цельный концепт агентского лендинга",
      "Проработана понятная структура",
      "Сформирован «характер» бренда через манифест"
    ],
    
    screenshots: { desktop: "images/screen3.jpg" },
    role: "Дизайнер и фронтенд-разработчик",
    summary: "BRUTAL*STUDIO — практика «смелого интерфейса» с бруталистичной подачей."
  },

  // 4. Architecture chaos - концептуальный проект
  {
    id: 4,
    title: "Architecture chaos",
    tag: "Landing",
    description: "Концептуальный сайт архитектурной студии Modern Arch Studio.",
    image: "images/case4.png",
    link: "https://architecture-cchaos.netlify.app",
    
    overview: "Учебный концептуальный проект архитектурной студии, специализирующейся на экспериментальных и асимметричных решениях.",
    client: "Учебный концепт (самостоятельный проект)",
    year: "2024",
    
    tasks: [
      "Разработать концепцию сайта и визуальную идею проекта",
      "Спроектировать нестандартную сетку с ощущением управляемого хаоса",
      "Сверстать адаптивный лендинг без использования конструкторов",
      "Реализовать анимации, усиливающие архитектурную концепцию"
    ],
    
    constraints: [
      "Проект является учебным, без реального заказчика",
      "Отсутствие дизайн-макета — дизайн создавался сразу в коде",
      "Необходимо сохранить баланс между хаотичной подачей и удобством"
    ],
    
    solution: "Я начал с идеи «хаос как источник формы» — концепции, что архитектура рождается из управляемого беспорядка. Сформировал визуальный образ студии, которая не боится экспериментов и асимметрии. Спроектировал нестандартную сетку на CSS Grid: блоки разного размера, наложения, смещённые колонки — всё это создаёт ощущение динамики и движения. При этом сохранил читаемость и логику: важная информация остаётся на своих местах, а декоративные элементы усиливают атмосферу. Типографику сделал контрастной: крупные заголовки с жирным начертанием против мелкого текста описаний. Добавил анимации на GSAP: элементы появляются с задержками, создавая эффект «сборки» страницы. Цветовая палитра минималистичная — чёрный, белый, один акцентный цвет — чтобы не перегружать и дать дышать архитектурным образам. Адаптивность реализовал через перестроение сетки: на мобильных хаос превращается в упорядоченную вертикальную структуру.",
    
    technologies: [
      { name: "HTML5", desc: "Семантическая разметка структуры страницы" },
      { name: "CSS3 / SCSS", desc: "Сложные сетки, типографика и анимации" },
      { name: "JavaScript (ES6+)", desc: "Логика интерактивных элементов" },
      { name: "GSAP", desc: "Анимация элементов и переходов" }
    ],
    
    results: [
      "Создан полностью рабочий концептуальный лендинг",
      "Реализована нестандартная архитектурная сетка",
      "Проект демонстрирует работу с анимациями"
    ],
    
    screenshots: { desktop: "images/screen4.jpg" },
    role: "Дизайнер и фронтенд-разработчик",
    summary: "Проект позволил пройти полный цикл создания сайта — от идеи до готового продукта."
  },

  // 5. Aero X1 - продуктовый шоурум
  {
    id: 5,
    title: "Aero X1",
    tag: "Product Showroom",
    description: "Учебный концепт презентационного сайта (шоурума) технологичного продукта.",
    image: "images/case5.png",
    link: "https://papagama.github.io/aero-x1-showroom/",
    
    overview: "Учебный концептуальный проект презентационного сайта для вымышленного технологичного продукта Aero X1.",
    client: "Учебный проект (самостоятельная работа)",
    year: "2026",
    
    tasks: [
      "Сформировать концепцию продуктового шоурума",
      "Продумать структуру страницы с акцентом на первый экран",
      "Последовательно раскрыть продукт через блоки преимуществ",
      "Создать визуально чистый и технологичный интерфейс"
    ],
    
    constraints: [
      "Проект учебный, без реального продукта",
      "Концепт без сложной бизнес-логики",
      "Часть идей и текстов сгенерирована нейросетями"
    ],
    
    solution: "Я начал с формирования образа продукта и его характера: Aero X1 — это не просто гаджет, а символ технологичного будущего. Скорость, инновации, премиальность. Выстроил структуру страницы как продуктовый сторителлинг: сильный первый экран с крупным изображением продукта и коротким слоганом → блок «Почему Aero X1» с ключевыми преимуществами → технические характеристики в визуально понятной форме → сценарии использования → призыв к действию. Первый экран сделал максимально чистым: продукт в центре, минимум текста, акцент на визуале. Преимущества представил через иконки и короткие формулировки — никакой воды, только конкретика. Характеристики оформил в виде карточек с цифрами и пояснениями. Использовал нейросети для генерации текстов и идей, но финальную подачу и визуал доводил вручную. Цветовая схема технологичная: тёмный фон, белый текст, синие акценты — классика продуктовых шоурумов.",
    
    technologies: [
      { name: "HTML5", desc: "Семантическая структура секций шоурума" },
      { name: "CSS3", desc: "Современная стилизация, сетки, типографика" },
      { name: "JavaScript (ES6+)", desc: "Поведение интерфейса" },
      { name: "Нейросети (AI)", desc: "Генерация концепции и текстов" }
    ],
    
    results: [
      "Создан учебный продуктовый шоурум",
      "Выстроена логика раскрытия продукта",
      "Отработаны принципы продуктового сторителлинга"
    ],
    
    screenshots: { desktop: "images/screen5.jpg" },
    role: "Дизайнер и фронтенд-разработчик",
    summary: "Практика создания продуктового презентационного сайта."
  },

  // 6. TechStore - интернет-магазин
  {
    id: 6,
    title: "TechStore",
    tag: "Online Store",
    description: "Концепт интернет-магазина электроники с каталогом, карточками товаров и базовой логикой интерфейса.",
    image: "images/case6.png",
    link: "https://papagama.github.io/techstore2/",
    
    overview: "Учебный концептуальный проект интернет-магазина электроники.",
    client: "Учебный проект (самостоятельная работа)",
    year: "2024",
    
    tasks: [
      "Сформировать концепцию интернет-магазина",
      "Продумать структуру главной страницы и каталога",
      "Реализовать карточки товаров с ценами",
      "Выстроить визуальную иерархию блоков"
    ],
    
    constraints: [
      "Проект учебный, без реального заказчика",
      "Концепт без подключения реальной корзины",
      "Часть структуры сгенерирована нейросетями"
    ],
    
    solution: "Я начал с анализа структуры типичного интернет-магазина электроники: главная с промо-блоками и хитами продаж, каталог с фильтрами, карточки товаров с характеристиками. Использовал нейросети для генерации базовой структуры и контента, но всю визуальную иерархию и логику интерфейса выстраивал вручную. Главную страницу спроектировал по принципу воронки: баннер с акцией → категории товаров → хиты продаж → преимущества магазина. Карточки товаров сделал информативными: крупное изображение, название, краткие характеристики, цена, кнопка в корзину. Добавил визуальные акценты на скидки и новинки через цветные бейджи. Каталог организовал через сетку с возможностью переключения на список — базовая функция, которую ожидают пользователи. Цветовая схема нейтральная с яркими акцентами на CTA-кнопках, чтобы направлять внимание к целевым действиям. Типографику выстроил с чёткой иерархией: крупные заголовки категорий, средний размер для названий товаров, мелкий для характеристик.",
    
    technologies: [
      { name: "HTML5", desc: "Семантическая структура страниц" },
      { name: "CSS3", desc: "Сетки, карточки товаров, типографика" },
      { name: "JavaScript (ES6+)", desc: "Базовая логика интерфейса" },
      { name: "Нейросети (AI)", desc: "Генерация структуры и текстов" }
    ],
    
    results: [
      "Создан учебный концепт интернет-магазина",
      "Реализован каталог товаров с карточками",
      "Получен опыт проектирования e-commerce интерфейсов"
    ],
    
    screenshots: { desktop: "images/screen6.jpg" },
    role: "Фронтенд-разработчик и автор концепции",
    summary: "Практика проектирования e-commerce интерфейсов."
  },

  // 7. Белые Ягуары - лендинг сообщества
  {
    id: 7,
    title: "Белые Ягуары",
    tag: "Landing",
    description: "Учебный лендинг сообщества, созданный с использованием нейросетей и доведённый до аккуратного, цельного интерфейса.",
    image: "images/case7.png",
    link: "https://b33-superheroes.lovable.app",
    
    overview: "Учебный проект лендинга для сообщества «Белые Ягуары». Цель — собрать атмосферную страницу с характером: тёмная подача, красные акценты, уверенная типографика и блоки, которые последовательно раскрывают идею команды.",
    client: "Учебный проект (самостоятельная работа)",
    year: "2024",
    
    tasks: [
      "Сформировать концепцию и структуру лендинга с помощью нейросетей",
      "Собрать и организовать контентные блоки",
      "Привести интерфейс к единому стилю: тёмная тема, акцентный цвет",
      "Проверить адаптацию под разные устройства"
    ],
    
    constraints: [
      "Проект учебный, без реального заказчика",
      "Часть текстов генерировались нейросетями",
      "Тёмная тема требует контроля контрастности"
    ],
    
    solution: "Я начал с формирования образа сообщества через нейросети: кто они, какие ценности, какой характер. Получил базовую структуру и тексты, но финальную визуальную подачу делал вручную. Выбрал тёмную тему как основу — она создаёт атмосферу серьёзности и уверенности. Красный акцентный цвет использовал дозированно: только для ключевых элементов (кнопки, заголовки, иконки), чтобы не перегрузить. Структуру страницы выстроил последовательно: сильный первый экран с манифестом → о команде → ценности → достижения → призыв к действию. Типографику сделал жирной и уверенной: крупные заголовки с высоким контрастом, короткие ёмкие формулировки без воды. Блоки организовал через чередование полноэкранных секций и контентных областей с ограниченной шириной — это создаёт ритм и удерживает внимание. Особое внимание уделил контрастности текста на тёмном фоне: все элементы читаемы, нет напряжения для глаз.",
    
    technologies: [
      { name: "HTML5", desc: "Семантическая структура страницы" },
      { name: "CSS3", desc: "Стилизация, тёмная тема и акценты" },
      { name: "JavaScript (ES6+)", desc: "Интерактивность интерфейса" },
      { name: "Нейросети (AI)", desc: "Генерация структуры и текстов" }
    ],
    
    results: [
      "Создан готовый учебный лендинг",
      "Собрана понятная структура страницы",
      "Проект корректно выглядит на разных устройствах",
      "Получен опыт интеграции нейросетей"
    ],
    
    screenshots: { desktop: "images/screen7.jpg" },
    role: "Разработчик и куратор концепции",
    summary: "Практика быстрого подхода с использованием нейросетей и ручной доводкой качества."
  },

  // 8. Form & Function - мебельная мастерская
  {
    id: 8,
    title: "Form & Function",
    tag: "Landing",
    description: "Лендинг мебельной мастерской, собранный на стандартных блоках Tilda с упором на чистую композицию и атмосферу.",
    image: "images/case8.png",
    link: "https://mebel5555.tilda.ws",
    
    overview: "Учебный проект лендинга для мебельной мастерской Form & Function. Цель — собрать спокойную, тёплую и доверительную страницу, которая подчёркивает качество мебели.",
    client: "Учебный проект (самостоятельная работа)",
    year: "2024",
    
    tasks: [
      "Продумать структуру лендинга для мебельной мастерской",
      "Собрать страницу на стандартных блоках Tilda",
      "Выстроить визуальную иерархию блоков",
      "Подобрать изображения и тексты"
    ],
    
    constraints: [
      "Использование только стандартных блоков Tilda",
      "Учебный формат без реального заказчика",
      "Ограниченные возможности кастомизации"
    ],
    
    solution: "Я начал с определения характера мастерской: тепло, качество, внимание к деталям, натуральные материалы. Это не массовое производство, а индивидуальный подход. Выстроил структуру страницы: первый экран с атмосферным изображением и коротким слоганом → философия мастерской → галерея работ → процесс создания → материалы → контакты. Собирал на стандартных блоках Tilda, но уделял максимум внимания композиции: отступы между блоками, размеры изображений, баланс текста и визуала. Цветовая палитра спокойная и натуральная: бежевые, коричневые, белые тона — они ассоциируются с деревом и создают ощущение тепла. Типографику выбрал с засечками для заголовков (классика, надёжность) и без засечек для текста (читаемость). Галерею работ организовал через крупные изображения с минимальными подписями — пусть мебель говорит сама за себя. Добавил блок о материалах с описанием пород дерева и фурнитуры — это формирует доверие и показывает экспертность.",
    
    technologies: [
      { name: "Tilda", desc: "Сборка на стандартных блоках" },
      { name: "UI-композиция", desc: "Работа с отступами и иерархией" },
      { name: "Контент-подача", desc: "Подбор изображений и текстов" }
    ],
    
    results: [
      "Собран цельный учебный лендинг",
      "Выстроена понятная структура страницы",
      "Сайт аккуратно выглядит на всех устройствах",
      "Получен опыт работы с Tilda"
    ],
    
    screenshots: { desktop: "images/screen8.jpg" },
    role: "Дизайнер и сборщик сайта",
    summary: "Практика создания аккуратного сайта на стандартных блоках с акцентом на композицию."
  },

  // 9. Блог - минималистичный концепт
  {
    id: 9,
    title: "Блог",
    tag: "Blog Concept",
    description: "Учебный концепт блога с минималистичным интерфейсом, карточками статей и базовой логикой управления контентом.",
    image: "images/case9.png",
    link: "https://papagama.github.io/blog-project",
    
    overview: "Учебный концептуальный проект блога — пространства для идей, заметок и статей. Цель проекта — создать чистый, спокойный и удобный интерфейс.",
    client: "Учебный проект (самостоятельная работа)",
    year: "2026",
    
    tasks: [
      "Сформировать концепцию минималистичного блога",
      "Продумать структуру главной страницы",
      "Реализовать карточки постов",
      "Добавить базовую логику интерфейса"
    ],
    
    constraints: [
      "Проект учебный, без реальной CMS",
      "Концепт без серверной части",
      "Часть текстов сгенерирована нейросетями"
    ],
    
    solution: "Я начал с философии минималистичного блога: ничего лишнего, максимум воздуха, фокус на контенте. Использовал нейросети для генерации идей структуры и примеров текстов, но интерфейс проектировал и реализовывал вручную. Главную страницу спроектировал как ленту карточек статей: крупный заголовок, короткое описание, дата публикации, время чтения. Сетку сделал адаптивной: три колонки на десктопе, две на планшете, одна на мобильном. Типографику выбрал максимально читаемую: крупный размер основного текста (18-20px), увеличенная высота строки (1.6-1.8), достаточные отступы между абзацами. Цветовая схема нейтральная: светлый фон, тёмный текст, один акцентный цвет для ссылок и кнопок. Карточки статей сделал без изображений — чистый текстовый формат, как в классических блогах. Добавил тонкие разделители между карточками и мягкие тени для создания глубины без визуального шума. Навигацию организовал через простое меню: главная, категории, о блоге — никаких сложных структур.",
    
    technologies: [
      { name: "HTML5", desc: "Семантическая структура страниц" },
      { name: "CSS3", desc: "Минималистичная стилизация" },
      { name: "JavaScript (ES6+)", desc: "Базовая логика интерфейса" },
      { name: "Нейросети (AI)", desc: "Генерация идей и текстов" }
    ],
    
    results: [
      "Создан учебный концепт блога",
      "Реализована структура карточек статей",
      "Сайт корректно выглядит на всех устройствах",
      "Отработаны принципы минималистичного UI"
    ],
    
    screenshots: { desktop: "images/screen9.jpg" },
    role: "Дизайнер и фронтенд-разработчик",
    summary: "Практика создания контентного интерфейса без перегрузки визуальными элементами."
  }
];

// ===========================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ===========================================

/**
 * Вычисляет общее количество страниц
 */
function getTotalPages() {
    return Math.ceil(portfolioData.length / ITEMS_PER_PAGE);
}

/**
 * Возвращает массив работ для указанной страницы
 */
function getItemsForPage(page) {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return portfolioData.slice(startIndex, endIndex);
}

/**
 * Создает SVG-иконку стрелки для ссылки
 */
function createArrowSVG() {
    return `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
}

/**
 * Создает HTML-разметку для одной карточки работы
 */
function createPortfolioCard(item) {
    return `
        <a href="case.html?id=${item.id}" class="portfolio__item reveal">
            <div class="portfolio__image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="portfolio__overlay">
                    <span class="portfolio__arrow">
                        ${createArrowSVG()}
                    </span>
                </div>
            </div>
            <div class="portfolio__content">
                <span class="portfolio__tag">${item.tag}</span>
                <h3 class="portfolio__name">${item.title}</h3>
                <p class="portfolio__description">${item.description}</p>
            </div>
        </a>
    `;
}

/**
 * Создает HTML-разметку для пагинации
 */
function createPagination() {
    const totalPages = getTotalPages();
    
    if (totalPages <= 1) return '';
    
    let paginationHTML = '<div class="pagination">';
    
    // Кнопка "Назад"
    paginationHTML += `
        <button class="pagination__btn pagination__btn--prev ${currentPage === 1 ? 'pagination__btn--disabled' : ''}" 
                ${currentPage === 1 ? 'disabled' : ''} 
                data-action="prev">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    `;
    
    // Номера страниц
    paginationHTML += '<div class="pagination__numbers">';
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <button class="pagination__number ${i === currentPage ? 'pagination__number--active' : ''}" 
                    data-page="${i}">
                ${i}
            </button>
        `;
    }
    paginationHTML += '</div>';
    
    // Кнопка "Вперед"
    paginationHTML += `
        <button class="pagination__btn pagination__btn--next ${currentPage === totalPages ? 'pagination__btn--disabled' : ''}" 
                ${currentPage === totalPages ? 'disabled' : ''} 
                data-action="next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    `;
    
    paginationHTML += '</div>';
    
    return paginationHTML;
}

// ===========================================
// РЕНДЕРИНГ
// ===========================================

/**
 * Отрисовывает карточки работ и пагинацию
 */
function renderPortfolio() {
    const gridContainer = document.getElementById('portfolio-grid');
    const paginationContainer = document.getElementById('portfolio-pagination');
    
    if (!gridContainer) return;
    
    const items = getItemsForPage(currentPage);
    const cardsHTML = items.map(item => createPortfolioCard(item)).join('');
    
    gridContainer.innerHTML = cardsHTML;
    
    if (paginationContainer) {
        paginationContainer.innerHTML = createPagination();
        attachPaginationHandlers();
    }
    
    animateCards();
}

/**
 * Добавляет анимацию появления для карточек
 */
function animateCards() {
    setTimeout(() => {
        const cards = document.querySelectorAll('#portfolio-grid .reveal');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('active');
            }, index * 100);
        });
    }, 50);
}

// ===========================================
// ЛОГИКА СТРАНИЦЫ КЕЙСА
// ===========================================

function initCaseStudy() {
    const heroTitle = document.getElementById('case-title');
    if (!heroTitle) return;

    const urlParams = new URLSearchParams(window.location.search);
    const caseId = parseInt(urlParams.get('id'), 10);

    if (!caseId) {
        window.location.href = 'index.html';
        return;
    }

    const item = portfolioData.find(project => project.id === caseId);

    if (!item) {
        heroTitle.textContent = 'Project not found';
        return;
    }

    document.title = `${item.title} — Case Study`;
    heroTitle.textContent = item.title || "Untitled Project";
    setText('case-hero-desc', item.description);
    
    const heroBg = document.getElementById('hero-bg');
    if (heroBg && item.image) {
        heroBg.style.backgroundImage = `url('${item.image}')`;
    }

    const stackContainer = document.getElementById('case-stack');
    if (stackContainer && item.technologies) {
        stackContainer.innerHTML = item.technologies.slice(0, 4).map(t => 
            `<span class="stack-badge">${t.name}</span>`
        ).join('');
    }

    setText('case-overview', item.overview || "Описание проекта временно отсутствует.");
    
    const metaContainer = document.getElementById('case-meta');
    if (metaContainer) {
        metaContainer.innerHTML = `
            <div class="meta-item"><span>Client</span>${item.client || "Confidential"}</div>
            <div class="meta-item"><span>Year</span>${item.year || "2024"}</div>
            <div class="meta-item"><span>Type</span>${item.tag || "Website"}</div>
        `;
    }

    fillList('case-tasks', item.tasks);
    fillList('case-constraints', item.constraints);
    setText('case-solution', item.solution || "Решение в процессе описания.");

    const techContainer = document.getElementById('case-technologies');
    if (techContainer && item.technologies) {
        techContainer.innerHTML = item.technologies.map(t => `
            <div class="tech-item">
                <h4>${t.name}</h4>
                <p>${t.desc}</p>
            </div>
        `).join('');
    }

    fillList('case-results', item.results);
    
    var linkWrap = document.getElementById('case-site-link-wrap');
    if (linkWrap && item.link && item.link !== '#') {
        linkWrap.innerHTML = '';
        var a = document.createElement('a');
        a.href = item.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'btn';
        a.innerHTML = '<span>Посмотреть сайт</span>';
        linkWrap.appendChild(a);
    }

    const screenContainer = document.getElementById('case-screenshots');
    if (screenContainer) {
        function src(path) {
            if (!path) return '';
            if (path.indexOf('http') === 0 || path.indexOf('//') === 0) return path;
            return path.charAt(0) === '/' ? path : './' + path.replace(/^\.\//, '');
        }
        const screens = item.screenshots || {};
        const desktopSrc = screens.desktop || item.image;
        const imgStyle = 'display:block!important;opacity:1!important;visibility:visible!important;transform:none!important;margin:20px auto!important;max-width:90%!important;width:auto!important;height:auto!important;border-radius:16px!important;box-shadow:0 30px 80px rgba(0,0,0,0.15)!important';
        let screensHTML = '';
        if (desktopSrc) {
            const fallback = item.image && item.image !== desktopSrc ? item.image : '';
            screensHTML += '<img src="' + src(desktopSrc) + '" alt="Экран сайта" loading="lazy" style="' + imgStyle + '"' + (fallback ? ' data-fb="' + src(fallback) + '" onerror="var f=this.getAttribute(\'data-fb\');if(f){this.src=f;this.removeAttribute(\'data-fb\')}"' : '') + '>';
        }
        if (screens.tablet) {
            screensHTML += '<img src="' + src(screens.tablet) + '" alt="Планшет" loading="lazy" style="' + imgStyle + 'max-width:70%!important;">';
        }
        if (screens.mobile) {
            screensHTML += '<img src="' + src(screens.mobile) + '" alt="Мобильный" loading="lazy" style="' + imgStyle + 'max-width:30%!important;">';
        }
        screenContainer.innerHTML = screensHTML || '<p class="text-muted">Скриншоты подготавливаются…</p>';
        var section = screenContainer.closest('.case-section');
        if (section) {
            section.classList.add('active');
            section.style.opacity = '1';
            section.style.transform = 'none';
        }
        screenContainer.querySelectorAll('img').forEach(function (img) {
            img.classList.add('active');
            img.style.opacity = '1';
            img.style.visibility = 'visible';
            img.style.transform = 'none';
        });
    }

    setText('case-role', item.role || "Разработка и верстка.");
    setText('case-summary', item.summary || "Проект успешно завершен.");

    setTimeout(() => {
        const dynamicReveals = document.querySelectorAll('#case-screenshots .reveal');
        
        if (dynamicReveals.length > 0) {
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                
                dynamicReveals.forEach(el => observer.observe(el));
            } else {
                dynamicReveals.forEach(el => el.classList.add('active'));
            }
        }
    }, 100);
}

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text || "";
}

function fillList(id, items) {
    const el = document.getElementById(id);
    if (!el) return;
    
    if (items && items.length > 0) {
        el.innerHTML = items.map(i => `<li>${i}</li>`).join('');
    } else {
        el.innerHTML = '<li class="text-muted">Информация уточняется</li>';
    }
}

// ===========================================
// ОБРАБОТЧИКИ СОБЫТИЙ
// ===========================================

function attachPaginationHandlers() {
    const paginationContainer = document.getElementById('portfolio-pagination');
    
    if (!paginationContainer) return;
    
    paginationContainer.addEventListener('click', (e) => {
        const target = e.target.closest('button');
        
        if (!target) return;
        
        if (target.dataset.page) {
            const page = parseInt(target.dataset.page, 10);
            if (page !== currentPage) {
                currentPage = page;
                renderPortfolio();
                scrollToPortfolio();
            }
        }
        
        if (target.dataset.action === 'prev' && currentPage > 1) {
            currentPage--;
            renderPortfolio();
            scrollToPortfolio();
        }
        
        if (target.dataset.action === 'next' && currentPage < getTotalPages()) {
            currentPage++;
            renderPortfolio();
            scrollToPortfolio();
        }
    });
}

function scrollToPortfolio() {
    const worksSection = document.getElementById('works');
    if (worksSection) {
        const headerHeight = 80;
        const sectionTop = worksSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// ===========================================
// ИНИЦИАЛИЗАЦИЯ
// ===========================================

let currentPage = 1;

function initPortfolio() {
    renderPortfolio();
    initCaseStudy();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}
