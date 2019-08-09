import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Modal, Form } from 'antd';
import { page1 } from './data';
import WrappedDemoForm from './requestDemoForm';

export default class Page1 extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {showDemoModal: false }

        this.children = page1.map((card, i) => (
            <Col className="card-wrapper" key={i.toString()} md={8} xs={24}>
                {i === 0 ?
                    <a className="card" onClick={() => {this.showDemoModal()}}>
                        <h3>{card.title}</h3>
                        <img src={card.img} alt="" className="card-img-top"/>
                        <div className="card-body">
                            <span className="description text-secondary">{card.description}</span>
                        </div>
                    </a>:
                    <a className="card" href={card.href}>
                        <h3>{card.title}</h3>
                        <img src={card.img} alt="" className="card-img-top"/>
                        <div className="card-body">
                            <span className="description text-secondary">{card.description}</span>
                        </div>
                    </a>
                }
            </Col>
        ));
    }


    showDemoModal(){

        this.setState({
            showDemoModal: true,
        });
    }

    handleOk = e => {
        console.log(e);
        this.setState({
            showDemoModal: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            showDemoModal: false,
        });
    };


  render() {
      return (
          <section className="page-wrapper page1">
              <QueueAnim
                  component={Row}
                  type="bottom"
                  className="page row text-center"
                  delay={500}
              >
                  {this.children}
              </QueueAnim>
              <Modal
                  title="Request for the SyndLend demo"
                  visible={this.state.showDemoModal}
                  footer={null}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
              >
                     <WrappedDemoForm />
              </Modal>
          </section>);
  }
}
