import { Boton, Fondo, Texto, Vidrio } from '@/Glass';
import { useBiblioteca } from '@/context/Biblioteca';
import { DETALLES } from '@/data/detalles';
import { LIBROS } from '@/data/libros';
import { T } from '@/theme';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';

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
        <ScrollView contentContainerStyle={{ padding: 24, gap: 14 }}>
            {libro ? (
            <>
            <Vidrio style={{ gap: 10, padding: 24 }}>
                <Texto style={T.titulo}>{libro.titulo}</Texto>
                <Texto>{libro.autor}</Texto>
                <View style={{ flexDirection: 'row', gap: 16 }}>
                    <Texto style={T.suave}>{libro.anio}</Texto>
                    {detalle && <Texto style={T.suave}>{detalle.genero}</Texto>}
                </View>
            </Vidrio>

            {detalle && (
                <Vidrio style={{ gap: 6 }}>
                    <Texto style={T.boton}>Sinopsis</Texto>
                    <Texto style={T.suave}>{detalle.sinopsis}</Texto>
                </Vidrio>
            )}

            <Boton
                titulo={fav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                icono={fav ? 'heart' : 'heart-outline'}
                onPress={() => alternarFavorito(libro.id)}
                />
            </>
            ) : (
            <Vidrio style={{ padding: 24 }}>
                <Texto style={T.titulo}>Libro no encontrado</Texto>
            </Vidrio>
        )}
        </ScrollView>
    </Fondo>
    );
}