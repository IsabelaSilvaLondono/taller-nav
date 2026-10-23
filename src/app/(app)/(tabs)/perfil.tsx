import { Boton, Fondo, Texto, Vidrio } from '@/Glass';
import { useBiblioteca } from '@/context/Biblioteca';
import { C, T } from '@/theme';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function Perfil() {
    const router = useRouter();
    const { usuario, favoritos, cerrarSesion } = useBiblioteca();

    const salir = () => {
        cerrarSesion();
        // replace: la app sale del historial y no se puede volver con "atrás"
        router.replace('/login');
    };

    return (
        <Fondo>
        <View style={{ padding: 24, gap: 14 }}>
            <Vidrio style={{ alignItems: 'center', gap: 8, padding: 24 }}>
            <View
                style={{
                width: 72, height: 72, borderRadius: 36,
                backgroundColor: C.acento, alignItems: 'center', justifyContent: 'center',
                }}
            >
                <Texto style={[T.titulo, { color: '#FFFFFF' }]}>
                {usuario?.nombre.charAt(0).toUpperCase()}
                </Texto>
            </View>
            <Texto style={T.titulo}>{usuario?.nombre}</Texto>
            <Texto style={T.suave}>{usuario?.correo}</Texto>
            <Texto style={T.suave}>
                {favoritos.length === 1 ? '1 libro favorito' : `${favoritos.length} libros favoritos`}
            </Texto>
            </Vidrio>

            <Boton titulo="Acerca de" icono="information-circle-outline" onPress={() => router.push('/acerca')} />
            <Boton titulo="Cerrar sesión" icono="log-out-outline" onPress={salir} />
        </View>
    </Fondo>
    );
}