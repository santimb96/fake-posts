import React from "react";
import GoogleOauth from "../components/GoogleOauth";
import PostList from "../components/PostList";

const Home = () => {
    return (
        <div className="container-fluid">
            <GoogleOauth/>
            <PostList/>
        </div>
    )
}

export default Home;