// account 기능 추가로 인해 추가된 컴포넌트입니다. 정리가 필요합니다.
import {useMoney} from '@shopify/hydrogen';

/**
 * A client component that defines the currency code, currency symbol, and amount of a product
 */
export default function MoneyPrice({money}) {
  const {currencyCode, currencyNarrowSymbol, amount} = useMoney(money);
  return (
    <span className="text-black text-md">
      {currencyCode}
      {currencyNarrowSymbol}
      {amount}
    </span>
  );
}
