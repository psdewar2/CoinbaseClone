import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {COINBASE_RED} from '../Constants';
import {coins} from '../data/coins';
import {SubHeading} from './SubHeading';

export function Watchlist() {
  const {colors, dark} = useTheme();
  return (
    <View style={{marginTop: 30, paddingHorizontal: 30}}>
      <SubHeading content={'Watchlist'} />
      <View style={{paddingTop: 10}}>
        <View
          style={{
            backgroundColor: dark ? '#111' : '#FFF',
            width: '100%',
            borderWidth: 0.5,
            borderRadius: 10,
            borderColor: colors.border,
          }}>
          <View>
            {coins.map(coin => (
              <View key={coin.id}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 15,
                    paddingHorizontal: 15,
                    justifyContent: 'space-between',
                    paddingBottom: 20,
                  }}>
                  <View>
                    <Image
                      source={{uri: coin.icon}}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 16,
                        borderWidth: 0.5,
                        borderColor: colors.border,
                      }}
                    />
                  </View>
                  <View style={{paddingLeft: 15, flex: 1}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: colors.text,
                      }}>
                      {coin.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: '#5d616d',
                      }}>
                      {coin.nick}
                    </Text>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 16, color: colors.text}}>
                      ${coin.price}
                    </Text>
                    <Text style={{fontSize: 12, color: COINBASE_RED}}>
                      {coin.drop}%
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
