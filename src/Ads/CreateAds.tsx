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


function CreateAds_Ant(){
    
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
    <>
      <Form
        labelCol={{ span: 42 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        style={{ maxWidth: 600,
                marginTop : 30,
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

        <Form.Item label="">
          <Button>등록하기</Button>
        </Form.Item>
        
      </Form>
    </>
  );
};


export default CreateAds_Ant;