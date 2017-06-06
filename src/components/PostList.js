import React, { Component } from 'react'

class PostList extends Component {
  handleSubmit(e){
    e.preventDefault()
    // let value = this.input.value
  }
  render(){
    return(
      <div className="form" style={{marginTop:'20px'}}>
        <div style={{textAlign:'center',fontSize:'1.2rem',paddingTop:'20px'}}>写文章</div>
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
              <textarea style={{height:'100%'}}></textarea>
            </label>
          </div>
          <div style={{textAlign:'center'}}>
            <button type="submit">提交</button>
            <a href="#">取消</a>
          </div>
        </form>
      </div>
    )
  }
}

export default PostList
