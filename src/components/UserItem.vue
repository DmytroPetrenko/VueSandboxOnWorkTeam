<template>
	<li @click="onClick" :class="[activeId == user.id ? `active` : '']">
		{{ fullName }}
	</li>
</template>

<script>
export default {
	props: {
		user: Object,
		activeId: null || Number,
	},
	computed: {
		fullName: function() {
			return this.user.firstName + " " + this.user.lastName
		},
	},
	methods: {
		onClick() {
			this.$emit(`setCurrentUser`, this.user)
		},
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
