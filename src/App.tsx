import './App.css';
import React, { useState } from 'react';

const LandingPage: React.FC = () => {
  // Estado para manejar qué FAQ está abierto
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Estado para manejar qué testimonio está activo
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  // Datos de testimonios
  const testimonials = [
    {
      id: 1,
      name: "María González",
      text: "Muy satisfecho con el servicio. Recomendado al 100%. Los planes son súper personalizados y me han ayudado a alcanzar mis metas.",
      emoji: "👩"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      text: "Excelente atención y seguimiento personalizado. He visto resultados increíbles en solo 2 meses de entrenamiento.",
      emoji: "👨"
    },
    {
      id: 3,
      name: "Ana Martínez",
      text: "Los planes de nutrición son fantásticos. Finalmente encontré un programa que se adapta a mi estilo de vida ocupado.",
      emoji: "👩‍💼"
    }
  ];

  // Datos de FAQ
  const faqs = [
    {
      question: "¿Necesito experiencia previa para seguir los planes?",
      answer: "No, nuestros planes están diseñados para todos los niveles, desde principiantes hasta avanzados."
    },
    {
      question: "¿Qué pasa si no tengo gimnasio?",
      answer: "Ofrecemos planes de entrenamiento que se pueden realizar en casa con equipamiento mínimo."
    },
    {
      question: "¿Incluyen seguimiento?",
      answer: "Sí, todos nuestros planes incluyen seguimiento personalizado y ajustes según tu progreso."
    },
    {
      question: "¿Cuándo veré resultados?",
      answer: "Los primeros resultados se pueden ver en 4-8 semanas, dependiendo de tu dedicación y consistencia."
    },
    {
      question: "¿Las consultas pueden ser presenciales o solo es online?",
      answer: "Ofrecemos tanto consultas online como presenciales, adaptándonos a tus necesidades y ubicación."
    }
  ];

  // Función para manejar el toggle de FAQ
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Función para ir al testimonio anterior
  const prevTestimonial = () => {
    setActiveTestimonialIndex(
      activeTestimonialIndex === 0 ? testimonials.length - 1 : activeTestimonialIndex - 1
    );
  };

  // Función para ir al testimonio siguiente
  const nextTestimonial = () => {
    setActiveTestimonialIndex(
      activeTestimonialIndex === testimonials.length - 1 ? 0 : activeTestimonialIndex + 1
    );
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img 
                src="Fenix.png"
                alt="Fénix Team"
                className="logo-img" 
              />
              <span className="logo-text">Fénix Team</span>
            </div>
            <button className="download-btn">DESCARGAR</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="Principal.jpg" 
            alt="Fitness Background" 
            className="hero-bg-img" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-logo">
              <img 
                src="Principal.png" 
                alt="Fénix Team"
                className="hero-logo-img"
              />
            </div>
            <h1 className="hero-title">EN LÍNEA</h1>
            <div className="fenix-logo">
              <span className="fenix-text">FÉNIX</span>
            </div>
            <button className="hero-download-btn">DESCARGAR</button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="description">
        <div className="container">
          <div className="description-content">
            <h2 className="description-title">
              Creamos planes de <span className="highlight">entrenamiento</span> y{' '}
              <span className="highlight">nutrición deportiva</span> totalmente
              personalizados, adaptados a tu <span className="highlight">cuerpo</span>, 
              tus <span className="highlight">metas</span> y{' '}
              <span className="highlight">estilo de vida</span>.
            </h2>
            <h3 className="description-subtitle">
              Empieza hoy tu proceso de transformación física y mental
            </h3>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans">
        <div className="container">
          <div className="plans-grid">
            <div className="plan-card">
              <div className="plan-icon">
                <span className="plan-number">1</span>
              </div>
              <h3 className="plan-title">Plan 1</h3>
              <p className="plan-description">Descripción breve del plan 1.</p>
              <button className="plan-btn">VER MÁS</button>
            </div>
            <div className="plan-card">
              <div className="plan-icon">
                <span className="plan-number">2</span>
              </div>
              <h3 className="plan-title">Plan 2</h3>
              <p className="plan-description">Descripción breve del plan 2.</p>
              <button className="plan-btn">VER MÁS</button>
            </div>
            <div className="plan-card">
              <div className="plan-icon">
                <span className="plan-number">3</span>
              </div>
              <h3 className="plan-title">Plan 3</h3>
              <p className="plan-description">Descripción breve del plan 3.</p>
              <button className="plan-btn">VER MÁS</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="testimonials-title">Opiniones de nuestros clientes</h2>
          <div className="testimonials-carousel">
            <div className="testimonial-card active">
              <div className="testimonial-avatar">
                <div className="avatar-emoji">{testimonials[activeTestimonialIndex].emoji}</div>
              </div>
              <h3 className="testimonial-name">{testimonials[activeTestimonialIndex].name}</h3>
              <p className="testimonial-text">
                "{testimonials[activeTestimonialIndex].text}"
              </p>
              <button className="testimonial-btn">VER MÁS</button>
            </div>
          </div>
          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={prevTestimonial}>
              &lt;
            </button>
            <button className="carousel-btn next" onClick={nextTestimonial}>
              &gt;
            </button>
          </div>
          {/* Indicadores de testimonio */}
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeTestimonialIndex ? 'active' : ''}`}
                onClick={() => setActiveTestimonialIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2 className="faq-title">Preguntas frecuentes</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaqIndex === index ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className="faq-icon">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="download-app">
        <div className="container">
          <div className="download-content">
            <h2 className="download-title">
              ¡Descarga la app y empieza tu transformación!
            </h2>
            <p className="download-subtitle">Disponible en tu tienda favorita.</p>
            <div className="download-buttons">
              <a href="#" className="store-btn google-play">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                />
              </a>
              <a href="#" className="store-btn app-store">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;