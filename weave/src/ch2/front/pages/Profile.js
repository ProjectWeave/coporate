import React, { useCallback }  from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Profile = () => {
    const { me } = useSelector(state => state.user);

    return(
            <>
                <div className="profileform">
                    프로필
                    <div> 
                        {/* <div key="twit">게시물 수<br />{me.Post.length}</div>
                        <div key="following">팔로잉<br />{me.Followings.length}</div>
                        <div key="follower">팔로워<br />{me.Followers.length}</div> */}
                        
                    </div>
                </div>
            </>
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