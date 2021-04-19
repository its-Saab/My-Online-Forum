import React  from "react";
import { useRecoilValue } from "recoil";
import { postState } from "../../state/state";
import FullPostCard from "../posts/FullPostCard";
import { Link } from "react-router-dom";
import AllComments from "../Comments/AllComment";



export const ParticularPostPage = ({match}) => {
 // Global state
 const posts = useRecoilValue(postState);

 //Constants
  const routerID = match.params.id;
  const currentPost = posts.find((item) => item.id === parseInt(routerID));


 return (
   <div>
     <FullPostCard key = {currentPost.id} information = {currentPost} />
     <br />
     <AllComments />

     <Link to="/posts"><button type="button" className="btn btn-danger btn-lg">Go back</button></Link>

   </div>

 );



}