// NPM Packages
import React from "react";
import { Link } from "react-router-dom";
import homePhoto from "../../assests/images/home-photo.png";

export default function HomePage() {
  return (
    <div class="special-card text-center">
        <img class="img-fluid" src={homePhoto} alt="Cinema in pink light" />
        <div class="card-body special-card">
        <h3>Welcome to MovieClub!</h3>
        <h5>SCANDINAVIA’S THE MOST POPULAR FORUM FOR MOVIE REVIEWS & DISCUSSIONS</h5>
        <p>MovieClub is a place for discussions about movies - forum users share their information about what to watch, what to avoid and what's coming soon</p>
        <p>We are committed to provide a website for posts of films that treat diverse social, political, historical and cultural realities.</p>
      <Link to="/posts"><button type="button" class="btn btn-danger btn-lg" >Read posts</button></Link>
      </div>
    </div>
  );
}
