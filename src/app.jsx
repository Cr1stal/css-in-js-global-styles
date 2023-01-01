import { GlobalResets } from './tokens/resets';
import { SpriteWithIcons } from './tokens/icons';
import { GlobalFonts } from './tokens/fonts';
import { GlobalColors } from './tokens/colors';
import { GlobalShadows } from './tokens/shadows';
import { GlobalRadiuses } from './tokens/radiuses';

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalColors />
      <GlobalShadows />
      <GlobalRadiuses />
      <GlobalResets />
      <SpriteWithIcons />
    </>
  );
}

export { App };
