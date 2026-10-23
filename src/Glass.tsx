import { C, T } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { ComponentProps, ReactNode, useEffect } from 'react';
import { Pressable, StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextProps, View, ViewStyle, } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming, } from 'react-native-reanimated';

type IconName = ComponentProps<typeof Ionicons>['name'];

function Mancha({
    style, color, dx, dy, duracion,
    }: { style: ViewStyle; color: string; dx: number; dy: number; duracion: number }) {
    const t = useSharedValue(0);
    useEffect(() => {
        t.value = withRepeat(
        withTiming(1, { duration: duracion, easing: Easing.inOut(Easing.sin) }),
        -1,
        true,
        );
    }, []);
    const anim = useAnimatedStyle(() => ({
        transform: [
        { translateX: (t.value - 0.5) * dx },
        { translateY: (t.value - 0.5) * dy },
        { scale: 1 + t.value * 0.1 },
        ],
    }));
    return <Animated.View style={[s.blob, style, { backgroundColor: color }, anim]} />;
}

/** Fondo minimalista: manchas suaves y animadas sobre un tono base. */
export function Fondo({ children }: { children: ReactNode }) {
    return (
        <View style={{ flex: 1, backgroundColor: C.fondo, overflow: 'hidden' }}>
        <Mancha color={C.blob1} dx={60} dy={50} duracion={9000}
            style={{ top: -90, right: -70, width: 320, height: 320 }} />
        <Mancha color={C.blob2} dx={-70} dy={60} duracion={11000}
            style={{ top: 300, left: -120, width: 300, height: 300 }} />
        <Mancha color={C.blob3} dx={50} dy={-60} duracion={13000}
            style={{ bottom: -90, right: -50, width: 280, height: 280 }} />
        <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />
        {children}
        </View>
    );
}

export function Vidrio({
    children, style, radio = 26,
    }: { children: ReactNode; style?: StyleProp<ViewStyle>; radio?: number }) {
    return (
        <View style={[s.sombra, { borderRadius: radio }]}>
        <View style={[s.vidrio, { borderRadius: radio }, style]}>
            <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
            <LinearGradient
            colors={['rgba(255,255,255,0.6)', 'rgba(255,255,255,0.05)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
            pointerEvents="none"
            />
            {children}
        </View>
        </View>
    );
}

export function Texto({ style, ...props }: TextProps) {
    return <Text {...props} style={[T.cuerpo, style]} />;
}

export function Boton({
    titulo, onPress, icono, variante = 'vidrio',
    }: {
    titulo: string;
    onPress: () => void;
    icono?: IconName;
    variante?: 'vidrio' | 'primario' | 'peligro';
    }) {
    const color = variante === 'primario' ? '#FFFFFF' : variante === 'peligro' ? C.peligro : C.tinta;
    const contenido = (
        <>
        {icono && <Ionicons name={icono} size={20} color={color} />}
        <Text style={[T.boton, { color }]}>{titulo}</Text>
        </>
    );

    return (
        <Pressable
        onPress={onPress}
        style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1, transform: [{ scale: pressed ? 0.98 : 1 }] })}
        >
        {variante === 'primario' ? (
            <LinearGradient
            colors={[C.acento, C.acentoOscuro]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[s.filaBoton, { borderRadius: 26 }]}
            >
            {contenido}
            </LinearGradient>
        ) : (
            <Vidrio style={s.filaBoton}>{contenido}</Vidrio>
        )}
        </Pressable>
    );
}

export function Chip({
    texto, activo = false, onPress,
    }: { texto: string; activo?: boolean; onPress?: () => void }) {
    return (
        <Pressable onPress={onPress} disabled={!onPress}>
        <View
            style={{
            paddingHorizontal: 16,
            paddingVertical: 7,
            borderRadius: 20,
            backgroundColor: activo ? C.acento : 'rgba(255,255,255,0.6)',
            borderWidth: 1,
            borderColor: activo ? C.acento : C.borde,
            }}
        >
            <Text style={[T.suave, { color: activo ? '#FFFFFF' : C.tinta }]}>{texto}</Text>
        </View>
        </Pressable>
    );
}

export function Campo({ icono, ...props }: TextInputProps & { icono?: IconName }) {
    return (
        <Vidrio
        radio={20}
        style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 2, paddingHorizontal: 16 }}
        >
        {icono && <Ionicons name={icono} size={20} color={C.suave} />}
        <TextInput
            placeholderTextColor={C.suave}
            {...props}
            style={[T.cuerpo, { flex: 1, height: 48 }, props.style]}
        />
        </Vidrio>
    );
}

export const tituloHeader = ({ children }: { children: string }) => (
    <Text style={T.header}>{children}</Text>
);

const s = StyleSheet.create({
    blob: { position: 'absolute', borderRadius: 999, opacity: 0.95 },
    sombra: {
    shadowColor: '#4A3B6B',
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    },
    vidrio: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',
    borderTopColor: C.borde,
    borderLeftColor: C.borde,
    backgroundColor: C.vidrio,
    padding: 16,
    },
    filaBoton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 15,
    overflow: 'hidden',
    },
});