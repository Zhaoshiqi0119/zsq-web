import React, { useState } from 'react'
import { Input, Button, Row, Col, message, Space, Checkbox, Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import './Login.less'
import { userStore } from '../../store/user.ts'
import { useRecoilState } from 'recoil'
export default function Login() {
    const [userData, setUserData] = useRecoilState(userStore)
    const navigate = useNavigate()
    function toRegister() {
        navigate("/register")
    }
    const onFinish = (values) => {
        const { username, password, code } = values
        fetch("http://localhost:9999/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' // 设置请求头以JSON格式发送数据
            },
            body: JSON.stringify({ username, password, code })
        }).then(response => response.json()) // 解析服务器返回的JSON数据
            .then(data => {
                if (data.data.res === "success") {
                    setUserData({
                        username: username,
                    })
                    navigate("/main/about");
                } else {
                    message.error(data.data.message);
                }
            })
            .catch(() => {
                message.error("系统发生错误！");
            });
    };

    const [imageUrl, setImageUrl] = useState('http://localhost:9999/user/code');

    const resetCode = () => {
      // 通过添加时间戳来改变图片的URL，确保每次点击时都会重新请求图片
      const newImageUrl = `${imageUrl}?timestamp=${Date.now()}`;
      setImageUrl(newImageUrl);
    };

    return (
        <div className="login clearfix">
            <div className="login-card">
                <div className="title">
                    登录
                </div>

                <Form className='form-box' name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }}
                    onFinish={onFinish}
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
                        <Input className='input-bar' type="text" placeholder="请输入用户名"></Input>
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
                        <Input.Password className='input-bar' type="password" placeholder="请输入密码" />
                    </Form.Item>
                    <Row>
                        <Col span={16}>
                            <Form.Item
                                name="code"
                                rules={[
                                    {
                                        // required: true,
                                        message: 'Please input your code!',
                                    },
                                ]}
                            >
                                <Input  className='input-bar-code' type="text" placeholder="请输入验证码" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <img className='code-img' src={imageUrl} alt=""  onClick={resetCode}/>
                        </Col>
                    </Row>

                    <Form.Item
                        wrapperCol={{
                            span: 16,
                        }}
                    >
                        <Button htmlType="submit" className="login-button" >登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
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
