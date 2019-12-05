import { connect } from 'react-redux';
import ListOfProducts from '../listOfProducts/listOfProducts';

const mapStateToProps = (state) => {
  //console.log(state);
  return state;
}

const WrappedListOfProducts = connect(mapStateToProps)(ListOfProducts);
export default WrappedListOfProducts;