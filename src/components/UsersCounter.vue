<template>
	<div>Users DB contain {{ usersInDB }} users</div>
</template>

<script>
import { eventBus } from "@/main"

export default {
	data() {
		return {
			usersInDB: 4,
		}
	},
	created() {
		eventBus.$on("changeUsersNumber", (data) => (this.usersInDB = data))
	},
	beforeDestroy() {
		eventBus.$off("changeUsersNumber")
	},
}
</script>
