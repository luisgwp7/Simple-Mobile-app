import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import api from './api'; // Asegúrate de importar el archivo api.js

const SigninScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignin = async () => {
    try {
      const response = await api.post('signin/', { username, password });
      setMessage('Login successful!');
      console.log(response.data);
      // Guardar token o datos de sesión si es necesario
      // Navegar a la pantalla principal después del inicio de sesión exitoso
      navigation.navigate('Home');
    } catch (error) {
      console.error(error.response ? error.response.data : error);
      setMessage('Error: Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Signin</Text>
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
      <Button title="Sign In" onPress={handleSignin} />
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

export default SigninScreen;
