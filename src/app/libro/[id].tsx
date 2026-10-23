import { Fondo, Texto, Vidrio } from '@/Glass';
import { LIBROS } from '@/data/libros';
import { T } from '@/theme';
import { Stack, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

export default function DetalleLibro() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const libro = LIBROS.find((l) => l.id === id);

    return (
    <Fondo>
        <Stack.Screen options={{ title: libro ? libro.titulo : 'Detalle' }} />
        <View style={{ padding: 24 }}>
        <Vidrio style={{ gap: 10, padding: 24 }}>
            {libro ? (
            <>
                <Texto style={T.titulo}>{libro.titulo}</Texto>
                <Texto>{libro.autor}</Texto>
                <Texto style={T.suave}>{libro.anio}</Texto>
            </>
            ) : (
            <Texto style={T.titulo}>Libro no encontrado</Texto>
            )}
        </Vidrio>
        </View>
    </Fondo>
    );
}