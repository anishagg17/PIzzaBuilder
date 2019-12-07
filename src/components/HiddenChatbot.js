import React from "react";
import ChatBot from "react-simple-chatbot";

function HiddenChatbot(props) {
    const steps = [
        {
           id: "Greet",
           message: "Hello, Welcome to our shop",
           trigger: "Query",
        },
        {
          id: "Query",
          message: "Use chatbot for HELP",
          end: true
        }
];
    
    return (
        <ChatBot steps={steps}
           speechSynthesis={{ enable: true, lang: 'en' }}
        />
  );
}
export default HiddenChatbot;