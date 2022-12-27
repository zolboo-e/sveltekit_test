<script lang="ts">
	import { AppRail, AppRailTile } from "@skeletonlabs/skeleton";
	import { writable, type Writable } from "svelte/store";

	const storeValue: Writable<number> = writable(1);
</script>

<AppRail selected={storeValue}>
	<svelte:fragment slot="lead">
		<AppRailTile tag="a" href="/" label="Home" class="text-xs" />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="trail">
		<AppRailTile />
	</svelte:fragment>
</AppRail>
