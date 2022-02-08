import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CustomInput from '../utils/CustomInput';
import CustomButton from '../utils/CustomButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ResetPasswordScreen({navigation}) {
  const {height} = useWindowDimensions();
  const [hidePass, setHidePass] = useState(true);
  const [hideRePass, setHideRePass] = useState(true);
  const [password, setPassword] = useState('');
  const [Repassword, setRePassword] = useState('');
  const [iserror, setIsError] = useState(false);

  const onCheck = () => {
    if (
      password.length != 0 &&
      Repassword.length != 0
    ) {
      navigation.navigate('SignIn 2');
    } else {
      setIsError(true);
      // console.warn("Plz Enter Email");
    }
  };
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}  keyboardShouldPersistTaps='handled'> 
      <View style={styles.body}>
        <Image
          style={[styles.logo, {height: height * 0.3}]}
          source={require('../../assets/Yhubimage.png')}
        />
        <Text style={styles.heading}>Y HUB</Text>
        <Text style={styles.title}>Reset password</Text>
        <Text style={styles.subtitle}>Please enter your new password</Text>

        <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
          <CustomInput
            //  returnKeyType='next'
            placeholder="Create new Password"
            secureText={hidePass ? true : false}
            icon={true}
            iconhide={hidePass}
            iconPress={() => setHidePass(!hidePass)}
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
            error={iserror && password.length == 0}
          />
        </View>
        {iserror && password.length == 0 && (
              <Text style={{color: 'red', fontSize: 15,alignSelf:'flex-start',paddingHorizontal: 10}}>
                Please Enter Password
              </Text>
            )}
        <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
          <CustomInput            
            placeholder="Re Enter Password"
            secureText={hideRePass  ? true : false}
            icon={true}
            iconhide={hideRePass}
            iconPress={() => setHideRePass(!hideRePass)}
            value={Repassword}
            onChangeText={value => {
              setRePassword(value);
            }}
            error={iserror && Repassword.length == 0}
          />
        </View>
        {iserror && Repassword.length == 0 && (
              <Text style={{color: 'red', fontSize: 15,alignSelf:'flex-start',paddingHorizontal: 10}}>
                Please Re Enter Password
              </Text>
            )}
        <View style={styles.button}>
          <CustomButton
            text={'Submit'}
            txtsize={18}
            onPress={onCheck}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 80,
  },
  logo: {
    width: '90%',
    maxWidth: 100,
    maxHeight: 100,
  },
  heading: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 25.65,
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Gordita-Regular',
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#0F0B2D',
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    fontFamily: 'Gordita-Regular',
  },
  subtitle:{
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#0F0B2D',
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal:10,
    paddingBottom:40,
    fontFamily: 'Gordita-Regular',
  },
  button: {
    width: '95%',
    margin: 30,
  },
});
