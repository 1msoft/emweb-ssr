const Mock = require('mockjs');
const Random = Mock.Random;

const options = ['公开', '部分公开', '不公开'];
const data = Mock.mock({
  'CheckboxGroup|3': [{
    'label|+1': options,
    'value|+1': 1,
  }],
  'RadioGroup|3': [{
    'label|+1': options,
    'value|+1': 1,
  }],
  title: Random.title(4),
  textarea: Random.paragraph(120)
});

export default data;
