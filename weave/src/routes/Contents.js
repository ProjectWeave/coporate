import React from 'react';
import { BrowserRouter as Router,Route,Switch,NavLink} from 'react-router-dom';

import Header from "./Header";      
import Menu from "../components/Menu";

import "./Contents.css";

import "./reset.css";

const Contents = () => {
    return (
        <div>
            <Header></Header>
            {/* 전체,구분 메뉴 */}
            <Menu></Menu>
            {/* 게시물 */}
            {/* <form>
                <input type="textarea" name="text" placeholder="소식을남겨주세요"></input>
                <ul className="file_table">
                    <li><label HtmlFor="img_file"></label></li>
                    <li><input type="file" id="img_file" name="file" size="200" accept=".jpg, .jpeg, .png" className="icon01"></input></li>
                    <li><input type="file" id="mv_file" name="file" accept=".mp4, .wmv, .avi"></input></li>
                    <li><input type="file" id="doc_file" name="file" accept=".txt"></input></li>
                    <li><input type="submit" value="글쓰기"></input></li>
                </ul>
            </form> */}
            <div className="wrap">
                <div className="groupinfo">
                    <div className="groupimg"></div>
                    <div className="grouptext">
                        <h1>댕댕이집사 그룹</h1>
                        <p className="numMem">Member. 43</p>
                        <p>세젤예 댕댕이들 모여라~!</p>
                        <div className="gjoin">가입하기</div>
                        <div className="gout">그룹탈퇴</div>
                    </div>
                </div>
                <table className="uploadTb">
                    <tbody>
                        <tr className='row1'>
                            <td colSpan='4'>
                                <input type="textarea" name="text" placeholder="소식을 남겨주세요."></input>
                            </td>
                        </tr>
                        <tr className='row2'>
                            <td>
                                <label Htmlfor="file-input" className="icon01"></label>
                                <input id="file-input" type="file" />
                                {/* <input type="file" id="img_file" name="file" size="200" accept=".jpg, .jpeg, .png" className="icon01"></input> */}
                            </td>
                            <td>
                                <label Htmlfor="file-input" className="icon02"></label>
                                <input id="file-input" type="file" />
                                {/* <input type="file" id="mv_file" name="file" accept=".mp4, .wmv, .avi"></input> */}
                            </td>
                            <td>
                                <label Htmlfor="file-input" className="icon03"></label>
                                <input id="file-input" type="file" />
                                {/* <input type="file" id="doc_file" name="file" accept=".txt"></input> */}
                            </td>
                            <td>
                                <label Htmlfor="file-input" className="icon04"></label>
                                <input id="file-input" type="submit" />
                                {/* <input type="submit"></input> */}
                            </td>
                        </tr>
                    </tbody>
                </table>

            
                {/* 그룹에 게시물이 아무것도 없을때 */}
                <div className="letsbegin">
                그룹에 재미있는 이야기를 써 보세요.
                </div>
                <button className="more">더보기</button>
           </div>
        </div>
    );
};

export default Contents;
