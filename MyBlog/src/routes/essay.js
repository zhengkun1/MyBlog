import React, { PureComponent } from 'react';
import { Row, Col, Pagination } from 'antd';
import styles from '../routes/essay.less';
// import default from 'antd/lib/input';
import Essay from '../components/essay';

export default class Write extends PureComponent {
  state = {
    current: 1,
    essay: [
      {
        title: '你好',
        content: '他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡',
        picture: 'http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg',
      },
      {
        title: '你好',
        content: '他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡',
        picture: 'http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg',
      },
      {
        title: '你好',
        content: '他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡',
        picture: 'http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg',
      },
      {
        title: '你好',
        content: '他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡',
        picture: 'http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg',
      },
      {
        title: '你好',
        content: '他们可能和你我一样。没房子，没钱。没对象。z爱办公室里被老板逼业绩，过年回老家被逼婚，她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好，“甜食可以让人心情愉快”——她这样解释。所以，城市里有头有脸的西点屋她几乎都办了张会员卡',
        picture: 'http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg',
      },
    ],
  }
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }
  render() {
    const layout = (
      <div>
        <img className={styles.img} alt="图片加载失败" src="http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg" />
        <Row className={styles.essay}>
          <Col span={12} offset={6}>
            <div>文章</div>
          </Col>
          <div>
            {
              this.state.essay.map(item => (
                <Essay
                  title={item.title}
                  content={item.content}
                />
              ))
            }
          </div>
        </Row>
        <Pagination
          className={styles.page}
          current={this.state.current}
          onChange={this.onChange} total={5}
        />
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
