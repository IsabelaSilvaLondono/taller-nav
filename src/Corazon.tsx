import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import Animated, {
    useAnimatedStyle, useSharedValue, withSequence, withSpring,
} from 'react-native-reanimated';
import { C } from '@/theme';

export function Corazon({
    activo, onPress, size = 26,
    }: { activo: boolean; onPress: () => void; size?: number }) {
    const escala = useSharedValue(1);
    const anim = useAnimatedStyle(() => ({ transform: [{ scale: escala.value }] }));

    const tocar = () => {
        escala.value = withSequence(withSpring(1.5, { damping: 6 }), withSpring(1, { damping: 8 }));
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress();
    };

    return (
        <Pressable hitSlop={14} onPress={tocar}>
        <Animated.View style={anim}>
            <Ionicons
            name={activo ? 'heart' : 'heart-outline'}
            size={size}
            color={activo ? C.acento : C.suave}
            />
        </Animated.View>
        </Pressable>
    );
}