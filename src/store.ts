import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { CounterReducer } from './features/counter'
import {TasksReducer} from "./features/tasks";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasksReducer']
}

const rootReducer = combineReducers({
  count: CounterReducer,
  tasksReducer: TasksReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  devToolsEnhancer({})
)
export const persistor = persistStore(store)


export default store
