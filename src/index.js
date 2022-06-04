import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';

export default function Home() {

    const [etanolValue, setEtanolValue] = useState();
    const [gasValue, setGasValue] = useState();

    return (
        <View style={styles.container}>
        
            <TextInput
                style={styles.input}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 45,
        borderWidth: 1,
        margin: 10,
        padding: 17,
        fontSize: 20
    }
});
