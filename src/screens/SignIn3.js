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
  
  export default function SignInScreen3({navigation}) {
    const {height} = useWindowDimensions();
  
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
  
            
  
              <Text style={styles.welcometext}>Welcome John !</Text>
                <TouchableOpacity style={styles.twitter} onPress={() => {}}>
                    <FontAwesome5 name="twitter" style={{paddingHorizontal:10}}  size={30} color={'#0F0B2D'} />
                    <Text style={styles.text}>Twitter</Text>
                </TouchableOpacity>
  


  
                <TouchableOpacity style={styles.google} onPress={() => {}}>
                    <FontAwesome5 name="google" style={{paddingHorizontal:10}} size={30} color={'#0F0B2D'} />
                    <Text style={styles.text}>Google</Text>
                </TouchableOpacity>

        <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',justifyContent:'center'}}>
            <Text
              style={[styles.link,{ marginTop: 100} ]} //{ marginTop: 200}
              onPress={() => {
                // navigation.navigate('SignIn');
              }}>
              Recover your account
            </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    scrollBody: {
        flex:1,
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
    title: {
      fontSize: 36,
      fontStyle: 'normal',
      fontWeight: '700',
      color: '#000000',
      textAlign: 'center',
      alignSelf: 'flex-start',
      padding: 10,
      marginHorizontal:10,
      fontFamily: 'Gordita-Regular',
    },
    welcometext: {
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: '700',
      color: '#000000',
      textAlign: 'center',
      alignSelf: 'flex-start',
      paddingLeft: 20,
      fontFamily: 'Gordita-Regular',
    },
    twitter: {
      width:'90%',
      flexDirection:'row',
      backgroundColor: '#FFFF',
      borderColor: '#0F0B2D80',
      borderWidth: 2,
      borderRadius: 10,
      padding:10,
      margin:30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    google: {
        width:'90%',
        flexDirection:'row',
        backgroundColor: '#FFFF',
        borderColor: '#0F0B2D80',
        borderWidth: 2,
        borderRadius: 10,
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
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
  