import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './screens/Home';
import {Portfolio} from './screens/Portfolio';
import {Settings} from './screens/Settings';
import {Trade} from './screens/Trade';
import {Transfer} from './screens/Transfer';
import {Image, Text, useColorScheme, View} from 'react-native';
import {COINBASE_BLUE} from './Constants';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Article} from './screens/Article';

export function AppNavigationContainer() {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={useColorScheme() === 'dark' ? DarkTheme : DefaultTheme}>
        <RootStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={{
        animationEnabled: false,
        headerShown: false,
        presentation: 'modal',
      }}>
      <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
      <RootStack.Screen
        name="Transfer"
        component={Transfer}
        options={{animationEnabled: true}}
      />
      <RootStack.Screen name="Article" component={Article} />
    </RootStack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COINBASE_BLUE,
        tabBarIcon: ({focused}) => {
          let imageSrc = require('./assets/home.png');
          let width = 20;
          let height = 20;

          if (route.name === 'TransferIcon') {
            imageSrc = require('./assets/transfer.png');
            width = 40;
            height = 40;
          } else if (route.name === 'Portfolio') {
            imageSrc = require('./assets/portfolio.png');
          } else if (route.name === 'For You') {
            imageSrc = require('./assets/settings.png');
          } else if (route.name === 'Trade') {
            imageSrc = require('./assets/prices.png');
          }

          return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={imageSrc}
                resizeMode="contain"
                style={{
                  width,
                  height,
                  tintColor:
                    focused || route.name === 'TransferIcon'
                      ? COINBASE_BLUE
                      : 'gray',
                  marginTop: 8,
                  marginBottom: 4,
                }}
              />
              {route.name !== 'TransferIcon' && (
                <Text
                  style={{
                    color: focused ? COINBASE_BLUE : 'gray',
                    fontSize: 10,
                  }}>
                  {route.name}
                </Text>
              )}
            </View>
          );
        },
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen
        name="TransferIcon"
        component={Placeholder}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('Transfer');
          },
        })}
      />
      <Tab.Screen name="Trade" component={Trade} />
      <Tab.Screen name="For You" component={Settings} />
    </Tab.Navigator>
  );
}

const Placeholder = () => <Text>not possible</Text>;
