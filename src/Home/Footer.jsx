import React from 'react';
import { Row, Col } from 'antd';
import { footer } from './data';


import logo from './static/images/logo-without-text.png';

function antCloudFooter() {
    const children = footer.map((item, i) => (<div key={i}><a href={item.src}>{item.text}</a></div>));
    return (<div>
            <div className="logo" key="logo">
                <img src={logo} width="120" height="82" />
            </div>
            <div key="nav" className="home-footer-nav-wrapper">
                {children}
            </div>
        </div>
    );
}

function Footer() {
  return (
    <footer id="footer" className="dark">
        <div className="home-layout-wrapper home-footer-wrapper">
            <div className="home-layout">
            </div>
        </div>
      <Row className="bottom-bar">
          <span style={{ alignItems: 'center' }}>Copyright ©{new Date().getFullYear()} Consenso Labs</span>
      </Row>
    </footer>
  );
}


export default Footer;
