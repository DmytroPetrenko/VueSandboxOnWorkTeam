<template>
	<!-- Что за фокус с native, как это работает? -->

	<el-form
		@submit.native.prevent="onSubmit"
		ref="form"
		:model="form"
		label-width="120px"
	>
		<el-form-item label="Fullname">
			<el-input :placeholder="fullNamePH" v-model="form.fullName"></el-input>
		</el-form-item>
		<el-form-item label="Your birth date">
			<el-date-picker
				type="date"
				placeholder="Pick a date"
				v-model="form.birthdate"
				style="width: 100%;"
			></el-date-picker>
		</el-form-item>
		<el-form-item label="Position">
			<el-select v-model="form.position" placeholder="please select position">
				<el-option
					label="Trainee Vue Js Developer"
					value="Trainee Vue Js Developer"
				></el-option>
				<el-option
					label="Trainee React Js Developer"
					value="Trainee React Js Developer"
				></el-option>
				<el-option
					label="Senior Vue Js Developer"
					value="Senior Vue Js Developer"
				></el-option>
				<el-option
					label="Senior React Js Developer"
					value="Senior React Js Developer"
				></el-option>
				<el-option label="Designer" value="Designer"></el-option>
			</el-select>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" native-type="submit">Create</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	data() {
		return {
			form: {
				fullName: "",
				birthdate: "",
				position: "",
			},
			placeholder: {
				firstName: "John",
				lastName: "Kowalski",
			},
		}
	},
	computed: {
		fullNamePH: {
			get: function() {
				return this.placeholder.firstName + " " + this.placeholder.lastName
			},
			set: function(value) {
				const names = value.split(" ")
				this.placeholder.firstName = names[0]
				this.placeholder.lastName = names[names.length - 1]
			},
		},
	},
	methods: {
		onSubmit() {
			if (this.form.fullName.trim()) {
				this.fullNamePH = this.form.fullName

				const names = this.form.fullName.split(" ")

				this.$emit("add-new-user", {
					id: Date.now(),
					firstName: names[0],
					lastName: names[names.length - 1],
					position: this.form.position,
				})
				this.form.fullName = ""
			}
		},
	},
}
</script>
