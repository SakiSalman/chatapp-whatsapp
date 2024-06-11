import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createToast } from "../../utils/toast";
import { useNavigate } from "react-router-dom";
// register user
export const createUser = createAsyncThunk("auth/createUser", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/register",
      data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// register user
export const activateAccountByOTP = createAsyncThunk(
  "auth/activateAccountByOTP",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/activation-by-otp/${data.token}`,
        { otp: data.otp },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      createToast(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  }
);

// Login user
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/login",
      data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Login user
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/logout",
      "",
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Login user
export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  async () => {
    try {
      const response = await axios.get("http://localhost:5050/api/v1/auth/me", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);