import { Alert, View } from 'react-native';
import { Button, CustomView, Title } from '../../components'
import { showPrompt } from '../../../config';

export const AlertScreen = () => {

    const createTwoButtonAlert = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    }

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
        ],
        );

    const onShowPrompt = () => {


        showPrompt({
            title: 'Lorem ipsum dolor sit amet consectetur',
            message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum animi recusandae',
            callbackOrButtons: [
                { text: 'Ok', onPress: () => console.log('ok') }
            ],
            placeholder: 'placeholder'
        })

        // Codigo nativo
        // Alert.prompt(
        //     'Correo electronico',
        //     'Introduce tu email.',
        //     (valor: string) => console.log({ valor }),
        //     'plain-text',
        //     'Email',
        //     'email-address'
        // )
    }


    return (
        <CustomView margin>

            <Title style={{ marginBottom: 20 }} safe={true} text='Alerts screen'></Title>

            <Button
                text='Alerta - 2 Botones'
                onPress={createTwoButtonAlert}
            />

            <View style={{ marginVertical: 10 }} />

            <Button
                text='Alerta - 3 Botones'
                onPress={createThreeButtonAlert}
            />

            <View style={{ marginVertical: 10 }} />


            <Button
                text='Prompt - Input'
                onPress={onShowPrompt}
            />

        </CustomView>
    )
}
