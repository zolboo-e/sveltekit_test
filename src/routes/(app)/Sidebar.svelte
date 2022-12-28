<script lang="ts">
	//
	import { AppRail, AppRailTile } from "@skeletonlabs/skeleton";
	import { writable, type Writable } from "svelte/store";

	const storeValue: Writable<number> = writable(1);
	const sections = [
		{ slug: "/users", title: "Users" },
		{ slug: "/settings", title: "Settings" }
	];
</script>

<AppRail selected={storeValue}>
	<svelte:fragment slot="lead">
		<AppRailTile tag="a" href="/" label="Home" class="text-xs" />
	</svelte:fragment>
	{#each sections as section}
		<AppRailTile tag="a" href={section.slug} label={section.title} class="text-xs" />
	{/each}
	<svelte:fragment slot="trail">
		<AppRailTile />
	</svelte:fragment>
</AppRail>
