const actiontypes = () => {
  return {
    products: {
      loading: 'PRODUCTS_LOADING',
      success: 'PRODUCTS_SUCCESS',
      failure: 'PRODUCTS_FAILURE',
    },
    product: {
      clear: 'CLEAR_PRODUCT',
      loading: 'PRODUCT_LOADING',
      success: 'PRODUCT_SUCCESS',
      failure: 'PRODUCT_FAILURE',
      add: 'PRODUCT_ADD',
    } 
  } 
}

export default actiontypes;