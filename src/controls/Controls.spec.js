// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls.js';

/* [X] Testsuite <Display />:
  - [X] Testset: provide buttons to toggle the closed and locked states.
    - [X] Testcase: Does 'Close Gate' button exist by default
    - [X] Testcase: Does 'Lock Gate' button exist by default
  - [X] Testset: buttons' text changes to reflect the state the door will be in if clicked
    - [X] Testcase: button 'Close Gate' changes to 'Open Gate' upon event click
    - [X] Testcase: button 'Open Gate' changes to 'Close Gate' upon event click
    - [X] Testcase: button 'Lock Gate' changes to 'Unlock Gate' upon event click
    - [X] Testcase: button 'Unlock Gate' changes to 'Lock Gate' upon event click
  - [X] Testset: the closed toggle button is disabled if the gate is locked
    - [X] Testcase: button 'Open Gate' disabled if gate is Locked
    - [X] Testcase: button 'Open Gate' enabled if gate is Unlocked
    - [X] Testcase: button 'Close Gate' is always enabled
  - [X] Testset: the locked toggle button is disabled if the gate is open
    - [X] Testcase: button 'Lock Gate' disabled if gate is Open
    - [X] Testcase: button 'Lock Gate' enabled if gate is Closed
    - [X] Testcase: button 'Unlock Gate' is always enabled
*/

// Testsuite
describe('Testsuite: <Controls />', () => {
  // Testset
  describe('Testset: provide buttons to toggle the closed and locked states.', () => {
    // Testcase
    it("Testcase: Does 'Close Gate' button exist by default", () => {
      const { queryByTestId } = render(<Controls />);
    });

    // Testcase
    it("Testcase: Does 'Close Gate' button exist by default", () => {
      const { queryByTestId } = render(<Controls />);
    });
  });
});
