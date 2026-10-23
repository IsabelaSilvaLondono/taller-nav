import { Campo, Chip, Fondo, Texto } from '@/Glass';
import { Portada } from '@/Portada';
import { TarjetaLibro } from '@/TarjetaLibro';
import { useBiblioteca } from '@/context/Biblioteca';
import { DETALLES, GENEROS } from '@/data/detalles';
import { LIBROS } from '@/data/libros';
import { T } from '@/theme';
import { Link } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, ScrollView, View } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';

const DESTACADOS = ['1', '6', '7', '8', '3'];

export default function Inicio() {
  const { usuario } = useBiblioteca();
  const [busqueda, setBusqueda] = useState('');
  const [genero, setGenero] = useState('Todos');

  const q = busqueda.trim().toLowerCase();
  const lista = LIBROS.filter(
    (l) =>
      (genero === 'Todos' || DETALLES[l.id].genero === genero) &&
      `${l.titulo} ${l.autor}`.toLowerCase().includes(q),
  );
  const mostrarCarrusel = q === '' && genero === 'Todos';
  const destacados = LIBROS.filter((l) => DESTACADOS.includes(l.id));

  const encabezado = (
    <View style={{ gap: 20, marginBottom: 6 }}>
      <View>
        <Texto style={T.suave}>Hola,</Texto>
        <Texto style={[T.titulo, { fontSize: 40 }]}>{usuario?.nombre}</Texto>
      </View>

      <Campo
        icono="search-outline"
        placeholder="Buscar por título o autor"
        value={busqueda}
        onChangeText={setBusqueda}
        autoCorrect={false}
      />

      {mostrarCarrusel && (
        <View style={{ gap: 12 }}>
          <Texto style={T.seccion}>Destacados</Texto>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -20 }}
            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 14, gap: 16 }}
          >
            {destacados.map((l, i) => (
              <Animated.View key={l.id} entering={FadeInRight.delay(i * 90).springify()}>
                <Link href={{ pathname: '/libro/[id]', params: { id: l.id } }} asChild>
                  <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1 })}>
                    <Portada libro={l} ancho={140} />
                  </Pressable>
                </Link>
              </Animated.View>
            ))}
          </ScrollView>
        </View>
      )}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: -20 }}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
      >
        {GENEROS.map((g) => (
          <Chip key={g} texto={g} activo={g === genero} onPress={() => setGenero(g)} />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <Fondo>
      <FlatList
        data={lista}
        keyExtractor={(l) => l.id}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ padding: 20, paddingBottom: 150, gap: 14 }}
        ListHeaderComponent={encabezado}
        ListEmptyComponent={<Texto style={T.suave}>No encontramos libros con esa búsqueda.</Texto>}
        renderItem={({ item, index }) => <TarjetaLibro libro={item} indice={index} />}
      />
    </Fondo>
  );
}