import React from 'react';
import {render} from '@testing-library/react-native';
import {Portfolio} from '../screens/Portfolio';

describe('Portfolio', () => {
  // Arrange
  const component = <Portfolio />;

  it('renders without crashing', async () => {
    // Act
    const rendererJson = render(component).toJSON();
    // Assert
    expect(rendererJson).toMatchSnapshot();
  });
});
