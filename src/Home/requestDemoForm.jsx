import React from 'react';
import { Form, Select, Input, Button, Result } from 'antd';

const { Option } = Select;

const FORM_SERVER_URL = "https://formcarry.com/s/qeotnDHlycn";


class DemoForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSubmitted: false
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            let context = this;

            if (!err) {
                fetch(
                    FORM_SERVER_URL,
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',

                        },
                        body: JSON.stringify(values),

                    })
                    .then(function (response) {
                        context.setState({isSubmitted: true})
                        console.log(response);
                        return response;
                    }).catch(function (error) {
                    console.log(error);
                    return {ok: false, msg: error};
                });

                console.log('Received values of form: ', data);
            }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        return (

                this.state.isSubmitted ?
        <Result
            status="success"
            title="Successfully requested for the demo"
            subTitle="We will get back to you soon with the details"
        />:

        <Form labelCol={{span: 5}} wrapperCol={{span: 12}} onSubmit={this.handleSubmit}>
            <Form.Item label="Name">
                {getFieldDecorator('name', {
                    rules: [{required: true, message: 'Please mention your full name!'}],
                })(<Input/>)}
            </Form.Item>
            <Form.Item label="Email">
                {getFieldDecorator('email', {
                    rules: [{required: true, message: 'Please mention your email!'}],
                })(<Input/>)}
            </Form.Item>
            <Form.Item label="Phone">
                {getFieldDecorator('phone', {
                    rules: [{required: false, message: 'Please provide your contact details!'}],
                })(<Input/>)}
            </Form.Item>
            <Form.Item label="Organization">
                {getFieldDecorator('organization', {
                    rules: [{required: false, message: 'Please mention your organization name!'}],
                })(<Input/>)}
            </Form.Item>

            <Form.Item wrapperCol={{span: 12, offset: 5}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

        );
    }
}

const WrappedDemoForm = Form.create({ name: 'coordinated' })(DemoForm);

export default WrappedDemoForm;
