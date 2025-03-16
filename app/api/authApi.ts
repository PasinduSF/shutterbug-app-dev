import axiosInstance from "./axiosinstance";

interface LoginBody {
    username: string;
    password: string;
  }

const login = async (body: LoginBody, authToken?: string) => {
    return await axiosInstance.post('/users/login', body, {
      headers: {
        Authorization: authToken ? `Bearer ${authToken}` : undefined
      }
    });
};

export { login };