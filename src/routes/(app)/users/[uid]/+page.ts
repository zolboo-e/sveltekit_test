//
import { error } from "@sveltejs/kit";

//
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	if (params.uid === "1") {
		return {
			title: `User ${params.uid}`,
			uid: params.uid
		};
	}

	throw error(404, {
		code: "NOT_FOUND",
		message: "Not found"
	});
};
