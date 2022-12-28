//
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	return {
		title: "Home",
		content: "Welcome to our blog. Lorem ipsum dolor sit amet..."
	};
};
