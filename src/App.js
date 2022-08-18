import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.component";
import LoginPage from "./routes/Login/Login.Page";
import MainPage from "./routes/Main/Main.Page";
import SignupPage from "./routes/SignUp/Signup.Page";
import ProfilePage from "./routes/Profile/Profile.Page";
import EditProfile from "./routes/EditProfile/EditProfile.Page";
import EditPost from "./routes/EditPost/EditPost.Page";

const pages = ['Home', 'Profile', 'Friends', 'Messages'];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const login = false;

function App() {
  return (
    <div className="app-routes">
      <Header />
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/" element={<MainPage pages={pages} />} /> 
        <Route exact path="/users/:userId" element={<ProfilePage pages={pages} />} />
        <Route exact path="/users/:userId/edit" element={<EditProfile />} />
        <Route exact path="/posts/:postId/edit" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
