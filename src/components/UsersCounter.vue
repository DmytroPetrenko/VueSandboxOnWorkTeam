<template>
	<div>Users DB contain {{ usersCount }} users</div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
	computed: {
		...mapGetters({
			usersCount: "users/usersCount",
		}),
	},
}
</script>
