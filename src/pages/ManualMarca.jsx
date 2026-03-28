import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'

export default function ManualMarca() {
  const colors = [
    { name: 'Principal', hex: '#E8B84B' },
    { name: 'Escuro', hex: '#111' },
    { name: 'Claro', hex: '#F5F5F5' },
  ]

  const slideStyle = (bg, color) => ({
    minHeight: '100vh', display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center',
    background: bg, color: color, padding: '80px 40px', textAlign: 'center'
  })

  return (
    <div style={ { fontFamily: "'Nunito Sans', sans-serif" } }>
      <Link to="/" style={{
        position: 'fixed', top: 24, left: 24, zIndex: 100,
        display: 'inline-flex', alignItems: 'center', gap: 8,
        color: '#E8B84B', fontSize: 14, fontWeight: 500,
        background: 'rgba(0,0,0,0.7)', padding: '10px 20px',
        borderRadius: 30, backdropFilter: 'blur(10px)'
      }}><ArrowLeft size={16} /> Voltar</Link>

      <section style={slideStyle('#111', '#F5F5F5')}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, marginBottom: 12 }}>Guto Fonseca</h2>
        <p style={{ fontSize: 14, letterSpacing: 4, opacity: 0.5, textTransform: 'uppercase' }}>Fotografia — Manual da Marca</p>
      </section>

      <section style={slideStyle('#F5F5F5', '#111')}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 32 }}>Sobre a Marca</h2>
        <p style={{ maxWidth: 600, fontSize: 16, lineHeight: 1.9, opacity: 0.8 }}>Fotógrafo de casamento e família em Florianópolis. Imagens autênticas que capturam a essência de cada momento.</p>
      </section>

      <section style={slideStyle('#fff', '#111')}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 48 }}>Paleta de Cores</h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          {colors.map(c => (
            <div key={c.hex}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', background: c.hex, margin: '0 auto 12px', border: c.hex === '#F5F5F5' ? '1px solid #ddd' : 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }} />
              <p style={{ fontSize: 13, fontWeight: 600 }}>{c.name}</p>
              <p style={{ fontSize: 11, opacity: 0.6 }}>{c.hex}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={slideStyle('#111', '#F5F5F5')}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 32, color: '#E8B84B' }}>Tom de Voz</h2>
        <p style={{ maxWidth: 600, fontSize: 16, lineHeight: 1.9, opacity: 0.7 }}>Artístico e emocional. A linguagem é visual — menos palavras, mais sentimento.</p>
      </section>

      <section style={{ minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#111', color: 'rgba(255,255,255,0.3)', padding: 60, textAlign: 'center' }}>
        <p style={{ fontSize: 12 }}>Apresentação gerada por Vendedor de Site</p>
      </section>
    </div>
  )
}
