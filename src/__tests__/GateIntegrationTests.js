// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Display from '../display/Display.js';

/* Testsuite Gate Status:
  - Testset: Gate(Display) defaults to unlocked and open
    - Testcase: Gate is Unlocked by default
    - Testcase: Gate is Open by default
  - Testset: Gate cannot be opened if it is locked
    - Note: This was already implemented in Controls.spec.js on Testset:
            "the closed toggle button is disabled if the gate is locked"
  - Testset: Gate cannot be locked if gate is open
    - Note: This was already implemented in Controls.spec.js on Testset:
            "the locked toggle button is disabled if the gate is open"
*/

// Testsuite
describe('Testsuite: Gate Status', () => {
  // Testset
  describe('Testset: Gate(Display) defaults to unlocked and open', () => {
    // Testcase
    it('Testcase: Gate is Unlocked by default', () => {
      const { getByTestId } = render(<Display />);
      const openDiv = getByTestId('locked');

      expect(openDiv).toHaveTextContent(/unlocked/i);
    });

    // Testcase
    it('Testcase: Gate is Open by default', () => {
      const { getByTestId } = render(<Display />);
      const lockDiv = getByTestId('closed');

      expect(lockDiv).toHaveTextContent(/open/i);
    });
  });
});
