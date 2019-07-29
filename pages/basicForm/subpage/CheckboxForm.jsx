import React from 'react';
import { Form, Input, Checkbox } from '@1msoft/kant-ui';
import { Radio } from 'antd';

const { FormLayout, FormItem } = Form;
const getGrid = FormItem.getGrid;

const CheckboxForm = (props) => {
  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <FormLayout
        colon={true}>
        <FormItem
          row={1}
          span={getGrid(24)}
          label="单选"
          labelClassName="font-size-16">
          <div>
            <Radio.Group defaultValue={3}>
              {
                props.RadioGroup.map(item =>
                  <Radio key={item.value} value={item.value}>{item.label}</Radio>)
              }
              
            </Radio.Group>
          </div>
          <div>
            <Input placeholder="公开给" />
          </div>
        </FormItem>
        <FormItem
          row={2}
          span={getGrid(24)}
          label="多选"
          labelClassName="font-size-16">
          <Checkbox.Group
            options={props.CheckboxGroup}
            defaultValue={["2", "4"]} />
        </FormItem>
      </FormLayout>
    </div>
  );
};

export default CheckboxForm;
