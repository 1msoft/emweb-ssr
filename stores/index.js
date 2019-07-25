import React, { createContext } from "react";
import { observable } from 'mobx';
import { useLocalStore } from "mobx-react-lite";
import App from "./appFrame";
import Request from "./request";
import Modal from "./modal";
import MenuStatus from "./menuStatus";

const StoreContext = createContext(null);

/**
 * 全局store
 *
 * @class Store
 */
class Store {
  @observable app = new App()
  @observable modal = new Modal()
  @observable request = new Request()
  @observable menuStatus = new MenuStatus();
}

const useStore = () => {
  const store = React.useContext(StoreContext);
  return store;
};

/**
 * 全局store注入
 *
 * @param {*} props
 * @returns
 */
function InjectStoreContext(props) {
  const store = useLocalStore(() => (new Store()));
  return (
    <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>
  );
}

export { InjectStoreContext, StoreContext, useStore, Store };
