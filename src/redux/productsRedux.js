/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getComparedProducts = ({ products }) =>
  products.filter(product => (product.isCompared ? true : false));
export const getProductById = ({ products }, productId) =>
  products.find(product => product.id === productId);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
export const getDiscountedProducts = ({ products }) =>
  products.filter(item => item.priceOld);
export const getPromoProducts = ({ products }) =>
  products.filter(item => item.promo === 'sale');
export const getProductByTags = ({ products }, tagId) =>
  products.filter(product => product?.tags.includes(tagId));

export const getSortLowPrice = ({ products }) =>
  [...products].sort((a, b) => (a.price > b.price ? 1 : -1));
export const getSortByHighPrice = ({ products }) =>
  [...products].sort((a, b) => b.price - a.price);
export const getSortByZ_A = ({ products }) =>
  [...products].sort((a, b) => b.name.localeCompare(a.name));
export const getSortByA_Z = ({ products }) =>
  [...products].sort((a, b) => a.name.localeCompare(b.name));

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const EDIT_PRODUCT = createActionName('EDIT_PRODUCT');

/* action creators */
export const editProduct = payload => ({ payload, type: EDIT_PRODUCT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case EDIT_PRODUCT: {
      return statePart.map(product =>
        product.id === action.payload.id ? { ...product, ...action.payload } : product
      );
    }
    default:
      return statePart;
  }
}
