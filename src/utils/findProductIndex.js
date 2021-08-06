const findProductIndex = (array, id ) => array.findIndex(({productId}) => productId._id === id ) ;


export {findProductIndex}