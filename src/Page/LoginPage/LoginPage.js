import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { userServ } from '../../service/userService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_USER_LOGIN } from '../../redux/constant/userConstant';
import { localUserServ } from '../../service/localService';
import Lottie from "lottie-react";
import login_animate from '../../asset/animate_login.json';
import { setLoginAction, setLoginActionService } from '../../redux/action/userAction';

//vì hook chỉ dùng đc trong function chứ ko dùng đc trong class nên phải đẩy 2 hàm onFinish à onFinishFailed vào hàm LoginPage (sẽ dùng hook trong 2 hàm này) 
const LoginPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    userServ.login(values)
      .then((res) => {
        message.success("Đăng nhập thành công");
        // đưa thông tin lên redux
        dispatch(setLoginAction(res.data.content));
        // lưu data từ form xuống local storage
        localUserServ.set(res.data.content);
        // chuyển hướng user về home page
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại")
        console.log(err);
      });
  };
  const onFinishThunk = (values) => {
    let handleSuccess = () => {
      message.success("Đăng nhập thành công");
      navigate("/");
    }
    dispatch(setLoginActionService(values, handleSuccess));
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="w-screen h-screen p-20 bg-orange-400 flex justify-center items-center">
      <div className="container p-20 bg-white rounded-lg flex">
        <div className="w-1/2 h-full">
          <Lottie animationData={login_animate} loop={true} />
        </div>
        <div className="w-1/2 h-full">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            className='w-full'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinishThunk}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
          >
            <Form.Item
              label="Username"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 24,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
