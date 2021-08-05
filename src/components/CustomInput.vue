<template>
	<input v-model="modelValue" type="text" v-bind="$attrs" v-on="listeners" />
</template>

<script>
export default {
	props: { value: { type: String, default: "" } },
	computed: {
		modelValue: {
			get() {
				return this.value
			},
			set(newValue) {
				this.$emit("input", newValue)
			},
		},
		listeners() {
			// eslint-disable-next-line
			const { input, ...listeners } = this.$listeners

			return listeners
		},
	},
}
</script>
