import React from "react";
import Product from './product.js'
import {deleteProduct} from '../../store/actions'

export default class ListOfProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.setState({
        products: this.props.products
      });
    }
  }

  onRemoveItem = () => {
    let products = this.state.products;
    products = products.filter((item) => item.id != event.target.id);
    // console.log("List");
    // console.log(event);
    this.props.dispatch(deleteProduct(event.target.id));
    this.setState({ products });
  }

  render() {
    const products = this.state.products;
    
    if (!products.length) {
      return <p>list of products is empty</p>
    }

    return (
      <div>
        <h3>List of products</h3>
        {products.map(product =>
          <Product 
            key={product.id} id={product.id} title={product.title} 
            price={product.price} image={product.image} isAdmin={this.props.isAdmin}
            description={product.description} onDeleteItem={this.onRemoveItem} 
          />
        )}

      </div>
    );
  }
}