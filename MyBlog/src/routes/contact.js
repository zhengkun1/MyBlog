import React, { PureComponent } from 'react';
// import { Icon } from 'antd';
import { connect } from 'dva';
import styles from './contact.less';


class Contact extends PureComponent {
  componentDidMount() {
    // this.props.dispatch({
    //   type: 'global/self',
    // });
  }
  render() {
    // const { aaa } = this.props;
    // console.log(aaa.payload);
    const layout = (
      <div>
        <div className={styles.div}>
          <img className={styles.img} alt="图片无法加载" src="http://isujin.com/wp-content/uploads/2017/11/wallhaven-37578.jpg" />
        </div>
        <div>{}</div>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
export default connect()(Contact);
