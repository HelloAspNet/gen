import React from 'react';
import ReactDOM from 'react-dom';
import ES6Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
import co from 'co';
import Q from 'q';

ES6Promise.polyfill();

import ProductLink from './components/ProductLink';
import Region from './components/Region';

console.log(ProductLink, Region)


function renderMods() {

  let list = [
    {},
    {}
  ];

  return list.map((v, i) => <Mod key={i} classId={i + 1}/>);
}

function wrapperMod(el){
  return (
    <div className="kmod">
      <div className="kmod-bd">
        {el}
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="kmods kstate-debug">
          <div className="kmod-header"></div>
          <div className="kmod-navs"></div>
          <div className="kmod-body">
            <div className="kmod-body-bgs"></div>
            <div className="kmod-body-links" ref="regionTarget">
              <ProductLink width={60} height={40}/>
              <ProductLink top="20" left="50" width={60} height={40}/>
              <ProductLink width={60} height={40}/>
            </div>
          </div>
          <div className="kmod-footer"></div>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
