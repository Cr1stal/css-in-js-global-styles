import { createGlobalStyles } from 'styled-components';

const Radius = {
  4: 'var(--radius-4)',
};

const GlobalRadiuses = createGlobalStyles`
  :root {
    --radius-4: 4px;
  }
`;

export { GlobalRadiuses, Radius };