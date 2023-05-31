const database = [
  {
    id: "u1",
    chatName: "Ngo Hiep",
    msgs: [
      {
        id: "1",
        name: "Ngo Hiep",
        message: "Hello",
      },
      {
        id: "2",
        name: "Chanh Nghia",
        message: "Ok Hello ban",
      },
      {
        id: "1",
        name: "Ngo Hiep",
        message: "Lam dc bai Wecode khong?",
      },
      {
        id: "2",
        name: "Chanh Nghia",
        message: "Bai DFS kho qua",
      },
      {
        id: "2",
        name: "Chanh Nghia",
        message: "Hiep cuu CN voi",
      },
    ],
  },
  {
    id: "u2",
    chatName: "Chanh Nghia",
    msgs: [
      {
        id: "1",
        name: "Ngo Hiep",
        message: "Sample message 1 in group u2",
      },
      {
        id: "2",
        name: "User 1",
        message: "Sample message 2 in group u2",
      },
    ],
  },
  {
    id: "u3",
    chatName: "User 3",
    msgs: [
      {
        id: "1",
        name: "Ngo Hiep",
        message: "Sample message 1 in group u3",
      },
      {
        id: "2",
        name: "User 2",
        message: "Sample message 2 in group u3",
      },
    ],
  },
  {
    id: "g4",
    chatName: "Group 4",
    msgs: [
      {
        id: "1",
        name: "Ngo Hiep",
        message: "Sample message 1 in group g4",
      },
      {
        id: "2",
        name: "User 2",
        message: "Sample message 2 in group g4",
      },
    ],
  },
  {
    id: "g5",
    chatName: "Group 5",
    msgs: [
      {
        id: "1",
        name: "Ngo Hiep",
        message: "Sample message 1 in group g5",
      },
      {
        id: "2",
        name: "User 2",
        message: "Sample message 2 in group g5",
      },
    ],
  },
  {
    id: "g6",
    chatName: "Group 6",
    msgs: [
      {
        id: "1",
        name: "Ngo Hiep",
        message: "Sample message 1 in group g6",
      },
      {
        id: "2",
        name: "User 2",
        message: "Sample message 2 in group g6",
      },
    ],
  },
];

export const GetChatInfo = (id: string) => {
  return database.find((item) => item.id === id);
};
