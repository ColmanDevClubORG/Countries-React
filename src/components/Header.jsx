import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
    return (
            <div className="container flex flex-jc-sb flex-ai-c">
                <div className="logo">
                    <a href="Home.jsx">
                        <h1>Where in the world?</h1>
                    </a>
                </div>
                <ThemeToggle></ThemeToggle>
            </div>
    )
}




