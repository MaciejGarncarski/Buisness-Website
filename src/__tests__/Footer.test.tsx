import { render } from '@testing-library/react';
import { CursorProvider } from '../Contexts/CursorContext';
import { Footer } from '../Components/Footer/Footer';

test('Should render App', () => {
  render(
    <CursorProvider>
      <Footer />
    </CursorProvider>,
  );
});
