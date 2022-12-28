import crypto from "crypto";
import type { Handle, HandleServerError } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get("session");

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	// find the user based on the session
	const user = {
		id: "1",
		name: session
	};

	// if `user` exists set `events.local`
	if (user) {
		event.locals.user = user;
	}

	// load page as normal
	return await resolve(event);
};

export const handleError: HandleServerError = ({ error, event }) => {
	const errorId = crypto.randomUUID();
	// example integration with https://sentry.io/
	// Sentry.captureException(error, { event, errorId });

	return {
		code: "",
		message: "Whoops!"
	};
};
