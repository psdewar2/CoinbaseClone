import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {News} from '../components/News';
import {TopMovers} from '../components/TopMovers';
import {Watchlist} from '../components/Watchlist';

export function Home() {
  const {colors, dark} = useTheme();
  const {navigate} = useNavigation() as any; // not best practice
  return (
    <SafeAreaView
      edges={['top']}
      style={{flex: 1, backgroundColor: dark ? '#111' : '#FFF'}}>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 50,
          }}>
          <Image
            source={require('../assets/wallet.jpeg')}
            style={{width: 220, height: 220}}
          />
          <Text
            style={{
              color: colors.text,
              fontSize: 20,
              fontWeight: '600',
              paddingTop: 10,
            }}>
            Welcome to coinbase
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#5d616d',
              paddingTop: 10,
            }}>
            Make your first investment today
          </Text>
          <View style={{paddingTop: 30}}>
            <TouchableOpacity
              disabled
              style={{
                backgroundColor: '#2150f5',
                borderRadius: 8,
                paddingVertical: 17,
                paddingHorizontal: 100,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: '600',
                  alignSelf: 'center',
                }}>
                Fund Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Watchlist />
        <TopMovers />
        <News onPress={(uri: string) => navigate('Article', {uri})} />
      </ScrollView>
    </SafeAreaView>
  );
}
