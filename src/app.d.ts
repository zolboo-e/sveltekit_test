// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Error {
		code: string;
		message: string;
	}
	interface Locals {
		user: {
			id: string;
			name: string;
		};
	}
	// interface PageData {}
	// interface Platform {}
}
