import { C, T } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { ReactNode } from 'react';
import { Pressable, StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextProps, View, ViewStyle, } from 'react-native';

/** Fondo minimalista: manchas suaves difuminadas sobre gris perla. */
export function Fondo({ children }: { children: ReactNode }) {
    return (
    <View style={{ flex: 1, backgroundColor: C.fondo, overflow: 'hidden' }}>
        <View style={[s.blob, { top: -90, right: -70, width: 300, height: 300, backgroundColor: C.blob1 }]} />
        <View style={[s.blob, { top: 280, left: -110, width: 280, height: 280, backgroundColor: C.blob2 }]} />
        <View style={[s.blob, { bottom: -80, right: -40, width: 260, height: 260, backgroundColor: C.blob3 }]} />
        <BlurView intensity={90} tint="light" style={StyleSheet.absoluteFill} />
        {children}
    </View>
    );
}

/** Tarjeta de vidrio: desenfoque + tinte translúcido + borde claro. */
export function Vidrio({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
    return (
    <View style={[s.vidrio, style]}>
        <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
        {children}
    </View>
    );
}

export function Texto({ style, ...props }: TextProps) {
    return <Text {...props} style={[T.cuerpo, style]} />;
}

export function Boton({
    titulo, onPress, icono,
}: {
    titulo: string;
    onPress: () => void;
    icono?: React.ComponentProps<typeof Ionicons>['name'];
}) {
    return (
    <Pressable onPress={onPress} style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}>
        <Vidrio style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8, paddingVertical: 14 }}>
        {icono && <Ionicons name={icono} size={18} color={C.tinta} />}
        <Text style={T.boton}>{titulo}</Text>
        </Vidrio>
    </Pressable>
    );
}

/** Campo de texto con marco de vidrio. */
export function Campo(props: TextInputProps) {
    return (
    <Vidrio style={{ paddingVertical: 2, paddingHorizontal: 16, borderRadius: 18 }}>
        <TextInput
        placeholderTextColor={C.suave}
        {...props}
        style={[T.cuerpo, { height: 46 }, props.style]}
        />
    </Vidrio>
    );
}

/** Título de header en cursiva (headerTitleStyle no soporta fontStyle). */
    export const tituloHeader = ({ children }: { children: string }) => (
    <Text style={T.header}>{children}</Text>
);

const s = StyleSheet.create({
    blob: { position: 'absolute', borderRadius: 999, opacity: 0.9 },
    vidrio: {
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: C.borde,
    backgroundColor: C.vidrio,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    },
});