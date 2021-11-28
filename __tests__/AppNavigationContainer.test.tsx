import React from 'react';
import {render} from '@testing-library/react-native';
import {AppNavigationContainer} from '../AppNavigationContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

describe('AppNavigationContainer', () => {
  // Arrange
  const component = (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <AppNavigationContainer />
    </SafeAreaProvider>
  );

  it('renders without crashing', async () => {
    // Act
    const rendererJson = render(component).toJSON();
    // Assert
    expect(rendererJson).toMatchSnapshot();
  });
});
