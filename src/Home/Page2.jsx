import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import banner from './static/images/syndlend-catalog.png';
import {assets} from "./data";

export default function Page2() {
  return (
    <OverPack component="section" className="page-wrapper page2">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="page"
      >
        <h2 key="title">Our Solution</h2>

        <span key="line" className="separator" />
        <QueueAnim type="bottom" className="info-content" key="content">

            <p className="main-info" key="1">SyndLend is a sophisticated solution to the predicaments of the existing syndicated loan market by building an ecosystem of banks and other financial institutions by utilizing the capability of DLT.</p>
            <br/>
            <img  width="50%" height={"90%"} src={banner} alt="" />
            <br/> <br/>

            <div key="comment" className="comment">
            <img src={`${assets}/image/home/comments-leftpad-abd23.svg`} alt="" />
            A loan syndicated platform supported by distributed ledger technology is expected to revolutionize lending/ borrowing activity to drive economic change on a global scale as the transactions undertaken on the platform are immutable, transparent, trusted in the trustless atmosphere, secure and fastand  fast with easy, but with authorized accessibility.
            </div>
        </QueueAnim>
      </QueueAnim>
    </OverPack>);
}
