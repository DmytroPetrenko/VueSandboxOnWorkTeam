<template>
	<el-card class="box-card">
		<div v-for="(value, key) in user" :key="value" class="text item">
			<p>
				{{ key + ": " }}
				<span
					:contenteditable="key === `id` ? false : true"
					@blur="onChange($event, key)"
					>{{ value }}</span
				>
			</p>
		</div>
	</el-card>
</template>

<script>
export default {
	props: [`user`],
	methods: {
		onChange(e, key) {
			this.user[key] = e.target.innerText
		},
	},
	watch: {
		user: {
			handler: function(value, oldValue) {
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
