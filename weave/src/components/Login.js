import React, {Component} from 'react';


class Login extends Component{
  render(){
    return(
        <article className="rLg">
        <div className="logo"></div>
          <div className="lg">
            <h2 className="bld">로그인</h2>
            
            <form className="lgform" action="create_process" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  //alert('submit');
                  this.props.onSubmit(e.target.title.value,e.target.desc.value //인자
                  );///onSubmit함수///
                }.bind(this)}>
  
                <div className="lg_title">지금 바로 가입하세요!</div>
                <p>
                <input type="text" name="idid" placeholder="아이디를 입력하세요." className="tbox"></input>
                </p>
                <p>
                  <input type="text" name="pw" placeholder="비밀번호를 입력하세요." className="tbox"></input>
                </p>
                <p>
                <input type="button" value="로그인하기" className="btn"></input>
                </p>
                <p>
                <input type="button" value="회원가입" className="btn"></input>
                </p>
              </form>
            </div>
        </article>
    );
  }
}

export default Login;