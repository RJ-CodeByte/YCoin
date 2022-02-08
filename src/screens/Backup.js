import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Touchable,
  TouchableHighlight,
} from 'react-native';
import React, {useEffect,useState} from 'react';
import CustomButton from '../utils/CustomButton';

export default function Backup({navigation}) {
  const {height} = useWindowDimensions();
    // const data=['chocolate', 'chocolate', 'chocolate', 'chocolate'];
  
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

        <View style={styles.borderline}>
          <View style={styles.line} />
        </View>

        <Text style={styles.title}>Nice Username James!</Text>
        <Text style={styles.subtitle}>
          Now, these are your backup keys. If you ever need to import your
          wallet onto a new device you will need these! keep these safe and
          don't show them to anyone as they can get access to your account if
          you do.
        </Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight>
          <View style={styles.box}>
            <Text style={styles.text}> {'\u0031'}. Chocolate</Text>
          </View>
          </TouchableHighlight>
          <View style={styles.box}>
            <Text style={styles.text}>{'\u0032'}. Potato</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>3. Brocoli</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.box}>
            <Text style={styles.text}>{'\u0034'}. Chips</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>5. Cookie</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>6. Auto</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.box}>
            <Text style={styles.text}>7. New York</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>8. Chrome</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>9. Mugs</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.box}>
            <Text style={styles.text}>10. Cars</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>11. Shop</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>13. Classic</Text>
          </View>
        </View>

        <View style={{flexDirection:'row',alignSelf: 'flex-start', paddingHorizontal:10,paddingTop:10,}}>
        <Text style={styles.star}>*</Text>
        <Text style={styles.notice}>
           Please note these crypto key phrases somewhere and keep it safe.
        </Text>
        </View>

        <View style={styles.button}>
          <CustomButton
            text={'Continue'}
            txtsize={18}
            onPress={() => {
                navigation.navigate('BackupRecovery');
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
    paddingTop: 30,
  },
  logo: {
    width: '90%',
    maxWidth: 100,
    maxHeight: 100,
  },
  box: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#f1f1f1',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    margin: 8,
  },
  text: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Gordita-Regular',
  },
  heading: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 25.65,
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Gordita-Regular',
    marginBottom: 10,
  },
  borderline: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  line: {
    width: '100%',
    height: 10,
    position: 'absolute',
    backgroundColor: '#F1F1F1',
  },
  title: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#0F0B2D',
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    fontFamily: 'Gordita-Regular',
  },
  subtitle: {
    width: '90%',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    color: '#0F0B2D',
    alignSelf: 'flex-start',
    padding: 10,
    marginBottom: 10,
    fontFamily: 'Gordita-Regular',
  },
  star:{
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#0F0B2D',
    padding:5,
    alignSelf: 'flex-start',
    marginTop:-10,  
  },
  notice:{
    width: '95%',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    color: '#0F0B2D',
    alignSelf: 'flex-start',
    justifyContent:'center',
    alignItems:'center',
    fontFamily: 'Gordita-Regular',
  },
  button: {
    width: '95%',
    margin: 30,
  },
});
