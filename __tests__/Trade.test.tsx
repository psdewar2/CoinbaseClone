import React from 'react';
import {render} from '@testing-library/react-native';
import {Trade} from '../screens/Trade';

describe('Trade', () => {
  // Arrange
  const component = <Trade />;

  it('renders without crashing', async () => {
    // Act
    const rendererJson = render(component).toJSON();
    // Assert
    expect(rendererJson).toMatchSnapshot();
  });
});
