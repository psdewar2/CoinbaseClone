import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';

type SubHeadingProps = {
  content: string;
};

export function SubHeading({content}: SubHeadingProps) {
  const {colors} = useTheme();
  return (
    <Text
      style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
        paddingTop: 10,
      }}>
      {content}
    </Text>
  );
}
