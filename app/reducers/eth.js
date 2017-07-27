const initial_state = {
  metamask: true,
}

export default function (state = intial_state, action) {
  switch(action.type) {
    case 'METAMASK_STATUS':
      return {
        ...state,
        metamask: action.status
      }
    default:
      return state
  }
}
