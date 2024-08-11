import axios from "axios";
import React, { useEffect } from "react";

type Props = {};

const ChatPage = (props: Props) => {
  const fetchChats = async () => {
    const data = await axios.get("/api/chats");

    console.log(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return <div>ChatPage</div>;
};

export default ChatPage;
