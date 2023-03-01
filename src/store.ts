import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import {TasksReducer} from "./features/tasks";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {StatisticsReducer} from "./features/statistics";
import {TomatoCountReducer} from "./features/tomatoCount";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasksReducer', 'statisticsReducer', 'tomatoCount']
}

const rootReducer = combineReducers({
  tasksReducer: TasksReducer,
  statisticsReducer: StatisticsReducer,
  tomatoCount: TomatoCountReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  devToolsEnhancer({})
)
export const persistor = persistStore(store)


export default store
