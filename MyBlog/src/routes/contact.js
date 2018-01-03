import React, { PureComponent } from 'react';
import { Input, Button } from 'antd';
import { connect } from 'dva';
import styles from './contact.less';


class Contact extends PureComponent {
  render() {
    const { TextArea } = Input;
    const layout = (
      <div>
        <div className={styles.div}>
          <img className={styles.img} alt="图片无法加载" src="http://isujin.com/wp-content/uploads/2017/11/wallhaven-37578.jpg" />
        </div>
        <div style={{ display: 'flex' }}>
          <div className={styles.Input}>
            <Input placeholder="Name" className={styles.name} />
            <Input placeholder="e-mail" />
          </div>
          <TextArea placeholder="Write you want to say to me!" rows={5} className={styles.textarea} />
        </div>
        <Button>发送</Button>
        <div className={styles.word}>CONTACT</div>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
export default connect()(Contact);
