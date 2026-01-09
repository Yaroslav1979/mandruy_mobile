import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function HeaderContent({ overlay = false }: { overlay?: boolean }) {
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


      <Text style={[styles.title, overlay && styles.overlayText]}>
        Вітаємо вас на «МАНДРУЙ»
      </Text>

     <View style={styles.wrapperIcons}> 
          <Pressable>
            <Image
            source={require('../assets/svg/Group14.svg')}
            style={styles.icon}
          />
          </Pressable>
          <Pressable>
            <Image
            source={require('../assets/svg/Group15.svg')}
            style={styles.icon}
          />
           </Pressable>
          <Pressable>
            <Image
            source={require('../assets/svg/Group16.svg')}
            style={styles.icon}
          />
          </Pressable>
      </View>

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

reactBoxMenu: {

},

  reactMenu: {
    height: 50,
    width: 50,
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

   reactBoxAcount: {
    // position: 'absolute',
    // top: 50,
    // right: 14,
  },
  
  reactAcount: {
    fontFamily: "Ukrainian-Regular",
    color: "#eee",
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
    marginBottom: 30,
  },
  overlayText: {
    color: '#eee',
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: 40,
  },
  button: {
    backgroundColor: '#9370db70',
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 30,
  },
  buttonText: {
    fontFamily: 'Ukrainian-Bold',
    color: '#eee',
    fontSize: 20,
  },
  link: {
    paddingVertical: 14,
    borderColor: "grey",
    borderRadius: 30,
  },
  linkText: {
    fontFamily: 'Ukrainian-Bold',
    color: '#eee',
    fontSize: 20,
  },
 wrapperIcons: {
    display: "flex",
    flexDirection: "row",
    gap: 100,
    marginBottom: 30,
    // marginTop: 50
  },
  icon: {
    width: 60,
    height: 60,
  }
});
