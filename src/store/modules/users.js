// initial state
const state = () => ({
	users: [],
})

// getters
const getters = {
	allUsers(state) {
		console.log("22222")
		return state.users
	},
}

// actions
const actions = {
	async getAllUsers(ctx) {
		console.log("111111")
		const res = await fetch(
			"https://my-json-server.typicode.com/DmytroPetrenko/jsonfortesting/users"
		)
		const users = await res.json()

		ctx.commit("setUsers", users)
	},
}

// mutations
const mutations = {
	setUsers(state, users) {
		state.users = users
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
