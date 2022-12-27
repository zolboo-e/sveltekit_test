<script lang="ts">
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { writable, type Writable } from 'svelte/store';

	const storeValue: Writable<number> = writable(1);
</script>

<AppRail selected={storeValue}>
	<svelte:fragment slot="lead">
		<AppRailTile label="Tile" title="Tile" value={0}>(icon)</AppRailTile>
	</svelte:fragment>
	<AppRailTile label="Tile" title="Tile" value={1}>(icon)</AppRailTile>
	<AppRailTile tag="a" href="https://github.com/">(icon)</AppRailTile>
	<svelte:fragment slot="trail">
		<AppRailTile label="Tile" title="Tile" value={1}>(icon)</AppRailTile>
	</svelte:fragment>
</AppRail>
