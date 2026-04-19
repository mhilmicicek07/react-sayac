import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  localStorage.clear();
  document.body.removeAttribute('data-theme');
});

test('başlığı ve varsayılan sayaç değerini gösterir', async () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: /sayaç uygulaması/i })).toBeInTheDocument();
  expect(await screen.findByRole('heading', { level: 2, name: /Sayaç: 500/i })).toBeInTheDocument();

  await waitFor(() => expect(localStorage.getItem('counter')).toBe('500'));
  await waitFor(() => expect(document.body.getAttribute('data-theme')).toBe('light'));
});

test('sayaç artırma, azaltma ve sıfırlama butonları çalışır', async () => {
  render(<App />);

  const counterHeading = await screen.findByRole('heading', { level: 2, name: /Sayaç:/i });
  const incrementButton = screen.getByRole('button', { name: /Artır/i });
  const decrementButton = screen.getByRole('button', { name: /Azalt/i });
  const resetButton = screen.getByRole('button', { name: /Sıfırla/i });

  await userEvent.click(incrementButton);
  expect(counterHeading).toHaveTextContent('501');

  await userEvent.click(decrementButton);
  expect(counterHeading).toHaveTextContent('500');

  await userEvent.click(resetButton);
  expect(counterHeading).toHaveTextContent('0');
  expect(localStorage.getItem('counter')).toBe('0');
});

test('kullanıcı başlangıç değerini belirleyebilir', async () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/Başlangıç değeri girin/i);
  const startButton = screen.getByRole('button', { name: /Başlat/i });

  await userEvent.type(input, '42');
  await userEvent.click(startButton);

  expect(screen.getByRole('heading', { level: 2, name: /Sayaç: 42/i })).toBeInTheDocument();
  expect(localStorage.getItem('counter')).toBe('42');
});

test('kayıtlı tema ve sayaç değeri yüklenir', async () => {
  localStorage.setItem('counter', '321');
  localStorage.setItem('theme', 'dark');

  render(<App />);

  expect(await screen.findByRole('heading', { level: 2, name: /Sayaç: 321/i })).toBeInTheDocument();
  await waitFor(() => expect(document.body.getAttribute('data-theme')).toBe('dark'));
  expect(screen.getByRole('button', { name: /Açık Mod/i })).toBeInTheDocument();
});

test('tema değiştirme düğmesi görünümü değiştirir ve kaydeder', async () => {
  render(<App />);

  const themeToggle = await screen.findByRole('button', { name: /Koyu Mod/i });

  await userEvent.click(themeToggle);

  expect(screen.getByRole('button', { name: /Açık Mod/i })).toBeInTheDocument();
  await waitFor(() => expect(document.body.getAttribute('data-theme')).toBe('dark'));
  expect(localStorage.getItem('theme')).toBe('dark');
});
