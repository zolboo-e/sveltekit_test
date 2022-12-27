import type { HandleClientError } from "@sveltejs/kit";

export const handleError = (({ error, event }) => {
	const errorId = crypto.randomUUID();
	// example integration with https://sentry.io/
	// Sentry.captureException(error, { event, errorId });

	return {
		code: "",
		message: "Whoops!"
	};
}) satisfies HandleClientError;
