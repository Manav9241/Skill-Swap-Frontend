import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  email: '',
  profilePic: '',
  bio: '',
  name: '',
};

const activeUserSlice = createSlice({
  name: 'activeUser',
  initialState,
  reducers: {
    setActiveUser: (state, { payload }) => {
      state.id = payload.id;
      state.email = payload.email;
      state.profilePic = payload.profilePic;
      state.bio = payload.bio;
      state.name = payload.name;
    },
    setUserNameAndBio: (state, { payload }) => {

  return {
        ...state,
        name: payload.name,
        bio: payload.bio,
      };
      // state.name = payload.name;
      // state.bio = payload.bio;
    },
  },extraReducers: (builder) => {}
});
export const { setActiveUser, setUserNameAndBio } = activeUserSlice.actions;
export default activeUserSlice.reducer;
