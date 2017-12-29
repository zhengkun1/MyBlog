import React, { PureComponent } from 'react';
// import { Icon } from 'antd';
import { connect } from 'dva';
import styles from './contact.less';
// import default from 'antd/lib/input';
// @connect(state => ({
//   aaa: state.global.essay,
// }))
class Contact extends PureComponent {
  render() {
    const { aaa } = this.props;
    const layout = (
      <div className={styles.div}>
        <img className={styles.img} alt="图片无法加载" src="http://isujin.com/wp-content/uploads/2017/11/wallhaven-37578.jpg" />
        <div>{aaa}</div>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
export default connect(state => ({
  aaa: state.global.essay,
}))(Contact);
