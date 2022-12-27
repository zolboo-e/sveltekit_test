<script lang="ts">
	import "@skeletonlabs/skeleton/themes/theme-seafoam.css";
	import "@skeletonlabs/skeleton/styles/all.css";
	import { AppBar, AppShell } from "@skeletonlabs/skeleton";

	import Sidebar from "./Sidebar.svelte";
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<AppBar>
			<svelte:fragment slot="lead">(lead)</svelte:fragment>
			(center)
			<svelte:fragment slot="trail">(trail)</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
