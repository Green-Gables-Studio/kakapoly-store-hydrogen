import Layout from '../layout/Layout';
import Content from './components/content/Content';

export default function PagePage({page}) {
  return (
    <Layout>
      <Content page={page} />
    </Layout>
  );
}
