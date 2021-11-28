import React from 'react';
import {render} from '@testing-library/react-native';
import {Home} from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';

describe('Home', () => {
  // Arrange
  const component = (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );

  it('renders without crashing', async () => {
    // Act
    const rendererJson = render(component).toJSON();
    // Assert
    expect(rendererJson).toMatchSnapshot();
  });
});
