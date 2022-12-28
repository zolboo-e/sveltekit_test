<script lang="ts">
	//
	import { AppShell } from "@skeletonlabs/skeleton";

	//
	import AppBar from "./AppBar.svelte";
	import SideBar from "./SideBar.svelte";

	//
	import type { LayoutData } from "./$types";

	export let data: LayoutData;
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<SideBar />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<AppBar {data} />
	</svelte:fragment>
	<div class="container mx-auto h-full">
		<slot />
	</div>
</AppShell>
