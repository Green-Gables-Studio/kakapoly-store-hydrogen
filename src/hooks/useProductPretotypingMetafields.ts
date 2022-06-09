import {useProduct} from '@shopify/hydrogen';
import {ParsedMetafield} from '@shopify/hydrogen/dist/esnext/types';
import {
  PRODUCT_METAFIELD_NAMESPACES,
  PRODUCT_PRETOTYPING_METAFIELDS,
} from '../constants';

export default function useProductPretotypingMetafields() {
  const product = useProduct();

  if (!product) {
    throw new Error('Expected a ProductProvider context, but none was found');
  }

  const metafields = product.metafields as (ParsedMetafield | undefined)[];

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
