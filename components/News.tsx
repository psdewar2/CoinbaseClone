import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COINBASE_BLUE} from '../Constants';
import {articles} from '../data/newsData';
import {SubHeading} from './SubHeading';

type NewsProps = {
  onPress: (uri: string) => void;
};

export function News({onPress}: NewsProps) {
  const {colors} = useTheme();
  return (
    <View style={{marginTop: 30, paddingHorizontal: 30}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}>
        <SubHeading content="News" />
        <TouchableOpacity disabled>
          <Text style={{color: COINBASE_BLUE, fontWeight: '600'}}>
            View more
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingVertical: 20}}>
        {articles
          .slice(0, 5)
          .map(
            (
              {siteName, datePublished, relatedToken, title, link, src},
              index,
            ) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => onPress(link)}
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 15,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flex: 1, paddingRight: 4}}>
                    <Text
                      style={{
                        fontWeight: '600',
                        marginBottom: 4,
                        color: colors.text,
                      }}>
                      {siteName}
                    </Text>
                    <Text style={{marginBottom: 4, color: colors.text}}>
                      {datePublished} {relatedToken ? `• ${relatedToken}` : ''}
                    </Text>
                    <Text style={{flex: 1, flexWrap: 'wrap', color: 'dimgray'}}>
                      {title}
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={{
                        uri: src,
                      }}
                      style={{width: 60, height: 60, borderRadius: 5}}
                    />
                  </View>
                </TouchableOpacity>
              );
            },
          )}
      </View>
    </View>
  );
}
