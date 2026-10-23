import { C } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabsLayout() {
    return (
    <Tabs
        screenOptions={{
        headerShown: false, // un solo header: el del Drawer
        tabBarActiveTintColor: C.tinta,
        tabBarInactiveTintColor: C.suave,
        tabBarLabelStyle: { fontStyle: 'italic' },
        tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
            },
        tabBarBackground: () => (
            <BlurView intensity={50} tint="light" style={StyleSheet.absoluteFill} />
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