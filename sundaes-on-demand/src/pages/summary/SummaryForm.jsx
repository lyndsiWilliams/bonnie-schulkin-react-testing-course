import { useState } from 'react';

const SummaryForm = () => {
  const [terms, setTerms] = useState(true);

  return (
    <div>
      <button
        id='sundae-button'
        disabled={terms}
      >
        Confirm order
      </button>
      <label htmlFor='terms-checkbox'>I agree to Terms and Conditions</label>
      <input
        type='checkbox'
        id='terms-checkbox'
        onClick={() => setTerms(!terms)}
      />
    </div>
  )
}

export default SummaryForm;