import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/Theme'
import { PropsWithChildren, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
  margin?: boolean;
}

export const CustomView = ({ style, margin = false, children }: Props) => {
  const { colors } = useContext(ThemeContext);
  return (

    <View style={
      [
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        { backgroundColor: colors.background },
        style
      ]
    }>
      {children}
    </View>
  )
}
