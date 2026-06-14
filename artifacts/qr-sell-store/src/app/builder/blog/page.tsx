'use client';

import { useState } from 'react';
import { Link } from 'wouter';
import { RevitaNav } from '../components/revita-nav';
import { RevitaFooter } from '../components/revita-footer';

interface Article {
  num: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    'Todos',
    'Análisis de mercado',
    'Guías para el inversor',
    'Casos de éxito',
    'Regulación',
  ];

  const articles: Article[] = [
    {
      num: '— I',
      category: 'Análisis de mercado',
      title: 'El mercado residencial de Murcia en 2025: tres tendencias que todo inversor debería entender',
      excerpt: 'Repasamos las señales clave del último ciclo y por qué el levante español sigue siendo una de las zonas más interesantes para invertir en rehabilitación.',
      date: '15 may 2025',
      author: 'John Lomax',
      readTime: '8 min lectura',
    },
    {
      num: '— II',
      category: 'Guías para el inversor',
      title: '¿Qué es un SPV y por qué Revita constituye uno por cada proyecto?',
      excerpt: 'El vehículo de propósito especial es la piedra angular de la inversión inmobiliaria profesional. Te explicamos cómo funciona y qué ventajas ofrece.',
      date: '15 may 2025',
      author: 'David Gálvez',
      readTime: '6 min lectura',
    },
    {
      num: '— III',
      category: 'Casos de éxito',
      title: 'Rehabilitación integral en El Carmen: del estado original al nuevo hogar',
      excerpt: 'Mostramos paso a paso uno de nuestros últimos proyectos: el análisis previo, la ejecución de obra y los retornos finales para el inversor.',
      date: '15 may 2025',
      author: 'Equipo Revita',
      readTime: '10 min lectura',
    },
    {
      num: '— IV',
      category: 'Regulación',
      title: 'Reglamento UE 2020/1503: qué cambia para los inversores en plataformas como Revita',
      excerpt: 'Una guía clara y sin jerga sobre cómo el nuevo marco regulatorio europeo protege al inversor en el ámbito de la financiación participativa.',
      date: '15 may 2025',
      author: 'John Lomax',
      readTime: '12 min lectura',
    },
    {
      num: '— V',
      category: 'Análisis de mercado',
      title: 'Tipos de interés, inflación y vivienda: tres ideas para no perder dinero en 2025',
      excerpt: 'Cómo se relacionan los grandes movimientos macroeconómicos con el mercado residencial español. Lo importante, sin ruido.',
      date: '15 may 2025',
      author: 'John Lomax',
      readTime: '7 min lectura',
    },
    {
      num: '— VI',
      category: 'Guías para el inversor',
      title: 'Préstamo participativo vs. equity: cuál elegir según tu perfil',
      excerpt: 'Ventajas, desventajas e implicaciones fiscales de las dos formas más habituales de entrar en una operación inmobiliaria profesional.',
      date: '15 may 2025',
      author: 'Equipo Revita',
      readTime: '9 min lectura',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-black selection:text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .blog-hero{
              padding:80px 0 40px;text-align:center;border-bottom:1px solid var(--gray-200);
            }
            .blog-hero h1{
              font-family:var(--font-fraunces),serif;font-weight:300;
              font-size:clamp(48px, 6vw, 88px);line-height:1.02;letter-spacing:-0.03em;
              color:var(--black);margin-bottom:18px;max-width:1000px;margin-left:auto;margin-right:auto;
            }
            .blog-hero h1 em{font-style:italic}
            .blog-hero p{
              font-size:19px;color:var(--gray-700);max-width:680px;
              margin:0 auto;line-height:1.6;font-weight:300;
            }

            .blog-filters{
              padding:24px 0;border-bottom:1px solid var(--gray-200);
              position:sticky;top:80px;background:rgba(255,255,255,0.97);
              backdrop-filter:blur(8px);z-index:50;
            }
            .filters-row{
              display:flex;justify-content:space-between;align-items:center;
              flex-wrap:wrap;gap:24px;
            }
            .filter-pills{
              display:flex;gap:8px;flex-wrap:wrap;
            }
            .filter-pill{
              font-size:11px;font-weight:500;letter-spacing:2px;text-transform:uppercase;
              color:var(--gray-700);padding:10px 18px;border:1px solid var(--gray-300);
              background:transparent;cursor:pointer;transition:all 0.25s ease;
              text-decoration:none;
            }
            .filter-pill:hover{border-color:var(--black);color:var(--black)}
            .filter-pill.active{background:var(--black);color:var(--white);border-color:var(--black)}
            .search-box{
              position:relative;display:flex;align-items:center;gap:10px;
              border-bottom:1px solid var(--gray-300);padding-bottom:8px;min-width:220px;
            }
            .search-box svg{width:16px;height:16px;color:var(--gray-500)}
            .search-box input{
              border:none;background:transparent;font-size:14px;
              font-family:inherit;color:var(--black);width:100%;
            }
            .search-box input:focus{outline:none}
            .search-box input::placeholder{color:var(--gray-500)}

            .blog-grid{
              display:grid;grid-template-columns:repeat(3, 1fr);gap:40px;
              padding:40px 0;
            }
            .article-card{
              text-decoration:none;color:inherit;display:block;
              border-bottom:1px solid transparent;transition:border-color 0.25s ease;
            }
            .article-card:hover{border-bottom-color:var(--black)}
            .article-img{
              aspect-ratio:16/9;background:var(--gray-100);
              background:
                linear-gradient(135deg, rgba(0,0,0,0.04) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.04) 75%, transparent 75%),
                var(--gray-100);
              background-size:20px 20px;
              margin-bottom:24px;display:flex;align-items:center;justify-content:center;
              position:relative;overflow:hidden;color:var(--gray-300);
            }
            .article-img-num{
              position:absolute;top:20px;right:20px;
              font-family:var(--font-fraunces),serif;font-size:12px;color:var(--gray-500);letter-spacing:2px;
            }
            .article-img-icon{font-family:var(--font-fraunces),serif;font-size:60px;color:var(--gray-300);font-style:italic;font-weight:300}
            .article-category{
              font-size:10px;font-weight:500;letter-spacing:2.5px;text-transform:uppercase;
              color:var(--gray-700);margin-bottom:14px;
            }
            .article-title{
              font-family:var(--font-fraunces),serif;font-weight:400;font-size:26px;
              color:var(--black);line-height:1.15;margin-bottom:16px;letter-spacing:-0.015em;
            }
            .article-card:hover .article-title{font-style:italic}
            .article-excerpt{
              font-size:15px;color:var(--gray-700);line-height:1.65;
              margin-bottom:24px;font-weight:300;
            }
            .article-meta{
              display:flex;gap:18px;font-size:12px;color:var(--gray-500);
              letter-spacing:0.3px;padding-top:16px;border-top:1px solid var(--gray-200);
              font-weight:400;
            }
            .article-meta-sep{color:var(--gray-300)}

            .newsletter-inline{
              margin:40px 0;padding:40px 30px;
              background:var(--black);color:var(--white);
              text-align:center;
            }
            .newsletter-inline h3{
              font-family:var(--font-fraunces),serif;font-weight:300;font-style:italic;
              font-size:clamp(28px, 3vw, 42px);line-height:1.15;
              margin-bottom:16px;letter-spacing:-0.02em;
            }
            .newsletter-inline p{
              font-size:15px;color:rgba(255,255,255,0.7);
              max-width:520px;margin:0 auto 20px;line-height:1.6;font-weight:300;
            }
            .newsletter-inline form{
              display:flex;gap:12px;max-width:480px;margin:0 auto;
              border-bottom:1px solid rgba(255,255,255,0.3);
            }
            .newsletter-inline input{
              flex:1;background:transparent;border:none;
              padding:14px 0;color:var(--white);font-size:15px;
              font-family:inherit;font-weight:300;
            }
            .newsletter-inline input::placeholder{color:rgba(255,255,255,0.5)}
            .newsletter-inline input:focus{outline:none}
            .newsletter-inline button{
              background:transparent;color:var(--white);border:none;
              padding:14px 0;font-size:11px;font-weight:600;letter-spacing:2.5px;
              text-transform:uppercase;cursor:pointer;
            }

            .pagination{
              display:flex;justify-content:center;gap:8px;
              padding:24px 0 60px;
            }
            .pagination a{
              width:44px;height:44px;display:flex;align-items:center;justify-content:center;
              border:1px solid var(--gray-300);text-decoration:none;
              color:var(--gray-700);font-size:13px;font-weight:500;letter-spacing:1px;
              transition:all 0.25s ease;
            }
            .pagination a:hover{border-color:var(--black);color:var(--black)}
            .pagination a.active{background:var(--black);color:var(--white);border-color:var(--black)}
            .pagination .next{width:auto;padding:0 24px;letter-spacing:2px;text-transform:uppercase;font-size:11px}

            /* Layout & generic elements from original reference */
            .page-eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--gray-700);margin-bottom:24px}
            .page-eyebrow::before{content:"";width:32px;height:1px;background:var(--black)}

            .section-label{position:absolute;top:24px;right:40px;z-index:5;background:transparent;color:var(--gray-500);padding:0;font-size:10px;font-weight:500;letter-spacing:3px;text-transform:uppercase;display:flex;align-items:center;gap:10px}
            .section-label::before{content:"";width:24px;height:1px;background:var(--gray-300)}

            @media(max-width:900px){
              .blog-grid{grid-template-columns:1fr;gap:30px;padding:30px 0}
              .filters-row{flex-direction:column;align-items:flex-start}
              .blog-filters{position:static}
              .newsletter-inline{padding:30px 16px;margin:30px 0}
              .newsletter-inline form{flex-direction:column;border:none}
              .newsletter-inline input{border-bottom:1px solid rgba(255,255,255,0.3);padding:14px 0}
              .newsletter-inline button{background:var(--white);color:var(--black);padding:14px;margin-top:8px}
            }
          `,
        }}
      />

      <RevitaNav />

      {/* HERO */}
      <section className="blog-hero">
        <span className="section-label">8.1 — Header</span>
        <div className="container">
          <span className="page-eyebrow" style={{ justifyContent: 'center' }}>Blog</span>
          <h1 className="serif">Conocimiento para<br /><em>invertir mejor</em>.</h1>
          <p>Análisis, guías y reflexiones sobre inversión inmobiliaria, rehabilitación y mercado. Sin ruido, sin venta.</p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="blog-filters">
        <span className="section-label">8.2 — Filtros</span>
        <div className="container">
          <div className="filters-row">
            <div className="filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="search-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="search"
                placeholder="Buscar artículo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LISTADO */}
      <div className="container">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 text-neutral-500 font-light">
            No se encontraron artículos que coincidan con tu búsqueda.
          </div>
        ) : (
          <>
            <div className="blog-grid">
              {filteredArticles.slice(0, 3).map((article, index) => (
                <Link href="#" key={index} className="article-card">
                  <div className="article-img">
                    <span className="article-img-num">{article.num}</span>
                    <span className="article-img-icon serif">R</span>
                  </div>
                  <div className="article-category">{article.category}</div>
                  <h3 className="article-title serif">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-meta">
                    <span>{article.date}</span>
                    <span className="article-meta-sep">·</span>
                    <span>{article.author}</span>
                    <span className="article-meta-sep">·</span>
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* NEWSLETTER INLINE */}
            <div className="container">
              <section className="newsletter-inline rounded-none">
                <h3>Suscríbete y recibe nuestros análisis<br />cada semana.</h3>
                <p>Una vez por semana, en tu correo: análisis de mercado, guías prácticas y oportunidades en preparación. Sin spam, sin relleno.</p>
                {subscribed ? (
                  <p className="text-white font-medium text-lg">¡Gracias por suscribirte!</p>
                ) : (
                  <form onSubmit={handleSubscribe}>
                    <input
                      type="email"
                      placeholder="Tu correo electrónico"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Suscribirme →</button>
                  </form>
                )}
              </section>
            </div>

            {filteredArticles.length > 3 && (
              <div className="blog-grid">
                {filteredArticles.slice(3).map((article, index) => (
                  <Link href="#" key={index} className="article-card">
                    <div className="article-img">
                      <span className="article-img-num">{article.num}</span>
                      <span className="article-img-icon serif">R</span>
                    </div>
                    <div className="article-category">{article.category}</div>
                    <h3 className="article-title serif">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-meta">
                      <span>{article.date}</span>
                      <span className="article-meta-sep">·</span>
                      <span>{article.author}</span>
                      <span className="article-meta-sep">·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* PAGINACIÓN */}
      <div className="container">
        <div className="pagination">
          <Link href="#" className="active">1</Link>
          <Link href="#">2</Link>
          <Link href="#">3</Link>
          <Link href="#">4</Link>
          <Link href="#" className="next">Siguiente →</Link>
        </div>
      </div>

      <RevitaFooter />
    </main>
  );
}
