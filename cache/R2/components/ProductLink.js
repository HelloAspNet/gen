import React, {Component} from 'react';

class ProductLink extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <a className="kmod-plink"
         style={{
          top: px(this.props.top),
          left: px(this.props.left),
          width: px(this.props.width),
          height: px(this.props.height)
         }}
         href={this.props.link}
         target={this.props.target}>{this.props.text}</a>
    );
  }
}

ProductLink.defaultProps = {
  link: '',
  text: '',
  target: '_blank',
  top: 0,
  left: 0,
  width: 0,
  height: 0
};

function px(num) {
  return num + 'px';
}

export default ProductLink;