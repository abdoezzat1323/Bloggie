export const getComments = async () => {
  return [
    {
      id: "1",
      body: "saba7o",
      username: "elfeky",
      userId: "1",
      parentId: null,
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "sab7",
      username: "nagy",
      userId: "2",
      parentId: null,
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "saba7o",
      username: "nagy",
      userId: "2",
      parentId: "1",
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "sab7",
      username: "elfeky",
      userId: "2",
      parentId: "2",
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
