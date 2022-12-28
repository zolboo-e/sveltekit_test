//
import { redirect } from "@sveltejs/kit";

//
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ cookies, locals }) => {
	const session = cookies.get("session");

	if (!(session && locals.user)) {
		throw redirect(307, "/auth/login");
	}

	return {
		user: locals.user
	};
};
