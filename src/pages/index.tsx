import React from 'react';
import styles from './index.less';
import API from '@/services';

API.basketballMatchInstants({
  type: 1,
  eventIds: '',
}).then(data => {
  console.log(data);
});

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};
