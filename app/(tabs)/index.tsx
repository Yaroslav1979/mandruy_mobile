import { HeaderHero } from '@/components/HeaderHero';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ImageBackground, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const currentHeaderHeight = isLandscape ? height : 250;
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#d7b8b8ff', dark: '#1D3D47' }}
      headerHeight={currentHeaderHeight} // Передаємо висоту сюди!
      headerImage={
        <HeaderHero
          isLandscape={isLandscape}
          screenHeight={currentHeaderHeight}
        />
        }
        >
      {!isLandscape && (
        <ImageBackground 
        source={require('../../assets/images/Map.jpg')}
        style={{width: "100%", height: 600}}
        >
        <View style={styles.container}>
          {/* <View style={styles.wrapper}> */}

            {/* <Image
              source={require('@/assets/svg/logo.svg')}
              style={styles.logo}
            /> */}

          {/* </View> */}

          <Text style={styles.title}>Вітаємо вас на «МАНДРУЙ»</Text>
          
          <View style={styles.buttons}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Розпочати пошук</Text>
            </Pressable>
            <Pressable style={styles.link}>
              <Text style={styles.linkText}>Дізнатися більше</Text>
            </Pressable>
          </View>
        </View>
        </ImageBackground>
      )}
      
    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  container: {

    padding: 20,
    alignItems: 'center',
  },
  wrapper: {
    marginTop: -54,
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: "#000",
  }, 
  logo: {
    width: 220,
    height: 60,
    backgroundColor: "#000",
  },
  title: {
    fontFamily: 'Ukrainian-Bold',
    fontSize: 38,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 60,
  },
  overlayText: {
    color: '#fff',
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
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
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 30,
     alignItems: "center"
  },
  linkText: {
    fontFamily: 'Ukrainian-Bold',
    color: '#000',
    fontSize: 20,
  }
});

