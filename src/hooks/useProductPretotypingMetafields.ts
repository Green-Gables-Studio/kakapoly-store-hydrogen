import {
  PRODUCT_METAFIELD_NAMESPACES,
  PRODUCT_PRETOTYPING_METAFIELDS,
} from '../constants';
import {useProductPageState} from '../providers/product-page-state-provider/ProductPageStateProvider';

export default function useProductPretotypingMetafields() {
  const {product} = useProductPageState();

  if (!product) {
    throw new Error('Expected a ProductProvider context, but none was found');
  }

  const metafields = product.metafields.nodes;

  const pretotyping = metafields?.find((metafield) => {
    return (
      metafield?.namespace === PRODUCT_METAFIELD_NAMESPACES.PRETOTYPING &&
      metafield.key === PRODUCT_PRETOTYPING_METAFIELDS.PRETOTYPING
    );
  });

  const databaseId = metafields?.find((metafield) => {
    return (
      metafield?.namespace === PRODUCT_METAFIELD_NAMESPACES.PRETOTYPING &&
      metafield.key === PRODUCT_PRETOTYPING_METAFIELDS.DATABASE_ID
    );
  });

  const sorryPage = metafields?.find((metafield) => {
    return (
      metafield?.namespace === PRODUCT_METAFIELD_NAMESPACES.PRETOTYPING &&
      metafield.key === PRODUCT_PRETOTYPING_METAFIELDS.SORRY_PAGE
    );
  });

  return {
    pretotyping,
    databaseId,
    sorryPage,
  };
}
