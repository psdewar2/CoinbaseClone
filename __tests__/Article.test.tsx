import React from 'react';
import {render} from '@testing-library/react-native';
import {Article} from '../screens/Article';
import {NavigationContainer} from '@react-navigation/native';

describe('Article', () => {
  // Arrange
  const component = (
    <NavigationContainer>
      <Article />
    </NavigationContainer>
  );

  it('renders without crashing', async () => {
    // Act
    const rendererJson = render(component).toJSON();
    // Assert
    expect(rendererJson).toMatchSnapshot();
  });
});
