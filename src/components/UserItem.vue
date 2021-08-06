<template>
	<li @click="onClick" :class="activeId == user.id ? 'active' : ''">
		{{ fullName }}
	</li>
</template>

<script>
import { mapActions } from "vuex"
export default {
	props: {
		user: { type: Object, required: true },
		activeId: { type: Number },
	},
	computed: {
		fullName() {
			return this.user.firstName + " " + this.user.lastName
		},
	},
	methods: {
		onClick() {
			this.setCurrentUser(this.user)
		},
		...mapActions({
			setCurrentUser: "users/setCurrentUser",
		}),
	},
}
</script>

<style scoped>
li {
	cursor: pointer;
}
.active {
	font-weight: 600;
}
</style>
