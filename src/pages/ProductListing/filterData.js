export default function filterData(
  productList,
  { searchProducts, brandsFilter,categoriesFilter, showOnlyInStock, showFastDelivery, priceRange }
) {
  return productList
    .filter((product) =>
      searchProducts !== ""
        ? product.name.toLowerCase().includes(searchProducts.toLowerCase()) ||
          product.brand
            .toLowerCase()
            .includes(searchProducts.toLowerCase())
        : true
    )
    .filter(({ brand }) => brandsFilter.length > 0 
                            ? brandsFilter.some(name => name.toUpperCase() === brand.toUpperCase())
                            : true
            )
    .filter(({ category }) => categoriesFilter.length > 0 
                            ? categoriesFilter.some(name => name.toUpperCase() === category.toUpperCase())
                            : true
            )
    .filter(({ price }) => price < priceRange)
    .filter(({ inStock }) => (showOnlyInStock ? inStock : true))
    .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true));
}
