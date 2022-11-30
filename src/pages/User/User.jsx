import React from "react";
import { Routes, Route } from "react-router-dom";
import UserTabs from "./All-Tabs/UserTabs.jsx";
import UserUpvotes from "./All-Tabs/userUpvotes.jsx";
import UserPosts from "./All-Tabs/userPosts.jsx";
import UserComments from "./All-Tabs/userComments.jsx";
import UserOverview from "./All-Tabs/userOverview";

function User() {
  return (
    <>
      <div className="user-pg">
        <div className="UserTabs">
          <UserTabs />
          <div className="user-outlet">
            <Routes>
              <Route path="/user-feed/overview" element={<UserOverview />} />
              <Route path="/user-feed/posts" element={<userPosts />} />
              <Route path="/user-feed/comments" element={<UserComments />} />
              <Route path="/user-feed/upvotes" element={<UserUpvotes />} />
            </Routes>
          </div>
          <UserOverview />
        </div>
      </div>
    </>
  );
}

export default User;

