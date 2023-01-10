import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('app test', () => {
  beforeEach(() => {
    render(<App />)
  });

  test('header section rendered', () => {
    const headerTitle = screen.getByText('Emoji Search');
    // eslint-disable-next-line no-unused-expressions
    expect(headerTitle).toBeInTheDocument();
    })

    test('the emoji list is rendered successfully when the app is first opened.', () => {
      expect(screen.getAllByText("Click to copy emoji")).toHaveLength(20);
  });

  test('The emoji list is re-rendered according to that filter.', () => {
      const input = screen.getByRole('textbox');

      fireEvent.change(input, { target: { value: 'snow' } });

      expect(screen.getAllByText(/snow/i)).toHaveLength(6);
  });


})




// describe('app test', () => {

  
  
//   beforeEach(() => {
//    render(<App />));

//   test('header', () => {
//     const headerTitle = screen.getByText('Emoji Search');
//     // eslint-disable-next-line no-unused-expressions
//     expect(headerTitle).toBeInTheDocument;
//   });

 
// });
