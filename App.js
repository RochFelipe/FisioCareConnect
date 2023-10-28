import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Dimensions } from 'react-native';
import 'react-native-sqlite-storage';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');

  const handleLogin = () => {
    // Implemente a lógica de autenticação aqui
  };

  return (
    <View style={styles.container}>
      <View style={styles.userTypeButtons}>
        <Button title="Usuário" onPress={() => setUserType('user')} />
        <Button title="Fisioterapeuta" onPress={() => setUserType('fisioterapeuta')} />
      </View>

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Seu email"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Sua senha"
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  userTypeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Dimensions.get('window').height * 0.03, // 3% of the screen height
  },
  label: {
    fontSize: Dimensions.get('window').width * 0.05, // 5% of the screen width
    marginBottom: Dimensions.get('window').height * 0.015, // 1.5% of the screen height
  },
  input: {
    height: Dimensions.get('window').height * 0.06, // 6% of the screen height
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: Dimensions.get('window').width * 0.02, // 2% of the screen width
    marginBottom: Dimensions.get('window').height * 0.03, // 3% of the screen height
  },
});
