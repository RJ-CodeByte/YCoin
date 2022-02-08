import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../utils/CustomInput';
import CustomButton from '../utils/CustomButton';
import {CheckBox} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SignUpScreen({navigation}) {
  const {height} = useWindowDimensions();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [hideRePass, setHideRePass] = useState(true);
  const [email, setemail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [iserror, setIsError] = useState(false);

  const onCheck = () => {
    if (
      email.length != 0 &&
      lname.length != 0 &&
      password.length != 0 &&
      repassword.length != 0
    ) {
      navigation.navigate('Choose Language');
    } else {
      setIsError(true);
      // console.warn("Plz Enter Email");
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled">
      <View style={styles.body}>
        <Image
          style={[styles.logo, {height: height * 0.3}]}
          source={require('../../assets/Yhubimage.png')}
        />
        <Text style={styles.heading}>Y HUB</Text>
        <Text style={styles.title}>Sign Up</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%', paddingHorizontal: 10}}>
            <CustomInput
              placeholder="First Name"
              value={fname}
              onChangeText={value => {
                setFname(value);
              }}
              error={iserror && fname.length == 0}
            />
            {iserror && fname.length == 0 && (
              <Text style={{color: 'red', fontSize: 12}}>
                Please Enter Your First Name
              </Text>
            )}
          </View>
          <View style={{flex: 1, paddingHorizontal: 10}}>
            <CustomInput
              placeholder="Last Name"
              value={lname}
              onChangeText={value => {
                setLname(value);
              }}
              error={iserror && lname.length == 0}
            />
            {iserror && lname.length == 0 && (
              <Text style={{color: 'red', fontSize: 12}}>
                Please Enter Your Last Name
              </Text>
            )}
          </View>
        </View>

        <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
          <CustomInput
            placeholder="Email Address"
            keyboardType={'email-address'}
            value={email}
            onChangeText={value => {
              setemail(value);
            }}
            error={iserror && email.length == 0}
          />
        </View>
        {iserror && email.length == 0 && (
          <Text
            style={{
              color: 'red',
              alignSelf: 'flex-start',
              justifyContent: 'center',
              paddingHorizontal: 12,
            }}>
            Please Enter Your email id
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
          <Text
            style={{
              color: 'red',
              alignSelf: 'flex-start',
              justifyContent: 'center',
              paddingHorizontal: 12,
            }}>
            Please Enter Your Password
          </Text>
        )}

        <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
          <CustomInput
            placeholder="Re Password"
            secureText={hideRePass ? true : false}
            icon={true}
            iconhide={hideRePass}
            iconPress={() => setHideRePass(!hideRePass)}
            value={repassword}
            onChangeText={value => {
              setRePassword(value);
            }}
            error={iserror && repassword.length == 0}
          />
        </View>
        {iserror && repassword.length == 0 && (
          <Text
            style={{
              color: 'red',
              alignSelf: 'flex-start',
              justifyContent: 'center',
              paddingHorizontal: 12,
            }}>
            Please Confirm Your Password
          </Text>
        )}
        <View style={styles.termscondition}>
          <CheckBox
            activeOpacity={1}
            containerStyle={styles.chekbox}
            center
            title={
              <Text style={styles.text}>
                I agree to the{' '}
                <Text style={styles.link}>Terms and conditions.</Text>
              </Text>
            }
            checkedIcon="check-square"
            checkedColor="#0E0B2C"
            checked={toggleCheckBox}
            onPress={() => setToggleCheckBox(!toggleCheckBox)}
          />
        </View>

        <View style={styles.button}>
          <CustomButton
            text={'Proceed'}
            txtsize={18}
            onPress={onCheck}
            // onPress={() => {
            //   console.log(email);
            //   onCheckEmail
            //   // navigation.navigate('Choose Language');

            // }}
          />
        </View>

        <View style={styles.borderline}>
          <View style={styles.line} />
          <Text style={styles.ortext}> OR </Text>
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 50}}>
          <Text style={styles.signUpWithtext}>Sign up using</Text>
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
        <Text style={styles.signintext}>
          Already Have an account?{' '}
          <Text
            style={styles.link}
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            Sign in
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  logo: {
    width: '90%',
    maxWidth: 100,
    maxHeight: 100,
  },
  termscondition: {
    flexDirection: 'row',
    marginHorizontal: -7,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chekbox: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
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
    fontWeight: '500',
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
    fontWeight: 'bold',
    lineHeight: 50,
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
  signupText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 40,
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
  signUpWithtext: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#0F0B2D',
    paddingLeft: 8,
    textAlign: 'center',
    alignSelf: 'flex-start',
    fontFamily: 'Gordita-Regular',
  },
  signintext: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#0F0B2D',
    textAlign: 'center',
    fontFamily: 'Gordita-Regular',
  },
});

// <FontAwesome5
//   style={{
//     position: 'absolute',
//     top: 15,
//     // bottom:30,
//     left: 300,
//     // left: 390,
//     padding: 10,
//   }}
//   name={hideRePass ? 'eye' : 'eye-slash'}
//   size={20}
//   type="font-awesome"
//   color="gray"
//   onPress={() => setHideRePass(!hideRePass)}
// />
