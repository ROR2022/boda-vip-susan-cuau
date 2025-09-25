// 📸 Upload Constants - Configuración del sistema de upload de fotos

import { UploadConfig } from '../types/upload.types';

// Configuración principal del upload
export const UPLOAD_CONFIG: UploadConfig = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  maxFiles: 10,
  allowedFormats: ['image/jpeg', 'image/png', 'image/webp'],
  compressionOptions: {
    maxWidth: 4000,
    maxHeight: 4000,
    quality: 0.8,
    format: 'webp'
  }
};

// Formatos permitidos con extensiones
export const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// Mensajes de error personalizados
export const ERROR_MESSAGES = {
  INVALID_FORMAT: 'Formato de archivo no válido. Solo se permiten JPG, PNG y WEBP.',
  FILE_TOO_LARGE: `El archivo es demasiado grande. Máximo ${UPLOAD_CONFIG.maxFileSize / (1024 * 1024)}MB.`,
  TOO_MANY_FILES: `Máximo ${UPLOAD_CONFIG.maxFiles} archivos permitidos.`,
  UPLOAD_FAILED: 'Error al subir el archivo. Por favor intenta de nuevo.',
  NETWORK_ERROR: 'Error de conexión. Verifica tu internet e intenta de nuevo.',
  COMPRESSION_FAILED: 'Error al optimizar la imagen.',
  UNKNOWN_ERROR: 'Ha ocurrido un error inesperado.'
};

// Mensajes de éxito
export const SUCCESS_MESSAGES = {
  UPLOAD_COMPLETE: '¡Fotos subidas exitosamente!',
  FILES_ADDED: 'Archivos agregados correctamente.',
  COMPRESSION_COMPLETE: 'Imágenes optimizadas.'
};

// Estados de progreso
export const PROGRESS_STATES = {
  IDLE: 0,
  VALIDATING: 10,
  COMPRESSING: 30,
  UPLOADING: 50,
  PROCESSING: 80,
  COMPLETE: 100
};

// Configuración de UI
export const UI_CONFIG = {
  previewSize: 120, // px
  thumbnailQuality: 0.7,
  animationDuration: 300, // ms
  maxPreviewHeight: 200, // px
};

const BODA_COLORS2 = {
  rosaBoda: '#D85251',        // Rojo suave otoñal (inspirado en hojas de otoño)
  lavandaBoda: '#7B5C6E',     // Morado vino suave
  oroBoda: '#D49A6A',         // Oro cálido con toque café
  blancoSeda: '#FFFFFF',      // Blanco puro (mantenido)
  cremaSuave: '#F2E1C3',      // Crema cálida otoñal
  rosaIntensa: '#8D0327',     // Vino intenso
  lavandaIntensa: '#822D5C',  // Vino púrpura intenso
  oroIntenso: '#A66F2E',      // Café dorado intenso
  rosaDelicada: '#E69779'     // Rojo delicado otoñal (como terracota suave)
};


// Paleta de colores Aurora Pastel para Quinceañera VIP
export const VIP_COLORS = {
  rosaAurora: '#D85251',
  lavandaAurora: '#7B5C6E',
  oroAurora: '#D49A6A',
  blancoSeda: '#FFFFFF',
  cremaSuave: '#F2E1C3',
  rosaIntensa: '#8D0327',
  lavandaIntensa: '#822D5C',
  oroIntensio: '#A66F2E',
  rosaDelicada: '#E69779'
};

// Configuración del endpoint
export const API_CONFIG = {
  uploadEndpoint: '/api/upload-fotos-simple', // Temporary simple endpoint for testing
  timeout: 30000, // 30 segundos
  retryAttempts: 3,
  retryDelay: 1000 // 1 segundo
};
