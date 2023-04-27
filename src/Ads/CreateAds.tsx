import { Link } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Upload,
} from 'antd';
import axios from 'axios';
import { CreateAdsForm, CreateAdsFormWrapper } from './Styles';
import { RcFile } from "antd/es/upload";

function CreateAds(){
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = async (values: any) => {
    const imageId = values.image[0].response.id;
    const startDate = values.period[0].toISOString();
    const endDate = values.period[0].toISOString();

    const adsData = {
      title: values.title,
      subtitle: values.subtitle,
      imageId,
      startDate,
      endDate,
      price: values.price,
    };

    await axios.post('/api/ads', adsData);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  return (
    <CreateAdsFormWrapper>
      <CreateAdsForm
        labelCol={{ span: 42 }}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
        layout="horizontal"
      >
        <Form.Item name="title" label="광고 이름 ">
          <Input />
        </Form.Item>

        <Form.Item name="subtitle" label="광고 상세 ">
          <TextArea rows={2} />
        </Form.Item>

        <Form.Item name="price" label="광고 비용">
          <InputNumber />
        </Form.Item>

        <Form.Item name="period" label="광고 기간 ">
          <RangePicker />
        </Form.Item>

        <Form.Item name="image" label="광고 이미지" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload
            beforeUpload={beforeUpload}
            action="/api/image"
            listType="picture-card"
            maxCount={1}
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Link to="/ads" style={{ marginLeft: 100 }}><Button type='default'>취소하기</Button></Link>
        <Button style={{ marginLeft: 10 }}type='primary' htmlType="submit">등록하기</Button>
      </CreateAdsForm>
    </CreateAdsFormWrapper>
  );
};


export default CreateAds;