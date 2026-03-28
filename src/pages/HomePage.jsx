import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { List, X, WhatsappLogo, InstagramLogo, Star, Camera, Heart, FilmStrip, Users, MapPin, Phone, GoogleLogo, ArrowRight } from '@phosphor-icons/react'

const servicos = [
  { icon: Heart, title: 'Casamentos', desc: 'Cobertura completa do grande dia. Cada olhar, cada emoção, eternizada com autenticidade.' },
  { icon: Users, title: 'Família', desc: 'Ensaios familiares que capturam a essência dos vínculos e a alegria dos momentos simples.' },
  { icon: Camera, title: 'Ensaios', desc: 'Ensaios fotográficos personalizados em locações incríveis de Florianópolis.' },
  { icon: FilmStrip, title: 'Eventos', desc: 'Formaturas, aniversários e eventos corporativos com olhar autoral e sensível.' },
]

const reviews = [
  { name: 'Thais R.', text: 'O Guto captou momentos que nem percebemos no dia do casamento. Cada foto é uma obra de arte. Emocionante!', stars: 5 },
  { name: 'Marcos L.', text: 'Fotógrafo sensacional! As fotos do ensaio familiar ficaram lindas, naturais e cheias de emoção.', stars: 5 },
  { name: 'Amanda S.', text: 'Profissional incrível. Muito atencioso, criativo e as fotos superaram todas as expectativas.', stars: 5 },
]

function S({ children, id, bg = '#111', style = {} }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  return <motion.section ref={ref} id={id} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ padding: 'clamp(80px, 10vw, 140px) 40px', background: bg, ...style }}>{children}</motion.section>
}

export default function HomePage() {
  const [sc, setSc] = useState(false)
  const [mo, setMo] = useState(false)
  useEffect(() => { const h = () => setSc(window.scrollY > 50); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])

  return (<>
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: sc ? '10px 0' : '18px 0', background: sc ? 'rgba(17,17,17,0.95)' : 'rgba(17,17,17,0.3)', backdropFilter: 'blur(20px)', transition: 'all 0.4s' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ fontSize: 18, fontWeight: 200, color: '#F5F5F5', letterSpacing: 4, textTransform: 'uppercase' }}>Guto Fonseca</a>
        <div className="nd" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {['Portfólio', 'Sobre', 'Depoimentos', 'Contato'].map(l => <a key={l} href={`#${l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} style={{ fontSize: 12, letterSpacing: 2, color: 'rgba(245,245,245,0.5)', textTransform: 'uppercase' }}>{l}</a>)}
          <a href="https://wa.me/5548999856828?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20fotografia." style={{ padding: '10px 24px', border: '1px solid #E8B84B', color: '#E8B84B', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>Orçamento</a>
        </div>
        <button className="mb" onClick={() => setMo(!mo)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#F5F5F5' }}>{mo ? <X size={24} /> : <List size={24} />}</button>
      </div>
      {mo && <div style={{ position: 'fixed', inset: 0, background: 'rgba(17,17,17,0.98)', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28 }}>
        <button onClick={() => setMo(false)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer', color: '#F5F5F5' }}><X size={28} /></button>
        {['Portfólio', 'Sobre', 'Contato'].map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMo(false)} style={{ fontSize: 24, fontWeight: 200, color: '#F5F5F5', letterSpacing: 4 }}>{l}</a>)}
      </div>}
      <style>{`@media(max-width:768px){.nd{display:none!important}.mb{display:block!important}}`}</style>
    </nav>

    {/* HERO — dark, dramatic, fotógrafo */}
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#111', padding: '140px 40px 80px', textAlign: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(232,184,75,0.04) 0%, transparent 60%)' }} />
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} style={{ width: 100, height: 1, background: '#E8B84B', marginBottom: 48 }} />
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 200, color: '#F5F5F5', lineHeight: 0.95, maxWidth: 800, letterSpacing: '-0.04em' }}>
        Momentos que<br /><span style={{ color: '#E8B84B' }}>duram para sempre</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ fontSize: 16, color: 'rgba(245,245,245,0.35)', maxWidth: 450, lineHeight: 1.8, marginTop: 32, fontWeight: 300 }}>
        Fotografia autoral de casamento e família em Florianópolis. Imagens que capturam a emoção real de cada história.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} style={{ display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="https://wa.me/5548999856828?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento." style={{ padding: '16px 40px', background: '#E8B84B', color: '#111', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 10 }}><WhatsappLogo size={18} weight="fill" /> Solicitar Orçamento</a>
        <a href="#portfolio" style={{ padding: '16px 40px', border: '1px solid rgba(245,245,245,0.15)', color: '#F5F5F5', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase' }}>Ver Portfólio</a>
      </motion.div>
    </section>

    <S id="portfolio" bg="#0a0a0a">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ fontSize: 11, letterSpacing: 5, textTransform: 'uppercase', color: '#E8B84B', marginBottom: 12, textAlign: 'center' }}>Portfólio</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F5F5', marginBottom: 60, textAlign: 'center', fontWeight: 200 }}>O que <span style={{ color: '#E8B84B' }}>fotografamos</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {servicos.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ padding: 32, background: '#151515', border: '1px solid rgba(232,184,75,0.08)', transition: 'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(232,184,75,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(232,184,75,0.08)'}>
              <s.icon size={28} weight="thin" color="#E8B84B" style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 20, color: '#F5F5F5', marginBottom: 10, fontWeight: 300 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(245,245,245,0.35)', lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </S>

    <S id="sobre" bg="#111">
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F5F5', marginBottom: 32, fontWeight: 200 }}>Sobre o <span style={{ color: '#E8B84B' }}>fotógrafo</span></h2>
        <p style={{ color: 'rgba(245,245,245,0.4)', lineHeight: 1.9, maxWidth: 550, margin: '0 auto' }}>
          Guto Fonseca é fotógrafo em Florianópolis, especializado em casamentos e ensaios familiares. Com olhar autoral e sensibilidade para captar emoções genuínas, suas imagens contam histórias que vão além do óbvio. Cada clique é uma busca pela autenticidade — pela risada espontânea, pelo olhar cúmplice, pelo abraço apertado.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 48, flexWrap: 'wrap' }}>
          {[{ n: '4.9', d: 'Estrelas' }, { n: '120+', d: 'Avaliações' }, { n: '500+', d: 'Seguidores IG' }].map((s, i) => (
            <div key={i}><p style={{ fontSize: 32, fontWeight: 300, color: '#E8B84B' }}>{s.n}</p><p style={{ fontSize: 11, color: 'rgba(245,245,245,0.3)', letterSpacing: 2, marginTop: 4 }}>{s.d}</p></div>
          ))}
        </div>
      </div>
    </S>

    <S id="depoimentos" bg="#0a0a0a">
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(232,184,75,0.08)', padding: '8px 20px', borderRadius: 30, marginBottom: 16 }}>
            <GoogleLogo size={16} weight="bold" color="#E8B84B" /><span style={{ fontSize: 13, color: '#E8B84B', fontWeight: 500 }}>4.9 · 120 avaliações</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F5F5', fontWeight: 200 }}>Depoimentos</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ padding: 28, background: '#151515' }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>{[...Array(r.stars)].map((_, j) => <Star key={j} size={14} weight="fill" color="#E8B84B" />)}</div>
              <p style={{ fontSize: 15, color: 'rgba(245,245,245,0.7)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 14 }}>"{r.text}"</p>
              <p style={{ fontSize: 12, color: 'rgba(245,245,245,0.3)' }}>{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </S>

    <S id="contato" bg="#111">
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F5F5', marginBottom: 16, fontWeight: 200 }}>Vamos <span style={{ color: '#E8B84B' }}>criar juntos</span>?</h2>
        <p style={{ color: 'rgba(245,245,245,0.3)', marginBottom: 40 }}>Conte-me sobre o seu momento especial.</p>
        <a href="https://wa.me/5548999856828?text=Olá%20Guto!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20fotografia." style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '18px 48px', background: '#E8B84B', color: '#111', fontSize: 14, fontWeight: 600, letterSpacing: 1 }}><WhatsappLogo size={22} weight="fill" /> Solicitar Orçamento</a>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 48, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Phone size={18} color="#E8B84B" /><span style={{ color: 'rgba(245,245,245,0.4)', fontSize: 14 }}>(48) 99985-6828</span></div>
          <a href="https://instagram.com/fonsecafotografia" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><InstagramLogo size={18} color="#E8B84B" /><span style={{ color: 'rgba(245,245,245,0.4)', fontSize: 14 }}>@fonsecafotografia</span></a>
        </div>
      </div>
    </S>

    <footer style={{ padding: '32px 40px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <p style={{ fontSize: 14, fontWeight: 200, color: '#F5F5F5', letterSpacing: 3 }}>GUTO FONSECA</p>
        <Link to="/manual-da-marca" style={{ fontSize: 11, color: '#E8B84B', letterSpacing: 2, textTransform: 'uppercase' }}>Manual da Marca</Link>
      </div>
      <p style={{ maxWidth: 1200, margin: '16px auto 0', fontSize: 11, color: 'rgba(245,245,245,0.15)', textAlign: 'center' }}>Guto Fonseca Fotografia — Florianópolis/SC</p>
    </footer>

    <motion.a href="https://wa.me/5548999856828?text=Olá!" target="_blank" rel="noopener" animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 1000, width: 56, height: 56, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}><WhatsappLogo size={28} weight="fill" color="#fff" /></motion.a>
  </>)
}
