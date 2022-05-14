import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './mainSlice'

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['main/setDateTime'],
        // Ignore these field paths in all actions
        ignoredActionPaths: [''],
        // Ignore these paths in the state
        ignoredPaths: ['payload.dateTimeValue', "main.dateTime"],
      }
    })
})