import Layout from '../../components/layout/Layout';
import {ProductPageDataProvider} from './ProductPageContext';

export default function ProductPage({data}) {
  return (
    <Layout>
      <ProductPageDataProvider data={data}>Hello</ProductPageDataProvider>
    </Layout>
  );
}
