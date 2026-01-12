import { Image } from 'expo-image';
import { router } from 'expo-router';

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BurgerMenu } from './burger-menu';

export function HeaderHatContent({ overlay = false }: { overlay?: boolean }) {

console.log('BurgerMenu is:', BurgerMenu);
  return (
    <View style={[styles.container, overlay && styles.overlay]}>
      
      {/* <View style={styles.box}> */}

        <BurgerMenu />

      <Image
        source={require('@/assets/svg/logo.svg')}
        style={styles.logo}
      />

      <Pressable 
        style={styles.reactBoxAcount}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.reactAcount}>Вхід</Text>
      </Pressable>
      
      {/* </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  flexDirection: "row",
  gap: 20,
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 20,
  marginHorizontal: 20
    // alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
//  box: {
//   display: "flex",
//   flexDirection: "row",
//   gap: 20,
//   alignItems: "center",
//   justifyContent: "space-between",
//   marginTop: 20
// },
   reactBoxAcount: {
   
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
    marginBottom: 20,
  },
  
  title: {
    fontFamily: 'Ukrainian-Bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 80,
  },
});
