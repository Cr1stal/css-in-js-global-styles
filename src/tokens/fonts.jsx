import { createGlobalStyles } from 'styled-components';
import commissionerRegular from '../fonts/commissioner-regular.woff2';
import commissionerBold from '../fonts/commissioner-semi-bold.woff2';
import delaGothicOneRegular from '../fonts/dela-gothic-one-regular.woff2';

const Font = {
  COMMISSIONER: 'var(--font-commissioner)',
  DELA_GOTHIC_ONE: 'var(--font-dela-gothic-one)',
};

const GlobalFonts = createGlobalStyles`
  @font-face {
    font-family: 'Commissioner';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${commissionerRegular});
  }

  @font-face {
    font-family: 'Commissioner';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(${commissionerBold});
  }

  @font-face {
    font-family: 'Dela Gothic One';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${delaGothicOneRegular});
  }

  :root {
    --font-commissioner: 'Commissioner', Arial, sans-serif;
    --font-dela-gothic-one: 'DelaGothicOne', var(--font-commissioner);
  }
`;

export { GlobalFonts, Font };