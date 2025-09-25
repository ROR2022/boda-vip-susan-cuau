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

// Paleta de colores Aurora Pastel para Quinceañera VIP
export const VIP_COLORS = {
  rosaAurora: '#FFC0CB',
  lavandaAurora: '#E6E6FA',
  oroAurora: '#D4AF37',
  blancoSeda: '#FFFFFF',
  cremaSuave: '#F5F5F5',
  rosaIntensa: '#DB7093',
  lavandaIntensa: '#9370DB',
  oroIntensio: '#CDAF95',
  rosaDelicada: '#FFE4E1'
};

// Configuración del endpoint
export const API_CONFIG = {
  uploadEndpoint: '/api/upload-fotos-simple', // Temporary simple endpoint for testing
  timeout: 30000, // 30 segundos
  retryAttempts: 3,
  retryDelay: 1000 // 1 segundo
};
