// NPM Packages
import React, { useState, Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";


// Project files
import Auth from "./services/Auth";
import AuthApi from "./api/AuthApi"
import Navbar from "./components/Navbar";
import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/home/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import ChatPage from "./pages/chat/ChatPage";
import { ParticularPostPage } from "./pages/posts/ParticularPostPage";

import "./App.css";
import EditPostPage from "./pages/posts/EditPostPage"

export default function App() {
  // State
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  const [userInSession, setUserInSession] = useState("");
  // Constants
  Auth.bindLoggedInStateSetter(setLoggedIn);
console.log("fromApp",userInSession)
  useEffect(() => {
    AuthApi.getUserInSession()
    .then(({ data }) => setUserInSession(data))
    .catch((err) => console.error(err));
  }, [loggedIn])
  // Components
  const loggedInRouter = (
    <RecoilRoot>
      <BrowserRouter>
        <Navbar onLogout={() => Auth.logout()} />

        <div className="container mt-5">
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/" component={HomePage} exact />
              <Route exact path="/posts" render={() => <PostsPage user={userInSession}/>} />
              <Route exact path="/posts/:id" render={(props) => <ParticularPostPage id={props.match.params.id} user={userInSession}/>}  />
              <Route  exact path="/posts/:id/edit" render={(props) => <EditPostPage id={props.match.params.id}/>} />
              <Route path="/chat" component={ChatPage} />
            </Suspense>
          </Switch>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );

  return loggedIn ? loggedInRouter : <AuthPage />;
}
