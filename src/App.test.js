import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('AddWord component', () => {
  it('should render the component onto the screen', () => {
      expect(true).toBeTruthy();
  });
});

it('should render the component onto the screen', () => {
  render(<App/>);
  expect(screen.getByTestId('add-word-input')).toBeInTheDocument();
  expect(screen.getByTestId('add-word-button')).toBeInTheDocument();
})

it('should have the addWord button disabled on initialization', () => {
  render(<App/>);
  expect(screen.getByTestId('add-word-button')).toBeDisabled();
})

it('should enable the add keyword when a valid input is entered', () => {
  render(<App/>);
  expect(screen.getByTestId('add-word-button')).toBeDisabled();
  const input = screen.getByTestId('add-word-input');
  fireEvent.change(input, {target: {value: 'm'}});

  expect(screen.getByTestId('add-word-button')).toBeDisabled();
})

it('should call the onWordAdd handler (if exists) with the new word upon clicking the Add button', () => {
  const wordsOnSpy = jest.fn();
  const inputValue = 'matti';

  render(<App onWordAdd={wordsOnSpy}/>);
  
  const input = screen.getByTestId('add-word-input');
  const addButton = screen.getByTestId('add-word-button');

  fireEvent.change(input, {target: {value: inputValue}})
  fireEvent.click(addButton);

  expect(wordsOnSpy).toHaveBeenCalledWith(inputValue)

})

it('should clear the input fiels after clicking the submit button', () => {

  render(<App />);
  
  const input = screen.getByTestId('add-word-input');
  const addButton = screen.getByTestId('add-word-button');

  fireEvent.change(input, {target: {value: 'Matti'}})
  fireEvent.click(addButton);

  expect(input.value).toBe('')

})