import React from 'react';
import { Layout, Menu } from 'antd';
// import { Link } from 'dva/router';
import style from './Basiclayout.less';

const { Header, Content, Footer } = Layout;
class Basiclayout extends React.PureComponent {
  state = {
    current: 'mail',
  };
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    const layout = (
      <Layout className={style.layout}>
        <Header className={style.header}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            className={style.menu}
          >
            <Menu.Item key="home">
              <icon type="" />主页
            </Menu.Item>
            <Menu.Item key="self">
              <icon type="" />个人
            </Menu.Item>
            <Menu.Item key="technology">
              <icon type="" />技术
            </Menu.Item>
            <Menu.Item key="album">
              <icon type="" />相册
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className={style.content}
          style={{ minHeight: 'calc( 100vh - 140px )' }}
        >content</Content>
        <Footer className={style.footer}>
          <icon type="github" />
          <a href="https://github.com/zhengkun1">我的GitHub</a>
        </Footer>
      </Layout>
    );
    return (
      <div>{layout}</div>
    );
  }
}
export default Basiclayout;
