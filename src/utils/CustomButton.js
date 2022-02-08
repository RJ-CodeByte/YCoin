import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { color } from 'react-native-elements/dist/helpers';

const CustomButton = (props) => {

  const { onPress,
    text,
    type = 'PRIMARY',
    bgColor,
    fgColor,
    disable,
    txtsize,
    } = props
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{...props.ripple}}
      style={[
        styles.container,
        {...props.style},
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
        disable ? {backgroundColor: 'grey'} : {},
      ]}
      disabled={disable}
      type={type}>
      <Text
        style={[
          styles.text,
          {fontSize:txtsize},
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#0E0B2C',
  },
  container_TERTIARY: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'BarlowCondensed-Light',
  },
  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
