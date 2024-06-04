import React from 'react'
import { Input, Button, Space, Checkbox, Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import './Login.less'
export default function Login() {
    const navigate = useNavigate()
    function toRegister() {
        navigate("/register")
    }
    const onFinish = (values) => {
        console.log('Success:', values);
        const {username,password} = values
        if(username.trim() === "张三" && password.trim() === "123456"){
            navigate("/main/about")
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login clearfix">
            <div className="login-card">
                 <div className="title">
                    登录
                </div>

                <Form className='form-box' name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input className='input-bar'   type="text" placeholder="请输入用户名"></Input>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password  className='input-bar' type="password" placeholder="请输入密码" />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            span: 16,
                        }}
                    >
                        <Button  htmlType="submit" className="login-button" >登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
                    </Form.Item>
                    <div className="bottom-link">
                        <div className="to-register" onClick={toRegister}>
                            注册
                        </div>
                        <div className="no-password">
                            忘记密码
                        </div>
                    </div>
                    <div className="bottom-text">
                        登录即代表您同意《用户协议》和《隐私协议》
                    </div>
                </Form>

            </div>
        </div>
    )
}
