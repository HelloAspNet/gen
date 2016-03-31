import React, {Component} from 'react';
import ProductLink from './ProductLink';

class Region extends Component {
  constructor(props) {
    super(props);
  }

  drag(e){
    console.log(e, e.clientX)



    console.log(this)
  }

  render() {
    return (
      <div onMouseDown={this.drag.bind(this)}>
        {this.props.children}

        {t}
      </div>
    );
  }
}

export default Region;