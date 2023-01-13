import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { ReactNode, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Provider } from 'react-redux';
import { useAppDispatch, useAppSelector } from './src/hooks/redux';
import { getProducts, logout, signIn } from './src/store/reducers/ActionCreators';
import { onChangeEmail, onChangePassword } from './src/store/reducers/AuthSlice';
import { setupStore } from './src/store/store';

function App() {
  // const { product, isLoading, error } = useAppSelector((state) => state.productReducer);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  return (
    <View style={styles.container}>
      {/* {isLoading && <Text>Идет загрузка...</Text>}
      {error && <Text>{error}</Text>}
      <Text>{JSON.stringify(product, null, 2)}</Text>
      <StatusBar style="auto" /> */}
      <UserForm />
    </View>
  );
}

const UserForm = () => {
  const { email, password, data, isLoading, error } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const onChangeEmailTextHandler = (emailText: string) => {
    dispatch(onChangeEmail(emailText));
  };

  const onChangePasswordTextHandler = (passwordText: string) => {
    dispatch(onChangePassword(passwordText));
  };

  const handleSubmit = () => {
    dispatch(signIn({ email, password }));
  };

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <View>
      {isLoading && <Text>Идет загрузка...</Text>}
      {error && <Text>{error}</Text>}
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={onChangeEmailTextHandler}
        textContentType="emailAddress"
        autoComplete="email"
        autoFocus={true}
        autoCapitalize="none"
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={onChangePasswordTextHandler}
        textContentType="password"
        secureTextEntry={true}
      />
      <Button title="Log In" onPress={handleSubmit} />
      <Button title="Log Out" onPress={logoutHandler} />

      {data.refreshToken ? <Text>Hello! This is my shop! Here is your id {data.refreshToken }</Text> : <Text>Войдите в систему {data.refreshToken}</Text>}
    </View>
  );
};

export default () => {
  return (
    <Provider store={setupStore()}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
