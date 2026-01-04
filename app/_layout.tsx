import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react'; 
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/use-color-scheme';
// import { Dimensions } from 'react-native';

// Утримуємо сплеш-скрін до завантаження
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  const colorScheme = useColorScheme();
  
  const [fontsLoaded, fontError] = Font.useFonts({
    'Ukrainian-Medium': require('../assets/fonts/e-Ukraine-Medium.otf'),
    'Ukrainian-Regular': require('../assets/fonts/e-Ukraine-Regular.otf'),
    'Ukrainian-Bold': require('../assets/fonts/e-Ukraine-Bold.otf'), 
  });

  // const [ dimensions, setDimension ] = useState(
  //   Dimensions.get("window").width
  // );

  // Використовуємо useEffect для підвантаження шрифтів
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Поки шрифти вантажаться, не показуємо інтерфейс
  if (!fontsLoaded && !fontError) {
    return null;
  };

  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get("window").width;
  //     console.log("width", width);
  //     setDimension(width);
  //   };
  //     Dimensions.addEventListener("change", onChange);
  //     return () => {
  //       Dimensions.removeEventListener("change", onChange);
  //     };
  //   },[] );


  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

