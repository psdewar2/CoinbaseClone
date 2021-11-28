import React from 'react';
import {render} from '@testing-library/react-native';
import {Settings} from '../screens/Settings';

describe('Settings', () => {
  // Arrange
  const component = <Settings />;

  it('renders without crashing', async () => {
    // Act
    const rendererJson = render(component).toJSON();
    // Assert
    expect(rendererJson).toMatchSnapshot();
  });
});
