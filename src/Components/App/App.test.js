import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const moodyTunes = screen.getByText(/Moody Tunes/i);
  expect(moodyTunes).toBeInTheDocument();
});
