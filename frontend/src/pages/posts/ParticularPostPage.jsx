import React  from "react";
 import { useRecoilValue } from "recoil";
 import { postState } from "../../state/state";
 import FullPostCard from "../posts/FullPostCard";
 import { Link } from "react-router-dom";

 export default function ParticularPostPage ({match}) {
    // Global state
     const posts = useRecoilValue(postState);

    //Constants
     const routerID = match.params.id;
     const currentPost = posts.find((item) => item.id === parseInt(routerID));

  return (
<div>
    <FullPostCard key ={currentPost.id} information={currentPost} />
    <br/>
    <Link to="/posts"><button type="button" class="btn btn-danger btn-lg">Go back</button></Link>
</div>
  );
 };