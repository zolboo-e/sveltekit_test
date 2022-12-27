<script lang="ts">
	import { AppBar, AppRailTile, AppShell } from "@skeletonlabs/skeleton";

	import { page } from "$app/stores";

	import type { LayoutData } from "./$types";
	import Sidebar from "./Sidebar.svelte";

	export let data: LayoutData;
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar>
			{#each data.sections as section}
				<AppRailTile tag="a" href={section.slug} label={section.title} class="text-xs" />
			{/each}
		</Sidebar>
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<AppBar>
			<svelte:fragment slot="lead">(lead)</svelte:fragment>
			(center)
			<svelte:fragment slot="trail">(trail)</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="container h-full mx-auto">
		<slot />
	</div>
</AppShell>
