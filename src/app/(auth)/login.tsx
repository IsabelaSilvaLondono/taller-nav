import { Boton, Texto, Vidrio } from '@/Glass';
import { T } from '@/theme';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function Login() {
    const router = useRouter();
    return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
        <Vidrio style={{ gap: 16, padding: 24 }}>
        <Texto style={T.titulo}>Bienvenida</Texto>
        <Texto style={T.suave}>Inicia sesión para entrar a tu biblioteca.</Texto>
        <Boton titulo="Entrar" onPress={() => router.replace('/')} />
        </Vidrio>
    </View>
    );
}