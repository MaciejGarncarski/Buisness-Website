import { render } from '@testing-library/react';

import { ContactSection } from '../Components/ContactSection/ContactSection';

test('Should render Contact', () => {
  render(<ContactSection id="contact" />);
});
