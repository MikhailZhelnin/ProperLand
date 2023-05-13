import {configureStore} from "@reduxjs/toolkit";
import {exampleReducer} from "@/store/example/example.slice";
import {createWrapper} from "next-redux-wrapper";

export function makeStore() {
  return configureStore({
    reducer: {
      example: exampleReducer
    },
  })
};

export const store = makeStore();

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore);