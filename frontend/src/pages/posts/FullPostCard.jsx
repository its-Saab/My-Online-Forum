import React from "react";
import {Link} from "react-router-dom";


export default function FullPostCard ({information}){
    return(
        <div className="card mt-3">
            <div className="card-body">
                <p>{information.author}</p>
                <p>{information.body}</p>
                 <Link to={`/posts/${information.id}/edit`}>
                    <button className="btn btn-primary">
                        Edit</button>
                 </Link> 
               
        
            </div>
        </div>
         
    )
}