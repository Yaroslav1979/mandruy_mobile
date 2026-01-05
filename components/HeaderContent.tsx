import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function HeaderContent({ overlay = false }: { overlay?: boolean }) {
  return (
    <View style={[styles.container, overlay && styles.overlay]}>
      <View style={styles.box}>
      <Image
    source={require('@/assets/images/burger-menu-67.png')}
    style={styles.reactMenu} />
      
      <Image
        source={require('@/assets/svg/logo.svg')}
        style={styles.logo}
      />
      <Pressable 
      style={styles.reactBoxAcount}>
        <Text style={styles.reactAcount}>Вхід</Text>
       </Pressable>
      
</View>
      <Text style={[styles.title, overlay && styles.overlayText]}>
        Вітаємо вас на «МАНДРУЙ»
      </Text>

      <View style={styles.buttons}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Розпочати пошук</Text>
        </Pressable>
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>Дізнатися більше</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
 box: {
  display: "flex",
  flexDirection: "row",
  gap: 200,
  alignItems: "center",
  justifyContent: "space-between"
},

  reactMenu: {
    height: 50,
    width: 50,
  },

   reactBoxAcount: {
    // position: 'absolute',
    // top: 50,
    // right: 14,
  },
  
  reactAcount: {
    fontFamily: "Ukrainian-Regular",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  logo: {
    width: 220,
    height: 60,
    marginTop: 20,
    marginBottom: 20,
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
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: 40,
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
  link: {
    paddingVertical: 14,
    borderColor: "grey",
    borderRadius: 30,
  },
  linkText: {
    fontFamily: 'Ukrainian-Bold',
    color: '#fff',
    fontSize: 20,
  }

});
