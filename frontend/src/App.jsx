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
import ParticularPostPage from "./pages/posts/ParticularPostPage";
import "./App.css";

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
               <Route path="/posts" component={PostsPage} exact />
               <Route path="/posts/:id" component={ParticularPostPage} exact/>
               <Route path="/chat" component={ChatPage} />
             </Suspense>
           </Switch>
         </div>
       </BrowserRouter>
     </RecoilRoot>
  );

  return loggedIn ? loggedInRouter : <AuthPage />;
}
