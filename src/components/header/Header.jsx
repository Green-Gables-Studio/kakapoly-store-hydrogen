import HeaderLayout from './HeaderLayout';
import HeaderNavigation from './HeaderNavigation';
import HeaderLogo from './HeaderLogo';
import HeaderCart from './HeaderCart.client';
import {HeaderStateProvider} from './HeaderStateContext.client';

export default function Header() {
  return (
    <HeaderStateProvider>
      <HeaderLayout
        navigation={<HeaderNavigation />}
        logo={<HeaderLogo />}
        cart={<HeaderCart />}
      />
    </HeaderStateProvider>
  );
}
