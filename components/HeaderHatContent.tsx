import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function HeaderHatContent({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={[styles.container, overlay && styles.overlay]}>
      
      <View style={styles.box}>

      <Pressable 
        style={styles.reactBoxMenu}
        onPress={() => setMenuOpen(prev => !prev)}
        >
        <Image
          source={require('@/assets/images/burger-menu-67.png')}
          style={styles.reactMenu} />
      </Pressable>

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
      
      </View>

       {menuOpen && (
        <View style={styles.dropdown}>
          <Pressable 
          onPress={() => {
    setMenuOpen(false);
    router.push('/search');
  }}>
            <Text style={styles.dropdownItem}>Пошук місць</Text>
          </Pressable>

          <Pressable
          onPress={() => {
    setMenuOpen(false);
    router.push('/map');
  }}>
            <Text style={styles.dropdownItem}>Мапа</Text>
          </Pressable>

          <Pressable
          onPress={() => {
    setMenuOpen(false);
    router.push('/aboutUs');
  }}>
            <Text style={styles.dropdownItem}>Про нас</Text>
          </Pressable>
        </View>
      )}
      
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
  dropdown: {
    position: 'absolute',
    top: 80,
    left: 16,
    backgroundColor: 'rgba(0,0,0,0.85)',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    gap: 12,
    zIndex: 100,
},

dropdownItem: {
  color: '#fff',
  fontSize: 18,
  fontFamily: 'Ukrainian-Regular',
},

});
