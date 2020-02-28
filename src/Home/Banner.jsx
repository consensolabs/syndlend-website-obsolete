import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import { Element } from 'rc-scroll-anim';
import BannerImage from './BannerImage';
import { assets } from './data';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  }
  static defaultProps = {
    className: 'banner',
  }
  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <Element component="section" className={`${className}-wrapper page`} onChange={navToShadow}>
        <div className={className}>
          <div className={`${className}-img-wrapper`}>
            {isMobile ?
              <img width="100%" src={`${assets}/image/home/intro-landscape-3a409.svg`} alt="" />
              :
              <BannerImage />}
          </div>
          <QueueAnim
            type={isMobile ? 'bottom' : 'right'}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <h1 key="h1">SyndLend</h1>
            <p className="main-info" key="p">
             DLT based syndicated loan platform to create a speedy, cost efficient,
                transparent, dis-intermediated, yet compliant system.
                Read more about it in our white paper.
            </p>
            <a target="_blank" href='https://syndlend.com/syndlend-whitepaper-v1.pdf' key="a">
              <Button type="primary">
                White Paper
              </Button>
            </a>

          </QueueAnim>
        </div>
      </Element>
    );
  }
}

export default Banner;
