import { LIBROS } from '@/data/libros';
import { Fondo, Texto, Vidrio } from '@/Glass';
import { T } from '@/theme';
import { Link } from 'expo-router';
import { FlatList, Pressable } from 'react-native';

export default function Inicio() {
  return (
    <Fondo>
      <FlatList
        data={LIBROS}
        keyExtractor={(l) => l.id}
        contentContainerStyle={{ padding: 20, paddingBottom: 120, gap: 14 }}
        renderItem={({ item }) => (
          <Link href={{ pathname: '/libro/[id]', params: { id: item.id } }} asChild>
            <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}>
              <Vidrio style={{ gap: 4 }}>
                <Texto style={T.boton}>{item.titulo}</Texto>
                <Texto style={T.suave}>{item.autor}</Texto>
              </Vidrio>
            </Pressable>
          </Link>
        )}
      />
    </Fondo>
  );
}