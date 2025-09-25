"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { QrCode, Camera, Heart, Sparkles } from 'lucide-react'
import QRDownloadContainer from './QRDownloadContainer'

// Paleta Aurora VIP para Quinceañera - Temática consistente
const VIP_COLORS = {
  rosaAurora: '#E91E63',      // Rosa principal
  lavandaAurora: '#9C27B0',   // Púrpura principal
  oroAurora: '#FF9800',       // Naranja dorado
  blancoSeda: '#FFFFFF',      // Blanco puro
  cremaSuave: '#F5F5F5',      // Gris claro
  rosaIntensa: '#C2185B',     // Rosa intenso
  lavandaIntensa: '#7B1FA2',  // Púrpura intenso
  oroIntensio: '#F57C00',     // Naranja intenso
  rosaDelicada: '#F8BBD9'     // Rosa suave
};

// Paleta Aurora VIP para Boda - Temática elegante y romántica
const BODA_COLORS = {
  rosaBoda: '#FFC0CB',        // Rosa suave principal (blush pink)
  lavandaBoda: '#E6E6FA',     // Lavanda suave principal
  oroBoda: '#D4AF37',         // Oro elegante
  blancoSeda: '#FFFFFF',      // Blanco puro
  cremaSuave: '#F5F5F5',      // Gris claro o crema
  rosaIntensa: '#DB7093',     // Rosa intenso moderado
  lavandaIntensa: '#9370DB',  // Lavanda intensa moderada
  oroIntenso: '#CDAF95',      // Oro intenso (champagne)
  rosaDelicada: '#FFE4E1'     // Rosa delicada (misty rose)
};


//este componente renderiza la imagen de un código QR
//con los datos principales de la invitación

const QRCode = () => {
    //
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8"
      style={{
        //background: `url('/images/frida6.jpg') no-repeat center center / cover`
        background: `linear-gradient(135deg, ${BODA_COLORS.blancoSeda} 0%, ${BODA_COLORS.cremaSuave} 50%, ${BODA_COLORS.rosaDelicada} 100%)`
      }}
    >
      {/* Elementos decorativos Aurora */}
       <div 
        className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20 animate-pulse"
        style={{ 
          background: `radial-gradient(circle, ${BODA_COLORS.rosaBoda} 0%, transparent 70%)` 
        }}
      />
      <div 
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full opacity-15 animate-pulse"
        style={{ 
          background: `radial-gradient(circle, ${BODA_COLORS.lavandaBoda} 0%, transparent 70%)`,
          animationDelay: '1s'
        }}
      />
      <div 
        className="absolute top-1/3 right-10 w-24 h-24 rounded-full opacity-10 animate-pulse"
        style={{ 
          background: `radial-gradient(circle, ${BODA_COLORS.oroBoda} 0%, transparent 70%)`,
          animationDelay: '2s'
        }}
      /> 

      {/* Contenedor principal */}
      <div className="text-center z-10 max-w-md mx-auto ">
        {/* Header con temática quinceañera */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-6 h-6" style={{ color: BODA_COLORS.oroBoda }} />
            <h3 
              className="text-lg font-medium tracking-wider uppercase"
              style={{ color: BODA_COLORS.oroIntenso }}
            >
              Nuestra Boda
            </h3>
            <Sparkles className="w-6 h-6" style={{ color: BODA_COLORS.oroBoda }} />
          </div>
          
          <h1 
            className="text-5xl font-bold mb-4 tracking-wide flex flex-col"
            style={{ 
              color: BODA_COLORS.lavandaIntensa,
              textShadow: `2px 2px 4px rgba(255, 192, 203, 0.3)`,
              fontFamily: 'serif'
            }}
          >
            <span>SUSAN</span>
            <span>&</span>
            <span>CUAU</span>
          </h1>

          <div className='mb-6'>
            <Image
              src="/images/susan&cuau1.jpg"
              alt="Susan y Cuau - Nuestra Boda"
              width={200}
              height={150}
              className="mx-auto rounded-lg"
              style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
            />
          </div>
          
          <div className="flex items-center justify-center gap-1">
            <Heart className="w-4 h-4" style={{ color: BODA_COLORS.rosaIntensa }} />
            <Heart className="w-4 h-4" style={{ color: BODA_COLORS.rosaIntensa }} />
            <Heart className="w-4 h-4" style={{ color: BODA_COLORS.rosaIntensa }} />
          </div>
        </div>

        {/* QR Code con marco elegante */}
        <div 
          className="bg-white p-8 rounded-2xl shadow-2xl mb-6 relative overflow-hidden"
          style={{ 
            border: `3px solid ${BODA_COLORS.oroBoda}`,
            boxShadow: `0 20px 40px rgba(255, 192, 203, 0.2)`
          }}
        >
          {/* Decoración en las esquinas */}
          <div 
            className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 rounded-tl-lg"
            style={{ borderColor: BODA_COLORS.lavandaBoda }}
          />
          <div 
            className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 rounded-tr-lg"
            style={{ borderColor: BODA_COLORS.lavandaBoda }}
          />
          <div 
            className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 rounded-bl-lg"
            style={{ borderColor: BODA_COLORS.lavandaBoda }}
          />
          <div 
            className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 rounded-br-lg"
            style={{ borderColor: BODA_COLORS.lavandaBoda }}
          />

          <div className="relative z-10">
            <QrCode 
              className="w-8 h-8 mx-auto mb-4" 
              style={{ color: BODA_COLORS.rosaBoda }} 
            />
            <Image
              src="/images/qrcode.png"
              alt="Código QR - Galería Dinámica Frida"
              width={200}
              height={200}
              className="mx-auto rounded-lg"
              style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
            />
          </div>
        </div>

        {/* Descripción con estilo */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Camera className="w-5 h-5" style={{ color: BODA_COLORS.oroBoda }} />
            <h5 
              className="text-lg font-medium text-center leading-relaxed"
              style={{ color: BODA_COLORS.lavandaIntensa }}
            >
              Escanea el código QR para unirte a la
            </h5>
          </div>
          <p 
            className="text-xl font-bold"
            style={{ 
              color: BODA_COLORS.rosaIntensa,
              background: `linear-gradient(45deg, ${BODA_COLORS.rosaBoda}, ${BODA_COLORS.lavandaBoda})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ✨ Galería Dinámica ✨
          </p>
        </div>

        {/* Sección de descarga de QR */}
        <div 
        //style={{display:'none'}}
        className="mb-8">
          <QRDownloadContainer 
            eventData={{
              name: "SUSAN & CUAU",
              title: "Nuestra Boda",
              date: "07 de Noviembre 2025",
              venue: "Capilla Inmaculado Corazón de María",
              qrCodeUrl: "https://boda-vip-susan-cuau.vercel.app/gallery",
              photoUrl: "/images/qrcode.png",
              websiteUrl: "https://boda-vip-susan-cuau.vercel.app/qrcode",
              message: "Comparte momentos únicos en este día especial"
            }}
          />
        </div>



            {/**Sección de Links */}
        <div className='flex flex-col gap-2'>
            {/* Botón de invitación premium */}
        <Link href="/">
          <button 
            className="group relative px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
            style={{
              background: `linear-gradient(45deg, ${BODA_COLORS.rosaBoda} 0%, ${BODA_COLORS.lavandaBoda} 50%, ${BODA_COLORS.oroBoda} 100%)`,
              boxShadow: `0 8px 20px rgba(255, 192, 203, 0.4)`
            }}
          >
            {/* Efecto shimmer */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                transform: 'translateX(-100%)',
                animation: 'shimmer 2s infinite'
              }}
            />
            
            <span className="relative z-10 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Ver Invitación
              <Sparkles className="w-5 h-5" />
            </span>
          </button>
        </Link>

        {/* Botón de subir fotos */}
        <Link href="/fotos">
          <button 
            className="group relative px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
            style={{
              background: `linear-gradient(45deg, ${BODA_COLORS.lavandaBoda} 0%, ${BODA_COLORS.oroBoda} 50%, ${BODA_COLORS.rosaBoda} 100%)`,
              boxShadow: `0 8px 20px rgba(230, 230, 250, 0.4)`
            }}
          >
            {/* Efecto shimmer */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                transform: 'translateX(-100%)',
                animation: 'shimmer 2s infinite'
              }}
            />
            
            <span className="relative z-10 flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Subir Fotos
              <Sparkles className="w-5 h-5" />
            </span>
          </button>
        </Link>

        {/* Botón de galería */}
        <Link href="/gallery">
          <button 
            className="group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden border-2"
            style={{
              background: `linear-gradient(45deg, ${BODA_COLORS.oroBoda} 0%, ${BODA_COLORS.oroIntenso} 100%)`,
              color: BODA_COLORS.blancoSeda,
              borderColor: BODA_COLORS.oroIntenso,
              boxShadow: `0 8px 20px rgba(212, 175, 55, 0.4)`
            }}
          >
            {/* Efecto shimmer */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                transform: 'translateX(-100%)',
                animation: 'shimmer 2s infinite'
              }}
            />
            
            <span className="relative z-10 flex items-center gap-2">
              <QrCode className="w-5 h-5" />
              Ir a Galería
              <Heart className="w-5 h-5" />
            </span>
          </button>
        </Link>
        </div>

        {/* Footer elegante */}
        <p 
          className="mt-6 text-sm italic"
          style={{ color: BODA_COLORS.lavandaIntensa, opacity: 0.8 }}
        >
          &quot;Comparte momentos únicos en este día especial&quot;
        </p>
      </div>

      {/* Animación shimmer */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  )
}

export default QRCode