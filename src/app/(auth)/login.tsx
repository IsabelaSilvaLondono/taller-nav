import { Boton, Campo, Texto, Vidrio } from '@/Glass';
import { useBiblioteca } from '@/context/Biblioteca';
import { T } from '@/theme';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

export default function Login() {
    const router = useRouter();
    const { iniciarSesion } = useBiblioteca();
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [error, setError] = useState('');

    const entrar = () => {
    if (!/^\S+@\S+\.\S+$/.test(correo.trim())) {
        setError('Escribe un correo válido.');
        return;
    }
    if (clave.length < 4) {
        setError('La contraseña debe tener mínimo 4 caracteres.');
        return;
    }
    setError('');
    iniciarSesion(correo.trim());
    // replace: el login sale del historial y no se puede volver con "atrás"
    router.replace('/');
    };

    return (
    <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
        <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
        <Vidrio style={{ gap: 14, padding: 24 }}>
            <Texto style={T.titulo}>Bienvenida</Texto>
            <Texto style={T.suave}>Inicia sesión para entrar a tu biblioteca.</Texto>

            <Campo
            placeholder="Correo"
            value={correo}
            onChangeText={setCorreo}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            />
            <Campo
            placeholder="Contraseña"
            value={clave}
            onChangeText={setClave}
            secureTextEntry
            autoCapitalize="none"
            onSubmitEditing={entrar}
            />

            {error !== '' && <Texto style={T.error}>{error}</Texto>}

            <Boton titulo="Entrar" icono="log-in-outline" onPress={entrar} />
            <Texto style={[T.suave, { textAlign: 'center' }]}>
            Demo: cualquier correo válido y una contraseña de 4 o más caracteres.
            </Texto>
        </Vidrio>
        </View>
    </KeyboardAvoidingView>
    );
}