import { createSlice } from "@reduxjs/toolkit";
import { namespace } from "../utils";
import { type ApplyStatusType } from "../../types";

const initialState: {
  data: ApplyStatusType | null;
  loading: boolean;
  error: Error | null;
} = {
  data: null,
  loading: false,
  error: null,
};

const {
  reducer,
  actions: { start, done, fail },
} = createSlice({
  name: namespace("apply-status"),
  initialState,
  reducers: {
    start: (state) => {
      state.loading = true;
    },
    done: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default reducer;

export { start, done, fail };
