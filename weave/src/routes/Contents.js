import React from 'react';
import { BrowserRouter as Router,Route,Switch,NavLink} from 'react-router-dom';

import Header from "./Header";    
import Member from "./Member";   
import Menu from "../components/Menu";

import "./reset.css";

const Contents = () => {
    return (
        <div>
            <Header></Header>
            {/* 전체,구분 메뉴 */}
            <Menu></Menu>

            {/* 게시물 */}
            <form>
                <input type="textarea" name="text" placeholder="소식을남겨주세요"></input>
                <ul className="file_table">
                    <li><label HtmlFor="img_file"></label></li>
                    <li><input type="file" id="img_file" name="file" size="200" accept=".jpg, .jpeg, .png" className="icon01"></input></li>
                    <li><input type="file" id="mv_file" name="file" accept=".mp4, .wmv, .avi"></input></li>
                    <li><input type="file" id="doc_file" name="file" accept=".txt"></input></li>
                    <li><input type="submit" value="글쓰기"></input></li>
                </ul>
            </form>
            
            {/* 그룹에 게시물이 아무것도 없을때 */}
            <form>
                <input type="textarea" name="text" placeholder="그룹에 재미있는 이야기를 써 보세요."></input>
            </form>

            {/* 더보기버튼 */}
            <input type="button" name="more" className="more" value="더보기"></input>
                
        </div>
    );
};

export default Contents;
