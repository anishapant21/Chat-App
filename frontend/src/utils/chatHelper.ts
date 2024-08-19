interface User {
    _id: string;
    name: string;
  }
  
  export const getSender = (loggedUser: User, users: User[]): string => {
    return users[0]?._id === loggedUser?._id ? users[1].name : users[0].name;
  };
  

  export const getSenderFull = (loggedUser: User, users: User[]): string => {
    return users[0]?._id === loggedUser?._id ? users[1].name : users[0].name;
  };