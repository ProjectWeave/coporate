import React from 'react';

const Profile = () => {
    return(
            <div>
                
                <div className="profileform">
                    프로필
                </div>

            </div>
    );
};

export default Profile;


//  <NickEditForm/>
//                 <List
//                     style={{ marginBottom:"20px"}}
//                     grid={{gutter: 4, xs:2, md:3}}
//                     size="small"
//                     header={<div>팔로잉 목록</div>}
//                     loadMore={<Button style={{width:"100%"}}>더 보기</Button>}
//                     bordered
//                     dataSource={["두리안","바보","멍청이"]}
//                     renderItem={item=>(
//                         <List.Item style={{ marginTop:"20px" }}>
//                             <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item}/></Card>
//                         </List.Item>
//                     )}
//                 ></List>
//                 <List
//                     style={{ marginBottom:"20px"}}
//                     grid={{gutter: 4, xs:2, md:3}}
//                     size="small"
//                     header={<div>팔로워 목록</div>}
//                     loadMore={<Button style={{width:"100%"}}>더 보기</Button>}
//                     bordered
//                     dataSource={["두리안","바보","멍청이"]}
//                     renderItem={item=>(
//                         <List.Item style={{ marginTop:"20px" }}>
//                             <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item}/></Card>
//                         </List.Item>
//                     )}
//                 ></List> 