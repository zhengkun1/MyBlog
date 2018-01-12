/**
 * zhengkun 2017-12-12
 */

import React from 'react';
import { Input, Button } from 'antd';
import { connect } from 'dva';
import styles from './contact.less';

const Contact = ({ dispatch }) => {
  const { TextArea } = Input;
  return (
    <div>
      <div className={styles.div}>
        <img className={styles.img} alt="图片无法加载" src="http://isujin.com/wp-content/uploads/2017/11/wallhaven-37578.jpg" />
      </div>
      <p className={styles.title}>you can contact with me here!</p>
      <div className={styles.contact}>
        <Input className={styles.border} rows={1} placeholder="your name" onChange={e => dispatch({ type: 'contact/name', paload: e })} />
        <Input className={styles.border} rows={2} placeholder="E-Mail" onChange={e => dispatch({ type: 'contact/email', paload: e })} />
        <TextArea className={styles.border} rows={1} placeholder="Message" onChange={e => dispatch({ type: 'contact/message', paload: e })} />
        <Button className={styles.button}>发送</Button>
      </div>
      <div className={styles.word}>CONTACT</div>
    </div>
  );
};

export default connect(({ contact }) => ({ contact }))(Contact);
