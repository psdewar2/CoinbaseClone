import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const actions = [
  {
    name: 'Buy',
    desc: 'Buy crypto with cash',
    icon: '+',
  },
  {
    name: 'Sell',
    desc: 'Sell crypto for cash',
    icon: '-',
  },
  {
    name: 'Convert',
    desc: 'Convert one crypto to another',
    icon: 'C',
  },
  {
    name: 'Send',
    desc: 'Send crypto to another wallet',
    icon: 'S',
  },
  {
    name: 'Receive',
    desc: 'Receive crypto from another wallet',
    icon: 'R',
  },
  {
    name: 'Add cash / Cash out',
    desc: 'Transfer balance to or from your bank',
    icon: 'B',
  },
];

export function Transfer() {
  const {colors, dark} = useTheme();
  const {goBack} = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: dark ? '#111' : '#FFF'}}>
      <TouchableOpacity
        onPress={goBack}
        style={{paddingLeft: 20, paddingTop: 20}}>
        <Text style={{color: colors.text, fontWeight: '600'}}>Close</Text>
      </TouchableOpacity>
      {actions.map(({name, desc, icon}) => {
        return (
          <TouchableOpacity
            key={name}
            style={{flexDirection: 'row', padding: 20}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
              }}>
              <Text
                style={{fontSize: 20, fontWeight: '600', color: colors.text}}>
                {icon}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: '600',
                  marginBottom: 4,
                  color: colors.text,
                }}>
                {name}
              </Text>
              <Text style={{color: 'gray'}}>{desc}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
