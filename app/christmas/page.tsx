'use client';

import React from 'react';

const ChristmasPrototypes = () => {

  // Color Palette Display
  const ColorPalette = () => (
    <div style={{ marginBottom: '60px' }}>
      <h2 style={{ 
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '28px',
        color: '#F5EBE0',
        marginBottom: '16px',
        fontWeight: 500
      }}>Color Palette</h2>
      <p style={{ 
        fontFamily: "'Atkinson Hyperlegible', sans-serif",
        color: '#B8A99A',
        marginBottom: '24px',
        fontSize: '15px'
      }}>Warm, celebratory colors that evoke sensory Christmas experiences</p>
      
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {[
          { color: '#722F37', name: 'Wine Burgundy', desc: 'Warmth & depth' },
          { color: '#D4AF37', name: 'Festive Gold', desc: 'Celebration & light' },
          { color: '#4A5D4A', name: 'Forest Sage', desc: 'Natural & grounded' },
          { color: '#F5EBE0', name: 'Warm Ivory', desc: 'Soft & inviting' },
          { color: '#B8860B', name: 'Dark Gold', desc: 'Rich accent' },
          { color: '#3D2914', name: 'Deep Brown', desc: 'Text on light' },
        ].map((item, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '16px',
              background: item.color,
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              border: item.color === '#F5EBE0' ? '1px solid rgba(255,255,255,0.2)' : 'none'
            }}/>
            <span style={{ 
              fontFamily: "'Atkinson Hyperlegible', sans-serif",
              fontSize: '12px',
              color: '#F5EBE0',
              fontWeight: 600
            }}>{item.name}</span>
            <span style={{ 
              fontFamily: "'Atkinson Hyperlegible', sans-serif",
              fontSize: '11px',
              color: '#8A7A6A'
            }}>{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // Typography Display
  const Typography = () => (
    <div style={{ marginBottom: '60px' }}>
      <h2 style={{ 
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '28px',
        color: '#F5EBE0',
        marginBottom: '16px',
        fontWeight: 500
      }}>Typography</h2>
      
      <div style={{ 
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '20px',
        padding: '32px',
        display: 'flex',
        gap: '48px',
        flexWrap: 'wrap'
      }}>
        <div>
          <span style={{ 
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '12px',
            color: '#D4AF37',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>Display / Headers</span>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '48px',
            color: '#F5EBE0',
            margin: '8px 0 0 0',
            fontWeight: 500
          }}>Cormorant Garamond</h3>
          <p style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '24px',
            color: '#B8A99A',
            margin: '8px 0 0 0',
            fontStyle: 'italic'
          }}>Elegant, warm, readable</p>
        </div>
        
        <div>
          <span style={{ 
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '12px',
            color: '#D4AF37',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>Body / UI Text</span>
          <h3 style={{ 
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '32px',
            color: '#F5EBE0',
            margin: '8px 0 0 0',
            fontWeight: 700
          }}>Atkinson Hyperlegible</h3>
          <p style={{ 
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '18px',
            color: '#B8A99A',
            margin: '8px 0 0 0'
          }}>Designed for accessibility & clarity</p>
        </div>
      </div>
    </div>
  );

  // Prototype 1: Four Quadrants with Central Connection
  const Prototype1 = () => (
    <div style={{ marginBottom: '60px' }}>
      <h2 style={{ 
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '28px',
        color: '#F5EBE0',
        marginBottom: '16px',
        fontWeight: 500
      }}>Concept 1: Unified Quadrants</h2>
      <p style={{ 
        fontFamily: "'Atkinson Hyperlegible', sans-serif",
        color: '#B8A99A',
        marginBottom: '24px',
        fontSize: '15px',
        maxWidth: '600px'
      }}>Four distinct sections connected by a warm central glow — symbolizing how different experiences converge in the spirit of Christmas.</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gridTemplateRows: '1fr 1fr',
        height: '520px',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 25px 80px rgba(0,0,0,0.4)',
        position: 'relative'
      }}>
        {/* Central connecting element */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(212,175,127,0.95) 0%, rgba(212,175,127,0.4) 40%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 60px rgba(212,175,127,0.5)'
        }}>
          <span style={{ fontSize: '32px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>✦</span>
        </div>
        
        {/* Section 1: Sound/Deaf - Deep Burgundy */}
        <div style={{
          background: 'linear-gradient(135deg, #722F37 0%, #8B3A44 50%, #5C252C 100%)',
          padding: '36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#F5EBE0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-30px',
            right: '-30px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            borderRadius: '50%'
          }}/>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <span style={{ fontSize: '28px' }}>🔔</span>
          </div>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '26px',
            fontWeight: 600,
            margin: 0,
            letterSpacing: '0.02em'
          }}>Silent Night</h3>
          <p style={{ 
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '14px',
            opacity: 0.8,
            marginTop: '10px',
            textAlign: 'center'
          }}>Christmas felt, not heard</p>
        </div>
        
        {/* Section 2: Sight/Blind - Warm Amber/Gold */}
        <div style={{
          background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #8B6914 100%)',
          padding: '36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#2C1810',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            left: '-40px',
            width: '160px',
            height: '160px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            borderRadius: '50%'
          }}/>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <span style={{ fontSize: '28px' }}>✨</span>
          </div>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '26px',
            fontWeight: 600,
            margin: 0,
            letterSpacing: '0.02em'
          }}>Touch of Wonder</h3>
          <p style={{ 
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '14px',
            opacity: 0.75,
            marginTop: '10px',
            textAlign: 'center'
          }}>Christmas through texture</p>
        </div>
        
        {/* Section 3: Voice/Mute - Forest Sage */}
        <div style={{
          background: 'linear-gradient(135deg, #4A5D4A 0%, #5E755E 50%, #3A4A3A 100%)',
          padding: '36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#F5F0E6',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }}/>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <span style={{ fontSize: '28px' }}>🤲</span>
          </div>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '26px',
            fontWeight: 600,
            margin: 0,
            letterSpacing: '0.02em'
          }}>Unspoken Joy</h3>
          <p style={{ 
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '14px',
            opacity: 0.8,
            marginTop: '10px',
            textAlign: 'center'
          }}>Christmas in gesture</p>
        </div>
        
        {/* Section 4: Fourth Experience - Warm Ivory */}
        <div style={{
          background: 'linear-gradient(135deg, #F5EBE0 0%, #EDE4D9 50%, #E0D6CB 100%)',
          padding: '36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#3D2914',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            bottom: '-25px',
            right: '-25px',
            width: '130px',
            height: '130px',
            background: 'radial-gradient(circle, rgba(184,134,11,0.15) 0%, transparent 70%)',
            borderRadius: '50%'
          }}/>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(114,47,55,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <span style={{ fontSize: '28px' }}>🕯️</span>
          </div>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '26px',
            fontWeight: 600,
            margin: 0,
            letterSpacing: '0.02em'
          }}>Inner Light</h3>
          <p style={{ 
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '14px',
            opacity: 0.7,
            marginTop: '10px',
            textAlign: 'center'
          }}>Christmas within</p>
        </div>
      </div>
    </div>
  );

  // Prototype 2: Overlapping Cards with Depth
  const Prototype2 = () => (
    <div style={{ marginBottom: '60px' }}>
      <h2 style={{ 
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '28px',
        color: '#F5EBE0',
        marginBottom: '16px',
        fontWeight: 500
      }}>Concept 2: Layered Cards</h2>
      <p style={{ 
        fontFamily: "'Atkinson Hyperlegible', sans-serif",
        color: '#B8A99A',
        marginBottom: '24px',
        fontSize: '15px',
        maxWidth: '600px'
      }}>Overlapping cards that suggest interconnection — each experience layers upon the others to create a complete picture.</p>
      
      <div style={{
        position: 'relative',
        height: '480px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Card 1 - Back left */}
        <div style={{
          position: 'absolute',
          width: '220px',
          height: '300px',
          background: 'linear-gradient(145deg, #722F37 0%, #5C252C 100%)',
          borderRadius: '20px',
          transform: 'rotate(-12deg) translateX(-160px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          padding: '28px',
          color: '#F5EBE0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          zIndex: 1
        }}>
          <span style={{ fontSize: '42px', marginBottom: '14px' }}>🔔</span>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '22px',
            margin: 0,
            fontWeight: 600
          }}>Silent Night</h3>
        </div>
        
        {/* Card 2 */}
        <div style={{
          position: 'absolute',
          width: '220px',
          height: '300px',
          background: 'linear-gradient(145deg, #4A5D4A 0%, #3A4A3A 100%)',
          borderRadius: '20px',
          transform: 'rotate(-4deg) translateX(-55px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          padding: '28px',
          color: '#F5F0E6',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          zIndex: 2
        }}>
          <span style={{ fontSize: '42px', marginBottom: '14px' }}>🤲</span>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '22px',
            margin: 0,
            fontWeight: 600
          }}>Unspoken Joy</h3>
        </div>
        
        {/* Card 3 */}
        <div style={{
          position: 'absolute',
          width: '220px',
          height: '300px',
          background: 'linear-gradient(145deg, #D4AF37 0%, #8B6914 100%)',
          borderRadius: '20px',
          transform: 'rotate(4deg) translateX(55px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          padding: '28px',
          color: '#2C1810',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          zIndex: 3
        }}>
          <span style={{ fontSize: '42px', marginBottom: '14px' }}>✨</span>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '22px',
            margin: 0,
            fontWeight: 600
          }}>Touch of Wonder</h3>
        </div>
        
        {/* Card 4 - Front right */}
        <div style={{
          position: 'absolute',
          width: '220px',
          height: '300px',
          background: 'linear-gradient(145deg, #F5EBE0 0%, #DDD5CA 100%)',
          borderRadius: '20px',
          transform: 'rotate(12deg) translateX(160px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          padding: '28px',
          color: '#3D2914',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          zIndex: 4
        }}>
          <span style={{ fontSize: '42px', marginBottom: '14px' }}>🕯️</span>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '22px',
            margin: 0,
            fontWeight: 600
          }}>Inner Light</h3>
        </div>
      </div>
    </div>
  );

  // Prototype 3: Horizontal Flowing Sections
  const Prototype3 = () => (
    <div style={{ marginBottom: '60px' }}>
      <h2 style={{ 
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '28px',
        color: '#F5EBE0',
        marginBottom: '16px',
        fontWeight: 500
      }}>Concept 3: Flowing Journey</h2>
      <p style={{ 
        fontFamily: "'Atkinson Hyperlegible', sans-serif",
        color: '#B8A99A',
        marginBottom: '24px',
        fontSize: '15px',
        maxWidth: '600px'
      }}>A horizontal layout where each section flows into the next — unified by a warm golden thread running through.</p>
      
      <div style={{
        display: 'flex',
        height: '380px',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 25px 80px rgba(0,0,0,0.4)',
        position: 'relative'
      }}>
        {/* Connecting golden line */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          right: '5%',
          height: '3px',
          background: 'linear-gradient(90deg, transparent 0%, #D4AF37 20%, #D4AF37 80%, transparent 100%)',
          zIndex: 10,
          opacity: 0.6
        }}/>
        
        {/* Section 1 */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(180deg, #722F37 0%, #5C252C 100%)',
          padding: '40px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F5EBE0',
          position: 'relative'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            border: '2px solid rgba(212,175,55,0.4)',
            zIndex: 11
          }}>
            <span style={{ fontSize: '36px' }}>🔔</span>
          </div>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '22px',
            margin: 0,
            fontWeight: 600,
            textAlign: 'center'
          }}>Silent Night</h3>
          <p style={{ 
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '13px',
            opacity: 0.7,
            marginTop: '8px',
            textAlign: 'center'
          }}>Felt, not heard</p>
        </div>
        
        {/* Section 2 */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(180deg, #D4AF37 0%, #8B6914 100%)',
          padding: '40px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2C1810',
          position: 'relative'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            border: '2px solid rgba(255,255,255,0.3)',
            zIndex: 11
          }}>
            <span style={{ fontSize: '36px' }}>✨</span>
          </div>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '22px',
            margin: 0,
            fontWeight: 600,
            textAlign: 'center'
          }}>Touch of Wonder</h3>
          <p style={{ 
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '13px',
            opacity: 0.7,
            marginTop: '8px',
            textAlign: 'center'
          }}>Through texture</p>
        </div>
        
        {/* Section 3 */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(180deg, #5E755E 0%, #3A4A3A 100%)',
          padding: '40px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F5F0E6',
          position: 'relative'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            border: '2px solid rgba(212,175,55,0.4)',
            zIndex: 11
          }}>
            <span style={{ fontSize: '36px' }}>🤲</span>
          </div>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '22px',
            margin: 0,
            fontWeight: 600,
            textAlign: 'center'
          }}>Unspoken Joy</h3>
          <p style={{ 
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '13px',
            opacity: 0.7,
            marginTop: '8px',
            textAlign: 'center'
          }}>In gesture</p>
        </div>
        
        {/* Section 4 */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(180deg, #F5EBE0 0%, #DDD5CA 100%)',
          padding: '40px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3D2914',
          position: 'relative'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(114,47,55,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            border: '2px solid rgba(114,47,55,0.3)',
            zIndex: 11
          }}>
            <span style={{ fontSize: '36px' }}>🕯️</span>
          </div>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '22px',
            margin: 0,
            fontWeight: 600,
            textAlign: 'center'
          }}>Inner Light</h3>
          <p style={{ 
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '13px',
            opacity: 0.7,
            marginTop: '8px',
            textAlign: 'center'
          }}>Within</p>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #1A1412 0%, #2C1E1A 50%, #1A1412 100%)',
      padding: '48px',
      fontFamily: "'Atkinson Hyperlegible', sans-serif"
    }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Atkinson+Hyperlegible:wght@400;700&display=swap');`}
      </style>
      
      {/* Header */}
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <h1 style={{ 
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '42px',
          color: '#F5EBE0',
          margin: 0,
          fontWeight: 500
        }}>Christmas Through Every Sense</h1>
        <p style={{ 
          color: '#D4AF37',
          fontSize: '16px',
          marginTop: '12px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase'
        }}>Visual Concepts & Design Direction</p>
      </div>
      
      <ColorPalette />
      <Typography />
      <Prototype1 />
      <Prototype2 />
      <Prototype3 />
      
      {/* Footer note */}
      <div style={{
        textAlign: 'center',
        padding: '40px 0',
        borderTop: '1px solid rgba(212,175,55,0.2)',
        marginTop: '40px'
      }}>
        <p style={{ 
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '20px',
          color: '#B8A99A',
          fontStyle: 'italic'
        }}>&quot;Christmas isn&apos;t just seen — it&apos;s felt, touched, shared, and lived.&quot;</p>
      </div>
    </div>
  );
};

export default ChristmasPrototypes;

