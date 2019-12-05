import { connect } from 'react-redux';
import AddProduct from '../addProduct/addProduct';

const mapStateToProps = (state) => {
  return state;
}

const WrappedAddProduct = connect(mapStateToProps)(AddProduct);
export default WrappedAddProduct;