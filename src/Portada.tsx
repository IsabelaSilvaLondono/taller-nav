import { DETALLES } from '@/data/detalles';
import { LIBROS } from '@/data/libros';
import { F } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';

type Props = { libro: (typeof LIBROS)[number]; ancho?: number; mini?: boolean };

export function Portada({ libro, ancho = 150, mini = false }: Props) {
  const alto = Math.round(ancho * 1.45);
    const e = ancho / 150;
    const [c1, c2] = DETALLES[libro.id].colores;
  const radio = Math.max(8, 14 * e);

    return (
        <View
        style={{
            width: ancho,
            height: alto,
            borderRadius: radio,
            shadowColor: c1,
            shadowOpacity: 0.4,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 6 },
        }}
        >
        <LinearGradient
            colors={[c1, c2]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
            flex: 1,
            borderRadius: radio,
            overflow: 'hidden',
            paddingVertical: 14 * e,
            paddingLeft: 18 * e,
            paddingRight: 12 * e,
            justifyContent: mini ? 'center' : 'space-between',
            alignItems: mini ? 'center' : undefined,
            }}
        >
            {/* lomo */}
            <View
            style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: 7 * e, backgroundColor: 'rgba(0,0,0,0.12)',
            }}
            />
            {/* brillo */}
            <LinearGradient
            colors={['rgba(255,255,255,0.45)', 'rgba(255,255,255,0)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0.8 }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            pointerEvents="none"
        />

        {mini ? (
          <Text style={{ fontFamily: F.fuerte, fontSize: ancho * 0.55, color: 'rgba(255,255,255,0.95)' }}>
            {libro.titulo.charAt(0)}
            </Text>
            ) : (
            <>
                <Text style={{ fontFamily: F.normal, fontSize: 14 * e, color: 'rgba(255,255,255,0.85)' }}>
                {libro.anio}
                </Text>
                <Text
                numberOfLines={4}
                style={{ fontFamily: F.fuerte, fontSize: 21 * e, lineHeight: 23 * e, color: '#FFFFFF' }}
                >
                {libro.titulo}
                </Text>
                <Text
                numberOfLines={2}
                style={{ fontFamily: F.normal, fontSize: 14 * e, color: 'rgba(255,255,255,0.9)' }}
                >
                {libro.autor}
                </Text>
            </>
            )}
        </LinearGradient>
        </View>
    );
}