type Message = {
    _id: string;
    sender: {
      _id: string;
      name: string;
      pic?: string;
    };
    content: string;
  };
  
  export const isSameSenderMargin = (
    messages: Message[],
    m: Message,
    i: number,
    userId: string
  ): number | "auto" => {
    if (
      i < messages.length - 1 &&
      messages[i + 1].sender._id === m.sender._id &&
      messages[i].sender._id !== userId
    ) {
      return 33;
    } else if (
      (i < messages.length - 1 &&
        messages[i + 1].sender._id !== m.sender._id &&
        messages[i].sender._id !== userId) ||
      (i === messages.length - 1 && messages[i].sender._id !== userId)
    ) {
      return 0;
    } else {
      return "auto";
    }
  };
  
  export const isSameSender = (
    messages: Message[],
    m: Message,
    i: number,
    userId: string
  ): boolean => {
    return (
      i < messages.length - 1 &&
      (messages[i + 1].sender._id !== m.sender._id ||
        messages[i + 1].sender._id === undefined) &&
      messages[i].sender._id !== userId
    );
  };
  
  export const isLastMessage = (
    messages: Message[],
    i: number,
    userId: string
  ): boolean => {
    return (
      i === messages.length - 1 &&
      messages[messages.length - 1].sender._id !== userId &&
      !!messages[messages.length - 1].sender._id
    );
  };
  
  export const isSameUser = (
    messages: Message[],
    m: Message,
    i: number
  ): boolean => {
    return i > 0 && messages[i - 1].sender._id === m.sender._id;
  };
  
  export const getSender = (
    loggedUser: { _id: string; name: string },
    users: { _id: string; name: string }[]
  ): string => {
    return users[0]?._id === loggedUser?._id ? users[1].name : users[0].name;
  };
  
  export const getSenderFull = (
    loggedUser: { _id: string; name: string },
    users: { _id: string; name: string; pic?: string }[]
  ): { _id: string; name: string; pic?: string } => {
    return users[0]._id === loggedUser._id ? users[1] : users[0];
  };
  