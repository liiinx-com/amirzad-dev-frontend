import { Content } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

export interface ProfileState {
  intro: Content;
}

const initialState: ProfileState = {
  intro: {
    id: "this is my id",
  } as Content,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

// export const {}
export default profileSlice.reducer;
