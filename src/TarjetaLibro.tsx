import { Corazon } from '@/Corazon';
import { Texto, Vidrio } from '@/Glass';
import { Portada } from '@/Portada';
import { useBiblioteca } from '@/context/Biblioteca';
import { DETALLES } from '@/data/detalles';
import { T } from '@/theme';
import { Link } from 'expo-router';
import { Pressable, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LIBROS } from './data/libros';

export function TarjetaLibro({ libro, indice = 0 }: {  libro: (typeof LIBROS)[number]; indice?: number }) {
    const { esFavorito, alternarFavorito, ajustes } = useBiblioteca();

    return (
        <Animated.View entering={FadeInDown.delay(Math.min(indice, 6) * 70).springify()}>
        <Link href={{ pathname: '/libro/[id]', params: { id: libro.id } }} asChild>
            <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1 })}>
            <Vidrio style={{ flexDirection: 'row', alignItems: 'center', gap: 14, padding: 12 }}>
                <Portada libro={libro} ancho={64} mini />
                <View style={{ flex: 1, gap: 3 }}>
                <Texto style={T.boton} numberOfLines={2}>{libro.titulo}</Texto>
                <Texto style={T.suave}>
                    {libro.autor}
                    {ajustes.mostrarAnio ? ` · ${libro.anio}` : ''}
                </Texto>
                {ajustes.mostrarSinopsis && (
                    <Texto style={[T.suave, { fontSize: 15 }]} numberOfLines={2}>
                    {DETALLES[libro.id]?.sinopsis}
                    </Texto>
                )}
                </View>
                <Corazon activo={esFavorito(libro.id)} onPress={() => alternarFavorito(libro.id)} />
            </Vidrio>
            </Pressable>
        </Link>
        </Animated.View>
    );
}