import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

export default function Home() {

    const [etanolValue, setEtanolValue] = useState('');
    const [gasValue, setGasValue] = useState('');


    function valorEtanol(price) {

        if(price.length > 0) {
            setEtanolValue('O valor do etanol na sua cidade é: R$ ' + price)
        }else{
            setEtanolValue('')
        }
    }

    function valorGasolina(price2) {
        if(price2.length > 0) {
            setGasValue('O valor da gasolina na sua cidade é: R$ ' + price2)
        }else{
            setGasValue('')
        }
    }

    return (

        <View style={styles.container}>
        
            <TextInput
                style={styles.input}
                placeholder="Qual o valor do Etanol:"
                onChangeText={ (price) => valorEtanol(price) }
                keyboardType={'numbers-and-punctuation'}
            />

            <TextInput
                style={styles.input}
                placeholder="Qual o valor da Gasolina:"
                onChangeText={ (price2) => valorGasolina(price2) }
                keyboardType={'numbers-and-punctuation'}
            />

            <Text style={styles.texto}>{etanolValue}</Text>
            <Text style={styles.texto}>{gasValue}</Text> 
            <Text style={styles.texto}>{}</Text>

            <Button
                title="Calcular"
            />

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 35,
        borderWidth: 1,
        margin: 20,
        padding: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    texto: {
        textAlign: 'center',
        fontSize: 15,
        margin: 5
    }
});
