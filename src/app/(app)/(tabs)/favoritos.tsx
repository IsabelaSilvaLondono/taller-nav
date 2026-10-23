import { Boton, Fondo, Texto, Vidrio } from '@/Glass';
import { TarjetaLibro } from '@/TarjetaLibro';
import { useBiblioteca } from '@/context/Biblioteca';
import { LIBROS } from '@/data/libros';
import { C, T } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, View } from 'react-native';

export default function Favoritos() {
    const router = useRouter();
    const { favoritos } = useBiblioteca();
    const lista = LIBROS.filter((l) => favoritos.includes(l.id));

    return (
        <Fondo>
        <FlatList
            data={lista}
            keyExtractor={(l) => l.id}
            contentContainerStyle={{ padding: 20, paddingBottom: 150, gap: 14 }}
            ListHeaderComponent={
            <View style={{ marginBottom: 8 }}>
                <Texto style={[T.titulo, { fontSize: 40 }]}>Favoritos</Texto>
                <Texto style={T.suave}>
                {lista.length === 1 ? '1 libro guardado' : `${lista.length} libros guardados`}
                </Texto>
            </View>
            }
            ListEmptyComponent={
            <Vidrio style={{ gap: 14, alignItems: 'center', padding: 28 }}>
                <Ionicons name="heart-outline" size={44} color={C.acento} />
                <Texto style={[T.suave, { textAlign: 'center' }]}>
                Aún no has guardado libros. Toca el corazón en cualquier tarjeta para agregarlo aquí.
                </Texto>
                <View style={{ alignSelf: 'stretch' }}>
                <Boton
                    titulo="Explorar libros"
                    icono="search-outline"
                    variante="primario"
                    onPress={() => router.navigate('/')}
                />
                </View>
            </Vidrio>
            }
            renderItem={({ item, index }) => <TarjetaLibro libro={item} indice={index} />}
        />
        </Fondo>
    );
}