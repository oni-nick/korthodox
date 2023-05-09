import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";

const { Option } = Select;

type Currency = "ads" | "krw";

interface PriceValue {
  number?: number;
  currency?: Currency;
}

interface PriceInputProps {
  value?: PriceValue;
  onChange?: (value: PriceValue) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState<Currency>("ads");

  const triggerChange = (changedValue: {
    number?: number;
    currency?: Currency;
  }) => {
    onChange?.({ number, currency, ...value, ...changedValue });
  };

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(e.target.value || "0", 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!("number" in value)) {
      setNumber(newNumber);
    }
    triggerChange({ number: newNumber });
  };

  const onCurrencyChange = (newCurrency: Currency) => {
    if (!("currency" in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({ currency: newCurrency });
  };

  return (
    <span>
      <Input
        type="number"
        value={value.number || number}
        onChange={onNumberChange}
        style={{ width: 200 }}
      />
      <Select
        value={value.currency || currency}
        style={{ width: 80, margin: "0 8px" }}
        onChange={onCurrencyChange}
      >
        <Option value="ads">ADS</Option>
        <Option value="krw">KRW</Option>
      </Select>
    </span>
  );
};
const onFinish = (values: any) => {
    console.log("Received values from form: ", values);
  };

  const checkPrice = (_: any, value: { number: number }) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Price must be greater than zero!"));
  };


function Withdraw_Btn(){
    return(
            <Form
              name="customized_form_controls"
              layout="inline"
              onFinish={onFinish}
              initialValues={{
                price: {
                  number: 0,
                  currency: "ads"
                }
              }}
            >
              <Form.Item name="price" label="출금 금액" rules={[{ validator: checkPrice }]}>
                <PriceInput />
              </Form.Item>
            </Form>
    );
}

export default Withdraw_Btn