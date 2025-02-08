import { Text, View } from 'react-native'
import { Button, Card, CustomView, Title } from '../../components'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const ChangeThemeScreen = () => {

    const { setTheme, currentTheme, colors } = useContext(ThemeContext);

    return (
        <CustomView margin>

            <Title text={`Change theme: ${currentTheme}`} safe></Title>

            <Button
                text='Luxe Light'
                onPress={() => setTheme('luxe')}
            />

            <View style={{ marginTop: 10 }} />

            <Button
                text='Noir Dark'
                onPress={() => setTheme('noir')}
            />

            <View style={{ marginTop: 10 }} />

            <Button
                text='Royal Blue'
                onPress={() => setTheme('royal')}
            />

            <View style={{ marginTop: 10 }} />

            <Button
                text='Crimson Velvet'
                onPress={() => setTheme('crimson')}
            />

            <View style={{ marginTop: 20 }} />



            <Card>
                <Text
                    style={{
                        color: colors.text
                    }}
                >{JSON.stringify(colors, null, 2)}</Text>
            </Card>


        </CustomView>
    )
}
