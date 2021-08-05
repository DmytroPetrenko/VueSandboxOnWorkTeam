<template>
	<!-- v-bind:value="value" v-on:input="$emit('input', $event.target.value)" -->
	<input
		type="text"
		name=""
		id=""
		v-bind:value="value"
		v-on:input="$emit('input', $event.target.value)"
	/>
</template>

<script>
export default {
	props: ["value"],
}
</script>
