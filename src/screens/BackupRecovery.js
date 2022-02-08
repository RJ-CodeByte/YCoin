import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../utils/CustomButton';
import CustomInput from '../utils/CustomInput';

export default function BackupRecovery({navigation}) {
  const {height} = useWindowDimensions();
  const [showOkay, setShowOkay] = useState(false);
  // const data=['chocolate', 'chocolate', 'chocolate', 'chocolate'];

  const onPresseHandler = () => {
    setShowOkay(true);
  };

  return (
    <View style={styles.scrollBody}>
      <Modal
        visible={showOkay}
        onRequestClose={() => setShowOkay(false)}
        transparent
        animationType='fade'
        hardwareAccelerated
        >
        <View style={styles.centeredAlert}>
          <View style={styles.okayAlertContainer}>
            <Text style={styles.okayText}>
              Your Y Coin wallet is backed up. Sign In again to continue.
            </Text>
            <View
              style={{
                alignItems: 'flex-end',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 10,
                marginRight: 20,
              }}>
              <CustomButton
                style={{width: 100, padding: 10}}
                text="Okay"
                onPress={() => {
                    setShowOkay(false);
                  navigation.navigate('SignIn 2');
                }}
                txtsize={16}
              />
            </View>
          </View>
        </View>
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

          <View style={styles.borderline}>
            <View style={styles.line} />
          </View>

          <Text style={styles.title}>You're Almost Done!</Text>
          <Text style={styles.subtitle}>
            I need to check you actually saved your key so you never have to go
            through the pain of loosing your{'   '} Y Coin.
          </Text>

          <Text style={styles.subtitle}>
            Please re-enter parts of the backup key below
          </Text>

          <View style={{marginTop: -10}}>
            <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
              <CustomInput placeholder="1st key phrase" />
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
              <CustomInput placeholder="6th key phrase" />
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
              <CustomInput placeholder="12th key phrase" />
            </View>
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
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body: {
    alignItems: 'center',
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
  star: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#0F0B2D',
    padding: 5,
    alignSelf: 'flex-start',
    marginTop: -10,
  },
  notice: {
    width: '95%',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    color: '#0F0B2D',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Gordita-Regular',
  },
  button: {
    width: '95%',
    margin: 30,
  },
  centeredAlert: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  okayAlertContainer: {
    width: 320,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  okayText: {
    width: '80%',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    color: '#0F0B2D',
    paddingTop: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
