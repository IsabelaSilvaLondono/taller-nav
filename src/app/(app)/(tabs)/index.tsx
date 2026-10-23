import { Campo, Fondo, Texto } from '@/Glass';
import { TarjetaLibro } from '@/TarjetaLibro';
import { useBiblioteca } from '@/context/Biblioteca';
import { LIBROS } from '@/data/libros';
import { T } from '@/theme';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

export default function Inicio() {
  const { usuario } = useBiblioteca();
  const [busqueda, setBusqueda] = useState('');

  const q = busqueda.trim().toLowerCase();
  const lista = LIBROS.filter((l) => `${l.titulo} ${l.autor}`.toLowerCase().includes(q));

  const encabezado = (
    <View style={{ gap: 14, marginBottom: 6 }}>
      <View style={{ gap: 2 }}>
        <Texto style={T.titulo}>Hola, {usuario?.nombre}</Texto>
        <Texto style={T.suave}>¿Qué quieres leer hoy?</Texto>
      </View>
      <Campo
        placeholder="Buscar por título o autor"
        value={busqueda}
        onChangeText={setBusqueda}
        autoCorrect={false}
      />
    </View>
  );

  return (
    <Fondo>
      <FlatList
        data={lista}
        keyExtractor={(l) => l.id}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ padding: 20, paddingBottom: 120, gap: 14 }}
        ListHeaderComponent={encabezado}
        ListEmptyComponent={<Texto style={T.suave}>No encontramos libros con esa búsqueda.</Texto>}
        renderItem={({ item }) => <TarjetaLibro libro={item} />}
      />
    </Fondo>
  );
}