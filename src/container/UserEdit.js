import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button, Select, } from 'antd';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css'
import '../css/useredit.css'
import { putInfo } from '../api/axios'
const { Option } = Select
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



function UserEdit() {


  const dispatch = useDispatch()

  let { id } = useParams()
  const person = useSelector(state => state.person)

  const editPerson = person.filter(person => person.id === id)

  const { firstName, lastName, sex, age } = editPerson[0]



  function onFinish(users) {
    const data = { id, ...users }
    console.log(users);
    dispatch({ type: 'editperson', data })
    putInfo(id, users)
    console.log(data);

    window.history.back()
  };

  return (

    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'firstName']}
        label="Firstname"

        initialValue={firstName}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'lastName']}
        label="Lastname"

        initialValue={lastName}

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
        initialValue={age}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={['user', 'sex']}
        label="Gender"

        initialValue={sex}
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



export default UserEdit



