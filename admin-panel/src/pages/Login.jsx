import { LoadingOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Alert, Button, Divider, Form, Input } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import useTimeout from '../hooks/useTimeout';
import ApiService from '../utils/apiService';
import { setSessionUserAndToken } from '../utils/authentication';

function Login() {
  window.document.title = 'Login';
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  // timeout callback to clear the error message
  const [timeout] = useTimeout(() => {
    setErrMsg('');
  }, 2000);

  timeout();

  // function to handle user login
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await ApiService.post('/api/v1/auth/login?loginType=admin', values);
      console.log('API response:', response);
  
      if (response?.result_code === 0) {
        setSessionUserAndToken(response?.result?.data, response?.access_token, response?.refresh_token);
        window.location.href = '/main/dashboard';
      } else {
        setErrMsg('Sorry! Something went wrong. App server error');
      }
    } catch (error) {
      // Log error details for debugging purposes
      console.error('Login failed:', error);
  
      // Display user-friendly error message
      const errorMessage = error?.response?.data?.result?.error || 'Sorry! Something went wrong. Please try again.';
      setErrMsg(String(errorMessage));
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section className='flex flex-col h-screen items-center justify-center'>
      <div className='w-[90%] md:w-[450px]'>
        <Link to='/'>
          <img
            className='w-[280px] h-[65px] mx-auto'
            alt='beach-resort-logo'
            src={Logo}
          />
        </Link>

        <Divider className='!mb-10'>LOGIN AUTHORIZED USER ONLY</Divider>
        {errMsg && <Alert message={errMsg} type='error' className='!text-center' />}

        <Form
          name='beach-resort-login'
          className='login-form mt-5'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size='large'
        >
          <Form.Item
            name='email'
            rules={[{
              type: 'email',
              required: true,
              message: 'Please input your Email!'
            }]}
          >
            <Input
              prefix={<MailOutlined className='site-form-item-icon mr-2' />}
              placeholder='Enter here your Email'
            />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{
              required: true,
              message: 'Please input your Password!'
            }]}
          >
            <Input.Password
              prefix={<LockOutlined className='site-form-item-icon mr-2' />}
              placeholder='Enter here your Password'
              type='password'
            />
          </Form.Item>

          {/* FORM SUBMIT BUTTON */}
          <Form.Item>
            <Button
              className='login-form-button mt-5'
              disabled={loading}
              loading={loading}
              htmlType='submit'
              type='primary'
              block
            >
              {loading ? <LoadingOutlined /> : 'Login'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}

export default React.memo(Login);
