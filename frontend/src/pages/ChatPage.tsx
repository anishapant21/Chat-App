import { useState } from "react";
import { Box } from "@chakra-ui/react";

import Sidebar from "../components/SideBar/Sidebar";
import MyChat from "../components/Chats/MyChat";
import ChatBox from "../components/Chats/ChatBox";

import { useChatState } from "../context/ChatProvider";

const ChatPage = () => {
  const { user } = useChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <Sidebar />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChat fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
