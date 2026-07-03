import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './Components/Context/ThemeContext';

test('renders the portfolio hero', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Abhishek/i);
});
