export const uuid = () =>
  Math.random()
    .toString(16)
    .slice(2)

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const saveStatePlugin = (name = "state") => store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem(name, JSON.stringify(state.board))
  })
}
