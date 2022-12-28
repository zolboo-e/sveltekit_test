//
import { redirect } from "@sveltejs/kit";

//
import type { Actions } from "./$types";

export const actions: Actions = {
	default: async ({ cookies }) => {
		cookies.set("session", "", {
			maxAge: 0,
			path: "/"
		});

		throw redirect(307, "/");
	}
};
