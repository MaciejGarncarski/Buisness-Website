import { render } from '@testing-library/react';
import { AboutSection } from '../Components/AboutSection/AboutSection';

test('Should render AboutSections', () => {
  render(<AboutSection id="about" />);
});
