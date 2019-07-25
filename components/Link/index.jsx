import Router from 'next/router';

/**
 * onClick
 *
 * @param {String} href 路由地址
 * @returns {Function}
 */
function onClick(href) {
  return event => {
    event.preventDefault();
    Router.push(href);
  };
};

const Link = (props) => {
  return (
    <a onClick={onClick}>
      {props.children}
    </a>
  );
};

export default Link;
