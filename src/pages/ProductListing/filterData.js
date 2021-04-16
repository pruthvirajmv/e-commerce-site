export default function filterData(
  productList,
  { searchProducts, showOnlyInStock, showFastDelivery, priceRange }
) {
  return productList
    .filter((product) =>
      searchProducts !== ""
        ? product.name.toLowerCase().includes(searchProducts.toLowerCase()) ||
          product.adjective
            .toLowerCase()
            .includes(searchProducts.toLocaleLowerCase())
        : true
    )
    .filter(({ price }) => price < priceRange)
    .filter(({ inStock }) => (showOnlyInStock ? inStock : true))
    .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true));
}
