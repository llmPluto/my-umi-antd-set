import { Redirect } from 'umi';
import React from 'react';
export default (props: { children: {} }) => {
  // const { isLogin } = useAuth();
  let isLogin = true;
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
