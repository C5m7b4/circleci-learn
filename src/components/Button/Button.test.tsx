import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  test('should render correctly', () => {
    const testFn = jest.fn();
    const { container } = render(
      <Button onClick={testFn} label={'Click Me'} />
    );
    expect(container).toMatchSnapshot();
    const btn = fireEvent.click(container);
  });
});
