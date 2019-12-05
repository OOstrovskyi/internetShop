import { connect } from 'react-redux';
import Footer from '../footer/footer';

const mapStateToProps = (state) => {
  return state;
}

const WrappedFooter = connect(mapStateToProps)(Footer);
export default WrappedFooter;