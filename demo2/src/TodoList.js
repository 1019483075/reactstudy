import React, { Component, Fragment } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "", // input框里面的内容
      list: [] // 指的是数组的每一项
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>学英语</li>
          <li>learn React</li>
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
    console.log(e.target.value);
  }
}

export default TodoList;

function add(a, b) {
  return a + b;
}

add(1, 2);
