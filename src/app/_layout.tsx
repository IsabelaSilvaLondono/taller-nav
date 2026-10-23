import { tituloHeader } from '@/Glass';
import { C } from '@/theme';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Triste titulo por cierto
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerTitle: tituloHeader,
          headerStyle: { backgroundColor: C.fondo },
          headerShadowVisible: false,
          headerTintColor: C.tinta,
        }}
      >
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        
        <Stack.Screen name="libro/[id]" options={{ title: 'Detalle' }} /> 
        <Stack.Screen name="acerca" options={{ presentation: 'modal', title: 'Acerca de' }} />
      </Stack>
    </GestureHandlerRootView>
  );
}