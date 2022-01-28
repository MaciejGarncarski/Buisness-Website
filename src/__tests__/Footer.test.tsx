import { render, screen } from '@testing-library/react';

import { Footer } from '../Compoennts/Footer/Footer';
import { CursorProvider } from '../Contexts/CursorContext';
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
