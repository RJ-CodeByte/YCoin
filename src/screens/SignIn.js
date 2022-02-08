import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CustomInput from '../utils/CustomInput';
import CustomButton from '../utils/CustomButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SignInScreen({navigation}) {
  const {height} = useWindowDimensions();
  const [hidePass, setHidePass] = useState(true);
  const [uname, setuname] = useState('');
  const [password, setPassword] = useState('');
  const [iserror, setIsError] = useState(false);


  const onCheck = () => {
    if (
      uname.length != 0 &&
      password.length != 0
    ) {
      navigation.navigate('SignIn 2');
      // navigation.navigate('Choose Language');
    } else {
      setIsError(true);
      // console.warn("Plz Enter Email");
    }
  };

  return (
    <View style={styles.scrollBody}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.body}>
          <Image
            style={[styles.logo, {height: height * 0.3}]}
            source={require('../../assets/Yhubimage.png')}
          />
          <Text style={styles.heading}>Y HUB</Text>
          <Text style={styles.title}>Sign In</Text>
          <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
            <CustomInput
              placeholder="Username or Email Address"
              keyboardType={'email-address'}
              value={uname}
              onChangeText={value => {
                setuname(value);
              }}
              error={iserror && uname.length == 0}
            />
          </View>
             {iserror && uname.length == 0 && (
              <Text style={{color: 'red', fontSize: 15,alignSelf:'flex-start',paddingHorizontal: 10}}>
                Please Enter Username or email id
              </Text>
            )}
          <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
            <CustomInput
              placeholder="Password"
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

          <View style={styles.forgetpassword}>
            <Text
              style={styles.text}
              onPress={() => {
                navigation.navigate('forget password');
              }}>
              Forgot password?
            </Text>
          </View>

          <View style={styles.button}>
            <CustomButton
              text={'Proceed'}
              txtsize={18}
              onPress={onCheck}
            />
          </View>

          <View style={styles.borderline}>
            <View style={styles.line} />
            <Text style={styles.ortext}> OR </Text>
          </View>

          <View style={{paddingHorizontal: 20, marginTop: 50}}>
            <Text style={styles.signinWithtext}>Sign In with</Text>
            <View style={{flexDirection: 'row', paddingBottom: 30}}>
              <TouchableOpacity style={styles.fb} onPress={() => {}}>
                <View style={styles.fbView}>
                  <FontAwesome5 name="facebook" size={30} color={'#0F0B2D'} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.twitter} onPress={() => {}}>
                <View style={styles.twitterView}>
                  <FontAwesome5 name="twitter" size={30} color={'#0F0B2D'} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.google} onPress={() => {}}>
                <View style={styles.googleView}>
                  <FontAwesome5 name="google" size={30} color={'#0F0B2D'} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={[styles.link, {paddingTop: 10}]}
            onPress={() => {
              // navigation.navigate('SignIn');
            }}>
            Recover your account
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollBody: {
    backgroundColor: '#FFFFFF',
  },
  body: {
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: '90%',
    maxWidth: 100,
    maxHeight: 100,
  },
  forgetpassword: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  link: {
    color: '#03afc5',
    textDecorationLine: 'underline',
  },
  text: {
    marginTop: 1,
    fontStyle: 'normal',
    color: '#000000',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
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
  input: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    alignSelf: 'flex-start',
    padding: 10,
    fontFamily: 'Gordita-Regular',
  },
  button: {
    width: '95%',
    margin: 30,
  },
  borderline: {
    width: '100%',
    justifyContent: 'center',
  },
  line: {
    width: '100%',
    height: 10,
    position: 'absolute',
    backgroundColor: '#F1F1F1',
  },
  ortext: {
    fontStyle: 'normal',
    backgroundColor: '#ffffff',
    color: '#0F0B2D',
    fontFamily: 'Gordita-Regular',
    fontSize: 14,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    fontFamily: 'Gordita-Regular',
  },
  fbView: {
    flex: 1,
    backgroundColor: '#ffff',
    borderColor: '#0F0B2D80',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  twitterView: {
    flex: 1,
    backgroundColor: '#ffff',
    borderColor: '#0F0B2D80',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleView: {
    flex: 1,
    backgroundColor: '#ffff',
    borderColor: '#0F0B2D80',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fb: {
    padding: 10,
  },
  twitter: {
    padding: 10,
  },
  google: {
    padding: 10,
  },
  signinWithtext: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#0F0B2D',
    paddingLeft: 8,
    textAlign: 'center',
    alignSelf: 'flex-start',
    fontFamily: 'Gordita-Regular',
  },
});
