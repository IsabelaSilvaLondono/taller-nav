import { Fondo, Texto } from '@/Glass';
import { T } from '@/theme';
import { Slot } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AuthLayout() {
    const insets = useSafeAreaInsets();
    return (
        <Fondo>
        <View style={{ paddingTop: insets.top + 48, alignItems: 'center' }}>
        <Texto style={T.marca}>Biblioteca</Texto>
        </View>
        <Slot />
    </Fondo>
    );
}