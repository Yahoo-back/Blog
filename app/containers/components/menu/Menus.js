import React, { Component } from 'react';
import { Menu, Button, Modal, Input, Form, Icon } from 'antd';
import style from './style.css';
const FormItem = Form.Item;
class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.categories[0]
    };
  }

  handleClick = e => {
    console.log('click ', e);
    if (e.key === '首页') {
      this.props.getArticleList('');
    } else {
      this.props.getArticleList(e.key);
    }
    let toPath = e.key === '首页' ? '/' : '/' + e.key;
    this.setState({
      current: e.key
    });
    this.props.history.push(toPath);
  };

  render() {
    return (
      <div className={style.container}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          className={style.MenuContainer}
        >
          {this.props.categories.map((item, index) => (
            <Menu.Item key={item}>{item}</Menu.Item>
          ))}
        </Menu>
        <div className={style.btnContainer}>
          <div>
            <Button type="primary" className={style.btn}>
              注册
            </Button>
            <Button type="primary" className={style.btnLogin}>
              登录
            </Button>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      current: this.props.history.location.pathname.replace('/', '') || '首页'
    });
  }
}

const LoginForm = Form.create()(Menus);
export default LoginForm;
