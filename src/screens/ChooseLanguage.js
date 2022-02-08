import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../utils/CustomButton';
import {Searchbar} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {getAllData} from '../redux/actions';
import {SvgUri} from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ChooseLanguage({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const {country} = useSelector(state => state.userReducer);
  const [selected, setselected] = useState(null);
  const [selectedItem, setselectedItem] = useState(null);
  const [showOkay, setShowOkay] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, []);
  
  setTimeout(function()
{

 setShowOkay(false);

}, 3000);

  const onselected = () => {
    if (selected == null) {
      setShowOkay(true);
    } else {
      setShowOkay(true);
      navigation.navigate('Choose Currency');
    }
  };

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.body}>
      <Modal
        visible={showOkay}
        onRequestClose={() => setShowOkay(false)}
        transparent

        animationType="fade" 
        hardwareAccelerated>
        <TouchableWithoutFeedback onPress={() => setShowOkay(false)}>
          <View
            style={[
              styles.updateAlertContainer,
              selected != null
                ? {backgroundColor: '#00C608'}
                : {backgroundColor: '#FF0000'},
            ]}>
            <View>
              <FontAwesome5
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'flex-end',
                  position: 'absolute',
                  marginTop: 3,
                }}
                name={'times'}
                size={18}
                type="font-awesome"
                color="#FFFFFF"
              />
              <View>
                <Text style={styles.ssText}>
                  {selected != null
                    ? `Language updated - ${selectedItem}`
                    : 'Language could not be updated.'}
                </Text>
                <FontAwesome5
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-start',
                    position: 'absolute',
                    marginTop: 5,
                  }}
                  name={selected != null ? 'check' : 'exclamation-triangle'}
                  size={15}
                  type="font-awesome"
                  color="#FFFFFF"
                  onPress={() => {
                    setShowOkay(false);
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Text style={styles.title}>Hello James,</Text>
      <Text style={styles.subtitle}>Please select a language</Text>
      <View style={{margin: 10}}>
        <Searchbar
          style={styles.search}
          placeholder="Search your currency"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <FlatList
        data={country}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.items}
            onPress={() => {
              setselected(index);
              setselectedItem(item.name);
            }}>
            <View
              style={{
                flex: 1,
                alignSelf: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <SvgUri style={styles.logo} uri={item.image} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
            {selected == index && (
              <FontAwesome5
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'flex-end',
                  position: 'absolute',
                  paddingRight: 20,
                }}
                name={'check'}
                size={20}
                type="font-awesome"
                color="#0F0B2D"
              />
            )}
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{flexDirection: 'row', margin: 10}}>
        <CustomButton
          style={styles.button}
          text="Skip"
          type="TERTIARY"
          ripple={{color: '#0F0B2D'}}
          bgColor="#FFFFFF"
          fgColor="#0F0B2D"
          onPress={() => {
            navigation.navigate('ChooseUname');
          }}
        />
        <CustomButton
          style={styles.button}
          text="Next"
          type="TERTIARY"
          bgColor="#0F0B2D"
          fgColor="#FFFFFF"
          onPress={onselected}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 29,
    color: '#0F0B2D',
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    paddingTop: 20,
    fontFamily: 'Inter-Regular',
  },
  subtitle: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#0F0B2D',
    textAlign: 'center',
    alignSelf: 'flex-start',
    lineHeight: 24,
    paddingHorizontal: 10,
    paddingBottom: 10,
    fontFamily: 'Inter-Regular',
  },
  search: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 10,
    opacity: 0.5,
    elevation: 2,
  },
  button: {
    width: '45%',
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#0F0B2D',
    borderRadius: 10,
  },
  logo: {
    width: 100,
    height: 50,
    alignSelf: 'center',
  },
  items: {
    backgroundColor: '#00000010',
    borderRadius: 15,
    height: 74,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#0F0B2D',
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 24,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter-Regular',
  },
  updateAlertContainer: {
    // flexDirection:'row',
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    // backgroundColor:'#00C608',
    borderRadius: 20,
  },
  ssText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 23,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    fontFamily: 'Inter-Regular',
  },
});
