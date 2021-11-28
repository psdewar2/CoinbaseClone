import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {COINBASE_GREEN, COINBASE_RED} from '../Constants';
import {topMovers} from '../data/movers';
import {SubHeading} from './SubHeading';

export function TopMovers() {
  const {colors, dark} = useTheme();
  return (
    <View style={{marginTop: 30}}>
      <View style={{paddingHorizontal: 30}}>
        <SubHeading content={'Top Movers'} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingTop: 10}}>
        {topMovers.map(({id, icon, nick, price, drop}, index) => (
          <View
            key={id}
            style={{
              marginLeft: index === 0 ? 30 : 0,
              marginRight: index === topMovers.length - 1 ? 30 : 0,
            }}>
            <View
              style={{
                backgroundColor: dark ? '#111' : '#FFF',
                width: 150,
                height: 150,
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 10,
                marginRight: 15,
                paddingHorizontal: 15,
              }}>
              <View>
                <Image
                  source={{uri: icon}}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    borderWidth: 0.5,
                    borderColor: colors.border,
                    marginTop: 15,
                  }}
                />
              </View>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: colors.text,
                    fontWeight: '500',
                  }}>
                  {nick}
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    paddingLeft: 5,
                    color: '#5D616D',
                  }}>
                  ${price}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 27,
                  fontWeight: '400',
                  color:
                    drop < 0
                      ? COINBASE_RED
                      : drop > 0
                      ? COINBASE_GREEN
                      : colors.text,
                }}>
                {drop}%
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
