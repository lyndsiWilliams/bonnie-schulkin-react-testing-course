import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // Find an element with a role of button and the text 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // Expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // Click the button
  fireEvent.click(colorButton);

  // Expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // Expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});
