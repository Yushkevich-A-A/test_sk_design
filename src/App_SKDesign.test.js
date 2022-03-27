import { render, screen } from '@testing-library/react';
import App_SKDesign from './App_SKDesign';

test('renders learn react link', () => {
  render(<App_SKDesign />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
