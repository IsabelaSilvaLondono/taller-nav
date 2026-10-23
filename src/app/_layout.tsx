import { tituloHeader } from '@/Glass';
import { BibliotecaProvider } from '@/context/Biblioteca';
import { C } from '@/theme';
import {
  CormorantGaramond_400Regular_Italic,
  CormorantGaramond_500Medium_Italic,
  CormorantGaramond_600SemiBold_Italic,
  useFonts,
} from '@expo-google-fonts/cormorant-garamond';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [cargadas] = useFonts({
    CormorantGaramond_400Regular_Italic,
    CormorantGaramond_500Medium_Italic,
    CormorantGaramond_600SemiBold_Italic,
  });

  useEffect(() => {
    if (cargadas) SplashScreen.hideAsync();
  }, [cargadas]);

  if (!cargadas) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BibliotecaProvider>
        <Stack
          screenOptions={{
            headerTitle: tituloHeader,
            headerStyle: { backgroundColor: C.fondo },
            headerShadowVisible: false,
            headerTintColor: C.tinta,
            contentStyle: { backgroundColor: C.fondo },
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