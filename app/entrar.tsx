import { StyleSheet, View, Text} from 'react-native';

export default function entrar(){
    return(
        <View style={estilo.root}>
            <Text style={estilo.titulo}>Sobre o Projeto</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20

    },

    titulo: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})