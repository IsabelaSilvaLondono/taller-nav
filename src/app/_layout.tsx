import { tituloHeader } from '@/Glass';
import { BibliotecaProvider } from '@/context/Biblioteca';
import { C } from '@/theme';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BibliotecaProvider>
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
      </BibliotecaProvider>
    </GestureHandlerRootView>
  );
}