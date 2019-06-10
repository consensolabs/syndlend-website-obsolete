import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row } from 'antd';
import roadmap from './static/images/road-map.png';

export default function Page6() {
  return (
    <OverPack component="section" className="page-wrapper page5 text-center">
      <QueueAnim
        type="bottom"
        leaveReverse
        className="page"
        key="a"
      >
        <h2 key="h2">Roadmap</h2>
        <span className="separator" key="span" />
        <Row
          className="page text-center"
          key="a"
          style={{paddingBottom: 50}}
        >
            <img width={1100} src={roadmap} alt="" />
        </Row>
      </QueueAnim>
    </OverPack>
  );
}
