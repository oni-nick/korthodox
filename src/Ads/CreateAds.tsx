import { Link } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';

import React, { useState } from 'react';


function CreateAds(){
    
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  return (
    <div>
      <Form
        labelCol={{ span: 42 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        style={{ maxWidth: 600,
                marginTop : 100,
                marginRight : 100,
                marginBottom : 100,
                marginLeft : 600,
        }}
      >
        <Form.Item label="광고 이름 ">
          <Input />
        </Form.Item>
      
        <Form.Item label="광고 상세 ">
          <TextArea rows={2} />
        </Form.Item>
      
        <Form.Item label="광고 비용">
          <InputNumber />
        </Form.Item>
      
        <Form.Item label="광고 기간 ">
          <RangePicker />
        </Form.Item>
      
        <Form.Item label="광고 이미지" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Link to="/ads" style={{ marginLeft: 200 }}><Button type='default'>취소하기</Button></Link>
        <Button style={{ marginLeft: 10 }}type='primary'>등록하기</Button>
        
        
      </Form>
    </div>
  );
};


export default CreateAds;