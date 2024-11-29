import React from 'react';
import { View, Button, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handleLogout = () => {
        // Aquí puedes hacer la lógica de logout, por ejemplo, borrar el token
        navigation.navigate('Signin');
    };

    return (
        <View>
        <Text>Welcome to Home!</Text>
        <Button title="Logout" onPress={handleLogout} />
        </View>
    );
    };

export default HomeScreen;
