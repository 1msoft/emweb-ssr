import React from 'react';
import { Form } from '@1msoft/kant-ui';
import { renderFormItems } from '@utils/formHelper';

const { FormLayout, FormItem } = Form;
const text = '';

const useHookState = (props) => {
  const dataSource = [
    {
      title: '目标描述', name: 'desc1', type: 'text-area',
      inputProps: {
        placeholder: '请输入目标描述内容',
        style: { height: 88 }
      },
    },
    {
      title: '目标描述', name: 'desc2', type: 'text-area',
      inputProps: {
        placeholder: '请输入目标描述内容',
        style: { height: 88 }
      },
      formItemProps: {
        validateStatus: 'warning',
        hasFeedback: true,
        required: true,
        wrapperClassName: 'text-area-warning'
      },
      options: {
        rules: [
          { required: true, message: '请输入目标描述' }
        ]
      }
    },
    {
      title: '目标描述', name: 'desc3', type: 'text-area',
      inputProps: {
        placeholder: '请输入目标描述内容',
        style: { height: 88 }
      },
      options: {
        initialValue: text,
      }
    },
    {
      title: '目标描述', name: 'desc4', type: 'text-area',
      inputProps: {
        placeholder: '请输入目标描述内容',
        style: { height: 88 }
      },
      options: {
        initialValue: text,
      }
    },
    {
      title: '目标描述', name: 'desc5', type: 'text-area',
      inputProps: {
        placeholder: '请输入目标描述内容',
        style: { height: 88 }
      },
      options: {
        initialValue: text,
      }
    },
  ];
  return { dataSource };
};

const TextAreaForm = (props) => {
  const state = useHookState(props);
  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      {renderFormItems(state.dataSource, props, props.config)}
    </div>
  );
};

export default TextAreaForm;
