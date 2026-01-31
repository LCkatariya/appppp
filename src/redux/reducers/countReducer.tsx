
const initialState = {}

export default (state = initialState, { type, payload }:{type:string, payload:object}) => {
  switch (type) {

  case 'INCRIMENT_BY_VALUE':
    return { ...state, ...payload }

  default:
    return state
  }
}
