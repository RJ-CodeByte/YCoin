import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignUp');
    }, 2000);
  }, []);

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor="transparent" />
      <Image
        style={styles.logo}
        source={require('../../assets/Yhubimage.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
