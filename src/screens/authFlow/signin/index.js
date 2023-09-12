import React, {useState} from 'react';
import { totalSize } from 'react-native-dimension';
import { Logos,TextInputs, Buttons, ScrollViews, Wrapper, Spacer } from '../../../components';
import {routes } from '../../../services';
import { styles } from './style';
import Text from '../../../components/text';

function Signin({navigation}) {
  //State 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //validation Function
  const handleLogin = () => {
    if (username === 'Zia' && password === 'Zia1234') {
      // Navigate to the map screen.
      navigation.navigate(routes.app);
    } else {
      setError('Invalid credentials');
    }
  };
  return (
    <Wrapper isMain background2>
      <ScrollViews.KeyboardAvoiding>
        <Spacer isDoubleBase />
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
            <Spacer isTiny/>
             <Text  style={styles.text}>{error}</Text>
        </Wrapper>
        <Spacer isBasic />
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}
export default Signin;
