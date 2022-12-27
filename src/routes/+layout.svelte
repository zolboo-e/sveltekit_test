<script lang="ts">
	import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
	import "@skeletonlabs/skeleton/styles/all.css";

	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>
<slot />
