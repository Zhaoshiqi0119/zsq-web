import React from 'react'
import { Input, Button, message, Space, Checkbox, Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'antd/es/form/Form'
import "./Register.less"

export default function Register() {
    const [form] = useForm();

    const navigate = useNavigate()
    function toRegister():void {
        navigate("/register")
    }
    const onFinish = (values:any) => {
        console.log('Success:', values);
        let { username, password, confirmPassword } = values
        username = username.trim() 
        password = password.trim()
        confirmPassword = confirmPassword.trim()
        fetch("http://localhost:9999/user/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' // 设置请求头以JSON格式发送数据
            },
            body: JSON.stringify({ username, password, confirmPassword })
        }).then(response => response.json()) // 解析服务器返回的JSON数据
            .then(data => {
                if (data.data.res === "success") {
                    message.success("注册成功，将要跳转到登录页面")
                    setTimeout(() => {
                        navigate("/login")
                    }, 1000);
                } else {
                    message.error(data.data.message);
                }
            })
            .catch(() => {
                message.error("系统发生错误！");
            });

    };




    return (
        <div className="register clearfix">
            <div className="register-card">
                <div className="title" style={{ marginBottom: "20px" }}>
                    注册
                </div>

                <Form className='form-box' form={form} name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} style={{ maxWidth: 600, }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                validator(_, value) {
                                    const trimmedValue = value ? value.trim() : '';
                                    if (trimmedValue.length === 0) {
                                        return Promise.reject(new Error('Required'));
                                    }
                                    if (trimmedValue.length > 8) {
                                        return Promise.reject(new Error('The length cannot exceed 8！'));
                                    }
                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Input className='input-bar' type="text" placeholder="请输入输入用户名"></Input>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                transform: value => value.trim(),
                                required: true,
                                message: '最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符',
                                pattern:/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?. ]).*$/
                            },
                        ]}
                    >
                        <Input.Password className='input-bar' type="password" placeholder="请输入密码"></Input.Password>
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        rules={[
                            {
                                validator: async (_:any, value:string) => {
                                    const confirmPassword = value ? value.trim() : '';
                                    let password = await form.getFieldValue('password');
                                    password = password ? password.trim() : '';
                                    if (confirmPassword && confirmPassword !== password) {
                                        return Promise.reject('两次输入的密码不一致');
                                    }
                                },
                            }
                        ]}
                    >

                        <Input.Password className='input-bar' type="password" placeholder="请再次输出密码"></Input.Password>
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
