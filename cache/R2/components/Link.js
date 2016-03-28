import React, {Component} from 'react';

class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="kmod-plink kmod-plink{{$i | kToIndex}}" href="javascript:;"></a>
    );
  }
}

export default Link;