<script lang="ts">
	//
	import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";

	//
	import { enhance } from "$app/forms";
	import type { User } from "$lib/types";

	export let data: {
		user: User;
	};
</script>

<AppBar>
	<svelte:fragment slot="lead">{data.user.name}</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<form method="POST" action="/auth/logout" use:enhance>
			<button>Log out</button>
		</form>
	</svelte:fragment>
</AppBar>
