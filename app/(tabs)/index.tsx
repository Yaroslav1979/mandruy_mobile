import { HeaderHero } from '@/components/HeaderHero';
import { Image } from 'expo-image';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

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
        
        <View style={styles.container}>
          <View style={styles.wrapper}>

          <Image
            source={require('@/assets/svg/logo.svg')}
            style={styles.logo}
          />
          </View>
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
      )}
      {/* ОСНОВНИЙ КОНТЕНТ СТОРІНКИ */}
      {/* <Text>Тут починається звичайний scroll-контент</Text> */}

      {/* <ThemedView style={styles.titleContainer}> */}
        {/* <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView> */}
      {/* <ThemedView style={styles.stepContainer}> */}
        {/* <ThemedText type="subtitle">Step 1: Try it</ThemedText> */}
        {/* <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView> */}
      {/* <ThemedView style={styles.stepContainer}> */}
        {/* <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link> */}

        {/* <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText> */}
      {/* </ThemedView> */}
      {/* <ThemedView style={styles.stepContainer}> */}
        {/* <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText> */}
        {/* <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText> */}
      {/* </ThemedView> */}
      
    </ParallaxScrollView>
  );
}




    
    // const headerImage={ 
        
    //     <View>
    //       <Image
    //     source={require('@/assets/images/synevir.jpg')}
    //     style={styles.reactBgd} /><View style={styles.reactLogoBox}>
    //       <Image
    //         source={require('@/assets/images/burger-menu-67.png')}
    //         style={styles.reactMenu} />
    //       <Image
    //         source={require('@/assets/svg/logo.svg')}
    //         style={styles.reactLogo} />
    //     </View>
    //  <Pressable style={styles.reactBoxAcount}>
    //       <Text style={styles.reactAcount}>Вхід</Text>
    //     </Pressable>
    //     </View>  

    //   }>

    //   <><Text style={styles.reactTitle}>{"Вітаємо вас на \«МАНДРУЙ\»"}</Text><Pressable style={styles.reactContMore}>
    //       <Text style={styles.reactTxtMore}>
    //         Дізнатися більше...
    //       </Text>
    //     </Pressable><Pressable style={styles.reactContSearch}>
    //         <Text style={styles.reactTxtSearch}>
    //           Розпочати пошук
    //         </Text>
    //       </Pressable><Pressable style={styles.reactTags}>
    //         <Image
    //           source={require('@/assets/svg/Group14.svg')}
    //           style={styles.reactTag} />
    //         <Image
    //           source={require('@/assets/svg/Group15.svg')}
    //           style={styles.reactTag} />
    //         <Image
    //           source={require('@/assets/svg/Group16.svg')}
    //           style={styles.reactTag} />
    //       </Pressable></> */}
  
      



const styles = StyleSheet.create({
  container: {
    // zIndex: 1,
    padding: 20,
    alignItems: 'center',
  },
  // overlay: {
  //   position: 'absolute',
  //   // bottom: 40,
  //   left: 0,
  //   right: 0,
  // },
  wrapper: {
    marginTop: -54,
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: "#000",
  }, 

  logo: {
    width: 220,
    height: 60,
    // marginTop: -50,
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

// const styles = StyleSheet.create({
// screen: {
//   flex: 1,
//    backgroundColor: "#A1CEDC"
//   },

//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },

// portraitBg: {
//   width: '100%',
//   height: 250,
// },

//   reactBgd: {
//     height: 250,
//     width: 420,
//     left: 0,
//     position: 'relative',
//     ...Platform.select ({
//       ios: {
//         top: 32
//       },
//       android: {
//         top: 38
//       }
//   })
// },

//   reactLogoBox: {
//     flexDirection: "row",
//     gap: 20,
//     alignItems: "center",
//     top: 100,
//     position: 'absolute',
//     ...Platform.select ({
//       ios: {
//         left: 15
//       },
//       android: {
//         left: 30
//       }
//     })
//   },

//  reactLogo: {
//     height: 70,
//     width: 300,
//   },

//   reactTitle: {
//     fontFamily: "Ukrainian-Bold",
//     textAlign: "center",
//     ...Platform.select ({
//       ios: {
//         fontSize: 38,
//       },
//       android: {
//         fontSize: 45,
//       }
//   }),
//   },

//   reactMenu: {
//     height: 50,
//     width: 50,
//   },

//   reactContMore: {
//     marginTop: 50,
//     borderWidth: 2,
//     borderColor: "#d3d3d3",
    
//     height: 52,
//     borderRadius: 26
//   },
//   reactTxtMore: {
//     fontFamily: "Ukrainian-Regular",
//     textAlign: "center",
//     fontSize: 25,
//     ...Platform.select ({
//       ios: {
//         paddingTop: 6,
//       },
//       android: {
//         paddingTop: 7,
//       }
//   }),
//   },

//   reactContSearch: {
//     marginTop: 30,
//     backgroundColor: "#9370db",
//     height: 52,
//     borderRadius: 26
//   },
  
//   reactTxtSearch: {
//     fontFamily: "Ukrainian-Bold",
//     fontSize: 28,
//     color: "#fff",
//     textAlign: "center",
//     ...Platform.select ({
//       ios: {
//         paddingTop: 7,
//       },
//       android: {
//         paddingTop: 6,
//       }
//   }),
//   },

//   reactBoxAcount: {
//     position: 'absolute',
//     top: 50,
//     right: 14,
//   },
//   reactAcount: {
//     fontFamily: "Ukrainian-Regular",
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: "bold",
//   },

//   reactTags: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//     marginTop: 30
//   },
//   reactTag: {
//     width: 50,
//     height: 50,

//   },

//   hero: {
//   width: '100%',
//   justifyContent: 'flex-end',
// },

// heroOverlay: {
//   padding: 32,
//   backgroundColor: 'rgba(0,0,0,0.35)',
// },

// heroLogo: {
//   width: 220,
//   height: 50,
//   marginBottom: 20,
// },

// heroTitle: {
//   fontFamily: 'Ukrainian-Bold',
//   fontSize: 36,
//   color: '#fff',
//   marginBottom: 20,
// },

// heroButton: {
//   backgroundColor: '#9370db',
//   paddingVertical: 14,
//   borderRadius: 28,
// },

// heroButtonText: {
//   color: '#fff',
//   fontSize: 22,
//   textAlign: 'center',
// },

// });

