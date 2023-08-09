import React, { useState, useEffect } from "react";

function Chatbot() {
  return (
    <div>
      <Iframe
        src="https://ama-chat.com/chat?tou=city-of-cape-town-support"
        width="1400px"
        height="600px"
        style="border:none;"
      ></Iframe>
    </div>
  );
}

export default Chatbot;
