import Mock from 'mockjs';
const Random = Mock.Random;

let len = 20;
const patchs = {
  names: [],
  address: [],
  createTime: [],
  updateTime: [],
};
for (let i = 0; i <= len; i++) {
  patchs.names.push(Random.cname());
  patchs.address.push(Random.county(true));
  patchs.createTime.push(Random.date('yyyy-MM-dd'));
  patchs.updateTime.push(Random.date('yyyy-MM-dd'));
}


const dataSource = {
  'data|20': [{
    'key|+1': 1,
    'name|+1': patchs.names,
    'type|+1': ['gly', 'yk', 'cjgly'],
    'age|18-50': 18,
    'address|+1': patchs.address,
    'createTime|+1': patchs.createTime,
    createAt: '超级管理员',
    'updateTime|+1': patchs.updateTime,
    'updateAt': '超级管理员',
  }],
  'roleType|3': [{
    'title|+1': ['gly 管理员', 'yk 游客', 'cjgly 超级管理员'],
    'value|+1': ['gly', 'yk', 'cjgly'],
  }]
};

const mock = Mock.mock(dataSource);
export default mock;
