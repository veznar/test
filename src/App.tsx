import { useState, useEffect, useCallback } from 'react';

const COLORS = {
  black: '#101820',
  blue: '#236192',
  red: '#EF3340',
  white: '#ffffff',
  white70: 'rgba(255,255,255,0.7)',
  white60: 'rgba(255,255,255,0.6)',
  white50: 'rgba(255,255,255,0.5)',
  white40: 'rgba(255,255,255,0.4)',
  white30: 'rgba(255,255,255,0.3)',
  white20: 'rgba(255,255,255,0.2)',
  white10: 'rgba(255,255,255,0.1)',
  white05: 'rgba(255,255,255,0.05)',
  white03: 'rgba(255,255,255,0.03)',
  text70: 'rgba(16,24,32,0.7)',
  text60: 'rgba(16,24,32,0.6)',
  text50: 'rgba(16,24,32,0.5)',
  text40: 'rgba(16,24,32,0.4)',
  text30: 'rgba(16,24,32,0.3)',
  text10: 'rgba(16,24,32,0.1)',
  text04: 'rgba(16,24,32,0.04)',
};

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

  const slides = [
    <Slide1 key={1} />,
    <Slide2 key={2} />,
    <Slide3 key={3} />,
    <Slide4 key={4} />,
    <Slide5 key={5} />,
    <Slide6 key={6} />,
    <Slide7 key={7} />,
    <Slide8 key={8} />,
    <Slide9 key={9} />,
    <Slide10 key={10} />,
    <Slide11 key={11} />,
    <Slide12 key={12} />,
    <Slide13 key={13} />,
    <Slide14 key={14} />,
    <Slide15 key={15} />,
  ];

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', background: COLORS.black }}>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {slides[currentSlide]}
      </div>

      <nav style={{
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        borderTop: `1px solid ${COLORS.white10}`,
        background: '#0a0f14',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', border: `1px solid ${COLORS.white40}`, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '75%', background: COLORS.red }}></div>
          </div>
          <span style={{ color: COLORS.white50, fontSize: '12px' }}>Ростех</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              style={{
                height: '8px',
                borderRadius: '4px',
                width: i === currentSlide ? '24px' : '8px',
                background: i === currentSlide ? COLORS.red : COLORS.white20,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button onClick={prevSlide} disabled={currentSlide === 0}
            style={{
              width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: currentSlide === 0 ? COLORS.white20 : COLORS.white50,
              background: 'transparent', border: 'none', cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
            }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span style={{ color: COLORS.white50, fontSize: '12px', minWidth: '48px', textAlign: 'center' }}>
            {currentSlide + 1} / {totalSlides}
          </span>
          <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1}
            style={{
              width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: currentSlide === totalSlides - 1 ? COLORS.white20 : COLORS.white50,
              background: 'transparent', border: 'none', cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
            }}>
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
    <div style={{
      width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      position: 'relative', padding: '32px', background: COLORS.black,
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>
      <div style={{ position: 'absolute', top: '40px', left: '40px', width: '128px', height: '128px', border: `1px solid ${COLORS.white10}`, opacity: 0.3 }}></div>
      <div style={{ position: 'absolute', bottom: '80px', right: '80px', width: '192px', height: '192px', border: `1px solid ${COLORS.white10}`, opacity: 0.2 }}></div>

      <div style={{ textAlign: 'center', maxWidth: '1024px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <div style={{ position: 'relative', width: '80px', height: '80px', border: `2px solid ${COLORS.white}` }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '75%', background: COLORS.red }}></div>
          </div>
        </div>
        <h1 style={{ color: COLORS.white, fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Ростех и ГТЛК подписали контракт
        </h1>
        <h2 style={{ color: COLORS.red, fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 700, marginTop: '16px', letterSpacing: '-0.02em' }}>
          на поставку 72 вертолётов Ми-8
        </h2>
        <p style={{ color: COLORS.white60, fontSize: 'clamp(16px, 2vw, 20px)', marginTop: '24px' }}>
          для регионов России
        </p>

        <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <div style={{ height: '1px', width: '64px', background: COLORS.blue }}></div>
          <span style={{ color: COLORS.white40, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>11 сентября 2026</span>
          <div style={{ height: '1px', width: '64px', background: COLORS.blue }}></div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '16px 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(35,97,146,0.15)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', border: `1px solid ${COLORS.white40}`, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '75%', background: COLORS.white40 }}></div>
          </div>
          <span style={{ color: COLORS.white60, fontSize: '14px' }}>Ростех</span>
        </div>
        <span style={{ color: COLORS.white40, fontSize: '12px' }}>Партнёр в развитии</span>
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.white }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.blue, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Обзор сделки</span>
          </div>
          <h2 style={{ color: COLORS.black, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700 }}>Ключевые параметры контракта</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '1024px' }}>
          <div style={{ padding: '24px', background: COLORS.black, borderRadius: '4px' }}>
            <div style={{ color: COLORS.red, fontSize: '36px', fontWeight: 700, marginBottom: '8px' }}>72</div>
            <div style={{ color: COLORS.white, fontSize: '18px' }}>вертолёта Ми-8МТВ-1</div>
            <div style={{ color: COLORS.white50, fontSize: '14px', marginTop: '8px' }}>транспортный вариант</div>
          </div>
          <div style={{ padding: '24px', border: `2px solid ${COLORS.blue}`, borderRadius: '4px' }}>
            <div style={{ color: COLORS.blue, fontSize: '36px', fontWeight: 700, marginBottom: '8px' }}>КВЗ</div>
            <div style={{ color: COLORS.black, fontSize: '18px' }}>Казанский вертолётный завод</div>
            <div style={{ color: COLORS.text50, fontSize: '14px', marginTop: '8px' }}>место производства</div>
          </div>
          <div style={{ padding: '24px', border: `2px solid ${COLORS.black}`, borderRadius: '4px' }}>
            <div style={{ color: COLORS.black, fontSize: '36px', fontWeight: 700, marginBottom: '8px' }}>ФНБ</div>
            <div style={{ color: COLORS.black, fontSize: '18px' }}>Фонд национального благосостояния</div>
            <div style={{ color: COLORS.text50, fontSize: '14px', marginTop: '8px' }}>источник финансирования</div>
          </div>
          <div style={{ padding: '24px', background: COLORS.blue, borderRadius: '4px' }}>
            <div style={{ color: COLORS.white, fontSize: '36px', fontWeight: 700, marginBottom: '8px' }}>2026</div>
            <div style={{ color: COLORS.white, fontSize: '18px' }}>первые поставки</div>
            <div style={{ color: COLORS.white50, fontSize: '14px', marginTop: '8px' }}>до конца текущего года</div>
          </div>
        </div>
      </div>

      <Footer num={2} />
    </div>
  );
}

function Slide3() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.white }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.blue, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Стороны контракта</span>
          </div>
          <h2 style={{ color: COLORS.black, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700 }}>Партнёры по сделке</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px', maxWidth: '1024px' }}>
          <div style={{ paddingLeft: '24px', borderLeft: `4px solid ${COLORS.red}` }}>
            <h3 style={{ color: COLORS.black, fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Госкорпорация Ростех</h3>
            <p style={{ color: COLORS.text70, fontSize: '16px', lineHeight: 1.6 }}>
              Один из крупнейших промышленных конгломератов России. Объединяет более 800 организаций.
              Холдинг «Вертолёты России» — разработчик и производитель вертолётной техники.
            </p>
          </div>
          <div style={{ paddingLeft: '24px', borderLeft: `4px solid ${COLORS.blue}` }}>
            <h3 style={{ color: COLORS.black, fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>ГТЛК (группа ВЭБ.РФ)</h3>
            <p style={{ color: COLORS.text70, fontSize: '16px', lineHeight: 1.6 }}>
              Государственная транспортная лизинговая компания — институт развития, обеспечивающий обновление
              транспортной системы страны. Выполняет задачи государственного уровня.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '32px', padding: '16px', background: COLORS.text04, borderRadius: '4px', maxWidth: '1024px' }}>
          <p style={{ color: COLORS.text70, fontSize: '14px' }}>
            <span style={{ fontWeight: 700, color: COLORS.blue }}>Минпромторг России</span> — поддержка проекта в рамках инвестпрограммы по обновлению вертолётного парка
          </p>
        </div>
      </div>

      <Footer num={3} />
    </div>
  );
}

function Slide4() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.black }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>
      <div style={{ position: 'absolute', right: 0, top: 0, width: '50%', height: '100%', opacity: 0.05 }}>
        <div style={{ position: 'absolute', top: '25%', right: '40px', width: '320px', height: '320px', border: `1px solid ${COLORS.white}`, transform: 'rotate(12deg)' }}></div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.red, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Вертолёт</span>
          </div>
          <h2 style={{ color: COLORS.white, fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, marginBottom: '16px' }}>Ми-8МТВ-1</h2>
          <p style={{ color: COLORS.white50, fontSize: 'clamp(16px, 2vw, 20px)', marginBottom: '32px' }}>
            Глубокая модернизация самого массового вертолёта в истории авиации
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '1024px' }}>
          <div style={{ border: `1px solid ${COLORS.white20}`, padding: '24px' }}>
            <div style={{ fontSize: '30px', marginBottom: '12px' }}>🚁</div>
            <h4 style={{ color: COLORS.white, fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>Многоцелевой</h4>
            <p style={{ color: COLORS.white50, fontSize: '14px' }}>Перевозка людей и грузов в удалённые и труднодоступные населённые пункты</p>
          </div>
          <div style={{ border: `1px solid ${COLORS.white20}`, padding: '24px' }}>
            <div style={{ fontSize: '30px', marginBottom: '12px' }}>⚙️</div>
            <h4 style={{ color: COLORS.white, fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>Модульный</h4>
            <p style={{ color: COLORS.white50, fontSize: '14px' }}>Оснащается модулями для поисково-спасательных и медицинских задач</p>
          </div>
          <div style={{ border: `1px solid ${COLORS.white20}`, padding: '24px' }}>
            <div style={{ fontSize: '30px', marginBottom: '12px' }}>⛽</div>
            <h4 style={{ color: COLORS.white, fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>Доп. баки 915 л</h4>
            <p style={{ color: COLORS.white50, fontSize: '14px' }}>Увеличение дальности полёта для районов с большой протяжённостью</p>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: COLORS.white03 }}>
        <span style={{ color: COLORS.white40, fontSize: '12px' }}>Фото: Вертолёты России</span>
        <span style={{ color: COLORS.white40, fontSize: '12px' }}>04 / 15</span>
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
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.white }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.blue, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>ТТХ</span>
          </div>
          <h2 style={{ color: COLORS.black, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700 }}>Технические преимущества Ми-8МТВ-1</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px 48px', maxWidth: '1024px' }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '12px 0', borderBottom: `1px solid ${COLORS.text10}` }}>
              <div style={{ width: '8px', height: '8px', marginTop: '8px', flexShrink: 0, background: COLORS.red }}></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '16px', color: COLORS.black }}>{item.label}</div>
                <div style={{ fontSize: '14px', color: COLORS.text50 }}>{item.desc}</div>
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
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.white }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.blue, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Производитель</span>
          </div>
          <h2 style={{ color: COLORS.black, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700 }}>Казанский вертолётный завод</h2>
        </div>

        <div style={{ maxWidth: '1024px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            <div style={{ padding: '24px', textAlign: 'center', background: COLORS.black }}>
              <div style={{ color: COLORS.red, fontSize: '36px', fontWeight: 700 }}>1944</div>
              <div style={{ color: COLORS.white60, fontSize: '14px', marginTop: '8px' }}>год основания</div>
            </div>
            <div style={{ padding: '24px', textAlign: 'center', background: COLORS.blue }}>
              <div style={{ color: COLORS.white, fontSize: '36px', fontWeight: 700 }}>80+</div>
              <div style={{ color: COLORS.white60, fontSize: '14px', marginTop: '8px' }}>лет опыта</div>
            </div>
            <div style={{ padding: '24px', textAlign: 'center', border: `2px solid ${COLORS.black}` }}>
              <div style={{ color: COLORS.black, fontSize: '36px', fontWeight: 700 }}>12 000+</div>
              <div style={{ color: COLORS.text50, fontSize: '14px', marginTop: '8px' }}>вертолётов произведено</div>
            </div>
          </div>

          <div style={{ padding: '24px', background: COLORS.text04, borderRadius: '4px' }}>
            <p style={{ color: COLORS.text70, fontSize: '16px', lineHeight: 1.6 }}>
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
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.black }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.red, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Государственная поддержка</span>
          </div>
          <h2 style={{ color: COLORS.white, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700 }}>Механизм реализации</h2>
        </div>

        <div style={{ maxWidth: '1024px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
            <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: COLORS.red, color: COLORS.white, fontWeight: 700, fontSize: '18px' }}>1</div>
            <div>
              <h4 style={{ color: COLORS.white, fontWeight: 700, fontSize: '18px' }}>Минпромторг России</h4>
              <p style={{ color: COLORS.white50, fontSize: '14px', marginTop: '4px' }}>Поддержка проекта в рамках инвестиционного проекта по обновлению вертолётного парка</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
            <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: COLORS.blue, color: COLORS.white, fontWeight: 700, fontSize: '18px' }}>2</div>
            <div>
              <h4 style={{ color: COLORS.white, fontWeight: 700, fontSize: '18px' }}>Фонд национального благосостояния (ФНБ)</h4>
              <p style={{ color: COLORS.white50, fontSize: '14px', marginTop: '4px' }}>Использование средств ФНБ для финансирования поставок вертолётной техники</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
            <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `2px solid ${COLORS.white}`, color: COLORS.white, fontWeight: 700, fontSize: '18px' }}>3</div>
            <div>
              <h4 style={{ color: COLORS.white, fontWeight: 700, fontSize: '18px' }}>Льготный лизинг</h4>
              <p style={{ color: COLORS.white50, fontSize: '14px', marginTop: '4px' }}>Передача техники авиаперевозчикам на льготных условиях через механизм лизинга ГТЛК</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: COLORS.white03 }}>
        <span style={{ color: COLORS.white40, fontSize: '12px' }}>Партнёр в развитии</span>
        <span style={{ color: COLORS.white40, fontSize: '12px' }}>07 / 15</span>
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
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.white }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.blue, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Цели проекта</span>
          </div>
          <h2 style={{ color: COLORS.black, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700 }}>Стратегические задачи</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px', maxWidth: '1024px' }}>
          {goals.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px', padding: '20px', border: `1px solid ${COLORS.text10}` }}>
              <div style={{ fontSize: '30px' }}>{item.icon}</div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '18px', color: COLORS.black }}>{item.title}</h4>
                <p style={{ fontSize: '14px', marginTop: '4px', color: COLORS.text50 }}>{item.text}</p>
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
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.blue }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
        <div style={{ position: 'absolute', top: '80px', right: '80px', width: '384px', height: '384px', border: `1px solid ${COLORS.white}`, borderRadius: '50%' }}></div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.white60, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Статистика</span>
          </div>
          <h2 style={{ color: COLORS.white, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, marginBottom: '16px' }}>Уже поставлено</h2>
          <p style={{ color: COLORS.white60, fontSize: '18px' }}>В рамках инвестпроекта 2023–2026 гг.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', maxWidth: '1024px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: COLORS.white, fontSize: 'clamp(64px, 10vw, 144px)', fontWeight: 700, lineHeight: 1 }}>86</div>
            <div style={{ color: COLORS.white70, fontSize: '20px', marginTop: '16px' }}>вертолётов уже переданы</div>
            <div style={{ color: COLORS.white40, fontSize: '14px', marginTop: '8px' }}>региональным авиакомпаниям</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              'Ми-8МТВ-1 транспортный вариант',
              'Казанский вертолётный завод',
              'Средства ФНБ',
              'Льготные условия для эксплуатантов',
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '12px', height: '12px', background: i % 2 === 0 ? COLORS.red : COLORS.white }}></div>
                <span style={{ color: COLORS.white, fontSize: '16px' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)' }}>
        <span style={{ color: COLORS.white40, fontSize: '12px' }}>Партнёр в развитии</span>
        <span style={{ color: COLORS.white40, fontSize: '12px' }}>09 / 15</span>
      </div>
    </div>
  );
}

function Slide10() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.white }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.blue, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Масштаб</span>
          </div>
          <h2 style={{ color: COLORS.black, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700 }}>Общий объём поставок</h2>
        </div>

        <div style={{ maxWidth: '1024px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ color: COLORS.red, fontSize: 'clamp(56px, 8vw, 128px)', fontWeight: 700, lineHeight: 1 }}>150+</div>
            <div style={{ color: COLORS.black, fontSize: '20px', marginTop: '8px' }}>вертолётов</div>
            <div style={{ color: COLORS.text50, fontSize: '14px' }}>общий объём инвестпроекта</div>
          </div>

          <div>
            <div style={{ position: 'relative', height: '56px', borderRadius: '4px', overflow: 'hidden', background: 'rgba(16,24,32,0.08)', marginBottom: '16px' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '57%', background: COLORS.blue, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '16px' }}>
                <span style={{ color: COLORS.white, fontWeight: 700, fontSize: '14px' }}>86 вертолётов (2023-2026)</span>
              </div>
              <div style={{ position: 'absolute', left: '57%', top: 0, height: '100%', width: '43%', background: COLORS.red, display: 'flex', alignItems: 'center', paddingLeft: '16px' }}>
                <span style={{ color: COLORS.white, fontWeight: 700, fontSize: '14px' }}>72 (новый)</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: COLORS.text50 }}>
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
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.black }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.red, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Значение для регионов</span>
          </div>
          <h2 style={{ color: COLORS.white, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700 }}>Транспортная доступность</h2>
        </div>

        <div style={{ maxWidth: '1024px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ border: `1px solid ${COLORS.white10}`, padding: '24px', background: COLORS.white03 }}>
            <p style={{ color: COLORS.white, fontSize: '18px', lineHeight: 1.6 }}>
              «Поставляемые в рамках нового контракта Ми-8МТВ-1 помогут в перевозке людей и грузов,
              в том числе в <span style={{ color: COLORS.red, fontWeight: 600 }}>удалённых и труднодоступных населённых пунктах</span>,
              где альтернатив вертолёту мало или совсем нет»
            </p>
            <p style={{ color: COLORS.white40, fontSize: '14px', marginTop: '16px' }}>— Геннадий Абраменков, замминистра промышленности и торговли России</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { icon: '🏥', title: 'Медицинские задачи', sub: 'Санитарная авиация' },
              { icon: '🔍', title: 'Поисково-спасательные', sub: 'Спецмодули' },
              { icon: '📦', title: 'Грузоперевозки', sub: 'Внешняя подвеска' },
            ].map((item, i) => (
              <div key={i} style={{ border: `1px solid ${COLORS.blue}`, padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ color: COLORS.white, fontSize: '14px', fontWeight: 600 }}>{item.title}</div>
                <div style={{ color: COLORS.white40, fontSize: '12px', marginTop: '4px' }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: COLORS.white03 }}>
        <span style={{ color: COLORS.white40, fontSize: '12px' }}>Партнёр в развитии</span>
        <span style={{ color: COLORS.white40, fontSize: '12px' }}>11 / 15</span>
      </div>
    </div>
  );
}

function Slide12() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.white }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.blue, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Проблематика</span>
          </div>
          <h2 style={{ color: COLORS.black, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700 }}>Состояние вертолётного парка</h2>
        </div>

        <div style={{ maxWidth: '1024px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', marginBottom: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: COLORS.red, fontSize: 'clamp(56px, 8vw, 144px)', fontWeight: 700, lineHeight: 1 }}>50%</div>
              <div style={{ color: COLORS.black, fontSize: '18px', marginTop: '16px', fontWeight: 600 }}>парка в регионах РФ</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: COLORS.black, fontSize: '24px', fontWeight: 700 }}>старше 29 лет</div>
              <div style={{ color: COLORS.text50, fontSize: '16px', marginTop: '8px' }}>по данным Ассоциации вертолётной индустрии на 2025 год</div>
            </div>
          </div>

          <div style={{ padding: '24px', borderLeft: `4px solid ${COLORS.red}`, background: 'rgba(239,51,64,0.05)' }}>
            <p style={{ color: COLORS.black, fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>Критическая потребность в обновлении</p>
            <p style={{ color: COLORS.text60, fontSize: '16px', lineHeight: 1.6 }}>
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
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.black }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.red, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Цитата</span>
          </div>
          <h2 style={{ color: COLORS.white, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700 }}>О вертолётах Ми-8</h2>
        </div>

        <div style={{ maxWidth: '1024px' }}>
          <div style={{ paddingLeft: '32px', borderLeft: `4px solid ${COLORS.red}`, marginBottom: '32px' }}>
            <p style={{ color: COLORS.white, fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: 1.5, fontStyle: 'italic' }}>
              «Вертолёты семейства Ми-8 — неприхотливые, надёжные и универсальные,
              они могут работать в самых разных климатических условиях. Новая техника
              нашего производства призвана заменить старые машины, выбывающие из парка,
              что повысит безопасность и надёжность авиасообщения»
            </p>
            <div style={{ marginTop: '24px' }}>
              <p style={{ color: COLORS.white, fontWeight: 700 }}>Владимир Артяков</p>
              <p style={{ color: COLORS.white40, fontSize: '14px' }}>первый заместитель генерального директора Госкорпорации Ростех</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
            {['Неприхотливые', 'Надёжные', 'Универсальные', 'Массовые'].map((word, i) => (
              <div key={i} style={{ border: `1px solid ${COLORS.white20}`, padding: '16px', textAlign: 'center' }}>
                <span style={{ color: COLORS.white, fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{word}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: COLORS.white03 }}>
        <span style={{ color: COLORS.white40, fontSize: '12px' }}>Партнёр в развитии</span>
        <span style={{ color: COLORS.white40, fontSize: '12px' }}>13 / 15</span>
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
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', padding: '48px 64px', background: COLORS.white }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: COLORS.red }}></div>
            <span style={{ color: COLORS.blue, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Сроки</span>
          </div>
          <h2 style={{ color: COLORS.black, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700 }}>Хронология проекта</h2>
        </div>

        <div style={{ maxWidth: '1024px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '24px', top: 0, bottom: 0, width: '2px', background: COLORS.text10 }}></div>

          {timeline.map((item, i) => {
            const bgColor = item.status === 'done' ? COLORS.blue : item.status === 'current' ? COLORS.red : item.status === 'next' ? COLORS.black : 'transparent';
            const textColor = item.status === 'future' ? COLORS.text40 : COLORS.black;
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '24px', position: 'relative' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, zIndex: 1, fontSize: '12px', fontWeight: 700,
                  background: bgColor, border: item.status === 'future' ? `2px solid ${COLORS.text30}` : 'none',
                  color: item.status === 'future' ? COLORS.text40 : COLORS.white,
                }}>
                  {item.year}
                </div>
                <div style={{ paddingTop: '12px' }}>
                  <p style={{ fontSize: '16px', color: textColor }}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer num={14} />
    </div>
  );
}

function Slide15() {
  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      position: 'relative', padding: '32px', background: COLORS.black,
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: COLORS.red }}></div>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', border: `1px solid ${COLORS.white}` }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '896px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <div style={{ position: 'relative', width: '96px', height: '96px', border: `2px solid ${COLORS.white}` }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '75%', background: COLORS.red }}></div>
          </div>
        </div>

        <h2 style={{ color: COLORS.white, fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.2 }}>
          Вместе в будущее
        </h2>
        <div style={{ height: '1px', width: '96px', background: COLORS.blue, margin: '0 auto 24px' }}></div>
        <p style={{ color: COLORS.white60, fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.5, maxWidth: '672px', margin: '0 auto' }}>
          Контракт на 72 вертолёта Ми-8МТВ-1 — продолжение системной работы
          по обновлению вертолётного парка России и повышению транспортной связанности регионов
        </p>

        <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '512px', margin: '40px auto 0' }}>
          <div>
            <div style={{ color: COLORS.red, fontSize: '30px', fontWeight: 700 }}>150+</div>
            <div style={{ color: COLORS.white40, fontSize: '12px', marginTop: '4px' }}>вертолётов</div>
          </div>
          <div>
            <div style={{ color: COLORS.blue, fontSize: '30px', fontWeight: 700 }}>72</div>
            <div style={{ color: COLORS.white40, fontSize: '12px', marginTop: '4px' }}>новый контракт</div>
          </div>
          <div>
            <div style={{ color: COLORS.white, fontSize: '30px', fontWeight: 700 }}>2026</div>
            <div style={{ color: COLORS.white40, fontSize: '12px', marginTop: '4px' }}>первые поставки</div>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '24px 32px',
        background: 'rgba(35,97,146,0.15)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', border: `1px solid ${COLORS.white40}`, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '75%', background: COLORS.white40 }}></div>
            </div>
            <div>
              <div style={{ color: COLORS.white, fontWeight: 700, fontSize: '14px' }}>Ростех</div>
              <div style={{ color: COLORS.white40, fontSize: '12px' }}>Партнёр в развитии</div>
            </div>
          </div>
          <div style={{ color: COLORS.white30, fontSize: '12px' }}>rostec.ru</div>
        </div>
      </div>
    </div>
  );
}

function Footer({ num }: { num: number }) {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '16px 32px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: COLORS.text04,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '20px', height: '20px', position: 'relative', background: COLORS.black }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '75%', background: COLORS.white }}></div>
        </div>
        <span style={{ color: COLORS.text40, fontSize: '12px' }}>Ростех</span>
      </div>
      <span style={{ color: COLORS.text30, fontSize: '12px' }}>{String(num).padStart(2, '0')} / 15</span>
    </div>
  );
}

export default App;
