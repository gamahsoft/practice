import React from 'react';
import App from './App';
// import { render, fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';

it('should render component', () => {
  const app = render(<App />);
  console.log(app.getByText('counter: 0'));
  expect(app.getByText('counter: 0')).toBeInTheDocument();
  {
    /* eslint-disable-next-line */
  } // this is how you disable eslint
  //const mockFn = jest.fn();
  //   fireEvent.click(app.getByText('+'));
  //   expect(app.getByText('counter: 1')).toBeInTheDocument();
  //expect(mockFn).toHaveBeenCalledTimes(0);
  //   console.log(app.getByText('counter: 0'));
  //   expect(app.getByText('counter: 0')).toBeInTheDocument();
  //   fireEvent.click(app.getByText('+'));
  //   expect(app.getByText('counter: 1')).toBeInTheDocument();
});
