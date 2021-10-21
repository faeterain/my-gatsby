import React from "react";
import {Link} from "gatsby";

const AboutPage = () => {
    return (
        <div>
            <title>About</title>
            <h1>This is about page</h1>
            <p>This is my about page</p>
            <Link to="/">Back to home</Link>
        </div>
    )
}
export default AboutPage;