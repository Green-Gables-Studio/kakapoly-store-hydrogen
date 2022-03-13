import {Link} from '@shopify/hydrogen/client';

export const GNB_ITEMS = [
  {
    title: '제품',
    to: '/products',
  },
];

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation() {
  return (
    <nav className="hidden lg:block text-center">
      <ul className="md:flex items-center justify-center">
        {GNB_ITEMS.map(({title, to}) => {
          return (
            <li key={to}>
              <Link
                to={to}
                className="block p-4 text-base font-semibold hover:opacity-80"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
