/**
 * zhengkun 2017-12-12
 */

import React, { Component } from 'react';
import { Row, Col, Pagination, Card } from 'antd';
import { connect } from 'dva';
import styles from '../routes/essay.less';

class Essay extends Component {
  state = {
    current: 1,
  }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }
  render() {
    const { Meta } = Card;
    const { essay } = this.props;
    console.log(essay, 'xxx');
    const layout = (
      <div>
        <img className={styles.img} alt="图片加载失败" src="http://isujin.com/wp-content/uploads/2014/12/wallhaven-74859.jpg" />
        <Row>
          {
            essay.essay.map(item => (
              <Col span={8} className={styles.card}>
                <Card
                  hoverable
                  style={{ width: '350px', height: '450px' }}
                  cover={<img style={{ width: '350px', height: '250px' }} alt="图片无法加载" src={item.picture} />}
                >
                  <Meta
                    title={item.title}
                    key={item.key}
                    description={item.content}
                  />
                </Card>
              </Col>
            ))
          }
        </Row>
        <div className={styles.word}>ESSAY</div>
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

export default connect(state => ({ essay: state.essay }))(Essay);
