import { Boton, Fondo, Texto, Vidrio } from '@/Glass';
import { useBiblioteca } from '@/context/Biblioteca';
import { LIBROS } from '@/data/libros';
import { C, T } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

function Estadistica({ valor, etiqueta }: { valor: number; etiqueta: string }) {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
        <Texto style={[T.titulo, { fontSize: 30 }]}>{valor}</Texto>
        <Texto style={[T.suave, { fontSize: 15 }]}>{etiqueta}</Texto>
        </View>
    );
    }

    export default function Perfil() {
    const router = useRouter();
    const { usuario, favoritos, cerrarSesion } = useBiblioteca();
    const autores = new Set(LIBROS.map((l) => l.autor)).size;

    const salir = () => {
        cerrarSesion();
        // replace: la app sale del historial y no se puede volver con "atrás"
        router.replace('/login');
    };

    return (
        <Fondo>
        <View style={{ padding: 24, gap: 16 }}>
            <Vidrio style={{ alignItems: 'center', gap: 6, padding: 26 }}>
            <LinearGradient
                colors={[C.acento, C.acentoOscuro]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                width: 92, height: 92, borderRadius: 46,
                alignItems: 'center', justifyContent: 'center', marginBottom: 6,
                }}
            >
                <Texto style={[T.titulo, { color: '#FFFFFF', fontSize: 44 }]}>
                {usuario?.nombre.charAt(0).toUpperCase()}
                </Texto>
            </LinearGradient>
            <Texto style={T.titulo}>{usuario?.nombre}</Texto>
            <Texto style={T.suave}>{usuario?.correo}</Texto>
            </Vidrio>

            <Vidrio style={{ flexDirection: 'row', paddingVertical: 18 }}>
            <Estadistica valor={favoritos.length} etiqueta="Favoritos" />
            <Estadistica valor={LIBROS.length} etiqueta="Libros" />
            <Estadistica valor={autores} etiqueta="Autores" />
            </Vidrio>

            <Boton titulo="Acerca de" icono="information-circle-outline" onPress={() => router.push('/acerca')} />
            <Boton titulo="Cerrar sesión" icono="log-out-outline" variante="peligro" onPress={salir} />
        </View>
        </Fondo>
    );
}