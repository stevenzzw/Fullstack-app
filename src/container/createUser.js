import React, { Component } from 'react';
import { Form, Input, InputNumber, Button,Select, } from 'antd';
import 'antd/dist/antd.css'
import { useDispatch } from 'react-redux';
import {postInfo} from '../api/axios'
import { nanoid } from 'nanoid';
const {Option} =Select
const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 4,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */


function CreateUser() {

  const dispatch = useDispatch()


  function onFinish(users) {
    const newUser={...users.user,id:nanoid()}
    dispatch({type:'addperson',data:newUser})
    postInfo(newUser)
  
    window.location.href='http://localhost:3000/'
 // window.history.back()


  };

  return (

    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'firstName']}
        label="Firstname"

    
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'lastName']}
        label="Lastname"

     

      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
     
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={['user', 'sex']}
        label="Gender"

      
      >
        <Select >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};



export default CreateUser

