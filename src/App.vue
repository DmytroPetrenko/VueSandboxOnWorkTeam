<template>
	<div id="app">
		<div id="user-wrapper">
			<UsersCounter />
			<UsersList
				:users="users"
				:activeId="activeId"
				@setCurrentUser="setCurrentUser"
			/>
			<div v-if="currentUser">
				<UserInformation :user="currentUser" />
			</div>
		</div>
		<AddNewUser @add-new-user="addNewUser" />
		<CustomInput v-model="customInputText" />
		{{ customInputText }}
	</div>
</template>

<script>
import UsersList from "@/components/UsersList"
import AddNewUser from "@/components/AddNewUser"
import CustomInput from "@/components/CustomInput"
import { eventBus } from "@/main"
import UsersCounter from "@/components/UsersCounter"
import { mapGetters, mapActions } from "vuex"

export default {
	name: "App",
	data() {
		return {
			customInputText: "",
			currentUser: null,
			areUserInformationNeeded: false,
		}
	},
	computed: {
		activeId() {
			return this.currentUser ? this.currentUser.id : null
		},
		...mapGetters({
			users: "users/allUsers",
		}),
	},
	watch: {
		users(val) {
			this.$notify({
				title: "Success",
				message: `You successfully add ${val[val.length - 1].firstName} ${
					val[val.length - 1].lastName
				}`,
				type: "success",
			})
		},
	},
	components: {
		UsersList,
		AddNewUser,
		CustomInput,
		UserInformation: () => import("@/components/UserInformation"),
		UsersCounter,
	},
	methods: {
		addNewUser(newUser) {
			this.users.push(newUser)

			eventBus.$emit("changeUsersNumber", this.users.length)
		},
		setCurrentUser(user) {
			this.currentUser = user
		},
		...mapActions({ getAllUsers: "users/getAllUsers" }),
	},
	async mounted() {
		this.getAllUsers()
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
#user-wrapper {
	display: flex;
	justify-content: space-evenly;
}
</style>
