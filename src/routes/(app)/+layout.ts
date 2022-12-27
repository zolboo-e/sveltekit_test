import type { LayoutLoad } from "./$types";

export const load = (async () => {
	return {
		sections: [
			{ slug: "/users", title: "Users" },
			{ slug: "/settings", title: "Settings" }
		]
	};
}) satisfies LayoutLoad;
