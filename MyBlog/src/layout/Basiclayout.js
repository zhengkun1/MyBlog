import React from 'react';
import { Layout, Menu, Icon } from 'antd';
// import default from 'antd/lib/card/Grid';
import { Link, Route, Switch } from 'dva/router';
import styles from '../layout/Basiclayout.less';
import A from '../components/a/a';
import B from '../components/b';


const { Header, Footer, Content } = Layout;
class Basiclayout extends React.PureComponent {
  state = {
    collapsed: false,
  };
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const layout = (
      <div className={styles.div}>
        <Layout>
          <Header
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            className={styles.herder}
          >
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              className={styles.menu}
            >
              <Menu.Item key="1">
                <Link to="/a">
                  <span>Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="b">
                  <span>Self</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ minHeight: 'calc(100vh - 100px)' }} className={styles.global}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Switch>
              <Route path="/b" component={B} />
              <Route path="/" component={A} />
            </Switch>
          </Content>
          <Footer className={styles.footer}>
            <div>
              @2017-12-14
            </div>
          </Footer>
        </Layout>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
export default Basiclayout;
