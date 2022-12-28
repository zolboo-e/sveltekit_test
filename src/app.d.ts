// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Error {
		code: string;
		message: string;
	}
	interface Locals {
		user?: import("$lib/types").User;
	}
	interface PageData {
		title?: string;
	}
	// interface Platform {}
}
