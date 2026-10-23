import { C, F } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabsLayout() {
    const insets = useSafeAreaInsets();

    return (
        <Tabs
        screenOptions={{
            headerShown: false, // un solo header: el del Drawer
            tabBarActiveTintColor: C.acento,
            tabBarInactiveTintColor: C.suave,
            tabBarLabelStyle: { fontFamily: F.fuerte, fontSize: 14 },
            tabBarStyle: {
            position: 'absolute',
            left: 20,
            right: 20,
            bottom: insets.bottom + 12,
            height: 68,
            paddingTop: 6,
            paddingBottom: 8,
            borderRadius: 34,
            overflow: 'hidden',
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: C.borde,
            borderTopColor: C.borde,
            backgroundColor: 'rgba(255,255,255,0.6)',
            elevation: 0,
            },
            tabBarBackground: () => (
            <BlurView intensity={60} tint="light" style={StyleSheet.absoluteFill} />
            ),
        }}
        >
        <Tabs.Screen
            name="index"
            options={{
            title: 'Inicio',
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name={focused ? 'home' : 'home-outline'} color={color as string} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="favoritos"
            options={{
            title: 'Favoritos',
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name={focused ? 'heart' : 'heart-outline'} color={color as string} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="perfil"
            options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name={focused ? 'person' : 'person-outline'} color={color as string} size={size} />
            ),
            }}
        />
        </Tabs>
    );
}