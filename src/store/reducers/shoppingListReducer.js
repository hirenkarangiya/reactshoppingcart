const initialState = {
  cartList: [],
  cartTotalCount: 0,
  cartDiscountCount: 0,
  cartitemCount: 0,
};

function UpdateItemInList(list, command, id, qty) {
  const index = list.findIndex((el) => el.id === id);
  if (command === "addition") {
    list[index].qty += qty;
  } else if (command === "subtract") {
    list[index].qty -= qty;
  }
  return list;
}

function RemoveItemFromList(list, id) {
  return list.filter((item) => item.id !== id);
}

const shoppingListDispatch = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    action.item.qty = action.qty;
    return {
      ...state,
      cartitemCount: state.cartitemCount + action.qty,
      cartList: [...state.cartList, action.item],
      cartTotalCount: state.cartTotalCount + action.price,
      cartDiscountCount: state.cartDiscountCount + action.discount_price,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cartList: RemoveItemFromList(state.cartList, action.id),
      cartitemCount: state.cartitemCount - action.qty,
      cartTotalCount: state.cartTotalCount - (action.actual_price * action.qty),
      cartDiscountCount: state.cartDiscountCount - (action.discount_price * action.qty),
    };
  }

  if (action.type === "UPDATE_ADD_ITEM") {
    return {
      ...state,
      cartList: UpdateItemInList(state.cartList, action.command, action.id, action.qty),
      cartitemCount: state.cartitemCount + action.qty,
      cartTotalCount: state.cartTotalCount + action.actual_price,
      cartDiscountCount: state.cartDiscountCount + action.discount_price,
    };
  }

  if (action.type === "UPDATE_SUBTRACT_ITEM") {
    return {
      ...state,
      cartList: UpdateItemInList(state.cartList, action.command, action.id, action.qty),
      cartitemCount: state.cartitemCount - action.qty,
      cartTotalCount: state.cartTotalCount - action.actual_price,
      cartDiscountCount: state.cartDiscountCount - action.discount_price,
    };
  }

  return state;
};

export default shoppingListDispatch;
