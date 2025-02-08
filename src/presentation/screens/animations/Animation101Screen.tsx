import { Animated, Easing, StyleSheet, View } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation';
import { Button, CustomView } from '../../components';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Animation101Screen = () => {
  const { colors } = useContext(ThemeContext);
  const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = useAnimation();

  return (
    <CustomView style={styles.container}>

      <Animated.View
        style={
          [
            styles.purpleBox,
            {
              backgroundColor: colors.text,
              opacity: animatedOpacity,
              transform: [{
                translateY: animatedTop
              }]
            }
          ]}
      />

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
      }}>
        <Button
          text='Fade In'
          onPress={() => {
            fadeIn({ duration: 1000 });
            startMovingTopPosition({
              initialPosition: -100,
              duration: 750,
              easing: Easing.elastic(1)
            });
          }}
          styles={{ marginTop: 10 }}>
        </Button>

        <Button
          text='FadeOut'
          onPress={() => fadeOut({})}
          styles={{ marginTop: 10 }}>
        </Button>

      </View>

    </CustomView>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    width: 120,
    height: 120,
    borderRadius: 4,
  }
})
