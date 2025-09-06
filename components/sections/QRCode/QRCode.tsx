"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { QrCode, Camera, Heart, Sparkles } from 'lucide-react'
import QRDownloadContainer from './QRDownloadContainer'

// Paleta Aurora VIP para Quinceañera - Temática consistente
/* const VIP_COLORS = {
  rosaAurora: '#E91E63',      // Rosa principal
  lavandaAurora: '#9C27B0',   // Púrpura principal
  oroAurora: '#FF9800',       // Naranja dorado
  blancoSeda: '#FFFFFF',      // Blanco puro
  cremaSuave: '#F5F5F5',      // Gris claro
  rosaIntensa: '#C2185B',     // Rosa intenso
  lavandaIntensa: '#7B1FA2',  // Púrpura intenso
  oroIntensio: '#F57C00',     // Naranja intenso
  rosaDelicada: '#F8BBD9'     // Rosa suave
}; */

const VIP_COLORS = {
  rosaAurora:     '#B58693', // mauve rosado desaturado
  lavandaAurora:  '#A2A0B3', // lavanda grisácea
  oroAurora:      '#CDB58A', // arena/ámbar suave
  blancoSeda:     '#F6F6F4', // casi blanco neutro
  cremaSuave:     '#EAE9E6', // gris cálido muy claro
  rosaIntensa:    '#7E4A59', // ciruela rosado apagado (acentos)
  lavandaIntensa: '#58536A', // púrpura pizarra (acentos)
  oroIntensio:    '#8C6D3F', // bronce/ocre sobrio (acentos)
  rosaDelicada:   '#D8C7CE'  // blush muy pálido y neutral
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
        background: `linear-gradient(135deg, ${VIP_COLORS.blancoSeda} 0%, ${VIP_COLORS.cremaSuave} 50%, ${VIP_COLORS.rosaDelicada} 100%)`
      }}
    >
      {/* Elementos decorativos Aurora */}
       <div 
        className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20 animate-pulse"
        style={{ 
          background: `radial-gradient(circle, ${VIP_COLORS.rosaAurora} 0%, transparent 70%)` 
        }}
      />
      <div 
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full opacity-15 animate-pulse"
        style={{ 
          background: `radial-gradient(circle, ${VIP_COLORS.lavandaAurora} 0%, transparent 70%)`,
          animationDelay: '1s'
        }}
      />
      <div 
        className="absolute top-1/3 right-10 w-24 h-24 rounded-full opacity-10 animate-pulse"
        style={{ 
          background: `radial-gradient(circle, ${VIP_COLORS.oroAurora} 0%, transparent 70%)`,
          animationDelay: '2s'
        }}
      /> 

      {/* Contenedor principal */}
      <div className="text-center z-10 max-w-md mx-auto ">
        {/* Header con temática quinceañera */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-6 h-6" style={{ color: VIP_COLORS.oroAurora }} />
            <h3 
              className="text-lg font-medium tracking-wider uppercase"
              style={{ color: VIP_COLORS.lavandaIntensa }}
            >
              Nuestra Boda
            </h3>
            <Sparkles className="w-6 h-6" style={{ color: VIP_COLORS.oroAurora }} />
          </div>
          
          <h1 
            className="text-5xl font-bold mb-4 tracking-wide flex flex-col items-center"
            style={{ 
              color: VIP_COLORS.rosaAurora,
              textShadow: `2px 2px 4px rgba(233, 30, 99, 0.3)`,
              fontFamily: 'serif'
            }}
          >
            <span>S & C</span>
            <span>💝</span>
           
          </h1>

          <div className='mb-6'>
            <Image
              src="/images/campo1.png"
              alt="qrcode Section"
              width={200}
              height={150}
              className="mx-auto rounded-lg"
              style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
            />
          </div>
          
          <div className="flex items-center justify-center gap-1">
            <Heart className="w-4 h-4" style={{ color: VIP_COLORS.rosaIntensa }} />
            <Heart className="w-4 h-4" style={{ color: VIP_COLORS.rosaIntensa }} />
            <Heart className="w-4 h-4" style={{ color: VIP_COLORS.rosaIntensa }} />
          </div>
        </div>

        {/* QR Code con marco elegante */}
        <div 
          className="bg-white p-8 rounded-2xl shadow-2xl mb-6 relative overflow-hidden"
          style={{ 
            border: `3px solid ${VIP_COLORS.oroAurora}`,
            boxShadow: `0 20px 40px rgba(233, 30, 99, 0.2)`
          }}
        >
          {/* Decoración en las esquinas */}
          <div 
            className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 rounded-tl-lg"
            style={{ borderColor: VIP_COLORS.lavandaAurora }}
          />
          <div 
            className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 rounded-tr-lg"
            style={{ borderColor: VIP_COLORS.lavandaAurora }}
          />
          <div 
            className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 rounded-bl-lg"
            style={{ borderColor: VIP_COLORS.lavandaAurora }}
          />
          <div 
            className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 rounded-br-lg"
            style={{ borderColor: VIP_COLORS.lavandaAurora }}
          />

          <div className="relative z-10">
            <QrCode 
              className="w-8 h-8 mx-auto mb-4" 
              style={{ color: VIP_COLORS.rosaAurora }} 
            />
            <Image
              src="/images/qrcode.png"
              alt="Código QR - Galería Dinámica"
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
            <Camera className="w-5 h-5" style={{ color: VIP_COLORS.oroAurora }} />
            <h5 
              className="text-lg font-medium text-center leading-relaxed"
              style={{ color: VIP_COLORS.lavandaIntensa }}
            >
              Escanea el código QR para unirte a la
            </h5>
          </div>
          <p 
            className="text-xl font-bold"
            style={{ 
              color: '#000',
              //background: `linear-gradient(45deg, ${VIP_COLORS.rosaAurora}, ${VIP_COLORS.lavandaAurora})`,
              WebkitBackgroundClip: 'text',
              //WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ✨ Galería Dinámica ✨
          </p>
        </div>

        {/* Sección de descarga de QR */}
        <div className="mb-8">
          <QRDownloadContainer 
            eventData={{
              name: "FRIDA",
              title: "Mis XV Años",
              date: "27 de Septiembre 2025",
              venue: "Salón de Eventos Aurora",
              qrCodeUrl: "https://quince-premium-frida.vercel.app/gallery",
              photoUrl: "/images/frida6.jpg",
              websiteUrl: "https://quince-premium-frida.vercel.app/gallery",
              message: "Comparte momentos únicos en mi día especial"
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
              background: `linear-gradient(45deg, ${VIP_COLORS.rosaAurora} 0%, ${VIP_COLORS.lavandaAurora} 50%, ${VIP_COLORS.oroAurora} 100%)`,
              boxShadow: `0 8px 20px rgba(233, 30, 99, 0.4)`
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
              background: `linear-gradient(45deg, ${VIP_COLORS.lavandaAurora} 0%, ${VIP_COLORS.oroAurora} 50%, ${VIP_COLORS.rosaAurora} 100%)`,
              boxShadow: `0 8px 20px rgba(156, 39, 176, 0.4)`
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
              background: `linear-gradient(45deg, ${VIP_COLORS.oroAurora} 0%, ${VIP_COLORS.oroIntensio} 100%)`,
              color: VIP_COLORS.blancoSeda,
              borderColor: VIP_COLORS.oroIntensio,
              boxShadow: `0 8px 20px rgba(255, 152, 0, 0.4)`
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
          style={{ color: VIP_COLORS.lavandaIntensa, opacity: 0.8 }}
        >
          &quot;Comparte momentos únicos en mi día especial&quot;
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