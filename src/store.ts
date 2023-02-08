import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { CounterReducer } from './features/counter'
import {TasksReducer} from "./features/tasks";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {StatisticsReducer} from "./features/statistics"; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasksReducer', 'statisticsReducer']
}

const rootReducer = combineReducers({
  count: CounterReducer,
  tasksReducer: TasksReducer,
  statisticsReducer: StatisticsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  devToolsEnhancer({})
)
export const persistor = persistStore(store)


export default store
