import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CustomInput from '../utils/CustomInput';
import CustomButton from '../utils/CustomButton';


export default function ForgetPasswordScreen({navigation}) {
  const {height} = useWindowDimensions();

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
        <Text style={styles.title}>Forget password</Text>
        <Text style={styles.subtitle}>
          Please enter your backup phrases to reset your password
        </Text>

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 10}}>
            <CustomInput placeholder="First" />
          </View>
          <View style={{flex: 1, padding: 10}}>
            <CustomInput placeholder="Second" />
          </View>
          <View style={{flex: 1, padding: 10}}>
            <CustomInput placeholder="Third" />
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 10}}>
            <CustomInput placeholder="First" />
          </View>
          <View style={{flex: 1, padding: 10}}>
            <CustomInput placeholder="Second" />
          </View>
          <View style={{flex: 1, padding: 10}}>
            <CustomInput placeholder="Third" />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 10}}>
            <CustomInput placeholder="First"/>
          </View>
          <View style={{flex: 1, padding: 10}}>
            <CustomInput placeholder="Second" />
          </View>
          <View style={{flex: 1, padding: 10}}>
            <CustomInput placeholder="Third" />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 10}}>
            <CustomInput placeholder="First" />
          </View>
          <View style={{flex: 1, padding: 10}}>
            <CustomInput placeholder="Second" />
          </View>
          <View style={{flex: 1, padding: 10}}>
            <CustomInput placeholder="Third" />
          </View>
        </View>

        <View style={styles.button}>
          <CustomButton
            text={'Submit'}
            txtsize={18}
            onPress={() => {
              navigation.navigate('reset password');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
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
    color: '#0F0B2D',
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    fontFamily: 'Gordita-Regular',
  },
  subtitle: {
    width: '80%',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#0F0B2D',
    alignSelf: 'flex-start',
    padding: 10,
    marginBottom: 10,
    fontFamily: 'Gordita-Regular',
  },
  button: {
    width: '95%',
    margin: 30,
  },
});
