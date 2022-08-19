import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.component";
import LoginPage from "./routes/Login/Login.Page";
import MainPage from "./routes/Main/Main.Page";
import SignupPage from "./routes/SignUp/Signup.Page";
import ProfilePage from "./routes/Profile/Profile.Page";
import EditProfile from "./routes/EditProfile/EditProfile.Page";
import EditPost from "./routes/EditPost/EditPost.Page";
import Cookies from "universal-cookie";

const pages = ['Home', 'Profile', 'Friends', 'Messages'];
const settings = ["Account", "Edit Profile", "Logout"];

function App() {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  const currentUserId = cookies.get("USERID");
    
  return (
    <div className="app-routes">
      <Header 
        pages={pages}
        settings={settings}
        token={token}
        currentUserId={currentUserId}
      />
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/" element={<MainPage pages={pages} token={token} currentUserId={currentUserId} />} /> 
        <Route exact path="/users/:userId" element={<ProfilePage pages={pages} token={token} currentUserId={currentUserId} />} />
        <Route exact path="/users/:userId/edit" element={<EditProfile token={token} currentUserId={currentUserId} />} />
        <Route exact path="/posts/:postId/edit" element={<EditPost token={token} currentUserId={currentUserId} />} />
      </Routes>
    </div>
  );
}

export default App;
