import React  from "react";
import { useRecoilValue } from "recoil";
import { postState } from "../../state/state";
import FullPostCard from "../posts/FullPostCard";
import { Link } from "react-router-dom";
import AllComments from "../Comments/AllComment";



export const ParticularPostPage = ({id, user}) => {
 // Global state
 const posts = useRecoilValue(postState);

 //Constants
  const currentPost = posts.find((item) => item.id ==id);

 return (
   <div>
     <FullPostCard information = {currentPost} user={user? user:""} />
     <br />
     <AllComments />
    <div class="special-card text-center">
      <div class="card-body">
        <Link to="/posts"><button type="button" className="btn btn-danger btn-lg">Go back</button></Link>
      </div>
    </div>
   </div>

 );



}
