// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Dashboard from '../dashboard/Dashboard.js';
import Controls from '../controls/Controls.js';

/* Testsuite Gate Status:
  - Testset: Gate(Display) defaults to unlocked and open
    - Testcase: Gate is Unlocked by default
    - Testcase: Gate is Open by default
  - Testset: Gate cannot be opened if it is locked
    - Testcase: 
    - Testcase: 
    - Testcase: 
    - Testcase: 
  - Testset: Gate cannot be locked if gate is open
    - Testcase: 
    - Testcase: 
    - Testcase: 
    - Testcase: 
*/

// Testsuite
describe('Testsuite: Gate Status', () => {
  // Testset
  describe('Testset: Gate(Display) defaults to unlocked and open', () => {
    // Testcase
    it('Testcase: Gate is Unlocked by default', () => {
      const { getByTestId } = render(<Controls />);
      const button = getByTestId('closed');

      expect(button).toHaveTextContent(/Close Gate/i);
    });
  });
});
