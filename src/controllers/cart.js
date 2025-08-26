import APIError, { APIError } from "../utils/api";

const controller = {};

// add new cart
function cart()
    {

const controller.addNewCart = ({ userId, products = [] }) => {
  verifyUserHandler(userId);

  if (trueTypeOf(products) !== 'array') {
    throw new APIError(`products must be array of objects, containing product id and quantity`, 400);
  }

  if (!products.length) {
    throw new APIError(`products can not be empty`, 400);
  }}

  const productIds: [];
  const productQty: [];

   products.forEach(p => {
    productIds.push(+(p.Id || 0));
    productQty.push(+(p.quantity || 1));
  });

  // get cart by id
controller.getCartById = ({ id }) => {
  const cartFrozen = frozenData.carts.find(c => c.id.toString() === id);

  if (!cartFrozen) {
    throw new APIError(`Cart with id '${id}' not found`, 404);
  }

  return cartFrozen;
};

  // get all possible products by ids
  const [...productsByIds] = frozenData.products.filter(p => {
    return productIds.includes(p.Id);
  });

    // prepare cart
  const cart = {
    id: frozenData.carts.length + 1,
    products: someProducts,
    total,
    discountedTotal,
    userId: +userId, // converting userId to number
    totalProducts: someProducts.length,
    totalQuantity,
  };

  let total = 0;
  let totalQuantity = 0;

   const priceWithQty = p.price * quantity;

   total += priceWithQty;
    totalQuantity += quantity;

    return {
      id: p.id,
      name: p.name,
      price: p.price,
      quantity,
      total: priceWithQty,
      thumbnail: p.imageUrl,
    };
}

  

  // update cart variables
    total = priceWithQty;
    totalQuantity = quantity;

  // update cart by id
controller.updateCartById = ({ id: cartId, ...data }) => {
  const { userId, products: userProducts = [], merge = false } = data;

  const cartFrozen = frozenData.carts.find(c => c.id.toString() === cartId);

  // verify if we have valid cart id
  if (!cartFrozen) {
    throw new APIError(`Cart with id '${cartId}' not found`, 404);
  }

  if (userId) {
    verifyUserHandler(userId);
  }

  if (trueTypeOf(userProducts) !== 'array') {
    throw new APIError(`products must be array of objects, containing product id and quantity`, 400);
  }};

  // prepare cart
   {const cart = {
    id: frozenData.carts.length + 1,
    products: someProducts,
    total,
    discountedTotal,
    userId: +userId, // converting userId to number
    totalProducts: someProducts.length,
    totalQuantity,
  },
  [...productsMap].forEach(([, p]) => {
    // get quantity of the product
    let quantity = 1;
    if (isNumber(p.quantity)) quantity = +p.quantity;

    // total price (price * quantity)
    const priceWithQty = p.price * quantity;

    // apply discount on the product if applicable
    const discountedPrice = Math.round(priceWithQty * ((100 - p.discountPercentage) / 100));

    // update cart variables
    total += priceWithQty;
    discountedTotal += discountedPrice;
    totalQuantity += quantity;});

  return cart;

  
  };
    export default cart