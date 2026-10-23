import { Fondo, Texto, Vidrio } from '@/Glass';
import { useBiblioteca } from '@/context/Biblioteca';
import { C, T } from '@/theme';
import { Switch, View } from 'react-native';

export default function Ajustes() {
    const { ajustes, cambiarAjuste } = useBiblioteca();

    const fila = (
    titulo: string,
    detalle: string,
    clave: 'mostrarSinopsis' | 'mostrarAnio',
    ) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <View style={{ flex: 1, gap: 2 }}>
        <Texto style={T.boton}>{titulo}</Texto>
        <Texto style={T.suave}>{detalle}</Texto>
        </View>
        <Switch
        value={ajustes[clave]}
        onValueChange={(v) => cambiarAjuste(clave, v)}
        trackColor={{ false: '#C9CED3', true: C.acento }}
        thumbColor="#FFFFFF"
        />
    </View>
    );

    return (
    <Fondo>
        <View style={{ padding: 24, gap: 14 }}>
        <Vidrio style={{ gap: 6 }}>
            <Texto style={T.titulo}>Ajustes</Texto>
            <Texto style={T.suave}>Personaliza cómo se ve tu lista de libros.</Texto>
        </Vidrio>
        <Vidrio style={{ gap: 18 }}>
            {fila('Mostrar sinopsis', 'Un resumen breve en cada tarjeta.', 'mostrarSinopsis')}
            {fila('Mostrar año', 'El año de publicación junto al autor.', 'mostrarAnio')}
        </Vidrio>
        </View>
    </Fondo>
    );
}