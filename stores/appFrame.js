import { observable } from 'mobx';

/**
 * 全局 store
 */
class AppStore {
  @observable user = {};
}

export default AppStore;
