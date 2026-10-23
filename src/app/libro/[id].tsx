import { Boton, Chip, Fondo, Texto, Vidrio } from '@/Glass';
import { Portada } from '@/Portada';
import { useBiblioteca } from '@/context/Biblioteca';
import { DETALLES } from '@/data/detalles';
import { LIBROS } from '@/data/libros';
import { C, T } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function DetalleLibro() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { esFavorito, alternarFavorito } = useBiblioteca();
    const libro = LIBROS.find((l) => l.id === id);
    const detalle = libro ? DETALLES[libro.id] : undefined;
    const fav = libro ? esFavorito(libro.id) : false;

    return (
        <Fondo>
        {/* el título del header es el del libro */}
        <Stack.Screen options={{ title: libro ? libro.titulo : 'Detalle' }} />
        <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 48, gap: 18 }}>
            {libro && detalle ? (
            <>
                <Animated.View entering={FadeInDown.springify()} style={{ alignItems: 'center', paddingVertical: 8 }}>
                <Portada libro={libro} ancho={190} />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(120).springify()}>
                <Vidrio style={{ gap: 8, padding: 22 }}>
                    <Texto style={T.titulo}>{libro.titulo}</Texto>
                    <Texto>{libro.autor}</Texto>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
                    <Chip texto={String(libro.anio)} />
                    <Chip texto={detalle.genero} />
                    </View>
                </Vidrio>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(220).springify()}>
                <Vidrio style={{ gap: 6, padding: 22 }}>
                    <Texto style={T.seccion}>Sinopsis</Texto>
                    <Texto style={T.suave}>{detalle.sinopsis}</Texto>
                </Vidrio>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(320).springify()}>
                <Boton
                    titulo={fav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                    icono={fav ? 'heart' : 'heart-outline'}
                    variante={fav ? 'vidrio' : 'primario'}
                    onPress={() => alternarFavorito(libro.id)}
                />
                </Animated.View>
            </>
            ) : (
            <Vidrio style={{ alignItems: 'center', gap: 10, padding: 28 }}>
                <Ionicons name="book-outline" size={44} color={C.acento} />
                <Texto style={T.titulo}>Libro no encontrado</Texto>
            </Vidrio>
            )}
        </ScrollView>
        </Fondo>
    );
}