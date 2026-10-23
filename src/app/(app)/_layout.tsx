import { tituloHeader } from '@/Glass';
import { useBiblioteca } from '@/context/Biblioteca';
import { C, F } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { Redirect } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

export default function AppLayout() {
    const { usuario } = useBiblioteca();

    if (!usuario) return <Redirect href="/login" />;

    return (
    <Drawer
        screenOptions={{
            headerTitle: tituloHeader,
            headerStyle: { backgroundColor: C.fondo },
            headerShadowVisible: false,
            headerTintColor: C.tinta,
            sceneStyle: { backgroundColor: C.fondo },
            drawerStyle: { backgroundColor: 'rgba(239,235,245,0.96)', width: 290 },
            drawerActiveTintColor: C.tinta,
            drawerInactiveTintColor: C.suave,
            drawerActiveBackgroundColor: 'rgba(255,255,255,0.8)',
            drawerItemStyle: { borderRadius: 18 },
            drawerLabelStyle: { fontFamily: F.fuerte, fontSize: 20 },
        }}
        >
        <Drawer.Screen
        name="(tabs)"
        options={{
            drawerLabel: 'Inicio',
            title: 'Biblioteca',
            drawerIcon: ({ color, size }) => (
                <Ionicons name="library-outline" color={color as string} size={size} />
            ),
            }}
        />
        <Drawer.Screen
        name="ajustes"
        options={{
            drawerLabel: 'Ajustes',
            title: 'Ajustes',
            drawerIcon: ({ color, size }) => (
                <Ionicons name="settings-outline" color={color as string} size={size} />
            ),
            }}
        />
        </Drawer>
    );
}