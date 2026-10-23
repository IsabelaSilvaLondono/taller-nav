import { tituloHeader } from '@/Glass';
import { useBiblioteca } from '@/context/Biblioteca';
import { C } from '@/theme';
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
        drawerStyle: { backgroundColor: 'rgba(236,239,241,0.82)', width: 280 },
        drawerActiveTintColor: C.tinta,
        drawerInactiveTintColor: C.suave,
        drawerActiveBackgroundColor: 'rgba(255,255,255,0.7)',
        drawerLabelStyle: { fontStyle: 'italic', fontSize: 16 },
        }}
        >
        <Drawer.Screen name="(tabs)" options={{ drawerLabel: 'Inicio', title: 'Biblioteca' }} />
        <Drawer.Screen name="ajustes" options={{ drawerLabel: 'Ajustes', title: 'Ajustes' }} />
        </Drawer>
    );
}