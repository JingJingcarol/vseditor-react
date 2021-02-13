import React, { useCallback, useState } from 'react';
import classname from 'classnames';
import { MenuItem } from './type';
import config from './config';
import styles from './index.less';

export default () => {
  const [active, setAction] = useState('');
  const handleMenu = (key: string) => {
    if(key === active) {
      setAction('')
    }else{
      setAction(key)
    }
    
  }
  const renderMenu = useCallback((menu: MenuItem[]) => {
    return menu.map( (m: MenuItem) => (<div key={m.id}>
      <div className={classname({[styles.menuName]:true, [styles.active]: active === m.id})} onClick={() => {handleMenu(m.id)}}>{m.name}</div>
      {m.children && <div className={classname({[styles.subMenu]:true,[styles.show]: active === m.id})}>{renderMenu(m.children)}</div>}
    </div>))
  }, [active])
  return (
    <div className={styles.menu}>
      {renderMenu(config)}
    </div>
  );
}