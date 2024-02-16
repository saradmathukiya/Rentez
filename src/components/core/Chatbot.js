import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

const BotRedirect = ({ to, message }) => {
  return (
    <div>
      <Link to={to}>{message}</Link>
    </div>
  );
};

const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Roboto",
  headerBgColor: "#006f80",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#C8D7C2",
  botFontColor: "#fff",
  userBubbleColor: "#FFBFB5",
  userFontColor: "#fff",
};

const ChatBotHelper = () => {
  const steps = [
    {
      id: "1",
      message: "Hello!",
      trigger: "2",
    },
    {
      id: "2",
      message: "How can I help you?",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        { value: 1, label: "Show Properties", trigger: "example" },
        { value: 2, label: "Show Plans", trigger: "api" },
        { value: 3, label: "Nothing else, thanks!", trigger: "end" },
      ],
    },
    {
      id: "example",
      component: (
        <BotRedirect
          message="See all properties by clicking this link"
          to="/properties"
        />
      ),
      trigger: "options",
    },
    {
      id: "api",
      component: <BotRedirect message="click to see the plans" to="/plan" />,
      trigger: "options",
    },
    {
      id: "end",
      message: "Thank you for using our chatbot!",
      end: true,
    },
  ];

  //   const steps = [
  //     {
  //       id: "1",
  //       message: "Hello!",
  //       trigger: "2",
  //     },
  //     {
  //       id: "2",
  //       message: "How can I help you?",
  //       trigger: "3",
  //     },
  //     {
  //       id: "3",
  //       options: [
  //         { value: 1, label: "Show ChatBot example", trigger: "4" },
  //         { value: 2, label: "Show ChatBot API", trigger: "5" },
  //       ],
  //     },
  //     {
  //       id: "4",
  //       component: (
  //         <BotRedirect message="See all examples in this page" to="/properties" />
  //       ),
  //       trigger: "2",
  //     },
  //     {
  //       id: "5",
  //       component: <BotRedirect message="See chatbot API here" to="/api" />,
  //       trigger: "2",
  //     },
  //   ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;
