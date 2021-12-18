import { render } from '@testing-library/react';

import { AboutSection } from '../Components/AboutSection/AboutSection';

test('Should render Contact', () => {
  render(<AboutSection id="about" />);
});
