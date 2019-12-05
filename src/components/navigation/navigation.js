import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.css';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = { expanded: false };
  }

  onToggleButtonClick() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render() {
    return (
      <div>
        <button className="menu" onClick={this.onToggleButtonClick.bind(this)}></button>
        {this.state.expanded && this.renderDrawer()}
      </div>
    );
  }

  renderDrawer() {
    return (
      <div className="menu">
      <ul>
        <Link to='/'>
          <li>List of products</li>
        </Link>
        <Link to='/add'>
          { this.props.isAdmin && <li>Add product</li>}
        </Link>
       
      </ul>
    </div>
    );
  }
}
