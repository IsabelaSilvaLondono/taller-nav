import { tituloHeader } from '@/Glass';
import { C } from '@/theme';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { BlurView } from 'expo-blur';
import { Drawer } from 'expo-router/drawer';
import type { ComponentProps } from 'react';

export default function AppLayout() {
    return (
    <Drawer
        drawerContent={(props) => (
        <BlurView intensity={60} tint="light" style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
            <DrawerItemList {...(props as unknown as ComponentProps<typeof DrawerItemList>)} />
            </DrawerContentScrollView>
        </BlurView>
        )}
        screenOptions={{
        headerTitle: tituloHeader,
        headerStyle: { backgroundColor: C.fondo },
        headerShadowVisible: false,
        headerTintColor: C.tinta,
        drawerStyle: { backgroundColor: 'rgba(236,239,241,0.55)', width: 280 },
        drawerActiveTintColor: C.tinta,
        drawerInactiveTintColor: C.suave,
        drawerActiveBackgroundColor: 'rgba(255,255,255,0.6)',
        drawerLabelStyle: { fontStyle: 'italic', fontSize: 16 },
        }}
    >
        <Drawer.Screen name="(tabs)" options={{ drawerLabel: 'Inicio', title: 'Biblioteca' }} />
        <Drawer.Screen name="ajustes" options={{ drawerLabel: 'Ajustes', title: 'Ajustes' }} />
    </Drawer>
    );
}