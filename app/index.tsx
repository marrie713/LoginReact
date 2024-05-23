import { Link } from "expo-router"
import { useState } from "react"
import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import { Icon, Input } from 'react-native-elements'

export default function App(){

    const [passwordVisible, SetPasswordVisible] = useState(true)
    const [validacao, Setvalidacao] = useState()

    return(
        <View style={{alignItems: 'center', marginTop: 250}}>
            <View style={estilo.container}>
                <Image style={estilo.image}
                source={require('../assets/images/Sesi-SP.jpg')}
                resizeMode="stretch"/>

                <Input style={estilo.input}
                placeholder="Email" 
                errorStyle={{ color: 'red' }}
                errorMessage='Insira um email válido!'/>

                <Input style={estilo.input}
                placeholder="Senha" 
                
                errorStyle={{ color: 'red' }}
                errorMessage= { validacao ? 
                        estilo.input 
                        : estilo.inputErro
                        'Insira uma senha válida!'}
                    
                secureTextEntry={passwordVisible}
                rightIcon={
                    passwordVisible ?
                    <Icon
                    name="visibility"
                    type="material"
                    size={22}
                    onPress={()=> SetPasswordVisible(!passwordVisible)}
                    />
                    :
                    <Icon
                    name="visibility-off"
                    type="material"
                    size={22}
                    onPress={()=> SetPasswordVisible(!passwordVisible)}
                    />

                } />
                

            <View style={{ gap: 20}}>
                <Link href={'cadastrar'} asChild>
                    <Pressable style={{alignItems: 'center'}}>
                        <Text>Cadastrar</Text>
                    </Pressable>
                </Link>

                <Link href={'entrar'} asChild>
                    <Pressable style={estilo.link}>
                        <Text style={{color: '#fff'}}>Entrar</Text>
                    </Pressable>
                </Link>
            </View>
            </View>
        </View>
)}

const estilo = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        height: 450,
        width: 350,
        borderRadius: 30,

        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        backgroundColor: 'white'
    },

    image:{
        height: 60,
        width: 200,
        borderRadius: 10
    },

    input: {

        fontSize: 20,
        height: 30,
        borderRadius: 20,
        padding: 10
        
        
    },

    inputErro: {
        fontSize: 20,
        height: 30,
        borderRadius: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: 'red'
    },

    link:{
        backgroundColor: '#d90429', 
        borderRadius: 20,
        height: 40,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    }
})