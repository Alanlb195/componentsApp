import { useContext, useRef } from 'react';
import { Animated, PanResponder, SafeAreaView, StyleSheet, } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components';

export const Animation102Screen = () => {
  const { colors } = useContext(ThemeContext);


  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ], {
      useNativeDriver: false
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero
      ).start();
    },
  });


  return (
    <CustomView>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[pan.getLayout(), styles.box, {
              backgroundColor: colors.text
            }]}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </CustomView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
});