import { useState, useEffect, useCallback } from 'react';

// Slide data
const slides = [
  {
    id: 1,
    type: 'title',
  },
  {
    id: 2,
    type: 'overview',
  },
  {
    id: 3,
    type: 'parties',
  },
  {
    id: 4,
    type: 'helicopter',
  },
  {
    id: 5,
    type: 'specs',
  },
  {
    id: 6,
    type: 'manufacturer',
  },
  {
    id: 7,
    type: 'support',
  },
  {
    id: 8,
    type: 'goals',
  },
  {
    id: 9,
    type: 'statistics',
  },
  {
    id: 10,
    type: 'total',
  },
  {
    id: 11,
    type: 'regions',
  },
  {
    id: 12,
    type: 'problem',
  },
  {
    id: 13,
    type: 'advantages',
  },
  {
    id: 14,
    type: 'timeline',
  },
  {
    id: 15,
    type: 'conclusion',
  },
];

// Rostec Logo component
function RostecLogo({ white = false, size = 'normal' }: { white?: boolean; size?: 'normal' | 'small' | 'large' }) {
  const sizeClass = size === 'large' ? 'w-12 h-12' : size === 'small' ? 'w-6 h-6' : 'w-8 h-8';
  const textSize = size === 'large' ? 'text-2xl' : size === 'small' ? 'text-sm' : 'text-lg';
  const color = white ? 'text-white' : 'text-[#101820]';
  
  return (
    <div className="flex items-center gap-2">
      <div className={`${sizeClass} border-2 ${white ? 'border-white' : 'border-[#101820]'} relative`}>
        <div className={`absolute top-0 right-0 w-2/3 h-2/3 ${white ? 'bg-white' : 'bg-[#101820]'}`}></div>
      </div>
      <span className={`${textSize} font-bold ${color} tracking-tight`}>Ростех</span>
    </div>
  );
}

// Open square brand element
function OpenSquare({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-16 h-16 ${className}`}>
      <div className="absolute inset-0 border-2 border-[#236192]"></div>
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#236192]"></div>
    </div>
  );
}

// Slide 1: Title
function Slide1() {
  return (
    <div className="relative w-full h-full bg-[#101820] flex flex-col justify-center items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 translate-x-8"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-white"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/20 translate-x-12"></div>
      </div>
      
      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl">
        <div className="animate-fade-in mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20 border-2 border-white">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#EF3340]"></div>
            </div>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Ростех и ГТЛК подписали контракт
          </h1>
          <h2 className="text-[#EF3340] text-3xl md:text-4xl font-bold mt-4 tracking-tight">
            на поставку 72 вертолётов Ми-8
          </h2>
          <p className="text-white/70 text-xl mt-6">для регионов России</p>
        </div>
        
        <div className="animate-fade-in delay-300 mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-[#236192]"></div>
          <span className="text-white/50 text-sm uppercase tracking-widest">11 сентября 2026</span>
          <div className="h-px w-16 bg-[#236192]"></div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#236192]/20 py-4 px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border border-white/50 relative">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white/50"></div>
          </div>
          <span className="text-white/70 text-sm">Ростех</span>
        </div>
        <span className="text-white/50 text-xs">Партнёр в развитии</span>
      </div>
    </div>
  );
}

// Slide 2: Overview
function Slide2() {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-[#236192] text-sm font-semibold uppercase tracking-widest">Обзор сделки</span>
          </div>
          <h2 className="text-[#101820] text-3xl md:text-4xl font-bold mb-8">Ключевые параметры контракта</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="animate-fade-in delay-200 bg-[#101820] p-6 rounded-sm">
            <div className="text-[#EF3340] text-4xl font-bold mb-2">72</div>
            <div className="text-white text-lg">вертолёта Ми-8МТВ-1</div>
            <div className="text-white/60 text-sm mt-2">транспортный вариант</div>
          </div>
          
          <div className="animate-fade-in delay-300 border-2 border-[#236192] p-6 rounded-sm">
            <div className="text-[#236192] text-4xl font-bold mb-2">КВЗ</div>
            <div className="text-[#101820] text-lg">Казанский вертолётный завод</div>
            <div className="text-[#101820]/60 text-sm mt-2">место производства</div>
          </div>
          
          <div className="animate-fade-in delay-400 border-2 border-[#101820] p-6 rounded-sm">
            <div className="text-[#101820] text-4xl font-bold mb-2">ФНБ</div>
            <div className="text-[#101820] text-lg">Фонд национального благосостояния</div>
            <div className="text-[#101820]/60 text-sm mt-2">источник финансирования</div>
          </div>
          
          <div className="animate-fade-in delay-500 bg-[#236192] p-6 rounded-sm">
            <div className="text-white text-4xl font-bold mb-2">2026</div>
            <div className="text-white text-lg">первые поставки</div>
            <div className="text-white/60 text-sm mt-2">до конца текущего года</div>
          </div>
        </div>
      </div>
      
      <SlideFooter number={2} />
    </div>
  );
}

// Slide 3: Parties
function Slide3() {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-[#236192] text-sm font-semibold uppercase tracking-widest">Стороны контракта</span>
          </div>
          <h2 className="text-[#101820] text-3xl md:text-4xl font-bold mb-10">Партнёры по сделке</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          <div className="animate-slide-left delay-200">
            <div className="border-l-4 border-[#EF3340] pl-6 py-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#101820] relative">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#EF3340]"></div>
                </div>
                <h3 className="text-[#101820] text-2xl font-bold">Госкорпорация Ростех</h3>
              </div>
              <p className="text-[#101820]/70 text-base leading-relaxed">
                Один из крупнейших промышленных конгломератов России. Объединяет более 800 организаций, 
                из которых сформировано 14 холдинговых компаний. Холдинг «Вертолёты России» — 
                разработчик и производитель вертолетной техники.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-right delay-300">
            <div className="border-l-4 border-[#236192] pl-6 py-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#236192] relative">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white"></div>
                </div>
                <h3 className="text-[#101820] text-2xl font-bold">ГТЛК (группа ВЭБ.РФ)</h3>
              </div>
              <p className="text-[#101820]/70 text-base leading-relaxed">
                Государственная транспортная лизинговая компания — институт развития, 
                обеспечивающий обновление транспортной системы страны. Выполняет задачи 
                государственного уровня по обеспечению спроса на отечественную технику.
              </p>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in delay-500 mt-8 bg-[#101820]/5 p-4 rounded-sm max-w-5xl">
          <p className="text-[#101820]/80 text-sm">
            <span className="font-bold text-[#236192]">Минпромторг России</span> — поддержка проекта в рамках инвестпрограммы по обновлению вертолётного парка
          </p>
        </div>
      </div>
      
      <SlideFooter number={3} />
    </div>
  );
}

// Slide 4: Helicopter Mi-8MTV-1
function Slide4() {
  return (
    <div className="relative w-full h-full bg-[#101820] flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5">
        <div className="absolute top-1/4 right-10 w-80 h-80 border border-white rotate-12"></div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-[#EF3340] text-sm font-semibold uppercase tracking-widest">Вертолёт</span>
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">Ми-8МТВ-1</h2>
          <p className="text-white/60 text-xl mb-8">Глубокая модернизация самого массового вертолёта в истории авиации</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div className="animate-fade-in delay-200 border border-white/20 p-6">
            <div className="text-[#EF3340] text-3xl mb-3">🚁</div>
            <h4 className="text-white font-bold text-lg mb-2">Многоцелевой</h4>
            <p className="text-white/60 text-sm">Перевозка людей и грузов, в том числе в удалённые и труднодоступные населённые пункты</p>
          </div>
          
          <div className="animate-fade-in delay-300 border border-white/20 p-6">
            <div className="text-[#236192] text-3xl mb-3">⚙️</div>
            <h4 className="text-white font-bold text-lg mb-2">Модульный</h4>
            <p className="text-white/60 text-sm">Может оснащаться специальными модулями для поисково-спасательных и медицинских задач</p>
          </div>
          
          <div className="animate-fade-in delay-400 border border-white/20 p-6">
            <div className="text-white text-3xl mb-3">⛽</div>
            <h4 className="text-white font-bold text-lg mb-2">Доп. баки 915 л</h4>
            <p className="text-white/60 text-sm">Увеличение дальности полёта — актуально для районов с большой протяжённостью территорий</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full bg-white/5 py-4 px-8 flex justify-between items-center">
        <span className="text-white/50 text-xs">Фото: Вертолёты России</span>
        <span className="text-white/50 text-xs">04 / 15</span>
      </div>
    </div>
  );
}

// Slide 5: Technical Specifications
function Slide5() {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-[#236192] text-sm font-semibold uppercase tracking-widest">ТТХ</span>
          </div>
          <h2 className="text-[#101820] text-3xl md:text-4xl font-bold mb-8">Технические преимущества Ми-8МТВ-1</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl">
          {[
            { label: 'Повышенная грузоподъёмность', desc: 'при перевозке груза на внешней подвеске' },
            { label: 'Увеличенная максимальная взлётная масса', desc: 'больше полезной нагрузки за вылет' },
            { label: 'Расширенные возможности в высокогорье', desc: 'эксплуатация в горной местности' },
            { label: 'Дополнительные топливные баки', desc: '915 литров каждый для увеличения дальности' },
            { label: 'Всепогодность', desc: 'работа в различных климатических условиях' },
            { label: 'Улучшенные ЛТХ', desc: 'улучшенные лётно-технические характеристики' },
          ].map((item, i) => (
            <div key={i} className={`animate-fade-in flex items-start gap-4 py-3 border-b border-[#101820]/10`} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
              <div className="w-2 h-2 bg-[#EF3340] mt-2 shrink-0"></div>
              <div>
                <div className="text-[#101820] font-bold text-base">{item.label}</div>
                <div className="text-[#101820]/60 text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <SlideFooter number={5} />
    </div>
  );
}

// Slide 6: Manufacturer
function Slide6() {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-[#236192] text-sm font-semibold uppercase tracking-widest">Производитель</span>
          </div>
          <h2 className="text-[#101820] text-3xl md:text-4xl font-bold mb-8">Казанский вертолётный завод</h2>
        </div>
        
        <div className="max-w-5xl">
          <div className="animate-fade-in delay-200 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#101820] p-6 text-center">
              <div className="text-[#EF3340] text-4xl font-bold">1944</div>
              <div className="text-white/70 text-sm mt-2">год основания</div>
            </div>
            <div className="bg-[#236192] p-6 text-center">
              <div className="text-white text-4xl font-bold">80+</div>
              <div className="text-white/70 text-sm mt-2">лет опыта</div>
            </div>
            <div className="border-2 border-[#101820] p-6 text-center">
              <div className="text-[#101820] text-4xl font-bold">12 000+</div>
              <div className="text-[#101820]/70 text-sm mt-2">вертолётов произведено</div>
            </div>
          </div>
          
          <div className="animate-fade-in delay-400 bg-[#101820]/5 p-6 rounded-sm">
            <p className="text-[#101820]/80 text-base leading-relaxed">
              Казанский вертолётный завод (входит в холдинг «Вертолёты России» Госкорпорации Ростех) — 
              один из ведущих вертолётных заводов России. Здесь производится вся линейка вертолётов Ми-8, 
              которые являются самыми массовыми вертолётами в мировой авиации. Завод расположен в Казани, 
              Республике Татарстан.
            </p>
          </div>
        </div>
      </div>
      
      <SlideFooter number={6} />
    </div>
  );
}

// Slide 7: Government Support
function Slide7() {
  return (
    <div className="relative w-full h-full bg-[#101820] flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-[#EF3340] text-sm font-semibold uppercase tracking-widest">Государственная поддержка</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">Механизм реализации</h2>
        </div>
        
        <div className="max-w-5xl space-y-6">
          <div className="animate-fade-in delay-200 flex items-start gap-6">
            <div className="w-12 h-12 bg-[#EF3340] flex items-center justify-center shrink-0 text-white font-bold text-lg">1</div>
            <div>
              <h4 className="text-white font-bold text-lg">Минпромторг России</h4>
              <p className="text-white/60 text-sm mt-1">Поддержка проекта в рамках инвестиционного проекта по обновлению вертолётного парка</p>
            </div>
          </div>
          
          <div className="animate-fade-in delay-300 flex items-start gap-6">
            <div className="w-12 h-12 bg-[#236192] flex items-center justify-center shrink-0 text-white font-bold text-lg">2</div>
            <div>
              <h4 className="text-white font-bold text-lg">Фонд национального благосостояния (ФНБ)</h4>
              <p className="text-white/60 text-sm mt-1">Использование средств ФНБ для финансирования поставок вертолётной техники</p>
            </div>
          </div>
          
          <div className="animate-fade-in delay-400 flex items-start gap-6">
            <div className="w-12 h-12 border-2 border-white flex items-center justify-center shrink-0 text-white font-bold text-lg">3</div>
            <div>
              <h4 className="text-white font-bold text-lg">Льготный лизинг</h4>
              <p className="text-white/60 text-sm mt-1">Передача техники авиаперевозчикам на льготных условиях через механизм лизинга ГТЛК</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full bg-white/5 py-4 px-8 flex justify-between items-center">
        <span className="text-white/50 text-xs">Партнёр в развитии</span>
        <span className="text-white/50 text-xs">07 / 15</span>
      </div>
    </div>
  );
}

// Slide 8: Goals
function Slide8() {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-[#236192] text-sm font-semibold uppercase tracking-widest">Цели проекта</span>
          </div>
          <h2 className="text-[#101820] text-3xl md:text-4xl font-bold mb-10">Стратегические задачи</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {[
            { icon: '🔄', title: 'Обновление парка', text: 'Замена старых машин, выбывающих из парка, новой современной техникой' },
            { icon: '🛡️', title: 'Безопасность', text: 'Повышение безопасности и надёжности авиасообщения в регионах' },
            { icon: '🗺️', title: 'Транспортная связанность', text: 'Развитие транспортной системы страны и обеспечение доступности регионов' },
            { icon: '🏭', title: 'Развитие машиностроения', text: 'Содействие развитию российского вертолётостроения и промышленности' },
          ].map((item, i) => (
            <div key={i} className={`animate-fade-in delay-${(i + 2) * 100} flex gap-4 p-5 border border-[#101820]/10 hover:border-[#236192] transition-colors`}>
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h4 className="text-[#101820] font-bold text-lg">{item.title}</h4>
                <p className="text-[#101820]/60 text-sm mt-1">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <SlideFooter number={8} />
    </div>
  );
}

// Slide 9: Statistics
function Slide9() {
  return (
    <div className="relative w-full h-full bg-[#236192] flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-white rounded-full"></div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12 relative z-10">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-white/70 text-sm font-semibold uppercase tracking-widest">Статистика</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Уже поставлено</h2>
          <p className="text-white/70 text-lg mb-10">В рамках инвестпроекта 2023–2026 гг.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
          <div className="animate-scale-in delay-200 text-center">
            <div className="text-white text-8xl md:text-9xl font-bold leading-none">86</div>
            <div className="text-white/70 text-xl mt-4">вертолётов уже переданы</div>
            <div className="text-white/50 text-sm mt-2">региональным авиакомпаниям</div>
          </div>
          
          <div className="animate-fade-in delay-400 hidden md:block w-px h-40 bg-white/20"></div>
          
          <div className="animate-fade-in delay-500 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#EF3340]"></div>
              <span className="text-white text-base">Ми-8МТВ-1 транспортный вариант</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white"></div>
              <span className="text-white text-base">Казанский вертолётный завод</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#EF3340]"></div>
              <span className="text-white text-base">Средства ФНБ</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white"></div>
              <span className="text-white text-base">Льготные условия для эксплуатантов</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full bg-white/5 py-4 px-8 flex justify-between items-center">
        <span className="text-white/50 text-xs">Партнёр в развитии</span>
        <span className="text-white/50 text-xs">09 / 15</span>
      </div>
    </div>
  );
}

// Slide 10: Total
function Slide10() {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-[#236192] text-sm font-semibold uppercase tracking-widest">Масштаб</span>
          </div>
          <h2 className="text-[#101820] text-3xl md:text-4xl font-bold mb-10">Общий объём поставок</h2>
        </div>
        
        <div className="max-w-5xl">
          <div className="animate-fade-in delay-200 flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-[#EF3340] text-7xl md:text-8xl font-bold">150+</div>
              <div className="text-[#101820] text-xl mt-2">вертолётов</div>
              <div className="text-[#101820]/60 text-sm">общий объём инвестпроекта</div>
            </div>
          </div>
          
          <div className="animate-fade-in delay-400">
            <div className="relative h-16 bg-[#101820]/10 rounded-sm overflow-hidden mb-4">
              <div className="absolute left-0 top-0 h-full bg-[#236192] rounded-sm flex items-center justify-end pr-4" style={{ width: '57%' }}>
                <span className="text-white font-bold text-sm">86 вертолётов (2023-2026)</span>
              </div>
              <div className="absolute top-0 h-full bg-[#EF3340] rounded-sm flex items-center pl-4" style={{ left: '57%', width: '43%' }}>
                <span className="text-white font-bold text-sm">72 вертолёта (новый контракт)</span>
              </div>
            </div>
            <div className="flex justify-between text-sm text-[#101820]/60">
              <span>Уже поставлено</span>
              <span>Новый контракт</span>
            </div>
          </div>
        </div>
      </div>
      
      <SlideFooter number={10} />
    </div>
  );
}

// Slide 11: Regions
function Slide11() {
  return (
    <div className="relative w-full h-full bg-[#101820] flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-[#EF3340] text-sm font-semibold uppercase tracking-widest">Значение для регионов</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">Транспортная доступность</h2>
        </div>
        
        <div className="max-w-5xl space-y-6">
          <div className="animate-fade-in delay-200 bg-white/5 border border-white/10 p-6">
            <p className="text-white text-lg leading-relaxed">
              «Поставляемые в рамках нового контракта Ми-8МТВ-1 помогут в перевозке людей и грузов, 
              в том числе в <span className="text-[#EF3340] font-semibold">удалённых и труднодоступных населённых пунктах</span>, 
              где альтернатив вертолёту мало или совсем нет»
            </p>
            <p className="text-white/50 text-sm mt-4">— Геннадий Абраменков, замминистра промышленности и торговли России</p>
          </div>
          
          <div className="animate-fade-in delay-400 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-[#236192] p-4 text-center">
              <div className="text-[#236192] text-2xl mb-2">🏥</div>
              <div className="text-white text-sm font-semibold">Медицинские задачи</div>
              <div className="text-white/50 text-xs mt-1">Санитарная авиация</div>
            </div>
            <div className="border border-[#236192] p-4 text-center">
              <div className="text-[#236192] text-2xl mb-2">🔍</div>
              <div className="text-white text-sm font-semibold">Поисково-спасательные</div>
              <div className="text-white/50 text-xs mt-1">Спецмодули</div>
            </div>
            <div className="border border-[#236192] p-4 text-center">
              <div className="text-[#236192] text-2xl mb-2">📦</div>
              <div className="text-white text-sm font-semibold">Грузоперевозки</div>
              <div className="text-white/50 text-xs mt-1">Внешняя подвеска</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full bg-white/5 py-4 px-8 flex justify-between items-center">
        <span className="text-white/50 text-xs">Партнёр в развитии</span>
        <span className="text-white/50 text-xs">11 / 15</span>
      </div>
    </div>
  );
}

// Slide 12: Problem
function Slide12() {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-[#236192] text-sm font-semibold uppercase tracking-widest">Проблематика</span>
          </div>
          <h2 className="text-[#101820] text-3xl md:text-4xl font-bold mb-10">Состояние вертолётного парка</h2>
        </div>
        
        <div className="max-w-5xl">
          <div className="animate-fade-in delay-200 flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="text-center">
              <div className="relative">
                <div className="text-[#EF3340] text-8xl md:text-9xl font-bold leading-none">50%</div>
              </div>
              <div className="text-[#101820] text-lg mt-4 font-semibold">парка в регионах РФ</div>
            </div>
            
            <div className="text-center md:text-left">
              <div className="text-[#101820] text-2xl font-bold">старше 29 лет</div>
              <div className="text-[#101820]/60 text-base mt-2">по данным Ассоциации вертолётной индустрии на 2025 год</div>
            </div>
          </div>
          
          <div className="animate-fade-in delay-400 bg-[#EF3340]/5 border-l-4 border-[#EF3340] p-6">
            <p className="text-[#101820] text-lg font-semibold mb-2">Критическая потребность в обновлении</p>
            <p className="text-[#101820]/70 text-base">
              Половина регионального вертолётного парка эксплуатируется более 29 лет, 
              что создаёт серьёзные риски для безопасности полётов и требует срочной замены 
              на новую технику отечественного производства.
            </p>
          </div>
        </div>
      </div>
      
      <SlideFooter number={12} />
    </div>
  );
}

// Slide 13: Advantages
function Slide13() {
  return (
    <div className="relative w-full h-full bg-[#101820] flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-[#EF3340] text-sm font-semibold uppercase tracking-widest">Цитата</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">О вертолётах Ми-8</h2>
        </div>
        
        <div className="max-w-5xl">
          <div className="animate-fade-in delay-200 border-l-4 border-[#EF3340] pl-8 py-4 mb-8">
            <p className="text-white text-xl md:text-2xl leading-relaxed italic">
              «Вертолёты семейства Ми-8 — неприхотливые, надёжные и универсальные, 
              они могут работать в самых разных климатических условиях. Новая техника 
              нашего производства призвана заменить старые машины, выбывающие из парка, 
              что повысит безопасность и надёжность авиасообщения»
            </p>
            <div className="mt-6">
              <p className="text-white font-bold">Владимир Артяков</p>
              <p className="text-white/50 text-sm">первый заместитель генерального директора Госкорпорации Ростех</p>
            </div>
          </div>
          
          <div className="animate-fade-in delay-400 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Неприхотливые', 'Надёжные', 'Универсальные', 'Массовые'].map((word, i) => (
              <div key={i} className="border border-white/20 p-4 text-center">
                <span className="text-white font-bold text-sm uppercase tracking-wider">{word}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full bg-white/5 py-4 px-8 flex justify-between items-center">
        <span className="text-white/50 text-xs">Партнёр в развитии</span>
        <span className="text-white/50 text-xs">13 / 15</span>
      </div>
    </div>
  );
}

// Slide 14: Timeline
function Slide14() {
  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="animate-slide-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#EF3340]"></div>
            <span className="text-[#236192] text-sm font-semibold uppercase tracking-widest">Сроки</span>
          </div>
          <h2 className="text-[#101820] text-3xl md:text-4xl font-bold mb-10">Хронология проекта</h2>
        </div>
        
        <div className="max-w-5xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#101820]/20"></div>
            
            {[
              { year: '2023', text: 'Начало инвестиционного проекта', status: 'done' },
              { year: '2024', text: 'Продолжение поставок вертолётов Ми-8МТВ-1', status: 'done' },
              { year: '2025', text: 'Наращивание темпов обновления парка', status: 'done' },
              { year: '2026', text: '86 вертолётов поставлено. Подписание нового контракта на 72 борта', status: 'current' },
              { year: '2026+', text: 'Первые вертолёты по новому контракту — до конца года', status: 'next' },
              { year: 'Итого', text: '150+ вертолётов в рамках инвестпроекта', status: 'future' },
            ].map((item, i) => (
              <div key={i} className={`animate-fade-in flex items-start gap-6 mb-6 relative`} style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 ${
                  item.status === 'done' ? 'bg-[#236192]' :
                  item.status === 'current' ? 'bg-[#EF3340]' :
                  item.status === 'next' ? 'bg-[#101820]' :
                  'border-2 border-[#101820]/30'
                }`}>
                  <span className={`text-xs font-bold ${item.status === 'future' ? 'text-[#101820]/50' : 'text-white'}`}>
                    {item.year}
                  </span>
                </div>
                <div className="pt-3">
                  <p className={`text-base ${item.status === 'future' ? 'text-[#101820]/50' : 'text-[#101820]'}`}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <SlideFooter number={14} />
    </div>
  );
}

// Slide 15: Conclusion
function Slide15() {
  return (
    <div className="relative w-full h-full bg-[#101820] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#EF3340]"></div>
      
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/30 translate-x-20"></div>
      </div>
      
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <div className="animate-fade-in mb-8">
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 border-2 border-white">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#EF3340]"></div>
            </div>
          </div>
          
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Вместе в будущее
          </h2>
          
          <div className="h-px w-24 bg-[#236192] mx-auto mb-6"></div>
          
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Контракт на 72 вертолёта Ми-8МТВ-1 — продолжение системной работы 
            по обновлению вертолётного парка России и повышению транспортной связанности регионов
          </p>
        </div>
        
        <div className="animate-fade-in delay-400 mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div>
            <div className="text-[#EF3340] text-3xl font-bold">150+</div>
            <div className="text-white/50 text-xs mt-1">вертолётов</div>
          </div>
          <div>
            <div className="text-[#236192] text-3xl font-bold">72</div>
            <div className="text-white/50 text-xs mt-1">новый контракт</div>
          </div>
          <div>
            <div className="text-white text-3xl font-bold">2026</div>
            <div className="text-white/50 text-xs mt-1">первые поставки</div>
          </div>
        </div>
      </div>
      
      {/* Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-[#236192]/20 py-6 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-white/50 relative">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white/50"></div>
            </div>
            <div>
              <div className="text-white font-bold text-sm">Ростех</div>
              <div className="text-white/50 text-xs">Партнёр в развитии</div>
            </div>
          </div>
          <div className="text-white/40 text-xs">rostec.ru</div>
        </div>
      </div>
    </div>
  );
}

// Footer component
function SlideFooter({ number }: { number: number }) {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-[#101820]/5 py-4 px-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-[#101820] relative">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white"></div>
        </div>
        <span className="text-[#101820]/50 text-xs">Ростех</span>
      </div>
      <span className="text-[#101820]/40 text-xs">{String(number).padStart(2, '0')} / 15</span>
    </div>
  );
}

// Main App
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

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

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <Slide1 />;
      case 1: return <Slide2 />;
      case 2: return <Slide3 />;
      case 3: return <Slide4 />;
      case 4: return <Slide5 />;
      case 5: return <Slide6 />;
      case 6: return <Slide7 />;
      case 7: return <Slide8 />;
      case 8: return <Slide9 />;
      case 9: return <Slide10 />;
      case 10: return <Slide11 />;
      case 11: return <Slide12 />;
      case 12: return <Slide13 />;
      case 13: return <Slide14 />;
      case 14: return <Slide15 />;
      default: return <Slide1 />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#101820]">
      {/* Presentation area */}
      <div className="flex-1 relative overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {renderSlide()}
        </div>
      </div>
      
      {/* Navigation bar */}
      <div className="h-14 bg-[#101820] border-t border-white/10 flex items-center justify-between px-4 shrink-0">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border border-white/30 relative">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#EF3340]"></div>
          </div>
          <span className="text-white/50 text-xs hidden sm:inline">Ростех</span>
        </div>
        
        {/* Center: Slide indicators */}
        <div className="flex items-center gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentSlide 
                  ? 'bg-[#EF3340] w-6' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
        
        {/* Right: Navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-white/50 text-xs min-w-[3rem] text-center">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
