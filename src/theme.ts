import { TextStyle } from 'react-native';

export const C = {
    fondo: '#EFEBF5',
    tinta: '#241F2E',
    suave: '#756F82',
    acento: '#6B5B8A',
    acentoOscuro: '#53446F',
    peligro: '#9A4A4A',
    vidrio: 'rgba(255,255,255,0.5)',
    borde: 'rgba(255,255,255,0.85)',
    blob1: '#D8CCEA',
    blob2: '#F0D9E4',
    blob3: '#CFE2DD',
};

export const F = {
    normal: 'CormorantGaramond_400Regular_Italic',
    media: 'CormorantGaramond_500Medium_Italic',
    fuerte: 'CormorantGaramond_600SemiBold_Italic',
};

export const T = {
    cuerpo: { fontFamily: F.normal, fontSize: 19, color: C.tinta },
    suave: { fontFamily: F.normal, fontSize: 17, color: C.suave },
    titulo: { fontFamily: F.fuerte, fontSize: 34, color: C.tinta },
    marca: { fontFamily: F.media, fontSize: 54, letterSpacing: 1, color: C.tinta },
    boton: { fontFamily: F.fuerte, fontSize: 19, color: C.tinta },
    header: { fontFamily: F.fuerte, fontSize: 22, color: C.tinta },
    seccion: { fontFamily: F.fuerte, fontSize: 24, color: C.tinta },
    error: { fontFamily: F.normal, fontSize: 16, color: C.peligro },
} satisfies Record<string, TextStyle>;