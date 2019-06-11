import React from 'react';
import { Button } from 'antd';

export default function Header(props) {
  return (
    <header {...props}>
      <a className="logo-wrapper">
        <i className="logo" />

      </a>
      <div className="button">
          <a href="https://consensolabs.com" target={'blank'}><Button>About Us</Button></a>
      </div>
    </header>
  );
}
