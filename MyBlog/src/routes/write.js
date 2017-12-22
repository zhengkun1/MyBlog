import React, { PureComponent } from 'react';
import { Row, Col, Pagination } from 'antd';
import styles from '../routes/write.less';
// import default from 'antd/lib/input';

export default class Write extends PureComponent {
  render() {
    const layout = (
      <div>
        <img className={styles.img} alt="图片加载失败" src="http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg" />
        <Row className={styles.essay}>
          <Col span={12} offset={6}>
            <div>文章</div>
          </Col>
        </Row>
        <div className={styles.article}>
          <div style={{ height: '100px', width: '40%', marginRight: '20px' }}>
            <div style={{ fontSize: '20px' }}>Title</div>
            <p style={{ fontSize: '15px' }} className={styles.p}>他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡</p>
          </div>
          <img className={styles.avatarurl} alt="图片无法加载" src="http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg" />
        </div>
        <div className={styles.article}>
          <div style={{ height: '100px', width: '40%', marginRight: '20px' }}>
            <div style={{ fontSize: '20px' }}>Title</div>
            <p style={{ fontSize: '15px' }} className={styles.p}>他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡</p>
          </div>
          <img className={styles.avatarurl} alt="图片无法加载" src="http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg" />
        </div>
        <div className={styles.article}>
          <div style={{ height: '100px', width: '40%', marginRight: '20px' }}>
            <div style={{ fontSize: '20px' }}>Title</div>
            <p style={{ fontSize: '15px' }} className={styles.p}>他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡</p>
          </div>
          <img className={styles.avatarurl} alt="图片无法加载" src="http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg" />
        </div>
        <Pagination defaultCurrent={1} total={50} className={styles.page} />
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
