import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "../Button/Button";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingItem: [],
      isLoading: true,
      error: null,
    };
  }

  fetchShoppingList = () => {
    fetch("https://my-json-server.typicode.com/prograk/demo/items")
      .then((response) => response.json())
      .then((data) => {
        let sortby = this.props.sortby;
        let filterrange = this.props.filter;
        let sortdata = [];

        // Price range Filter
        data.map((item) => {
          if (item.price.actual >= filterrange[0] && item.price.actual <= filterrange[1]
          ) {
            return sortdata.push(item);
          }
          return null;
        });

        if (sortby === "hightolow") {
          sortdata = sortdata.sort((a, b) => b.price.actual - a.price.actual);
        }

        if (sortby === "lowtohigh") {
          sortdata = sortdata.sort((a, b) => a.price.actual - b.price.actual);
        }

        if (sortby === "discount") {
          sortdata = sortdata.sort((a, b) => b.discount - a.discount);
        }

        this.setState({
          shoppingItem: sortdata,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error: error, isLoading: false }));
  };

  // Search Input Code
  onSearchHandleChange = (e) => {
    let currentShoppingList = [];
    let newShoppingList = [];

    if(e.target.value !== ""){
      currentShoppingList = this.props.shoppingItem;
      newShoppingList = currentShoppingList.filter( item => {
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();

        return lc.includes(filter);
      });
    } else {
      newShoppingList = this.props.shoppingItem;
    }

    this.setState({
      filtered: newShoppingList
    });
  };

  componentDidMount() {
    this.fetchShoppingList();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.sortby !== this.props.sortby ||
      prevProps.filter !== this.props.filter
    ) {
      this.fetchShoppingList();
    }
  }

  render() {
    const { isLoading, shoppingItem, error } = this.state;

    return (
      <>
        <div className="row shopping_list">
          {error ? <p className="errors">{error.message}</p> : null}
          {!isLoading ? (
            shoppingItem.map((item) => {
              const { id, name, image, price, discount } = item;
              return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
                  <div className="shopping_list-item">
                    <img
                      src={image}
                      className="img-fluid item-thumbnail"
                      alt={name}
                    />
                    <p className="item-name">{name}</p>

                    <div className="item-price-container">
                      <p className="item-price">
                        <span className="actual">
                          &#8377;{price.actual.toLocaleString()}
                        </span>
                        <span className="display">
                          <del>&#8377;{price.display.toLocaleString()}</del>
                        </span>
                      </p>
                      <p className="item-discount text-green text-bold">
                        {discount}% off
                      </p>
                    </div>

                    <div className="text-center mt-2">
                      <Button
                        buttonSize="btn--medium"
                        buttonStyle="btn--rounded"
                        buttonColor="btn--secondary"
                        onClick={() => this.props.onAddToCartClick( item, 1, price.actual, price.display )}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h3 className="col-12 loading_text">Loading...</h3>
          )}
        </div>
      </>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    sortby: store.sb.sortby,
    filter: store.fp.filterbyprice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    onAddToCartClick: (item, qty, price, discount_price) => dispatch({type: "ADD_TO_CART", item: item, qty: qty, price: price, discount_price: discount_price})
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ShoppingList);
