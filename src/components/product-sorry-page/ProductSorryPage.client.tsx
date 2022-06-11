import {useRouteParams} from '@shopify/hydrogen';
import React from 'react';
import {SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1} from '../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1.constants';
import PagePageLayout from '../page-page/components/page-page-layout/PagePageLayout';

type Props = {};

export default function ProductSorryPage({}: Props) {
  const {productHandle} = useRouteParams();

  let title = '';
  let content = null;
  if (
    productHandle === SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1.HANDLE
  ) {
    title = `"죽음의 성물 징표(Sign of the Deathly Hallows) 티셔츠"에 관심을 가져 주셔서 감사해요.`;
    content = (
      <div className="prose">
        <p>
          안타깝게도 방금 살펴보신 상품은 아직 준비중이어서 지금은 주문을 할 수
          없어요.
        </p>
        <p>
          {' '}
          고객 여러분께서 이 상품에 대해 어떻게 생각하시는지 조사중이었어요.
          미리 알려드리지 못해서 정말 죄송해요. 🙇‍♀️🙇‍♂️. 빠른 시일안에 준비해
          올게요.
        </p>
        <p>
          아래의 링크에 연락처를 남겨주시면 상품이 출시될 때 알려드릴게요.
          죄송한 마음을 담아서 1만원 할인 쿠폰도 함께 전해드릴게요.
        </p>

        <p>
          <a href="https://forms.gle/pZy2zV4gRj9LAQQC6" target="_blank">
            [연락처 남기기]
          </a>
        </p>

        <p>감사합니다.</p>
      </div>
    );
  }

  return <PagePageLayout title={title} content={content} />;
}
