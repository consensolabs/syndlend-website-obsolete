import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

export default function Page2() {
  return (
    <OverPack component="section" className="page-wrapper page2">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="page"
      >
        <h2 key="title">Features</h2>
        <span key="line" className="separator" />
        <QueueAnim type="bottom" className="info-content" key="content">
          <p className="main-info" key="1">A loan syndicated platform supported by distributed ledger technology is expected to revolutionize lending/ borrowing activity to drive economic change on a global scale as the transactions undertaken on the platform are immutable, transparent, trusted in the trustless atmosphere, secure and fastand  fast with easy, but with authorized accessibility.</p>
          <p className="main-info" key="2"></p>
        </QueueAnim>
      </QueueAnim>
    </OverPack>);
}
