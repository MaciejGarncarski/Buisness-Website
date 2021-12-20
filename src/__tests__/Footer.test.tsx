import { render, screen } from '@testing-library/react';
import { CursorProvider } from '../contexts/CursorContext';
import { Footer } from '../components/Footer/Footer';
import '@testing-library/jest-dom';

test('Should render Footer & text should be correct', async () => {
  render(
    <CursorProvider>
      <Footer />
    </CursorProvider>,
  );
  const footerElement = await screen.queryAllByTestId('footer');
  expect(footerElement).toHaveTextContent('Gej');
});
