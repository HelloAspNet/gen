import React, {Component} from 'react';

class Mod extends Component {
  constructor(props) {
    super(props);
  }

  //renderHash() {
  //  return [];
  //}
  //
  //renderProductLink() {
  //  return this.props.productList.map((v, i) => <ProductLink classId={i + 1}/>)
  //}

  render() {
    return (
      <div className="kmod kmod">
        {/*<!--锚点-begin-->*/}
        {/*<!--锚点-end-->*/}
        <div className="kmod-bd">
          {/*<!--红包-begin-->*/}
          <div className="kmod-coupon"><a href="javascript:;" className="kmod-coupon-btn"></a></div>
          {/*<!--红包-end-->*/}
          {/*<!--链接-begin-->*/}
          { this.props.value }
          {/*<!--链接-end-->*/}
        </div>
      </div>
    );
  }
}

//Mod.defaultProps = {
//  productList: []
//};

export default Mod;