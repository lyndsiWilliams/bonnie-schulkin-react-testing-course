import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe('Initial conditions', () => {
  // Render SummaryForm component
  beforeEach(() => {
    render(<SummaryForm />);
  });

  it('sundae button starts out disabled', () => {
    const sundaeButton = screen.getByRole('button', { name: 'Confirm order' });
    expect(sundaeButton).toBeDisabled();
  });

  it('terms checkbox starts out unchecked', () => {
    const termsCheckbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
    expect(termsCheckbox).not.toBeChecked();
  });
});

describe('Checkbox interaction', () => {
  // Render SummaryForm component
  beforeEach(() => {
    render(<SummaryForm />);
  });

  it('enables button when checked', () => {
    const termsCheckbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
    const sundaeButton = screen.getByRole('button', { name: 'Confirm order' });

    // Check box to enable button
    fireEvent.click(termsCheckbox);
    expect(sundaeButton).toBeEnabled();
  });

  it('re-disables button when checked then unchecked', () => {
    const termsCheckbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
    const sundaeButton = screen.getByRole('button', { name: 'Confirm order' });

    // Check box to enable button
    fireEvent.click(termsCheckbox);
    expect(sundaeButton).toBeEnabled();

    // Check box again to re-disable button
    fireEvent.click(termsCheckbox);
    expect(sundaeButton).toBeDisabled();
  });
});