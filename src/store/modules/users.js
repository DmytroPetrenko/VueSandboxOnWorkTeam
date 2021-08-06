// initial state
const state = () => ({
	users: [],
	currentUser: null,
})

// getters
const getters = {
	allUsers(state) {
		return state.users
	},
	usersCount(state) {
		return state.users.length
	},
	currentUser(state) {
		return state.currentUser
	},
}

// actions
const actions = {
	async getAllUsers(ctx) {
		const res = await fetch(
			"https://my-json-server.typicode.com/DmytroPetrenko/jsonfortesting/users"
		)
		const users = await res.json()

		ctx.commit("setUsers", users)
	},
	async createUser(ctx, user) {
		ctx.commit("createUser", user)
	},
	async setCurrentUser(ctx, currentUser) {
		ctx.commit("setCurrentUser", currentUser)
	},
	async changeUserProperty(ctx, data) {
		ctx.commit("changeUserProperty", data)
	},
}

// mutations
const mutations = {
	setUsers(state, users) {
		state.users = users
	},
	createUser(state, user) {
		state.users.push(user)
	},
	setCurrentUser(state, currentUser) {
		state.currentUser = currentUser
	},
	changeUserProperty(state, data) {
		state.users.find((user) => user.id === state.currentUser.id)[data.key] =
			data.newValue
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
