import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Form extends Component {
  handleSubmit(e){
    e.preventDefault()
    // let value = this.input.value
  }
  render(){
    return(
      <div className="form" style={{marginTop:'20px'}}>
        <form type="submit" onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>分类：
              <input type="text" ref={value=> this.value = value} />
            </label>
          </div>
          <div>
            <label>标题：
              <input type="text" />
            </label>
          </div>
          <div>
            <label>内容：
              <textarea style={{height:'100%'}} rows='20'></textarea>
            </label>
          </div>
          <div style={{textAlign:'center'}}>
            <button type="submit">提交</button>
            <Link to="/">取消</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
