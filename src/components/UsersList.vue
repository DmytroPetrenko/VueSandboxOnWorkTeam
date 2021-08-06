<template>
	<ul>
		<transition-group name="userList">
			<UserItem
				v-for="user in users"
				:key="user.id"
				:user="user"
				:activeId="activeId"
			/>
		</transition-group>
	</ul>
</template>

<script>
import UserItem from "@/components/UserItem"
import { mapGetters } from "vuex"
export default {
	props: {
		activeId: { type: Number },
	},
	components: { UserItem },
	computed: {
		...mapGetters({
			users: "users/allUsers",
		}),
	},
}
</script>

<style>
ul {
	list-style-type: none;
}
.userList-enter-active {
	transition: all 1s;
}
.userList-enter /* .userListleave-active до версии 2.1.8 */ {
	opacity: 0;
	transform: translateY(30px);
}
</style>
