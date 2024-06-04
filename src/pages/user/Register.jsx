import React from 'react'
import { Input, Button, message, Space, Checkbox, Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import "./Register.less"

export default function Register() {
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage()
    function toRegister() {
        navigate("/register")
    }
    const onFinish = (values) => {
        console.log('Success:', values);
        const {username,password,confirmPassword} = values
        if (username.trim() == "" || password.trim() == "") {
            alert("用户名和密码不能为空!");
            return;
        }
        if (password != confirmPassword) {
            alert("两次输入的密码不一致!");
            return;
        }
        if (username.length > 8) {
            alert("用户名长度不能超过8个字符!");
            return;
        }
        messageApi.info({
            type:"success",
            content:'注册成功，将要跳转到登录页面'
        });
        setTimeout(() => {
            navigate("/login")
        }, 1000);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        
        <div className="register clearfix">
            {contextHolder}    
            <div className="register-card">
                <div className="title" style={{ marginBottom: "20px" }}>
                    注册
                </div>

                <Form className='form-box' name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} style={{ maxWidth: 600, }}
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
                        {/* <Input style={{ width: "400px", height: "40px", fontSize: "15px" }} type="text" placeholder="请输入输入用户名"></Input> */}
                        <Input className='input-bar' type="text" placeholder="请输入输入用户名"></Input>
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
                        <Input.Password className='input-bar' type="password" placeholder="请输入密码"></Input.Password>
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >

                        <Input.Password  className='input-bar' type="password" placeholder="请再次输出密码"></Input.Password>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            span: 16,
                        }}
                    >
                        <Button htmlType='submit' className="register-button" >注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
                    </Form.Item>
                </Form>

            </div>
            
        </div>
    )
}
