// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard.js';

/* [X] Testsuite <Dashboard />:
  - [X] Testset: shows the controls and display
    - [X] Testcase: Shows Controls component
    - [X] Testcase: Shows Display component
*/

// Testsuite
describe('Testsuite: <Dashboard />', () => {
  // Testset
  describe('Testset: shows the controls and display', () => {
    // Testcase
    it('Testcase: Shows Controls component', () => {
      const { queryByTestId } = render(<Dashboard />);
      const ancestor = queryByTestId('dashboard-component');
      const controls = queryByTestId('controls-component');
      console.log('controls', controls);
      expect(ancestor).toContainElement(controls);
    });

    // Testcase
    it('Testcase: Shows display component', () => {
      const { queryByTestId } = render(<Dashboard />);
      const ancestor = queryByTestId('dashboard-component');
      const display = queryByTestId('display-component');
      expect(ancestor).toContainElement(display);
    });
  });
});
