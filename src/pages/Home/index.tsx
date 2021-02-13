import React, { useState } from 'react';
import styles from './index.less';
import fetch from '@/utils/fetchData';

import Header from './components/Header'

export default () => {
  const [text,setText] = useState('')
  fetch({
    url:'/api/123'
  }).then((res: React.SetStateAction<string>) => {
    setText(res)
  })
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Page index {text}</h1>
    </div>
  );
}
