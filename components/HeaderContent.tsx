import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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
    // bottom: 40,
    left: 0,
    right: 0,
  },
  logo: {
    width: 220,
    height: 60,
    // marginTop: -20,
  },
  title: {
    fontFamily: 'Ukrainian-Bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 80,
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
    fontFamily: 'Ukrainian-Bold',
    color: '#fff',
    fontSize: 20,
  },
});
