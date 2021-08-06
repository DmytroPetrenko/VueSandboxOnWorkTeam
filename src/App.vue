<template>
	<div id="app">
		<div id="user-wrapper">
			<UsersCounter />
			<UsersList :activeId="activeId" />
			<div v-if="currentUser">
				<UserInformation />
			</div>
		</div>
		<AddNewUser />
		<CustomInput v-model="customInputText" />
		{{ customInputText }}
	</div>
</template>

<script>
import UsersList from "@/components/UsersList"
import AddNewUser from "@/components/AddNewUser"
import CustomInput from "@/components/CustomInput"
import UsersCounter from "@/components/UsersCounter"
import { mapGetters, mapActions } from "vuex"

export default {
	name: "App",
	data() {
		return {
			customInputText: "",
			areUserInformationNeeded: false,
		}
	},
	computed: {
		activeId() {
			return this.currentUser ? this.currentUser.id : null
		},
		...mapGetters({
			users: "users/allUsers",
			currentUser: "users/currentUser",
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
		...mapActions({
			getAllUsers: "users/getAllUsers",
		}),
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
