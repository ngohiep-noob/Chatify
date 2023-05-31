export const getToken = () => {
  //   const token = localStorage.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsInN1YiI6InVzZXIyIiwiaWF0IjoxNjg1NTUxNjY4LCJleHAiOjE2ODU1NjI0Njh9.XqgJNDiyZCU6BhG10TK7Zt7Zco56dKGoKeqeH1n4ANE";
  return token;
};

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};
