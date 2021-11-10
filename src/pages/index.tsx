import Hero from "../components/Hero";
import React from "react";
import Feature from "../components/Feature";

const Index: React.FC = () => {
    return (
        <>
            <Hero></Hero>
            <Feature
                title="Web Development"
                text="..."
                alt="TODO"
                buttonText="Skillset / CV"
                imageSrc="https://images.unsplash.com/photo-1534949752991-a065b0f5dfaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYxfHxkZXZpY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            ></Feature>

            <Feature
                reverse
                title="Web Development"
                text="..."
                alt="TODO"
                buttonText="Skillset / CV"
                imageSrc="https://images.unsplash.com/photo-1534949752991-a065b0f5dfaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYxfHxkZXZpY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            ></Feature>

            <Feature
                title="Web Development"
                text="..."
                alt="TODO"
                buttonText="Skillset / CV"
                imageSrc="https://images.unsplash.com/photo-1534949752991-a065b0f5dfaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYxfHxkZXZpY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            ></Feature>
        </>
    );
};

export default Index;
