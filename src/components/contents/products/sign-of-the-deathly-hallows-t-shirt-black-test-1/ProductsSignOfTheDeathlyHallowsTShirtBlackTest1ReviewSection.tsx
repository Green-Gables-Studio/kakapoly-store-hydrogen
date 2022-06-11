import React from 'react';
import Icon, {ICON_TYPE} from '../../../icon/Icon';
import StarSolidSVG from '../../../svg/StarSolidSVG';
import StarSVG from '../../../svg/StarSVG';

const StarRating = ({rating}: {rating: number}) => {
  const stars = [];

  for (let i = 0; i < rating; i += 1) {
    stars.push(
      <Icon
        key={i}
        svg={<StarSolidSVG className="fill-emerald-500" />}
        type={ICON_TYPE[20]}
      />,
    );
  }
  for (let j = 0; j < 5 - rating; j += 1) {
    stars.push(
      <Icon
        key={rating + j}
        svg={<StarSVG className="fill-emerald-500" />}
        type={ICON_TYPE[20]}
      />,
    );
  }
  return <div className="flex">{stars}</div>;
};

type Props = {};

const ProductsSignOfTheDeathlyHallowsTShirtBlackTest1ReviewSection = (
  props: Props,
) => {
  return (
    <div className="prose prose-h4:mt-4">
      <h2 className="text-center">리뷰</h2>

      <div>
        <StarRating rating={5} />
        <h4>선명하고 좋아요 :-)</h4>
        <p>
          선명하고 좋아요 :-). 평소에 해리포터 짱 좋아하는 팬인데요 이런 프린팅
          생각보다 찾기 쉽지 않거든요. 생각보다 프린팅이 선명해서 맘에 드네요!
        </p>
        <p className="text-gray-400 text-sm">2022년 5월 28일, 김_은</p>
      </div>
      <hr />

      <div>
        <StarRating rating={5} />
        <h4>너무 좋음</h4>
        <p>원단도 좋음. 너무 마음에 듬.</p>
        <p className="text-gray-400 text-sm">2022년 5월 21일, 김_준</p>
      </div>
      <hr />

      <div>
        <StarRating rating={4} />
        <h4>투명망토 갖고싶다</h4>
        <p>면 안비쳐서 좋아요. 해리포터 굿즈치곤 가격 나쁘지 않은것 같다요</p>
        <p className="text-gray-400 text-sm">2022년 5월 14일, 레__카</p>
      </div>
      <hr />

      <div>
        <StarRating rating={5} />
        <h4>선물하기 딱 좋네요!</h4>
        <p>짱짱 귀여운 해리포터 선물이에여! 사이즈는 살짝 넉넉한 느낌이에요</p>
        <p className="text-gray-400 text-sm">2022년 5월 13일, 백_주</p>
      </div>
    </div>
  );
};

export default ProductsSignOfTheDeathlyHallowsTShirtBlackTest1ReviewSection;
