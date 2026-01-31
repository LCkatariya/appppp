const initialState = {}

export default (state = initialState, { type, payload }:{type:string, payload:object}) => {
  switch (type) {

  case "SET_USER_DATA":
    return { ...state, ...payload }

  default:
    return state
  }
}
