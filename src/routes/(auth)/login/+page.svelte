<script>
	import { enhance } from "$app/forms";
</script>

<form method="POST" use:enhance>
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<label>
		Password
		<input name="password" type="password" />
	</label>
	<button>Log in</button>
</form>
