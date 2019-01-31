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
    - [X] Testcase: button 'Close Gate' calls the toggleClosed function upon event click
    - [X] Testcase: should display 'Open Gate' when closed is true
    - [X] Testcase: should display 'Close Gate' when closed is false
    - [X] Testcase: button 'Lock Gate' calls the toggleLocked function upon event click
      - Note: status 'closed' must be true to have access to toggleLocked
    - [X] Testcase: should display 'Open Gate' when closed is true
    - [X] Testcase: should display 'Close Gate' when closed is false
  - [X] Testset: the closed toggle button is disabled if the gate is locked
    - [X] Testcase: button 'Open Gate' disabled if gate is Locked
    - [X] Testcase: button 'Open Gate' enabled if gate is Unlocked
  - [X] Testset: the locked toggle button is disabled if the gate is open
    - [X] Testcase: button 'Lock Gate' disabled if gate is Open
    - [X] Testcase: button 'Lock Gate' enabled if gate is Closed
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
    it("Testcase: button 'Close Gate' calls the toggleClosed function upon event click", () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Controls toggleClosed={mockFn} />);
      const button = getByTestId('closed');

      expect(mockFn).not.toHaveBeenCalled();
      fireEvent.click(button);
      expect(mockFn).toHaveBeenCalled();
    });

    // Testcase
    it("Testcase: should display 'Open Gate' when closed is true", () => {
      const { getByTestId } = render(<Controls closed={true} />);
      const button = getByTestId('closed');

      expect(button).toHaveTextContent(/Open Gate/i);
    });

    // Testcase
    it("Testcase: should display 'Close Gate' when closed is false", () => {
      const { getByTestId } = render(<Controls closed={false} />);
      const button = getByTestId('closed');

      expect(button).toHaveTextContent(/Close Gate/i);
    });

    // Testcase
    it("Testcase: button 'Lock Gate' calls the toggleLocked function upon event click", () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(
        <Controls toggleLocked={mockFn} closed={true} />
      );
      const button = getByTestId('locked');

      expect(mockFn).not.toHaveBeenCalled();
      fireEvent.click(button);
      expect(mockFn).toHaveBeenCalled();
    });

    // Testcase
    it("Testcase: should display 'Unlock Gate' when locked is true", () => {
      const { getByTestId } = render(<Controls locked={true} />);
      const button = getByTestId('locked');

      expect(button).toHaveTextContent(/Unlock Gate/i);
    });

    // Testcase
    it("Testcase: should display 'Lock Gate' when locked is false", () => {
      const { getByTestId } = render(<Controls locked={false} />);
      const button = getByTestId('locked');

      expect(button).toHaveTextContent(/Lock Gate/i);
    });
  });

  // Testset
  describe('Testset: the closed toggle button is disabled if the gate is locked', () => {
    // Testcase
    it("Testcase: button 'Open Gate' disabled if gate is Locked", () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(
        <Controls toggleClosed={mockFn} locked={true} />
      );
      const button = getByTestId('closed');

      expect(button).toBeDisabled();
    });

    // Testcase
    it("Testcase: button 'Open Gate' enabled if gate is Unlocked", () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(
        <Controls toggleClosed={mockFn} locked={false} />
      );
      const button = getByTestId('closed');

      expect(button).not.toBeDisabled();
    });
  });

  // Testset
  describe('Testset: the locked toggle button is disabled if the gate is open', () => {
    // Testcase
    it("Testcase: button 'Lock Gate' disabled if gate is Open", () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(
        <Controls toggleLocked={mockFn} closed={false} />
      );
      const button = getByTestId('locked');

      expect(button).toBeDisabled();
    });

    // Testcase
    it("Testcase: button 'Lock Gate' enabled if gate is Closed", () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(
        <Controls toggleLocked={mockFn} closed={true} />
      );
      const button = getByTestId('locked');

      expect(button).not.toBeDisabled();
    });
  });
});
