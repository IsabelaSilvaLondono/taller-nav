import { Boton, Fondo, Texto, Vidrio } from '@/Glass';
import { T } from '@/theme';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function Perfil() {
    const router = useRouter();
    return (
    <Fondo>
        <View style={{ padding: 24, gap: 14 }}>
        <Vidrio style={{ gap: 6 }}>
            <Texto style={T.titulo}>Perfil</Texto>
            <Texto style={T.suave}>Tu espacio en Biblioteca.</Texto>
        </Vidrio>
        <Boton titulo="Acerca de" onPress={() => router.push('/acerca')} />
        <Boton titulo="Cerrar sesión" onPress={() => router.replace('/login')} />
        </View>
    </Fondo>
    );
}