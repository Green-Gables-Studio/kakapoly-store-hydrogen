import HeaderLayout from './HeaderLayout';
import HeaderNavigation from './HeaderNavigation';
import HeaderLogo from './HeaderLogo';
import HeaderCart from './HeaderCart.client';
import {HeaderStateProvider} from './HeaderStateContext.client';

export default function Header() {
  // TODO: 여기 max-w-screen-xl로 바꾸기
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
