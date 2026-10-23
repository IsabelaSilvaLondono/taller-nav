import { TextStyle } from 'react-native';

export const C = {
    fondo: '#ECEFF1',
    tinta: '#1B1E23',
    suave: '#6B7580',
    acento: '#4F6272',
    peligro: '#9A4A4A',
    vidrio: 'rgba(255,255,255,0.45)',
    borde: 'rgba(255,255,255,0.75)',
    blob1: '#C9D6E2',
    blob2: '#E2D6E6',
    blob3: '#D3E4DA',
};

export const T = {
    cuerpo: { fontStyle: 'italic', fontSize: 16, color: C.tinta },
    suave: { fontStyle: 'italic', fontSize: 14, color: C.suave },
    titulo: { fontStyle: 'italic', fontSize: 28, fontWeight: '600', color: C.tinta },
    marca: { fontStyle: 'italic', fontSize: 34, fontWeight: '300', letterSpacing: 1, color: C.tinta },
    boton: { fontStyle: 'italic', fontSize: 16, fontWeight: '600', color: C.tinta },
    header: { fontStyle: 'italic', fontSize: 18, fontWeight: '600', color: C.tinta },
    error: { fontStyle: 'italic', fontSize: 14, color: C.peligro },
} satisfies Record<string, TextStyle>;