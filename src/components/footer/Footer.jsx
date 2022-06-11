import {Link} from '@shopify/hydrogen';

const MENU_SECTIONS = [
  {
    name: '스토어',
    links: [
      {
        label: '홈',
        to: '/',
      },
      {
        label: '모든 제품',
        to: '/collections/all',
      },
    ],
  },
  {
    name: '카테고리',
    links: [
      {
        label: '티셔츠',
        to: '/collections/t-shirts',
      },
    ],
  },
  {
    name: '지원',
    links: [
      {
        label: '고객 지원',
        to: '/pages/contact',
      },
    ],
  },
];

const LEGAL_LINKS = [
  {
    label: '개인정보 처리방침',
    to: '/pages/privacy-policy',
  },
  {
    label: '이용 약관',
    to: '/pages/terms-of-service',
  },
];

// TODO: 페이지가 준비되면 Link prefetch={false} 제거하기
export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="relative bg-white border-t border-b border-black border-opacity-5">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          {MENU_SECTIONS.map((section) => {
            const {name, links} = section;
            return (
              <div key={name}>
                <h2 className="text-md font-semibold uppercase mb-4">{name}</h2>
                <ul className="space-y-4">
                  {links.map((link) => {
                    const {label, to} = link;
                    return (
                      <li key={label}>
                        <Link
                          prefetch={false}
                          to={to}
                          className="text-sm font-medium text-gray-600 hover:text-gray-900"
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
          <div className="text-sm text-gray-600">
            <p>© 2022 Kakapoly Store. All Rights Reserved.</p>
            <br />
            <div>
              {LEGAL_LINKS.map((link) => {
                return (
                  <Link
                    key={link.to}
                    prefetch={false}
                    to={link.to}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                );
              }).reduce((pv, cv, index) => {
                return [pv, <span key={index}> | </span>, cv];
              })}
            </div>
            <br />
            <p>
              대표자: 권혁우 | 주소: 서울특별시 종로구 창경궁로 147-1, 2D1호 |
              전화번호: 070-8064-3301 | E-mail: help@store.kakapoly.com
            </p>
            <p>
              사업자등록번호: 330-22-01289 | 통신판매업신고번호:
              2021-서울강남-06835
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
