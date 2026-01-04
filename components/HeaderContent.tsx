import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

export function HeaderContent({ overlay = false }: { overlay?: boolean }) {
  return (
    <View style={[styles.container, overlay && styles.overlay]}>
      <Image
        source={require('@/assets/svg/logo.svg')}
        style={styles.logo}
      />

      <Text style={[styles.title, overlay && styles.overlayText]}>
        Вітаємо вас на «МАНДРУЙ»
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Розпочати пошук</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
  },
  logo: {
    width: 220,
    height: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  overlayText: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#9370db',
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
