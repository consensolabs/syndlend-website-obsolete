import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Team from './Team';
import Roadmap from './Roadmap';
import Footer from './Footer';
import './static/style';
import './less/antMotionStyle.less';
import {
    TeamDataSource,
    RoadmapDataSource,
} from './data';


let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});


class Home extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === 'leave' });
  }
  render() {
    return (
      [
        <Header key="header" className={this.state.showShadow ? 'show-shadow' : ''} />,
        <Banner key="banner" isMobile={this.state.isMobile} navToShadow={this.navToShadow} />,
        <Page2 key="page2" />,
        <Page1 key="page1" />,
        <Page3 key="page3" />,
        <Page4 key="page4" isMobile={this.state.isMobile} />,


        <Roadmap
              id="Content9_0"
              key="Content9_0"
              dataSource={RoadmapDataSource}
              isMobile={this.state.isMobile}
          />,

        <Team
              id="Content8_0"
              key="Content8_0"
              dataSource={TeamDataSource}
              isMobile={this.state.isMobile}
       />,

        <Footer key="footer" />,
        <DocumentTitle title="SyndLend" />,
      ]
    );
  }
}
export default Home;
