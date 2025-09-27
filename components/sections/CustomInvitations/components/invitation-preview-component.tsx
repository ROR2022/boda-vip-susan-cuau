// ================================================================
// 📁 components/InvitationPreview.tsx
// ================================================================

import React, { forwardRef } from 'react';
import { InvitationPreviewProps } from '../types/invitation.types';
import { EVENT_INFO } from '../constants/invitation.constants';
import { VIP_COLORS } from '@/components/sections/data/colors';

/**
 * Componente de vista previa de la invitación
 */
export const InvitationPreview = forwardRef<HTMLDivElement, InvitationPreviewProps>(
  ({ formData }, ref) => {
    return (
      <div 
        ref={ref}
        className="mt-8 p-6 rounded-2xl shadow-2xl relative overflow-hidden"
        style={{
          background: `linear-gradient(to bottom right, ${VIP_COLORS.lavandaAurora}, ${VIP_COLORS.rosaAurora}, ${VIP_COLORS.lavandaIntensa})`,
          color: VIP_COLORS.blancoSeda
        }}
      >
        {/* Decoraciones aurora */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-4 left-4 text-4xl">✨</div>
          <div className="absolute top-8 right-8 text-3xl">👑</div>
          <div className="absolute bottom-4 left-8 text-2xl">💜</div>
          <div className="absolute bottom-8 right-4 text-3xl">🌟</div>
        </div>
        
        <div className="relative z-10 text-center">
          <h2 
            className="text-2xl font-bold mb-4" 
            style={{ color: VIP_COLORS.oroAurora }}
          >
            ✨ Nuestra Boda Susan & Cuau ✨
          </h2>
          <div className="space-y-3 text-lg">
            <p><strong>Invitado especial:</strong> {formData.guestName}</p>
            <p 
              className="italic p-3 rounded-lg"
              style={{ 
                backgroundColor: `${VIP_COLORS.blancoSeda}33`,
                color: VIP_COLORS.cremaSuave 
              }}
            >
              &quot;{formData.personalMessage}&quot;
            </p>
            <div className="space-y-1 text-sm">
              <p>📅 <strong>Fecha:</strong> {EVENT_INFO.date}</p>
              <p>🕖 <strong>Hora:</strong> {EVENT_INFO.time}</p>
              <p>📍 <strong>Lugar:</strong> {EVENT_INFO.venue}</p>
              <p>👥 <strong>Invitados:</strong> {formData.numberOfGuests} {parseInt(formData.numberOfGuests) === 1 ? 'persona' : 'personas'}</p>
            </div>
          </div>
          <div 
            className="mt-4 p-3 rounded-lg"
            style={{ 
              backgroundColor: `${VIP_COLORS.oroAurora}33`,
              color: VIP_COLORS.blancoSeda 
            }}
          >
            <p className="text-sm">💜 Con cariño, Susan & Cuau</p>
          </div>
        </div>
      </div>
    );
  }
);

InvitationPreview.displayName = 'InvitationPreview';
