import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native'
import { Card, CustomView, Title } from '../../components'
import { globalStyles } from '../../../config'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const TextInputScreen = () => {
  const { colors } = useContext( ThemeContext );

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  return (


    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

      <ScrollView>
        <CustomView margin>
          <Title safe={true} text='Text Input Screen' />

          <Card>

            <TextInput
              style={{...globalStyles.input,color: colors.text, backgroundColor: colors.background}}
              placeholder='Nombre completo'
              placeholderTextColor={ colors.text }
              autoCapitalize='words'
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, name: value })}
            />

            <TextInput
              style={{...globalStyles.input, color: colors.text, backgroundColor: colors.background}}
              placeholder='Email'
              placeholderTextColor={ colors.text }
              autoCapitalize='none'
              keyboardType='email-address'
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, email: value })}
            />

            <TextInput
              style={{...globalStyles.input, color: colors.text, backgroundColor: colors.background}}
              placeholder='Tel'
              placeholderTextColor={ colors.text }
              autoCapitalize='none'
              keyboardType='phone-pad'
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, phone: value })}
            />

          </Card>


          <View style={{ height: 20 }} />

          <Card>

            <Text style={{color: colors.text}}> {JSON.stringify(form, null, 2)} </Text>
            <Text style={{color: colors.text}}> {JSON.stringify(form, null, 2)} </Text>
            <Text style={{color: colors.text}}> {JSON.stringify(form, null, 2)} </Text>
            <Text style={{color: colors.text}}> {JSON.stringify(form, null, 2)} </Text>
            <Text style={{color: colors.text}}> {JSON.stringify(form, null, 2)} </Text>
            <Text style={{color: colors.text}}> {JSON.stringify(form, null, 2)} </Text>
            <Text style={{color: colors.text}}> {JSON.stringify(form, null, 2)} </Text>
            <Text style={{color: colors.text}}> {JSON.stringify(form, null, 2)} </Text>
            <Text style={{color: colors.text}}> {JSON.stringify(form, null, 2)} </Text>
            <Text style={{color: colors.text}}> {JSON.stringify(form, null, 2)} </Text>
          </Card>

          <View style={{ height: 20 }} />

          <Card>
            <TextInput
              style={{...globalStyles.input, color: colors.text, backgroundColor: colors.background}}
              placeholder='Nombre completo'
              placeholderTextColor={ colors.text }
              autoCapitalize='words'
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, name: value })}
            />
          </Card>


          <View style={{ height: 20 }} />

        </CustomView>
      </ScrollView>


    </KeyboardAvoidingView>


  )
}
