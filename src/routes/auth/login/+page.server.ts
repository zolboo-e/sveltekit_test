//
import { fail, redirect } from "@sveltejs/kit";

//
import type { Actions } from "./$types";

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get("email");
		const password = data.get("password");

		if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
			return fail(400, { invalid: true });
		}

		if (!(email === "e.zolboo@gtn.co.jp" && password === "Password10")) {
			return fail(400, { credentials: true });
		}

		cookies.set("session", email, {
			// send cookie for every page
			path: "/",
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
			sameSite: "lax",
			// only sent over HTTPS in production
			secure: process.env.NODE_ENV === "production",
			// set cookie to expire after a month
			maxAge: 60 * 60 * 24 * 30
		});

		throw redirect(302, "/");
	}
};
