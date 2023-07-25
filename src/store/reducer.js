const storeMyPage = {
  name: "",
  status: "",
};

export const reducerMyPage = (store = storeMyPage, action) => {
  switch (action.type) {
    case "NAME": {
      return { ...store, name: action.payload };
    }
    case "STATUS": {
      return { ...store, status: action.payload };
    }
    default:
      return store;
  }
};

/* const action = {
  type: "NAME",
  payload: "new name"
} */