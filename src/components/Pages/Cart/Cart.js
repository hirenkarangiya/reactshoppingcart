import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    return (
      <>
        <section className="main row">
          <article className="col-md-8">
            {this.props.cartList.length > 0 ? (
              this.props.cartList.map((item) => {
                console.log(item);
                const { id, name, image, price, discount, qty } = item;
                return (
                  <div className="card mb-3 p-4 cart-items-list" key={id}>
                    <div className="row no-gutters align-items-center">
                      <div className="col-md-2">
                        <img src={image} alt={name} className="img-fluid" />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <h5 className="card-title">{name}</h5>
                          <div className="row align-items-center">
                            <div className="col">
                              <p className="item-price">
                                <span className="actual">
                                  &#8377;{price.actual.toLocaleString()}
                                </span>
                                <span className="display">
                                  <del>
                                    &#8377;{price.display.toLocaleString()}
                                  </del>
                                </span>
                              </p>
                              <p className="item-discount text-green text-bold">
                                {discount}% off
                              </p>
                            </div>
                            <div className="col">
                              <div className="form-row align-items-center">
                                <div className="col-2">
                                  <button
                                    className="qty-btn qty-decrease"
                                    onClick={() =>
                                      this.props.onUpdateCartItemSubtract(
                                        'subtract',
                                        id,
                                        1,
                                        price.actual,
                                        price.display
                                      )
                                    }
                                  >
                                    -
                                  </button>
                                </div>
                                <div className="col" key={qty}>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Quantity"
                                    defaultValue={qty}
                                  ></input>
                                </div>
                                <div className="col-2">
                                  <button
                                    className="qty-btn qty-increase"
                                    onClick={() =>
                                      this.props.onUpdateCartItemAdd(
                                        'addition',
                                        id,
                                        1,
                                        price.actual,
                                        price.display
                                      )
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-3 text-md-center">
                              <button
                                className="btn btn-sm btn-danger px-4"
                                onClick={() =>
                                  this.props.onRemoveItemButtonClick(
                                    id,
                                    qty,
                                    price.actual,
                                    price.display
                                  )
                                }
                              >
                                REMOVE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2>Your cart is Empty</h2>
            )}
          </article>

          <aside className="col-md-4">
            <div className="card">
              <div className="card-header">PRICE DETAILS</div>
              <div className="card-body">
                <p className="card-text">
                  Pice ({this.props.cartitemCount} item): &#8377;{" "}
                  {this.props.cartDiscountCount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </p>

                <p className="card-text">
                  Discount : &#8377;{" "}
                  {(
                    this.props.cartDiscountCount - this.props.cartTotalCount
                  ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </p>
              </div>
              <div className="card-footer text-muted">
                <p>
                  Total Payable : &#8377;{" "}
                  {this.props.cartTotalCount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>
          </aside>
        </section>
      </>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    cartList: store.sl.cartList,
    cartTotalCount: store.sl.cartTotalCount,
    cartDiscountCount: store.sl.cartDiscountCount,
    cartitemCount: store.sl.cartitemCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItemButtonClick: (id, qty, actual_price, discount_price) =>
      dispatch({
        type: "REMOVE_ITEM",
        id: id,
        qty: qty,
        actual_price: actual_price,
        discount_price: discount_price,
      }),
    onUpdateCartItemAdd: (command, id, qty, actual_price, discount_price) =>
      dispatch({
        type: "UPDATE_ADD_ITEM",
        command: command,
        id: id,
        qty: qty,
        actual_price: actual_price,
        discount_price: discount_price,
      }),
    onUpdateCartItemSubtract: (command, id, qty, actual_price, discount_price) =>
      dispatch({
        type: "UPDATE_SUBTRACT_ITEM",
        command: command,
        id: id,
        qty: qty,
        actual_price: actual_price,
        discount_price: discount_price,
      }),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Cart);
