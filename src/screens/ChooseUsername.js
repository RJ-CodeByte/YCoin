import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CustomInput from '../utils/CustomInput';
import CustomButton from '../utils/CustomButton';

export default function ChooseUsername({navigation}) {
  const {height} = useWindowDimensions();
  const [showOkay, setShowOkay] = useState(false);

  const onPresseHandler = () => {
    setShowOkay(true);
    navigation.navigate('Backup');
  };

  return (
    <View style={styles.scrollBody}>
      <Modal
        visible={showOkay}
        onRequestClose={() => setShowOkay(false)}
        transparent
        animationType="fade"
        hardwareAccelerated>
        <TouchableWithoutFeedback onPress={() => setShowOkay(false)}>
          <View style={styles.centeredAlert}>
            <View style={styles.okayAlertContainer}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: 60,
                }}>
                <Image
                  style={[styles.successlogo]}
                  source={require('../../assets/success.png')}
                />
                <Text style={styles.ssText}>Sign Up successful</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.body}>
          <Image
            style={[styles.logo, {height: height * 0.3}]}
            source={require('../../assets/Yhubimage.png')}
          />
          <Text style={styles.heading}>Y HUB</Text>
          <Text style={styles.title}>Username Selection</Text>
          <Text style={styles.subtitle}>
            Now its time to choose a username, think carefully as this is the
            username people will use to send you Y Coin.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              paddingTop: 20,
            }}>
            <CustomInput placeholder="Enter Username" />
          </View>

          <View style={styles.borderline}>
            <View style={styles.line} />
            <Text style={styles.ortext}> OR </Text>
          </View>

          <Text style={styles.chooselist}>Choose from given list:</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Text style={styles.userText_R1}>@jame01</Text>
            <Text style={styles.userText_R1}>@jwilliam007</Text>
            <Text style={styles.userText_R1}>@william236</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Text style={styles.userText_R2}>@james_1</Text>
            <Text style={styles.userText_R2}>@jwilliams12</Text>
            <Text style={styles.userText_R2}>@jamew587</Text>
          </View>
          <View style={styles.button}>
            <CustomButton
              text={'Next'}
              txtsize={18}
              onPress={onPresseHandler}
            />
          </View>
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
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    alignSelf: 'flex-start',
    padding: 10,
    fontFamily: 'Gordita-Regular',
  },
  subtitle: {
    flexDirection: 'row',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#0F0B2D',
    lineHeight: 20,
    alignSelf: 'flex-start',
    alignContent: 'center',
    justifyContent: 'center',
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
    paddingVertical: 30,
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
    fontSize: 20,
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

  chooselist: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#0F0B2D',
    paddingLeft: 8,
    textAlign: 'center',
    alignSelf: 'flex-start',
    fontFamily: 'Gordita-Regular',
  },
  userText_R1: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#0F0B2D',
    padding: 10,
    marginHorizontal: 20,
    alignSelf: 'flex-start',
    fontFamily: 'Gordita-Regular',
  },
  userText_R2: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#0F0B2D',
    padding: 10,
    marginHorizontal: 20,
    alignSelf: 'flex-start',
    fontFamily: 'Gordita-Regular',
  },
  centeredAlert: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  okayAlertContainer: {
    width: 320,
    height: 240,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  successlogo: {
    width: 65,
    height: 65,
  },
  ssText: {
    width: '80%',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    color: '#0F0B2D',
    paddingTop: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
