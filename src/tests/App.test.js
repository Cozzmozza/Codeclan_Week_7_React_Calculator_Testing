import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
    
  })

  it('should add 1 and 4 together to get 5', () => {
    // Grab all the buttons I want to press (1, 4, add, equals)
    // Grab the runningTotal again
    // Fire each event in turn
    // Check that the runningTotal matches up with what we expect (5)
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('add');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('5');
  })

  it('should subtract 4 from 7 to get 3', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');  
    const buttonSubtract = container.getByTestId('subtract');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('3');
  })

  it('should multiple 3 by 5 to get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonMultiply = container.getByTestId('multiply');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('15');
  })

  it('should divide 21 by 7 to get 3', () => {
    // 21 requires buttons 2 and 1 to be fired before the divide, then button 7
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDivide = container.getByTestId('divide');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('3');
  })

  it('should concatenate multiple number button clicks', () => {
    // Grab button 4, fire it twice, compare running total
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('44');
  })
})