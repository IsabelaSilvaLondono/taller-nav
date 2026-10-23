import { Boton, Fondo, Texto, Vidrio } from '@/Glass';
import { T } from '@/theme';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function Acerca() {
    const router = useRouter();
    return (
        <Fondo>
        <View style={{ padding: 24, gap: 14 }}>
            <Vidrio style={{ gap: 8 }}>
            <Texto style={T.titulo}>Biblioteca</Texto>
            <Texto style={T.suave}>Versión 1.0 · Taller de navegación con Expo Router.</Texto>
            <Texto style={T.suave}>
                Usa Stack (raíz y detalle), Slot (autenticación), Drawer (menú lateral), Tabs (secciones
                principales) y un modal (esta pantalla).
            </Texto>
            </Vidrio>
            <Boton titulo="Cerrar" icono="close-outline" onPress={() => router.back()} />
        </View>
        </Fondo>
    );
}