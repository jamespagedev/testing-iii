// Test away!
import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls.js';

/* [X] Testsuite <Display />:
  - [X] Testset: provide buttons to toggle the closed and locked states.
    - [X] Testcase: Does 'Close Gate' button exist by default
    - [X] Testcase: Does 'Lock Gate' button exist by default
  - Testset: buttons' text changes to reflect the state the door will be in if clicked
    - Failing[X] Testcase: button 'Close Gate' changes to 'Open Gate' upon event click
    - Testcase: button 'Open Gate' changes to 'Close Gate' upon event click
    - Testcase: button 'Lock Gate' changes to 'Unlock Gate' upon event click
    - Testcase: button 'Unlock Gate' changes to 'Lock Gate' upon event click
  - Testset: the closed toggle button is disabled if the gate is locked
    - Testcase: button 'Open Gate' disabled if gate is Locked
    - Testcase: button 'Open Gate' enabled if gate is Unlocked
    - Testcase: button 'Close Gate' is always enabled
  - Testset: the locked toggle button is disabled if the gate is open
    - Testcase: button 'Lock Gate' disabled if gate is Open
    - Testcase: button 'Lock Gate' enabled if gate is Closed
    - Testcase: button 'Unlock Gate' is always enabled
*/

// Testsuite
describe('Testsuite: <Controls />', () => {
  // Testset
  describe('Testset: provide buttons to toggle the closed and locked states.', () => {
    // Testcase
    it("Testcase: Does 'Close Gate' button exist by default", () => {
      const { getByTestId } = render(<Controls />);
      const button = getByTestId('closed');

      expect(button).toHaveTextContent(/Close Gate/i);
    });

    // Testcase
    it("Testcase: Does 'Lock Gate' button exist by default", () => {
      const { getByTestId } = render(<Controls />);
      const button = getByTestId('locked');

      expect(button).toHaveTextContent(/Lock Gate/i);
    });
  });

  // Testset
  describe("buttons' text changes to reflect the state the door will be in if clicked", () => {
    // Testcase
    it("Testcase: button 'Close Gate' changes to 'Open Gate' upon event click", () => {
      const { getByTestId } = render(<Controls />);
      const button = getByTestId('closed');

      expect(button).toHaveTextContent(/Close Gate/i);
      fireEvent.click(button);
      expect(button).toHaveTextContent(/Open Gate/i);
    });
  });
});
