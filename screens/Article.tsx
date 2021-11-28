import {useNavigation, useRoute} from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';
import {COINBASE_BLUE} from '../Constants';

export function Article() {
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const {
    params: {uri},
  } = useRoute() as any;
  const [progress, setProgress] = useState(0);
  const webviewRef = useRef<WebView>(null);

  function extractHostname(url: string) {
    let hostname;
    // find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf('//') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }
    // find & remove port number
    hostname = hostname.split(':')[0];
    // find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (progress === 1) {
      timeout = setTimeout(() => setProgress(0), 100);
    }

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [progress]);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 6,
          marginHorizontal: 14,
          marginBottom: 14,
        }}>
        <TouchableOpacity onPress={goBack}>
          <Text style={{fontSize: 16, fontWeight: '600', color: COINBASE_BLUE}}>
            Close
          </Text>
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          style={{
            color: colors.text,
            flex: 1,
            fontSize: 16,
            fontWeight: '600',
            textAlign: 'center',
            paddingHorizontal: 10,
          }}>
          {extractHostname(uri)}
        </Text>
        <TouchableOpacity onPress={() => webviewRef.current?.reload()}>
          <Text style={{fontSize: 16, fontWeight: '600', color: COINBASE_BLUE}}>
            Reload
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          opacity: progress ? 1 : 0,
          borderColor: COINBASE_BLUE,
          borderWidth: 2,
          width: `${progress * 100}%`,
        }}
      />
      <WebView
        ref={webviewRef}
        source={{uri}}
        onLoadProgress={event => setProgress(event.nativeEvent.progress)}
      />
    </SafeAreaView>
  );
}
