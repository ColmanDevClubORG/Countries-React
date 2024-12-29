import React from "react";

const backButton = () => {
    return(
        <div className="back-button">
      <div className="container">
        <a href="index.html" className="btn btn-back btn-with-icon">
          <i className="fa-regular fa-arrow-left icon"></i>
          back
        </a>
      </div>
    </div>
    );

};

export default backButton;