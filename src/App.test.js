import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('click', () => {
  render(
    <div>
      <label htmlFor='checkbox'>Check</label>
      <input id='checkbox' type='checkbox' />
    </div>
  );

  // TypeError: (0 , _dom.getConfig) is not a function
  userEvent.click(screen.getByText('Check'));
  expect(screen.getByLabelText('Check')).toBeChecked();
});
