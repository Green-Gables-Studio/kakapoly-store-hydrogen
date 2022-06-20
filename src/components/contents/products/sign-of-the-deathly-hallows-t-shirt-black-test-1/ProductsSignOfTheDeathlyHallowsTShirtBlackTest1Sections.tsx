import {useRouteParams} from '@shopify/hydrogen';
import React from 'react';
import ProductPageSectionsLayout from '../../../pages/product-page/product-page-sections-layout/ProductPageSectionsLayout';
import {SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1} from './ProductsSignOfTheDeathlyHallowsTShirtBlackTest1.constants';
import ProductsSignOfTheDeathlyHallowsTShirtBlackTest1ReviewSection from './ProductsSignOfTheDeathlyHallowsTShirtBlackTest1ReviewSection';

type Props = {};

const ProductsSignOfTheDeathlyHallowsTShirtBlackTest1Sections = (
  props: Props,
) => {
  const {productHandle} = useRouteParams();

  let productGuidePath = '';
  let sizeGuidePath = '';
  let policyGuidePath = '';

  if (
    productHandle === SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1.HANDLE
  ) {
    const {PRODUCT_GUIDE_PATH, SIZE_GUIDE_PATH, POLICY_GUIDE_PATH} =
      SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1;
    productGuidePath = PRODUCT_GUIDE_PATH;
    sizeGuidePath = SIZE_GUIDE_PATH;
    policyGuidePath = POLICY_GUIDE_PATH;
  }

  return (
    <ProductPageSectionsLayout
      sections={[
        <div className="prose">
          <h2 className="text-center">소개</h2>
          <section className="py-6">
            <h3>죽음의 성물 상징(Sign of the Deathly Hallows) 티셔츠</h3>

            <img src="https://cdn.shopify.com/s/files/1/0549/3007/9792/files/sign-of-the-deathly-hallows-tshirt-black-front.jpg" />

            <img src="https://cdn.shopify.com/s/files/1/0549/3007/9792/files/sign-of-the-deathly-hallows-tshirt-black-back.jpg" />

            <ul>
              <li>
                해리포터 시리즈의 중요한 소재 중 하나인 죽음의 성물을 나타내는
                상징이 프린팅된 블랙 색상의 티셔츠에요.
              </li>
              <li>
                디지털 프린팅 방식을 사용해서 아트웍이 선명하고 섬세하게 프린팅
                되었어요.
              </li>
              <li>여성과 남성 모두에게 어울리는 사이즈가 준비되었어요.</li>
              <li>두꺼운 굵기의 실(17수)을 사용해서 비침이 적어요. </li>
              <li>옆 라인에 봉제선이 없어서 입었을 때 편안해요.</li>
              <li>
                백넥테이프가 부착되어서 목 부분이 늘어나거나 변형되지 않아요.
              </li>
              <li>소매와 밑단이 이중으로 박음질 되어서 튼튼하고 깔끔해요.</li>
            </ul>

            <a
              className="cursor-pointer"
              onClick={() => {
                window.open(
                  `${productGuidePath}`,
                  '',
                  'popup,width=610,height=700',
                );
              }}
            >
              더 알아보기
            </a>
          </section>
        </div>,
        <div className="prose">
          <h2 className="text-center">스토리</h2>
          <section className="py-6">
            <h3>죽음의 성물 상징 아트웍</h3>
            <img src="https://cdn.shopify.com/s/files/1/0549/3007/9792/files/sign-of-the-deathly-hallows-tshirt-black-story.jpg" />

            <p>
              해리포터 시리즈의 죽음의 성물 세 가지를 나타내는 아트웍을 좋은
              소재의 티셔츠 위에 디지털 프린팅 방식을 사용해서 선명하게
              프린팅했어요. 아트웍의 의미와 이야기의 깊이를 이해하는 팬이라면
              누구든지 관심 가질만한 프린팅이에요.
            </p>
          </section>
          <section className="py-6">
            <h3>세 가지 죽음의 성물. 그리고 그 모두를 포함하는 상징.</h3>

            <figure>
              <img src="https://cdn.shopify.com/s/files/1/0549/3007/9792/files/sign-of-the-deathly-hallows-t-shirt-black-lovegood.jpg" />
              <figcaption className="text-center">
                죽음의 성물 상징을 설명하는 루나 러브굿
              </figcaption>
            </figure>

            <blockquote>
              딱총나무 지팡이, 부활의 돌, 그리고 투명 망토 세 가지를 모두 가진
              자는 “죽음의 지배자"가 되죠.
            </blockquote>

            <p>
              죽음의 성물 문양은 해리포터 시리즈에 등장하는 세 가지 죽음의
              성물을 상징하는 삼각형 형태의 기호에요. 가운데의 세로 선은
              딱총나무 지팡이를, 동그란 원은 부활의 돌을, 그리고 바깥의 삼각형은
              투명 망토를 나타내죠.
            </p>
            <p>
              딱총나무 지팡이는 무적이라고 여겨지는 강력한 지팡이에요. 부활의
              돌은 죽은 자의 영혼을 불러낼 수 있는 물건이죠. 그리고 투명 망토는
              이름에서 알 수 있듯이 사용자를 완전히 투명하게 만들어줄 수 있어요.
            </p>

            <p>
              전설에 따르면 세 가지 죽음의 성물을 모두 가진 자는 “죽음의
              지배자"가 된다고 해요. 즉, 그 사람은 아무도 꺾을 수 없는 자가
              된다는 의미예요.
            </p>
          </section>
        </div>,
        <div className="prose">
          <h2 className="text-center">특징</h2>

          <section className="py-6">
            <h3>가장 선명한 아트웍 프린팅</h3>

            <img src="https://cdn.shopify.com/s/files/1/0549/3007/9792/files/sign-of-the-deathly-hallows-tshirt-black-1.jpg" />

            <p>
              디지털 프린팅 방식을 사용해서 아트웍이 선명하고 섬세하게 프린팅
              되었어요. 원단에 직접 잉크를 분사하기 때문에 인쇄면과 원단 사이에
              이질감이 없고 자연스러워요. 덕분에 통기성도 좋죠. 또, 여러번
              세탁해도 인쇄된 아트웍이 잘 망가지지 않는 특징이 있어요.
            </p>
          </section>

          <section className="py-6">
            <h3>비침 없는 부드러움</h3>

            <img src="https://cdn.shopify.com/s/files/1/0549/3007/9792/files/sign-of-the-deathly-hallows-tshirt-black-3.jpg" />

            <p>
              두꺼운 굵기의 실(17수)을 사용해서 비침이 적어요. 원단의 두께감
              덕분에 부드럽고 톡톡하면서 잘 구겨지지 않는 특징이 있어요. 100%
              면이기 때문에 흡습성과 통기성도 좋아요.
            </p>
          </section>

          <section className="py-6">
            <h3>편안한 착용감</h3>

            <img src="https://cdn.shopify.com/s/files/1/0549/3007/9792/files/sign-of-the-deathly-hallows-tshirt-black-4.jpg" />

            <p>
              옆 라인에 봉제선이 없기 때문에 굉장히 편안해요. 봉제선이 없으면
              둥근 이불이 감싸주는 느낌이 나거든요. 또, 그 형태의 특징 덕분에
              세탁으로 인한 변형이 상대적으로 적은 편이에요.
            </p>
          </section>

          <section className="py-6">
            <h3>변형없는 목 선</h3>

            <img src="https://cdn.shopify.com/s/files/1/0549/3007/9792/files/sign-of-the-deathly-hallows-tshirt-black-2.jpg" />

            <p>
              목 부분의 형태가 변형되는것을 방지하기 위해 보강을 위한
              백넥테이프가 부착되어있어요. 덕분에 목이 잘 늘어나지 않죠.
            </p>
          </section>

          <section className="py-6">
            <h3>튼튼하고 깔끔한 마감</h3>

            <img src="https://cdn.shopify.com/s/files/1/0549/3007/9792/files/sign-of-the-deathly-hallows-tshirt-black-5.jpg" />

            <p>
              소매와 밑단을 이중으로 박음질했기 때문에 굉장히 튼튼하고 깔끔해요.
              이런 봉제의 특징 덕분에 옷의 형태가 쉽게 변형되지 않아요.
            </p>
          </section>
        </div>,
        <div className="prose">
          <h2 className="text-center">사이즈</h2>

          <h3>차트</h3>
          <img src="https://cdn.shopify.com/s/files/1/0549/3007/9792/files/sign-of-the-deathly-hallows-tshirt-black-size-measurement-guide.jpg" />

          <table className="table-auto text-center">
            <thead className="">
              <tr>
                <th className="">사이즈</th>
                <th>어깨</th>
                <th>가슴</th>
                <th>총기장</th>
                <th>소매길이</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XS</td>
                <td>41 cm</td>
                <td>46 cm</td>
                <td>63 cm</td>
                <td>18 cm</td>
              </tr>
              <tr>
                <td>S</td>
                <td>44 cm</td>
                <td>49 cm</td>
                <td>66 cm</td>
                <td>19 cm</td>
              </tr>
              <tr>
                <td>M</td>
                <td>47 cm</td>
                <td>52 cm</td>
                <td>70 cm</td>
                <td>20 cm</td>
              </tr>
              <tr>
                <td>L</td>
                <td>50 cm</td>
                <td>55 cm</td>
                <td>74 cm</td>
                <td>22 cm</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>53 cm</td>
                <td>58 cm</td>
                <td>78 cm</td>
                <td>24 cm</td>
              </tr>
              <tr>
                <td>2XL</td>
                <td>56 cm</td>
                <td>61 cm</td>
                <td>82 cm</td>
                <td>26 cm</td>
              </tr>
            </tbody>
          </table>

          <a
            className="cursor-pointer"
            onClick={() => {
              window.open(`${sizeGuidePath}`, '', 'popup,width=610,height=700');
            }}
          >
            자세한 사이즈 정보 보기
          </a>
        </div>,
        <div className="prose">
          <h2 className="text-center">캠페인 및 배송</h2>

          <h3>캠페인 안내</h3>

          <ul>
            <li>
              이 상품은 일정 기간(캠페인 기간)동안 주문된 만큼만 생산하는
              상품이에요.
            </li>
            <li>캠페인 기간 중에만 주문할 수 있어요.</li>
            <li>
              주문된 만큼만 생산하기 때문에 재고를 줄여 환경을 보호할 수 있어요.
            </li>
            <li>
              재고와 비용의 낭비를 줄일 수 있어서 더 저렴한 가격에 상품을 제공할
              수 있어요.
            </li>
          </ul>
          <h3>배송 안내</h3>
          <ul>
            <li>배송비는 무료에요.</li>
            <li>
              캠페인이 종료되면 생산을 시작해요. 생산이 완료되면 바로 배송이
              시작되요.
            </li>
            <li>배송 시작 예정일은 페이지 상단에 표시 되어있어요.</li>
            <li>
              배송이 시작된 후에 2 ~ 5일(영업일) 이내에 상품을 받아볼 수 있어요.
            </li>
            <li>일반 택배(CJ 대한통운)를 통해 배송해요.</li>
          </ul>
          <a
            className="cursor-pointer"
            onClick={() => {
              window.open(
                `${policyGuidePath}`,
                '',
                'popup,width=610,height=700',
              );
            }}
          >
            반품, 교환, 취소 정책 알아보기
          </a>
        </div>,
        <ProductsSignOfTheDeathlyHallowsTShirtBlackTest1ReviewSection />,
      ]}
    />
  );
};

export default ProductsSignOfTheDeathlyHallowsTShirtBlackTest1Sections;
