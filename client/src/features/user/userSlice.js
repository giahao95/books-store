import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProfile: {},
  isLoading: false,
  isLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
});

export const {} = userSlice.actions;
export default userSlice.reducer;
