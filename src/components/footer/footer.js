import React from "react";
import Button from '@material-ui/core/Button';
import {deleteAllProducts} from '../../store/actions'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products.length !== this.props.products.length) {
      this.setState({
        products: this.props.products
      });
      console.log('footer component did update');
    }
  }

  removeAllProducts = () => {
    const products = [];
    this.props.dispatch(deleteAllProducts());
    this.setState({ products });
  }

  render() {

    const products = this.state.products;
    const amountOfProducts = products.length;
    let priceSum = 0;
    for (let i = 0; i < products.length; i++) {
      priceSum = priceSum + products[i].price;
    }

    priceSum = Math.round(priceSum * 100) / 100;

    const averagePrice = priceSum / amountOfProducts;
    const roundedAveragePrice = Math.round(averagePrice * 100) / 100;
    const deleteButton =  <Button variant="contained" color="primary" onClick={this.removeAllProducts}>
                            delete all products
                          </Button>

    return (
      <div className="footer">
        <p>Amount of products: {amountOfProducts}</p>
        <p>Average price: {roundedAveragePrice}</p>
        <p>Price sum: {priceSum}</p>
        {this.props.isAdmin && deleteButton}
        
      </div>
    );
  }
}