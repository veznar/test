import { useState, useEffect, useCallback } from 'react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 15;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="w-full h-screen flex flex-col" style={{ background: '#101820' }}>
      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        {currentSlide === 0 && <Slide1 />}
        {currentSlide === 1 && <Slide2 />}
        {currentSlide === 2 && <Slide3 />}
        {currentSlide === 3 && <Slide4 />}
        {currentSlide === 4 && <Slide5 />}
        {currentSlide === 5 && <Slide6 />}
        {currentSlide === 6 && <Slide7 />}
        {currentSlide === 7 && <Slide8 />}
        {currentSlide === 8 && <Slide9 />}
        {currentSlide === 9 && <Slide10 />}
        {currentSlide === 10 && <Slide11 />}
        {currentSlide === 11 && <Slide12 />}
        {currentSlide === 12 && <Slide13 />}
        {currentSlide === 13 && <Slide14 />}
        {currentSlide === 14 && <Slide15 />}
      </div>

      {/* Navigation */}
      <nav className="h-14 flex items-center justify-between px-4 shrink-0 border-t border-white/10" style={{ background: '#0a0f14' }}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border border-white/40 relative">
            <div className="absolute top-0 right-0 w-3/4 h-3/4" style={{ background: '#EF3340' }}></div>
          </div>
          <span className="text-white/50 text-xs hidden sm:block">Ростех</span>
        </div>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === currentSlide ? '24px' : '8px',
                background: i === currentSlide ? '#EF3340' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={prevSlide} disabled={currentSlide === 0}
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white disabled:opacity-20 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-white/50 text-xs min-w-[3rem] text-center">{currentSlide + 1} / {totalSlides}</span>
          <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1}
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white disabled:opacity-20 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

// ===== SLIDES =====

function Slide1() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative px-8" style={{ background: '#101820' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>
      {/* Decorative squares */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/10 opacity-20"></div>

      <div className="text-center max-w-5xl anim-fade">
        <div className="flex justify-center mb-8">
          <div className="relative w-20 h-20 border-2 border-white">
            <div className="absolute top-0 right-0 w-3/4 h-3/4" style={{ background: '#EF3340' }}></div>
          </div>
        </div>
        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          Ростех и ГТЛК подписали контракт
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight" style={{ color: '#EF3340' }}>
          на поставку 72 вертолётов Ми-8
        </h2>
        <p className="text-white/60 text-xl mt-6">для регионов России</p>

        <div className="mt-12 flex items-center justify-center gap-4 anim-fade d3">
          <div className="h-px w-16" style={{ background: '#236192' }}></div>
          <span className="text-white/40 text-sm uppercase tracking-widest">11 сентября 2026</span>
          <div className="h-px w-16" style={{ background: '#236192' }}></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full py-4 px-8 flex justify-between items-center" style={{ background: 'rgba(35,97,146,0.15)' }}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border border-white/40 relative">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white/40"></div>
          </div>
          <span className="text-white/60 text-sm">Ростех</span>
        </div>
        <span className="text-white/40 text-xs">Партнёр в развитии</span>
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#236192' }}>Обзор сделки</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#101820' }}>Ключевые параметры контракта</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="anim-fade d2 p-6 rounded" style={{ background: '#101820' }}>
            <div className="text-4xl font-bold mb-2" style={{ color: '#EF3340' }}>72</div>
            <div className="text-white text-lg">вертолёта Ми-8МТВ-1</div>
            <div className="text-white/50 text-sm mt-2">транспортный вариант</div>
          </div>
          <div className="anim-fade d3 p-6 rounded border-2" style={{ borderColor: '#236192' }}>
            <div className="text-4xl font-bold mb-2" style={{ color: '#236192' }}>КВЗ</div>
            <div className="text-lg" style={{ color: '#101820' }}>Казанский вертолётный завод</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(16,24,32,0.5)' }}>место производства</div>
          </div>
          <div className="anim-fade d4 p-6 rounded border-2" style={{ borderColor: '#101820' }}>
            <div className="text-4xl font-bold mb-2" style={{ color: '#101820' }}>ФНБ</div>
            <div className="text-lg" style={{ color: '#101820' }}>Фонд национального благосостояния</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(16,24,32,0.5)' }}>источник финансирования</div>
          </div>
          <div className="anim-fade d5 p-6 rounded" style={{ background: '#236192' }}>
            <div className="text-white text-4xl font-bold mb-2">2026</div>
            <div className="text-white text-lg">первые поставки</div>
            <div className="text-white/50 text-sm mt-2">до конца текущего года</div>
          </div>
        </div>
      </div>

      <Footer num={2} />
    </div>
  );
}

function Slide3() {
  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#236192' }}>Стороны контракта</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: '#101820' }}>Партнёры по сделке</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          <div className="anim-left d2">
            <div className="pl-6 py-4" style={{ borderLeft: '4px solid #EF3340' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#101820' }}>Госкорпорация Ростех</h3>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(16,24,32,0.7)' }}>
                Один из крупнейших промышленных конгломератов России. Объединяет более 800 организаций.
                Холдинг «Вертолёты России» — разработчик и производитель вертолётной техники.
              </p>
            </div>
          </div>
          <div className="anim-right d3">
            <div className="pl-6 py-4" style={{ borderLeft: '4px solid #236192' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#101820' }}>ГТЛК (группа ВЭБ.РФ)</h3>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(16,24,32,0.7)' }}>
                Государственная транспортная лизинговая компания — институт развития, обеспечивающий обновление
                транспортной системы страны. Выполняет задачи государственного уровня.
              </p>
            </div>
          </div>
        </div>

        <div className="anim-fade d5 mt-8 p-4 rounded" style={{ background: 'rgba(16,24,32,0.04)' }}>
          <p className="text-sm" style={{ color: 'rgba(16,24,32,0.7)' }}>
            <span className="font-bold" style={{ color: '#236192' }}>Минпромторг России</span> — поддержка проекта в рамках инвестпрограммы по обновлению вертолётного парка
          </p>
        </div>
      </div>

      <Footer num={3} />
    </div>
  );
}

function Slide4() {
  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#101820' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5">
        <div className="absolute top-1/4 right-10 w-80 h-80 border border-white rotate-12"></div>
      </div>

      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#EF3340' }}>Вертолёт</span>
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">Ми-8МТВ-1</h2>
          <p className="text-white/50 text-xl mb-8">Глубокая модернизация самого массового вертолёта в истории авиации</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div className="anim-fade d2 border border-white/20 p-6">
            <div className="text-3xl mb-3">🚁</div>
            <h4 className="text-white font-bold text-lg mb-2">Многоцелевой</h4>
            <p className="text-white/50 text-sm">Перевозка людей и грузов в удалённые и труднодоступные населённые пункты</p>
          </div>
          <div className="anim-fade d3 border border-white/20 p-6">
            <div className="text-3xl mb-3">⚙️</div>
            <h4 className="text-white font-bold text-lg mb-2">Модульный</h4>
            <p className="text-white/50 text-sm">Оснащается модулями для поисково-спасательных и медицинских задач</p>
          </div>
          <div className="anim-fade d4 border border-white/20 p-6">
            <div className="text-3xl mb-3">⛽</div>
            <h4 className="text-white font-bold text-lg mb-2">Доп. баки 915 л</h4>
            <p className="text-white/50 text-sm">Увеличение дальности полёта для районов с большой протяжённостью</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full py-4 px-8 flex justify-between items-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <span className="text-white/40 text-xs">Фото: Вертолёты России</span>
        <span className="text-white/40 text-xs">04 / 15</span>
      </div>
    </div>
  );
}

function Slide5() {
  const items = [
    { label: 'Повышенная грузоподъёмность', desc: 'при перевозке груза на внешней подвеске' },
    { label: 'Увеличенная максимальная взлётная масса', desc: 'больше полезной нагрузки за вылет' },
    { label: 'Расширенные возможности в высокогорье', desc: 'эксплуатация в горной местности' },
    { label: 'Дополнительные топливные баки', desc: '915 литров каждый для увеличения дальности' },
    { label: 'Всепогодность', desc: 'работа в различных климатических условиях' },
    { label: 'Улучшенные ЛТХ', desc: 'улучшенные лётно-технические характеристики' },
  ];

  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#236192' }}>ТТХ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#101820' }}>Технические преимущества Ми-8МТВ-1</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 max-w-5xl">
          {items.map((item, i) => (
            <div key={i} className="anim-fade flex items-start gap-4 py-3 border-b" style={{ borderColor: 'rgba(16,24,32,0.1)', animationDelay: `${0.2 + i * 0.1}s` }}>
              <div className="w-2 h-2 mt-2 shrink-0" style={{ background: '#EF3340' }}></div>
              <div>
                <div className="font-bold text-base" style={{ color: '#101820' }}>{item.label}</div>
                <div className="text-sm" style={{ color: 'rgba(16,24,32,0.5)' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer num={5} />
    </div>
  );
}

function Slide6() {
  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#236192' }}>Производитель</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#101820' }}>Казанский вертолётный завод</h2>
        </div>

        <div className="max-w-5xl">
          <div className="anim-fade d2 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 text-center" style={{ background: '#101820' }}>
              <div className="text-4xl font-bold" style={{ color: '#EF3340' }}>1944</div>
              <div className="text-white/60 text-sm mt-2">год основания</div>
            </div>
            <div className="p-6 text-center" style={{ background: '#236192' }}>
              <div className="text-white text-4xl font-bold">80+</div>
              <div className="text-white/60 text-sm mt-2">лет опыта</div>
            </div>
            <div className="p-6 text-center border-2" style={{ borderColor: '#101820' }}>
              <div className="text-4xl font-bold" style={{ color: '#101820' }}>12 000+</div>
              <div className="text-sm mt-2" style={{ color: 'rgba(16,24,32,0.5)' }}>вертолётов произведено</div>
            </div>
          </div>

          <div className="anim-fade d4 p-6 rounded" style={{ background: 'rgba(16,24,32,0.04)' }}>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(16,24,32,0.7)' }}>
              Казанский вертолётный завод (входит в холдинг «Вертолёты России» Госкорпорации Ростех) —
              один из ведущих вертолётных заводов России. Здесь производится вся линейка вертолётов Ми-8,
              которые являются самыми массовыми вертолётами в мировой авиации.
            </p>
          </div>
        </div>
      </div>

      <Footer num={6} />
    </div>
  );
}

function Slide7() {
  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#101820' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#EF3340' }}>Государственная поддержка</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">Механизм реализации</h2>
        </div>

        <div className="max-w-5xl space-y-6">
          <div className="anim-fade d2 flex items-start gap-6">
            <div className="w-12 h-12 flex items-center justify-center shrink-0 text-white font-bold text-lg" style={{ background: '#EF3340' }}>1</div>
            <div>
              <h4 className="text-white font-bold text-lg">Минпромторг России</h4>
              <p className="text-white/50 text-sm mt-1">Поддержка проекта в рамках инвестиционного проекта по обновлению вертолётного парка</p>
            </div>
          </div>
          <div className="anim-fade d3 flex items-start gap-6">
            <div className="w-12 h-12 flex items-center justify-center shrink-0 text-white font-bold text-lg" style={{ background: '#236192' }}>2</div>
            <div>
              <h4 className="text-white font-bold text-lg">Фонд национального благосостояния (ФНБ)</h4>
              <p className="text-white/50 text-sm mt-1">Использование средств ФНБ для финансирования поставок вертолётной техники</p>
            </div>
          </div>
          <div className="anim-fade d4 flex items-start gap-6">
            <div className="w-12 h-12 flex items-center justify-center shrink-0 text-white font-bold text-lg border-2 border-white">3</div>
            <div>
              <h4 className="text-white font-bold text-lg">Льготный лизинг</h4>
              <p className="text-white/50 text-sm mt-1">Передача техники авиаперевозчикам на льготных условиях через механизм лизинга ГТЛК</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full py-4 px-8 flex justify-between items-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <span className="text-white/40 text-xs">Партнёр в развитии</span>
        <span className="text-white/40 text-xs">07 / 15</span>
      </div>
    </div>
  );
}

function Slide8() {
  const goals = [
    { icon: '🔄', title: 'Обновление парка', text: 'Замена старых машин новой современной техникой' },
    { icon: '🛡️', title: 'Безопасность', text: 'Повышение безопасности и надёжности авиасообщения' },
    { icon: '🗺️', title: 'Транспортная связанность', text: 'Развитие транспортной системы и доступности регионов' },
    { icon: '🏭', title: 'Развитие машиностроения', text: 'Содействие развитию российского вертолётостроения' },
  ];

  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#236192' }}>Цели проекта</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: '#101820' }}>Стратегические задачи</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {goals.map((item, i) => (
            <div key={i} className="anim-fade flex gap-4 p-5 border transition-colors" style={{ borderColor: 'rgba(16,24,32,0.1)', animationDelay: `${0.2 + i * 0.1}s` }}>
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h4 className="font-bold text-lg" style={{ color: '#101820' }}>{item.title}</h4>
                <p className="text-sm mt-1" style={{ color: 'rgba(16,24,32,0.5)' }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer num={8} />
    </div>
  );
}

function Slide9() {
  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#236192' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white rounded-full"></div>
      </div>

      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">Статистика</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Уже поставлено</h2>
          <p className="text-white/60 text-lg mb-10">В рамках инвестпроекта 2023–2026 гг.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
          <div className="anim-scale d2 text-center">
            <div className="text-white text-7xl md:text-9xl font-bold leading-none">86</div>
            <div className="text-white/70 text-xl mt-4">вертолётов уже переданы</div>
            <div className="text-white/40 text-sm mt-2">региональным авиакомпаниям</div>
          </div>

          <div className="anim-fade d4 hidden md:block w-px h-40" style={{ background: 'rgba(255,255,255,0.2)' }}></div>

          <div className="anim-fade d5 space-y-4">
            {[
              'Ми-8МТВ-1 транспортный вариант',
              'Казанский вертолётный завод',
              'Средства ФНБ',
              'Льготные условия для эксплуатантов',
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-3 h-3" style={{ background: i % 2 === 0 ? '#EF3340' : '#ffffff' }}></div>
                <span className="text-white text-base">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full py-4 px-8 flex justify-between items-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <span className="text-white/40 text-xs">Партнёр в развитии</span>
        <span className="text-white/40 text-xs">09 / 15</span>
      </div>
    </div>
  );
}

function Slide10() {
  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#236192' }}>Масштаб</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: '#101820' }}>Общий объём поставок</h2>
        </div>

        <div className="max-w-5xl">
          <div className="anim-fade d2 text-center mb-10">
            <div className="text-7xl md:text-8xl font-bold" style={{ color: '#EF3340' }}>150+</div>
            <div className="text-xl mt-2" style={{ color: '#101820' }}>вертолётов</div>
            <div className="text-sm" style={{ color: 'rgba(16,24,32,0.5)' }}>общий объём инвестпроекта</div>
          </div>

          <div className="anim-fade d4">
            <div className="relative h-14 rounded overflow-hidden mb-4" style={{ background: 'rgba(16,24,32,0.08)' }}>
              <div className="absolute left-0 top-0 h-full flex items-center justify-end pr-4 rounded" style={{ width: '57%', background: '#236192' }}>
                <span className="text-white font-bold text-sm">86 вертолётов (2023-2026)</span>
              </div>
              <div className="absolute top-0 h-full flex items-center pl-4 rounded" style={{ left: '57%', width: '43%', background: '#EF3340' }}>
                <span className="text-white font-bold text-sm">72 (новый)</span>
              </div>
            </div>
            <div className="flex justify-between text-sm" style={{ color: 'rgba(16,24,32,0.5)' }}>
              <span>Уже поставлено</span>
              <span>Новый контракт</span>
            </div>
          </div>
        </div>
      </div>

      <Footer num={10} />
    </div>
  );
}

function Slide11() {
  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#101820' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#EF3340' }}>Значение для регионов</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">Транспортная доступность</h2>
        </div>

        <div className="max-w-5xl space-y-6">
          <div className="anim-fade d2 border border-white/10 p-6" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <p className="text-white text-lg leading-relaxed">
              «Поставляемые в рамках нового контракта Ми-8МТВ-1 помогут в перевозке людей и грузов,
              в том числе в <span className="font-semibold" style={{ color: '#EF3340' }}>удалённых и труднодоступных населённых пунктах</span>,
              где альтернатив вертолёту мало или совсем нет»
            </p>
            <p className="text-white/40 text-sm mt-4">— Геннадий Абраменков, замминистра промышленности и торговли России</p>
          </div>

          <div className="anim-fade d4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '🏥', title: 'Медицинские задачи', sub: 'Санитарная авиация' },
              { icon: '🔍', title: 'Поисково-спасательные', sub: 'Спецмодули' },
              { icon: '📦', title: 'Грузоперевозки', sub: 'Внешняя подвеска' },
            ].map((item, i) => (
              <div key={i} className="border p-4 text-center" style={{ borderColor: '#236192' }}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-white text-sm font-semibold">{item.title}</div>
                <div className="text-white/40 text-xs mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full py-4 px-8 flex justify-between items-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <span className="text-white/40 text-xs">Партнёр в развитии</span>
        <span className="text-white/40 text-xs">11 / 15</span>
      </div>
    </div>
  );
}

function Slide12() {
  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#236192' }}>Проблематика</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: '#101820' }}>Состояние вертолётного парка</h2>
        </div>

        <div className="max-w-5xl">
          <div className="anim-fade d2 flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-7xl md:text-9xl font-bold leading-none" style={{ color: '#EF3340' }}>50%</div>
              <div className="text-lg mt-4 font-semibold" style={{ color: '#101820' }}>парка в регионах РФ</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold" style={{ color: '#101820' }}>старше 29 лет</div>
              <div className="text-base mt-2" style={{ color: 'rgba(16,24,32,0.5)' }}>по данным Ассоциации вертолётной индустрии на 2025 год</div>
            </div>
          </div>

          <div className="anim-fade d4 p-6 border-l-4" style={{ background: 'rgba(239,51,64,0.05)', borderColor: '#EF3340' }}>
            <p className="text-lg font-semibold mb-2" style={{ color: '#101820' }}>Критическая потребность в обновлении</p>
            <p className="text-base" style={{ color: 'rgba(16,24,32,0.6)' }}>
              Половина регионального вертолётного парка эксплуатируется более 29 лет,
              что создаёт серьёзные риски для безопасности полётов и требует срочной замены
              на новую технику отечественного производства.
            </p>
          </div>
        </div>
      </div>

      <Footer num={12} />
    </div>
  );
}

function Slide13() {
  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#101820' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#EF3340' }}>Цитата</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">О вертолётах Ми-8</h2>
        </div>

        <div className="max-w-5xl">
          <div className="anim-fade d2 pl-8 py-4 mb-8" style={{ borderLeft: '4px solid #EF3340' }}>
            <p className="text-white text-xl md:text-2xl leading-relaxed italic">
              «Вертолёты семейства Ми-8 — неприхотливые, надёжные и универсальные,
              они могут работать в самых разных климатических условиях. Новая техника
              нашего производства призвана заменить старые машины, выбывающие из парка,
              что повысит безопасность и надёжность авиасообщения»
            </p>
            <div className="mt-6">
              <p className="text-white font-bold">Владимир Артяков</p>
              <p className="text-white/40 text-sm">первый заместитель генерального директора Госкорпорации Ростех</p>
            </div>
          </div>

          <div className="anim-fade d4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Неприхотливые', 'Надёжные', 'Универсальные', 'Массовые'].map((word, i) => (
              <div key={i} className="border border-white/20 p-4 text-center">
                <span className="text-white font-bold text-sm uppercase tracking-wider">{word}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full py-4 px-8 flex justify-between items-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <span className="text-white/40 text-xs">Партнёр в развитии</span>
        <span className="text-white/40 text-xs">13 / 15</span>
      </div>
    </div>
  );
}

function Slide14() {
  const timeline = [
    { year: '2023', text: 'Начало инвестиционного проекта', status: 'done' },
    { year: '2024', text: 'Продолжение поставок вертолётов Ми-8МТВ-1', status: 'done' },
    { year: '2025', text: 'Наращивание темпов обновления парка', status: 'done' },
    { year: '2026', text: '86 вертолётов поставлено. Новый контракт на 72 борта', status: 'current' },
    { year: '2026+', text: 'Первые вертолёты по новому контракту — до конца года', status: 'next' },
    { year: 'Итого', text: '150+ вертолётов в рамках инвестпроекта', status: 'future' },
  ];

  return (
    <div className="w-full h-full flex flex-col relative px-8 md:px-16 py-12" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>

      <div className="flex-1 flex flex-col justify-center overflow-auto">
        <div className="anim-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3" style={{ background: '#EF3340' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#236192' }}>Сроки</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: '#101820' }}>Хронология проекта</h2>
        </div>

        <div className="max-w-5xl relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: 'rgba(16,24,32,0.15)' }}></div>

          {timeline.map((item, i) => (
            <div key={i} className="anim-fade flex items-start gap-6 mb-6 relative" style={{ animationDelay: `${0.2 + i * 0.12}s` }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 text-xs font-bold"
                style={{
                  background: item.status === 'done' ? '#236192' : item.status === 'current' ? '#EF3340' : item.status === 'next' ? '#101820' : 'transparent',
                  border: item.status === 'future' ? '2px solid rgba(16,24,32,0.25)' : 'none',
                  color: item.status === 'future' ? 'rgba(16,24,32,0.4)' : '#ffffff',
                }}>
                {item.year}
              </div>
              <div className="pt-3">
                <p className="text-base" style={{ color: item.status === 'future' ? 'rgba(16,24,32,0.4)' : '#101820' }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer num={14} />
    </div>
  );
}

function Slide15() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative px-8" style={{ background: '#101820' }}>
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: '#EF3340' }}></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl anim-fade">
        <div className="flex justify-center mb-8">
          <div className="relative w-24 h-24 border-2 border-white">
            <div className="absolute top-0 right-0 w-3/4 h-3/4" style={{ background: '#EF3340' }}></div>
          </div>
        </div>

        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">Вместе в будущее</h2>
        <div className="h-px w-24 mx-auto mb-6" style={{ background: '#236192' }}></div>
        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Контракт на 72 вертолёта Ми-8МТВ-1 — продолжение системной работы
          по обновлению вертолётного парка России и повышению транспортной связанности регионов
        </p>

        <div className="anim-fade d4 mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div>
            <div className="text-3xl font-bold" style={{ color: '#EF3340' }}>150+</div>
            <div className="text-white/40 text-xs mt-1">вертолётов</div>
          </div>
          <div>
            <div className="text-3xl font-bold" style={{ color: '#236192' }}>72</div>
            <div className="text-white/40 text-xs mt-1">новый контракт</div>
          </div>
          <div>
            <div className="text-white text-3xl font-bold">2026</div>
            <div className="text-white/40 text-xs mt-1">первые поставки</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full py-6 px-8" style={{ background: 'rgba(35,97,146,0.15)' }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-white/40 relative">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white/40"></div>
            </div>
            <div>
              <div className="text-white font-bold text-sm">Ростех</div>
              <div className="text-white/40 text-xs">Партнёр в развитии</div>
            </div>
          </div>
          <div className="text-white/30 text-xs">rostec.ru</div>
        </div>
      </div>
    </div>
  );
}

// Footer for light slides
function Footer({ num }: { num: number }) {
  return (
    <div className="absolute bottom-0 left-0 w-full py-4 px-8 flex justify-between items-center" style={{ background: 'rgba(16,24,32,0.03)' }}>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 relative" style={{ background: '#101820' }}>
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white"></div>
        </div>
        <span className="text-xs" style={{ color: 'rgba(16,24,32,0.4)' }}>Ростех</span>
      </div>
      <span className="text-xs" style={{ color: 'rgba(16,24,32,0.3)' }}>{String(num).padStart(2, '0')} / 15</span>
    </div>
  );
}

export default App;
