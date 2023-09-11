import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import { totalSize } from 'react-native-dimension';
import { Logos, Toasts, Icons, TextInputs, Buttons, ScrollViews, Wrapper, Spacer } from '../../../components';
import {routes } from '../../../services';

function Signin({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'zia' && password === 'zia123') {
      // Navigate to the map screen.
      navigation.navigate(routes.app);
    } else {
      setError('Invalid credentials');
    }
  };
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Spacer isBasic />
        <Wrapper alignItemsCenter>
          <Logos.Primary
            size={totalSize(25)}
          />
          <Spacer isDoubleBase />
        </Wrapper>
        <Spacer isBasic />
        <Wrapper marginHorizontalBase>
          <TextInputs.Colored
            placeholder="User Name"
            iconName="email"
            value={username}
            title={"USER NAME"}
        onChangeText={(text) => setUsername(text)}
          />
          <Spacer isBasic />
          <TextInputs.Colored
            placeholder="User Password"
            title={"USER PASSWORD"}
            iconName="lock"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry/>
          <Spacer isDoubleBase />
          <Buttons.Colored
          onPress={handleLogin}
            text="Log In"
            iconName="login"
            iconType="material-community"/>
             <Text style={{ color: 'red' }}>{error}</Text>
        </Wrapper>
        <Spacer isBasic />
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

export default Signin;
