import React from 'react';
import {addProduct} from '../../store/actions'

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      submit: ''
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submit: true });
    const {title, description, price} = this.state;

    let result = this.verifyForm(title, description, price);
    
    if (!result.verify){
      alert(result.error);
      event.preventDefault();
      return;
    }

    const newId = this.createNewId(this.props.products);

    const product = {
      id: newId,
      title,
      description,
      price: Number(price),
    }
    this.props.dispatch(addProduct(product));    
  }

  verifyForm = (title, description, price) => {
    let verify = true;
    let error = '';
    if (title.length<3){
      error+='title is too short ';
      verify = false;
    }
    if (description.length<3){
      error+='description is too short ';
      verify = false;
    }
    if (!Number(price)){
      error+='price is not a number ';
      verify = false;
    }
    return {verify, error};
  }

  createNewId = (products) => {
    let maxId=1;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id >= maxId){
        maxId=products[i].id+1;
      }
      console.log(i, maxId);
    }
    return maxId;
  }

  render() {
    if (!this.props.isAdmin){
      return <p>Access denied!</p>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p> title:</p>
            <input type="text" name="title" value={this.state.input} onChange={this.handleChange} />
          <p> description:</p>
            <input type="text" name="description" value={this.state.input} onChange={this.handleChange} />
          <p> price:</p>
            <input type="text" name="price" value={this.state.input} onChange={this.handleChange} />
          <br/>
          <button type='submit'>Add product</button>
        </form>

        <h1>{this.state.submit && this.state.input}</h1>

      </div>
    );
  }
};

