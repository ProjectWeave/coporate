import React from 'react';
import { Menu,Input,Row,Col,Card,Avatar,Form } from 'antd';

const AppLayout = () => {
    return (
        <div>
            {/* <Menu mode="horizontal">
               <Menu.Item key="home"><Link href="/"><a>위브</a></Link></Menu.Item>
               <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
               <Menu.Item key="mail">
                    <Input.Search enterButton style={{verticalAlign:'middle'}} />
               </Menu.Item>
            </Menu>
            <Row gutter={10}> {/*그리드시스템 전체:24*/}
                <Col xs={24} md={6}>
                    {isLoggedIn 
                        ? <UserProfile/>
                        :<LoginForm/>
                    } </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <Link href="/"><a target="_black">Made by 두리안</a></Link>
                </Col>
            </Row> */}
        </div>
    );
};

export default AppLayout;