import React from "react";
import {Link} from "react-router-dom";
import AllComment from "../Comments/AllComment";

export default function FullCommentCard ({information}){
    return(
        <div className="card mt-3">
            <div className="card-body">
                <p>{information.author}</p>
                <p>{information.body}</p>
                 <Link to={`/comment/${information.id}`}>
                    <button className="btn btn-primary">
                        Edit</button>
                 </Link> 
                 <AllComment />
               </div>
        </div>
         
    )
}

