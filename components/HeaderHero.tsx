import { Image, ImageBackground, View } from 'react-native';
import { HeaderContent } from './HeaderContent';

export function HeaderHero({
  isLandscape,
  screenHeight,
}: {
  isLandscape: boolean;
  screenHeight: number;
}) {
  if (isLandscape) {
    return (
      <ImageBackground
        source={require('@/assets/images/synevir.jpg')}
        style={{ height: screenHeight, width: '100%' }}
        resizeMode="cover"
      >
        <HeaderContent overlay />
      </ImageBackground>
    );
  }

  return (
    <View>
      <Image
        source={require('@/assets/images/synevir.jpg')}
        style={{ height: 260, width: '100%' }}
        resizeMode="cover"
      />
      <HeaderContent />
    </View>
  );
}
