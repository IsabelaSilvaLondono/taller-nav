import { Boton, Fondo, Texto, Vidrio } from '@/Glass';
import { TarjetaLibro } from '@/TarjetaLibro';
import { useBiblioteca } from '@/context/Biblioteca';
import { LIBROS } from '@/data/libros';
import { T } from '@/theme';
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
        contentContainerStyle={{ padding: 20, paddingBottom: 120, gap: 14 }}
        ListHeaderComponent={
            <View style={{ marginBottom: 6 }}>
                <Texto style={T.titulo}>Favoritos</Texto>
                <Texto style={T.suave}>
                {lista.length === 1 ? '1 libro guardado' : `${lista.length} libros guardados`}
                </Texto>
            </View>
        }
        ListEmptyComponent={
            <Vidrio style={{ gap: 14 }}>
                <Texto style={T.suave}>
                Aún no has guardado libros. Toca el corazón en cualquier tarjeta para agregarlo aquí.
                </Texto>
                <Boton titulo="Explorar libros" icono="search-outline" onPress={() => router.navigate('/')} />
            </Vidrio>
        }
        renderItem={({ item }) => <TarjetaLibro libro={item} />}
        />
    </Fondo>
    );
}