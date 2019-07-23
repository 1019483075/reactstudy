import React, { Component, Fragment } from "react";
import "./style.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "", // input框里面的内容
      list: [] // 指的是数组的每一项
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">请输入内容</label>
          <input
            className="input"
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div>
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
        </div>
      );
    });
  }
  // 输入框change事件
  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  }
  // 提交
  handleBtnClick() {
    this.setState(() => ({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    }));
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });
  }
  // 删除
  handleItemDelete(index) {
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list
    // });
    this.setState(prevState => {
      const list = [...this.state.list];
      list.splice(index, 1);
      return { list };
    });
  }
}

export default TodoList;
