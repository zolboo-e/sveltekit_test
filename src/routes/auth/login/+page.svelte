<script lang="ts">
	//
	import { enhance } from "$app/forms";

	//
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<form method="POST" use:enhance>
	<label>
		Email
		<input name="email" type="email" value="e.zolboo@gtn.co.jp" />
	</label>
	<label>
		Password
		<input name="password" type="password" value="Password10" />
	</label>

	{#if form?.invalid}
		<p class="error">Username and password is required.</p>
	{/if}

	{#if form?.credentials}
		<p class="error">You have entered the wrong credentials.</p>
	{/if}

	<button>Log in</button>
</form>
