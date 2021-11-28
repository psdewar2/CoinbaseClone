import React from 'react';
import {render} from '@testing-library/react-native';
import {Transfer} from '../screens/Transfer';

describe('Transfer', () => {
  // Arrange
  const component = <Transfer />;

  it('renders without crashing', async () => {
    // Act
    const rendererJson = render(component).toJSON();
    // Assert
    expect(rendererJson).toMatchSnapshot();
  });
});
