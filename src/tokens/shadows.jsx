import { createGlobalStyles } from 'styled-components';

const GRADIENT = {
  CARD_DEFAULT_CHILD: 'var(--shadow-card-default-child)',
  CARD_HOVER_OR_FOCUS_ADULT: 'var(--shadow-card-hover-or-focus-adult)',
  CARD_HOVER_OR_FOCUS_CHILD: 'var(--shadow-card-hover-or-focus-child)',
};

const GlobalShadows = createGlobalStyles`
  :root {
    --shadow-card-default-child: 0px 4px 10px rgba(0, 0, 0, 0.07);
    --shadow-card-hover-or-focus-adult: inset 0px 0px 0px 1px #ff833e;
    --shadow-card-hover-or-focus-child: inset 0px 0px 0px 1px #5fcb45;
  }
`;

export { GlobalShadows, GRADIENT };