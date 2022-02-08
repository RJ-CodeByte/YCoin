import { StyleSheet,TextInput, View} from 'react-native';
import  React,{useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



 const CustomInput = (props) => { 
  // F1F1F1
  const [isFocused, setIsFocused] = useState(false);



  return (
    <View style={[styles.container,{...props.styles},isFocused ? {borderColor: !props.error ? '#000' : 'red'} : {borderColor: !props.error ? '#F1F1F1' : 'red'}]}>
      <TextInput 
      {...props}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        value={props.value}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        secureTextEntry={props.secureText}
        onFocus={()=> {setIsFocused(true)}}
        onBlur={()=> props.error ? setIsFocused(true) : setIsFocused(false)}
      />
      { props.icon && !props.error &&
      <FontAwesome5
            style={{
              position: 'absolute',
              top: 5,
              // bottom:30,
              left: 288,
              // left: 390,
              padding: 10,
            }}
            name={props.iconhide ? 'eye': 'eye-slash'}
            size={20}
            type="font-awesome"
            color={!isFocused || props.error ? "grey" : "black"}
            onPress={props.iconPress}            
          />}
      { props.error && 
      <FontAwesome5
            style={{
              position: 'absolute',
              top: 5,
              // bottom:30,
              left: 288,
              // left: 390,
              padding: 10,
            }}
            name={props.error ? 'times': 'times'}
            size={20}
            type="font-awesome"
            color={"red"}
            onPress={props.errorIconPressed}            
          />}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ffffff',
        width:'100%',
        borderWidth:2,
        borderRadius:10,
        paddingHorizontal:10,
        marginVertical:10,
},

});


export  default CustomInput;