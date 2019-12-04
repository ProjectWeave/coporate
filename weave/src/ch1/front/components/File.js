import React from 'react';
import axios from 'axios';
//import './First.css';
import '../routes/Templete.css';

class File extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  state={
    selctedFile:null
  }
  fileUpSelcetedHandler=event=>{
    //console.log(event.target.file);
    this.setState({
      selctedFile:event.target.file[0]
    })
  }

  fileUploadHandler=()=>{
    axios.post('');
  }

  render(){
    return(
        <form className="pop">
          <div className="gimg">
            <img src={this.state.file}/>
          </div>
          {/* <input type="image" alt="submit"></input> */}
          <div className="filebox">
            <label htmlFor ="file">사진을 선택해주세요.</label>
            <input type="file" id="file" name="file" size="100" 
                   accept=".jpg, .jpeg, .png" className="upload"
                   onChange={this.handleChange} />
          </div>
          <div className="group">
            <label htmlFor ="name" className="gtit"> 그룹이름</label>
            <input type="text" name="gname" className="gname" />
            <label htmlFor ="name" className="gtit"> 그룹소개</label>
            <input type="text" name="gintro" className="gintro" />
            <p className="send">
              <input type="submit" value="올리기"
                     onClick={this.fileUploadHandler}
              />
              <input type="reset" value="취소" onClick={function(){
                var pop = document.querySelector(".pop")
                var block = document.querySelector(".block")
                pop.style.display="none"
                block.style.display="none"
              }} />
            </p>
            {this.props.children}
          </div>
        </form>
    );
  }
}

  export default File;