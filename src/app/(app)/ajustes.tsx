import { Fondo, Texto, Vidrio } from '@/Glass';
import { T } from '@/theme';
import { View } from 'react-native';

export default function Ajustes() {
    return (
    <Fondo>
        <View style={{ padding: 24 }}>
        <Vidrio style={{ gap: 8 }}>
            <Texto style={T.titulo}>Ajustes</Texto>
            <Texto style={T.suave}>Aquí irían las preferencias de la app.</Texto>
        </Vidrio>
        </View>
    </Fondo>
    );
}