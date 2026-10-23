import { Texto, Vidrio } from '@/Glass';
import { useBiblioteca } from '@/context/Biblioteca';
import { DETALLES } from '@/data/detalles';
import { LIBROS } from '@/data/libros';
import { C, T } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Pressable, View } from 'react-native';

export function TarjetaLibro({ libro }: { libro: (typeof LIBROS)[number] }) {
    const { esFavorito, alternarFavorito, ajustes } = useBiblioteca();
    const fav = esFavorito(libro.id);

    return (
    <Link href={{ pathname: '/libro/[id]', params: { id: libro.id } }} asChild>
        <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}>
        <Vidrio style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={{ flex: 1, gap: 4 }}>
            <Texto style={T.boton}>{libro.titulo}</Texto>
            <Texto style={T.suave}>
                {libro.autor}
                {ajustes.mostrarAnio ? ` · ${libro.anio}` : ''}
            </Texto>
            {ajustes.mostrarSinopsis && (
                <Texto style={T.suave} numberOfLines={2}>
                    {DETALLES[libro.id]?.sinopsis}
                </Texto>
            )}
            </View>
            <Pressable hitSlop={12} onPress={() => alternarFavorito(libro.id)}>
            <Ionicons
                name={fav ? 'heart' : 'heart-outline'}
                size={24}
                color={fav ? C.acento : (C.suave as string)}
            />
            </Pressable>
        </Vidrio>
        </Pressable>
    </Link>
    );
}