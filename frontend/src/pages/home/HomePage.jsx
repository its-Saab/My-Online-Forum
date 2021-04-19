// NPM Packages
import React from "react";
import { Link } from "react-router-dom";
import homePhoto from "../../assests/images/home-photo.png";

export default function HomePage() {
  return (
    <div>
      <div>
        <img className="img-fluid" src={homePhoto} alt="Cinema in pink light" />
        <h4 className="card-title">Welcome to MovieClub!</h4>
        <p>SCANDINAVIA’S THE MOST POPULAR FORUM FOR MOVIE REVIEWS & DISCUSSIONS</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <Link to="/posts"><button type="button" class="btn btn-danger btn-lg">Read posts</button></Link>
      </div>
    </div>
  );
}
