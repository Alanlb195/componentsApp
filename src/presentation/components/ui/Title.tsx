import { StyleProp, Text, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Title = ({ text, safe, white = false, style }: Props) => {
  const { colors } = useContext(ThemeContext);

  const { top } = useSafeAreaInsets();
  return (
    <Text
      style={
        [{
          ...globalStyles.title,
          marginTop: safe ? top : 0,
          marginBottom: 10,
          color: white ? 'white' : colors.text,
        },
          style
        ]
      }>
      {text}
    </Text>
  )
}
