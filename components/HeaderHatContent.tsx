import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function HeaderHatContent({ overlay = false }: { overlay?: boolean }) {
  return (
    <View style={[styles.container, overlay && styles.overlay]}>
      
      <View style={styles.box}>

      <Pressable 
        style={styles.reactBoxMenu}>
        <Image
          source={require('@/assets/images/burger-menu-67.png')}
          style={styles.reactMenu} />
      </Pressable>

      <Image
        source={require('@/assets/svg/logo.svg')}
        style={styles.logo}
      />

      <Pressable 
      style={styles.reactBoxAcount}>
        <Text style={styles.reactAcount}>Вхід</Text>
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
  gap: 20,
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 20
},
reactBoxMenu: {

},
  reactMenu: {
    paddingTop: -50,
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
    top: 120,
    width: 220,
    height: 60,
    // marginTop: 50,
    marginBottom: 20,
    
  },
  title: {
    fontFamily: 'Ukrainian-Bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 80,
  },
});
