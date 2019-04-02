import { createStore, combineReducers } from 'redux'
const defaultStore = {
  condition: {
  }
}
const initialState = {
  condition: {
  }
}
const questionsState = {
  condition: {
  }
}
const userState = {
  condition: {
  }
}
const questionsstemState = {
  condition: {
  }
}
const Titles = {
  condition: {
  }
}
const answerState = {
  condition: {
  }
}
// 课程id
const reducer = (state = defaultStore, action) => {
  const { type, payload } = action
  const { condition } = state
  switch (type) {
    case "SUBJECT_ID":
      return {...condition, subject_id: payload}
    default:
      return state
  }
}
//考试类型id
const initial = (state = initialState, action) => {
  const { type, payload } = action
  const { condition } = state
  switch (type) {
    case "EXAM_ID":
      return { ...condition, exam_id: payload }
    default:
      return state
  }
}
// 试题类型id
const question = (state = questionsState, action) => {
  const { type, payload } = action
  const { condition } = state
  switch (type) {
    case "TYPE_ID":
      return { ...condition, questions_type_id: payload }
    default:
      return state
  }
}
// 用户名
const user_id = (state = userState, action) => {
  const { type, payload } = action
  const { condition } = state
  switch (type) {
    case "USER_ID":
      return { ...condition, user_id: payload }
    default:
      return state
  }
}
// 题干
const questions_stem = (state = questionsstemState, action) => {
  const { type, payload } = action
  const { condition } = state
  switch (type) {
    case "QUESTIONS_STEM":
      return { ...condition, questions_stem: payload }
    default:
      return state
  }
}
// 主题   答案
const Title_id = (state = Titles, action) => {
  const { type, payload } = action
  const { condition } = state
  switch (type) {
    // 试题标题
    case "TITLE":
      return { ...condition, title: payload }
    default:
      return state
  }
}

const questions_answer = (state = Titles, action) => {
  const { type, payload } = action
  const { condition } = state
  switch (type) {
    // 答案
    case "QUESTINGS_ANSWER":
      return { ...condition, questions_answer: payload }
    default:
      return state
  }
}

const appReducer = combineReducers({
  reducer,
  initial,
  question,
  user_id,
  questions_stem,
  Title_id,
  questions_answer
})

const Store = createStore(appReducer)
export default Store