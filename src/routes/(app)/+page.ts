import type { PageLoad } from "./$types";

export const load = (async () => {
	return {
		title: "Home",
		content: "Welcome to our blog. Lorem ipsum dolor sit amet..."
	};
}) satisfies PageLoad;
