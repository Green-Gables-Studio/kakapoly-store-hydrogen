import React from 'react';
import dayjs from 'dayjs';
import ko from 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';
import timezone from 'dayjs/plugin/timezone';

dayjs.locale({
  ...ko,
  weekStart: 1,
});
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekday);

const now = dayjs().tz('Asia/Seoul');

// 매주 월요일 00:00 시작
const campaignStartTime = now.weekday(0).startOf('day');

// 매주 일요일 24:00 종료
const campaignEndTime = now.weekday(6).endOf('day');

// 종료일 기준 다다음주 월요일. (다음주 일요일 다음날.)
const estimatedShippingStartTime = campaignEndTime
  .add(1, 'week')
  .add(1, 'day')
  .startOf('day');

type Props = {};

const ProductsSignOfTheDeathlyHallowsTShirtBlackTest1DetailDescription = (
  props: Props,
) => {
  const remainingDaysUntilCampaignEndTime = campaignEndTime.diff(now, 'day');

  return (
    <div className="prose prose-a:text-gray-500 prose-a:text-sm prose-a:underline">
      <h4>캠페인</h4>
      {remainingDaysUntilCampaignEndTime > 0 ? (
        <p>
          주문 종료까지{' '}
          <strong className="text-emerald-500">
            {campaignEndTime.diff(now, 'day')}일
          </strong>{' '}
          남았어요.
        </p>
      ) : (
        <p>
          <strong className="text-emerald-500">오늘 밤 12시</strong>에 주문이
          마감돼요.
          {/* <>TODO: 자정까지 카운트다운 타이머 추가하기</> */}
        </p>
      )}

      <ul>
        <li>
          캠페인 기간:{' '}
          <strong>
            {campaignStartTime.format('M월 D일')} ~{' '}
            {campaignEndTime.format('M월 D일')}
          </strong>
        </li>
        <li>
          환경을 보호하고 가격을 낮추기 위해 주문된 만큼만 생산하는 상품이에요.
        </li>
      </ul>

      <hr />
      <h4>배송</h4>
      <p>
        지금 주문하면{' '}
        <strong className="text-emerald-500">
          {estimatedShippingStartTime.format('M월 D일')} 경
        </strong>
        에 배송이 시작돼요.
      </p>
      <ul>
        <li>
          배송비는 <strong>무료</strong>에요.
        </li>
      </ul>
    </div>
  );
};

export default ProductsSignOfTheDeathlyHallowsTShirtBlackTest1DetailDescription;
