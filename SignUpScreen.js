import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import api from './api'; // Asegúrate de importar el archivo api.js

const SignupScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        try {
        const response = await api.post('signup/', { username, password });
        setMessage('User created successfully!');
        console.log(response.data);
        // Redirigir a la pantalla de Login después del registro exitoso
        navigation.navigate('Signin');
        } catch (error) {
        console.error(error);
        setMessage('Error: Unable to register');
        }
    };

    return (
        <View style={styles.container}>
        <Text>Signup</Text>
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        <Button title="Sign Up" onPress={handleSignup} />
        {message && <Text>{message}</Text>}
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
});

export default SignupScreen;
