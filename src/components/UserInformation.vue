<template>
	<el-card class="box-card">
		<div v-for="(value, key) in user" :key="value" class="text item">
			<p>
				{{ key + ": " }}
				<span :contenteditable="key !== 'id'" @blur="onChange($event, key)">{{
					value
				}}</span>
			</p>
		</div>
	</el-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
	computed: {
		...mapGetters({
			user: "users/currentUser",
		}),
	},
	watch: {
		user: {
			handler(value, oldValue) {
				if (value == oldValue) {
					this.$notify({
						title: "Success",
						message: `You successfully change property for ${value.firstName}`,
						type: "success",
					})
				}
			},
			deep: true,
		},
	},
	methods: {
		onChange(e, key) {
			/* так же нельзя, верно?
			this.user[key] = e.target.innerText */

			this.changeUserProperty({ key, newValue: e.target.innerText })
		},
		...mapActions({
			changeUserProperty: "users/changeUserProperty",
		}),
	},
}
</script>

<style>
.text {
	font-size: 14px;
}

.item {
	padding: 5px 0;
}

.box-card {
	width: 480px;
	margin-bottom: 15px;
}
</style>
