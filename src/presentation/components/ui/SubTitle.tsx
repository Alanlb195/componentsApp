import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../../../config';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props {
    text: string;
    safe?: boolean;
    backgroundColor: string;
}

export const SubTitle = ({ backgroundColor, text, safe = false }: Props) => {
    const { colors } = useContext(ThemeContext);

    const { top } = useSafeAreaInsets();
    return (
        <Text style={{
            ...globalStyles.subTitle,
            color: colors.text,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            backgroundColor: backgroundColor || colors.background
        }} >
            {text}
        </Text>
    )
}
