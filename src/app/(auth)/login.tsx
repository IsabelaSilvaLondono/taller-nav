import { Boton, Campo, Texto, Vidrio } from '@/Glass';
import { useBiblioteca } from '@/context/Biblioteca';
import { T } from '@/theme';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

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
            <Animated.View entering={FadeInUp.delay(150).springify()}>
            <Vidrio style={{ gap: 14, padding: 22 }}>
            <Texto style={T.titulo}>Bienvenida</Texto>

            <Campo
                icono="mail-outline"
                placeholder="Correo"
                value={correo}
                onChangeText={setCorreo}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
            />
            <Campo
                icono="lock-closed-outline"
                placeholder="Contraseña"
                value={clave}
                onChangeText={setClave}
                secureTextEntry
                autoCapitalize="none"
                onSubmitEditing={entrar}
            />

            {error !== '' && <Texto style={T.error}>{error}</Texto>}

            <Boton titulo="Entrar" icono="log-in-outline" variante="primario" onPress={entrar} />
            <Texto style={[T.suave, { textAlign: 'center', fontSize: 15 }]}>
                Demo: cualquier correo válido y contraseña de 4 o más caracteres.
                </Texto>
            </Vidrio>
            </Animated.View>
        </View>
        </KeyboardAvoidingView>
    );
}