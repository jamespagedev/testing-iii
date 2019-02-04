// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

/* [X] Testsuite <Display />:
  - [X] Testset: displays if gate is open/closed and if it is locked/unlocked
    - [X] Testcase: Gate Closed and Locked
    - [X] Testcase: Gate Closed and Unlocked
    - [X] Testcase: Gate Open and Unlocked
  - [X] Testset: displays 'Closed' if the closed prop is true and 'Open' if otherwise
    - [X] Testcase: closed prop true - display 'Closed'
    - [X] Testcase: closed prop false - display 'Open'
  - [X] Testset: displays 'Locked' if the locked prop is true and 'Unlocked' if othewise
    - [X] Testcase: locked prop true - display 'Locked'
    - [X] Testcase: locked prop false - display 'unlocked'
  - [X] Testset: when locked or closed use the red-led class
    - [X] Testcase: locked - red-led class assigned to element
    - [X] Testcase: closed - red-led class assigned to element
  - [X] Testset: when unlocked or open use the green-led class
    - [X] Testcase: unlocked - green-led class assigned to element
    - [X] Testcase: open - green-led class assigned to element
*/

// Testsuite
describe('Testsuite: <Display />', () => {
  // Testset
  describe('Testset: displays if gate is open/closed and if it is locked/unlocked', () => {
    // Testcase
    it('Testcase: Gate Closed and Locked', () => {
      const { getByText } = render(<Display closed={true} locked={true} />);

      getByText(/closed/i);
      getByText(/locked/i);
    });

    // Testcase
    it('Testcase: Gate Closed and Unlocked', () => {
      const { getByText } = render(<Display closed={true} locked={false} />);

      getByText(/closed/i);
      getByText(/unlocked/i);
    });

    // Testcase
    it('Testcase: Gate Open and Unlocked', () => {
      const { getByText } = render(<Display closed={false} locked={false} />);

      getByText(/open/i);
      getByText(/unlocked/i);
    });
  });

  // Testset
  describe("Testset: displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {
    // Testcase
    it("Testcase: closed prop true - display 'Closed'", () => {
      const { getByText } = render(<Display closed={true} />);

      getByText(/closed/i);
    });

    // Testcase
    it("Testcase: closed prop false - display 'Open'", () => {
      const { getByText } = render(<Display closed={false} />);

      getByText(/open/i);
    });
  });

  // Testset
  describe("Testset: displays 'Locked' if the locked prop is true and 'Unlocked' if othewise", () => {
    // Testcase
    it("Testcase: locked prop true - display 'Locked'", () => {
      const { getByText } = render(<Display locked={true} />);

      getByText(/locked/i);
    });

    // Testcase
    it("Testcase: locked prop false - display 'unlocked'", () => {
      const { getByText } = render(<Display locked={false} />);

      getByText(/unlocked/i);
    });
  });

  // Testset
  describe('Testset: when locked or closed use the red-led class', () => {
    // Testcase
    it('Testcase: locked - red-led class assigned to element', () => {
      // const { getByText, getByTestId } = render(<Display locked={true} />);
      const { getByTestId } = render(<Display locked={true} />);
      const locked = getByTestId('locked');
      expect(locked).toHaveClass('red-led');
    });

    // Testcase
    it('Testcase: closed - red-led class assigned to element', () => {
      const { getByTestId } = render(<Display closed={true} />);
      const closed = getByTestId('closed');
      expect(closed).toHaveClass('red-led');
    });
  });

  // Testset
  describe('Testset: when unlocked or open use the green-led class', () => {
    // Testcase
    it('Testcase: unlocked - green-led class assigned to element', () => {
      const { getByTestId } = render(<Display locked={false} />);
      const locked = getByTestId('locked');
      expect(locked).toHaveClass('green-led');
    });

    // Testcase
    it('Testcase: open - green-led class assigned to element', () => {
      const { getByTestId } = render(<Display closed={false} />);
      const closed = getByTestId('closed');
      expect(closed).toHaveClass('green-led');
    });
  });
});
