import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function Portfolio() {
  const {colors, dark} = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<
    {id: string; image: {large: string}; name: string; symbol: string}[]
  >([]);
  useEffect(() => {
    async function getCoins() {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/');
        setData(await response.json());
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    }
    getCoins();
  }, []);

  return (
    <SafeAreaView
      edges={['top']}
      style={{flex: 1, backgroundColor: dark ? '#111' : '#FFF'}}>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView>
          <View style={{paddingTop: 50, paddingHorizontal: 20}}>
            <Text style={{color: colors.text, fontSize: 14, fontWeight: '500'}}>
              Portfolio Balance
            </Text>
            <Text
              style={{
                color: colors.text,
                fontSize: 29,
                fontWeight: 'bold',
                paddingTop: 5,
              }}>
              $0.00
            </Text>
            <View style={{paddingBottom: 20}}>
              {data.map(({id, image, name, symbol}) => (
                <View key={id}>
                  <View
                    style={{
                      paddingTop: 25,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Image
                        source={{uri: image.large}}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 16,
                          borderWidth: 0.5,
                          borderColor: colors.border,
                        }}
                      />
                    </View>
                    <View style={{flex: 1, paddingLeft: 15}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '400',
                          color: colors.text,
                        }}>
                        {name}
                      </Text>
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '300',
                          color: colors.text,
                        }}>
                        $0.00
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '300',
                          color: '#5d616d',
                        }}>
                        0 {symbol}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
