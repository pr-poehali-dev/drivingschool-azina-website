import { useState } from "react";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Алексей М.",
    date: "Март 2024",
    rating: 5,
    text: "Сдал с первого раза! Инструктор Виктор — профессионал высшего класса. Объяснял каждую ошибку спокойно и по делу. Очень рекомендую!",
    avatar: "А",
  },
  {
    name: "Светлана К.",
    date: "Февраль 2024",
    rating: 5,
    text: "Отличная школа! Теория понятная, практика продуманная. Уже через месяц чувствую себя уверенно за рулём. Спасибо огромное!",
    avatar: "С",
  },
  {
    name: "Дмитрий В.",
    date: "Январь 2024",
    rating: 4,
    text: "Хороший подход к обучению, удобное расписание. Площадка для отработки навыков — большая и удобная. Доволен результатом.",
    avatar: "Д",
  },
  {
    name: "Марина Ж.",
    date: "Декабрь 2023",
    rating: 5,
    text: "Боялась садиться за руль, но инструктора сумели победить мой страх. Сдала экзамен и теперь езжу каждый день. Огромное спасибо!",
    avatar: "М",
  },
  {
    name: "Роман П.",
    date: "Ноябрь 2023",
    rating: 5,
    text: "Всё чётко: теория онлайн, практика по записи, инструктор знает своё дело. Лучшая автошкола в районе, без лишних слов.",
    avatar: "Р",
  },
  {
    name: "Екатерина Л.",
    date: "Октябрь 2023",
    rating: 5,
    text: "Записалась, не раздумывая, по совету подруги. Не пожалела ни разу! Всё организовано отлично, инструктор терпеливый и внимательный.",
    avatar: "Е",
  },
];



function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-4 h-4 ${s <= rating ? "text-azina-red" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-azina-dark min-h-screen font-rubik text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-azina-dark/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-oswald text-xl font-bold tracking-widest uppercase">
            <span className="text-white">АВТО</span>
            <span className="text-azina-red">ШКОЛА</span>
            <span className="text-white ml-2">АЗИНА</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "home", label: "Главная" },
              { id: "about", label: "О школе" },
              { id: "reviews", label: "Отзывы" },
              { id: "contacts", label: "Контакты" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-oswald text-sm tracking-widest uppercase transition-colors hover:text-azina-red ${
                  activeSection === item.id ? "text-azina-red" : "text-white/70"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contacts")}
              className="bg-azina-red text-white font-oswald text-sm tracking-widest uppercase px-5 py-2 hover:bg-red-700 transition-colors"
            >
              Записаться
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-azina-gray border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {[
              { id: "home", label: "Главная" },
              { id: "about", label: "О школе" },
              { id: "reviews", label: "Отзывы" },
              { id: "contacts", label: "Контакты" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-oswald text-sm tracking-widest uppercase text-white/70 hover:text-azina-red transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/0f79d3c1-2389-4030-ac4f-5e52670b7840/files/fa3d6811-27e1-4fa4-8450-e1d908d4a323.jpg"
            alt="Volkswagen Polo"
            className="w-full h-full object-cover opacity-40 animate-zoom-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-azina-dark via-azina-dark/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-azina-dark via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[15, 35, 55, 72, 88].map((top, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-azina-red/30 to-transparent animate-speed-line"
              style={{ top: `${top}%`, width: "60%", animationDelay: `${i * 0.3}s`, animationDuration: `${2 + i * 0.4}s` }}
            />
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-1 bg-azina-red" />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-azina-red/20 border border-azina-red/40 px-4 py-1.5 mb-6 opacity-0 animate-fade-in">
              <div className="w-2 h-2 bg-azina-red rounded-full" />
              <span className="font-oswald text-xs tracking-widest uppercase text-azina-red">
                Категория B · Официальная автошкола
              </span>
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-none tracking-tight mb-6 opacity-0 animate-fade-in-delay">
              ТВОЙ ПУТЬ
              <br />
              <span className="text-azina-red">ЗА РУЛЁМ</span>
              <br />
              НАЧИНАЕТСЯ
              <br />
              ЗДЕСЬ
            </h1>

            <p className="font-rubik text-white/60 text-lg leading-relaxed mb-10 opacity-0 animate-fade-in-delay2">
              Профессиональные инструкторы, современные автомобили и индивидуальный подход к каждому ученику.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay2">
              <button
                onClick={() => scrollTo("contacts")}
                className="bg-azina-red text-white font-oswald text-sm tracking-widest uppercase px-10 py-4 hover:bg-red-700 transition-colors"
              >
                Записаться на курс
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="border border-white/30 text-white font-oswald text-sm tracking-widest uppercase px-10 py-4 hover:border-azina-red hover:text-azina-red transition-all"
              >
                Узнать больше
              </button>
            </div>
          </div>
        </div>


      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-azina-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-1 bg-azina-red" />
            <span className="font-oswald text-xs tracking-widest uppercase text-azina-red">О школе</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold leading-tight mb-8">
                МЫ ГОТОВИМ
                <br />
                <span className="text-azina-red">УВЕРЕННЫХ</span>
                <br />
                ВОДИТЕЛЕЙ
              </h2>
              <p className="font-rubik text-white/60 leading-relaxed mb-6">
                Автошкола Азина работает с 2012 года. За это время мы обучили более 3 200 водителей,
                которые уверенно чувствуют себя на дорогах любого города России.
              </p>
              <p className="font-rubik text-white/60 leading-relaxed mb-10">
                Наши инструкторы — опытные профессионалы с многолетним стажем. Индивидуальный подход
                к каждому ученику, удобное расписание и современный парк автомобилей.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Car", text: "10 современных авто" },
                  { icon: "Users", text: "8 инструкторов" },
                  { icon: "MapPin", text: "Своя учебная площадка" },
                  { icon: "Award", text: "Лицензия ГИБДД" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-azina-dark/50 border border-white/10 p-4">
                    <div className="w-8 h-8 bg-azina-red/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} fallback="Star" size={16} className="text-azina-red" />
                    </div>
                    <span className="font-rubik text-sm text-white/70">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-azina-red/20" />
              <div className="relative bg-azina-dark p-8">
                <h3 className="font-oswald text-2xl font-bold mb-6 tracking-wide">ЧТО ВКЛЮЧЕНО В КУРС</h3>
                {[
                  { num: "01", title: "Теория", desc: "56 часов · онлайн или в классе" },
                  { num: "02", title: "Вождение", desc: "56 часов с инструктором" },
                  { num: "03", title: "Площадка", desc: "Отработка маневрирования" },
                  { num: "04", title: "Экзамен", desc: "Подготовка и сопровождение" },
                ].map((step) => (
                  <div key={step.num} className="flex gap-6 py-5 border-b border-white/10 last:border-0">
                    <span className="font-oswald text-3xl font-bold text-azina-red/40 leading-none">{step.num}</span>
                    <div>
                      <div className="font-oswald text-lg font-bold tracking-wide">{step.title}</div>
                      <div className="font-rubik text-sm text-white/50 mt-1">{step.desc}</div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => scrollTo("contacts")}
                  className="mt-6 w-full bg-azina-red text-white font-oswald text-sm tracking-widest uppercase py-4 hover:bg-red-700 transition-colors"
                >
                  Узнать стоимость
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-azina-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-azina-red" />
            <span className="font-oswald text-xs tracking-widest uppercase text-azina-red">Отзывы</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold leading-tight">
              ЧТО ГОВОРЯТ
              <br />
              <span className="text-azina-red">ВЫПУСКНИКИ</span>
            </h2>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <div className="font-oswald text-5xl font-bold text-azina-red">4.9</div>
              <div>
                <StarRating rating={5} />
                <div className="font-rubik text-xs text-white/40 mt-1">на основе 340 отзывов</div>
              </div>
            </div>
          </div>

          <div className="mt-0 bg-azina-gray border border-white/10 p-8 md:p-12 text-center">
            <div className="font-oswald text-xs tracking-widest uppercase text-azina-red mb-4">Присоединяйтесь</div>
            <h3 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
              СТАНЬТЕ СЛЕДУЮЩИМ
              <br />
              <span className="text-azina-red">УСПЕШНЫМ ВОДИТЕЛЕМ</span>
            </h3>
            <p className="font-rubik text-white/50 mb-8 max-w-md mx-auto">
              Запишитесь на курс сегодня и получите консультацию бесплатно
            </p>
            <button
              onClick={() => scrollTo("contacts")}
              className="bg-azina-red text-white font-oswald text-sm tracking-widest uppercase px-12 py-4 hover:bg-red-700 transition-colors"
            >
              Записаться бесплатно
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-azina-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-azina-red" />
            <span className="font-oswald text-xs tracking-widest uppercase text-azina-red">Контакты</span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold leading-tight mb-16">
            СВЯЖИТЕСЬ
            <br />
            <span className="text-azina-red">С НАМИ</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: "Phone", title: "Телефон", value: "+7 (XXX) XXX-XX-XX", sub: "Пн–Сб, 9:00–19:00" },
                { icon: "MapPin", title: "Адрес", value: "ул. Азина, д. 1", sub: "г. Ижевск" },
                { icon: "Mail", title: "Email", value: "info@avto-azina.ru", sub: "Ответим в течение часа" },
                { icon: "Clock", title: "Режим работы", value: "Пн–Сб: 9:00–19:00", sub: "Вс: выходной" },
              ].map((contact, i) => (
                <div key={i} className="flex gap-5 items-start bg-azina-dark/50 border border-white/10 p-5 hover:border-azina-red/30 transition-colors">
                  <div className="w-10 h-10 bg-azina-red/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={contact.icon} fallback="Star" size={18} className="text-azina-red" />
                  </div>
                  <div>
                    <div className="font-oswald text-xs tracking-widest uppercase text-white/40 mb-1">{contact.title}</div>
                    <div className="font-oswald font-bold text-lg">{contact.value}</div>
                    <div className="font-rubik text-xs text-white/40">{contact.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-azina-dark border border-white/10 p-8">
              <h3 className="font-oswald text-2xl font-bold tracking-wide mb-2">ОСТАВЬТЕ ЗАЯВКУ</h3>
              <p className="font-rubik text-sm text-white/40 mb-8">Мы перезвоним вам в течение 15 минут</p>

              <div className="space-y-4">
                <div>
                  <label className="font-oswald text-xs tracking-widest uppercase text-white/40 block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full bg-azina-gray border border-white/20 text-white font-rubik px-4 py-3 focus:outline-none focus:border-azina-red transition-colors placeholder-white/20"
                  />
                </div>
                <div>
                  <label className="font-oswald text-xs tracking-widest uppercase text-white/40 block mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-azina-gray border border-white/20 text-white font-rubik px-4 py-3 focus:outline-none focus:border-azina-red transition-colors placeholder-white/20"
                  />
                </div>
                <div>
                  <label className="font-oswald text-xs tracking-widest uppercase text-white/40 block mb-2">Удобное время</label>
                  <input
                    type="text"
                    placeholder="Например: утром до 11:00"
                    className="w-full bg-azina-gray border border-white/20 text-white font-rubik px-4 py-3 focus:outline-none focus:border-azina-red transition-colors placeholder-white/20"
                  />
                </div>
                <button className="w-full bg-azina-red text-white font-oswald text-sm tracking-widest uppercase py-4 mt-2 hover:bg-red-700 transition-colors">
                  Отправить заявку
                </button>
                <p className="font-rubik text-xs text-white/30 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-azina-dark border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-oswald text-lg font-bold tracking-widest uppercase">
            <span className="text-white">АВТО</span>
            <span className="text-azina-red">ШКОЛА</span>
            <span className="text-white ml-2">АЗИНА</span>
          </div>
          <div className="font-rubik text-xs text-white/30">© 2024 Автошкола Азина. Все права защищены.</div>
          <div className="flex gap-6">
            {["Главная", "О школе", "Отзывы", "Контакты"].map((item, i) => (
              <button
                key={i}
                onClick={() => scrollTo(["home", "about", "reviews", "contacts"][i])}
                className="font-oswald text-xs tracking-widest uppercase text-white/40 hover:text-azina-red transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}