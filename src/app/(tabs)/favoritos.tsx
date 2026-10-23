import { Fondo, Texto, Vidrio } from '@/Glass';
import { T } from '@/theme';
import { View } from 'react-native';

export default function Favoritos() {
    return (
    <Fondo>
        <View style={{ padding: 24 }}>
        <Vidrio style={{ gap: 6 }}>
            <Texto style={T.titulo}>Favoritos</Texto>
            <Texto style={T.suave}>Aún no has guardado libros.</Texto>
        </Vidrio>
        </View>
    </Fondo>
    );
}