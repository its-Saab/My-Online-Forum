// NPM Packages
import React, { useState, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";


// Project files
import Auth from "./services/Auth";
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

  // Constants
  Auth.bindLoggedInStateSetter(setLoggedIn);

  // Components
  const loggedInRouter = (
    <RecoilRoot>
      <BrowserRouter>
        <Navbar onLogout={() => Auth.logout()} />

        <div className="container mt-5">
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/" component={HomePage} exact />
              <Route exact path="/posts" component={PostsPage} />
              <Route exact path="/posts/:id" component={ParticularPostPage} />
              <Route render={(props) => <EditPostPage id={props.match.params.id}  />} exact path="/posts/:id/edit" />
              <Route path="/chat" component={ChatPage} />
            </Suspense>
          </Switch>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );

  return loggedIn ? loggedInRouter : <AuthPage />;
}
