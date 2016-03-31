import React, {Component} from 'react';

class BrandLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="kmod-blink kmod-blink{this.props.classId}" href="javascript:;"></a>
    );
  }
}

export default BrandLink;