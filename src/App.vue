<template>
	<div id="app">
		<div id="user-wrapper">
			<UsersCounter />
			<UsersList
				v-bind:users="users"
				:activeId="activeId"
				@setCurrentUser="setCurrentUser"
			/>
			<div v-if="currentUser">
				<UserInformation v-bind:user="currentUser" />
			</div>
		</div>
		<AddNewUser @add-new-user="addNewUser" />
		<CustomInput v-model="customInputText" />
		{{ customInputText }}
	</div>
</template>

<script>
// Change for change 2222
import UsersList from "@/components/UsersList"
import AddNewUser from "@/components/AddNewUser"
import CustomInput from "@/components/CustomInput"
import { eventBus } from "@/main"
import UsersCounter from "@/components/UsersCounter"

export default {
	name: "App",
	data() {
		return {
			users: [
				{
					id: 1,
					firstName: "Dmytro",
					lastName: "Petrenko",
					position: "Trainee Vue Js Developer",
				},
				{
					id: 2,
					firstName: "Valeriy",
					lastName: "Nosenko",
					position: "Trainee React Js Developer",
				},
				{
					id: 3,
					firstName: "Andriy",
					lastName: "Parkhomenko",
					position: "Senior Vue Js Developer",
				},
				{
					id: 4,
					firstName: "Artemon",
					lastName: "Bulangery",
					position: "Designer",
				},
			],
			customInputText: "",
			currentUser: null,
			areUserInformationNeeded: false,
		}
	},
	computed: {
		activeId: function() {
			return this.currentUser ? this.currentUser.id : null
		},
	},
	watch: {
		users: function(val) {
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
