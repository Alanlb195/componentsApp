import { Modal, View } from 'react-native'
import { Button, CustomView, Title } from '../../components'
import { useState } from 'react'

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (

        <CustomView margin>
            <Title text={'ModalScreen'} safe />


            <Button
                text='Abrir Modal'
                onPress={() => setIsVisible(true)}
            />

            <Modal
                visible={isVisible}
                animationType='slide'
            >

                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                    }}>

                    <CustomView
                        margin
                        style={{ flex: 1 }}
                    >
                        <Title safe text='Modal content'></Title>
                    </CustomView>

                    <Button
                        text='Cerrar Modal'
                        onPress={() => setIsVisible(false)}
                        styles={{
                            height: 60,
                            borderRadius: 0,
                        }}
                    />


                </View>

            </Modal>
        </CustomView>
    )
}
