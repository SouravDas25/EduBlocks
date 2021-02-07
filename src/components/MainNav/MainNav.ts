/**
 * Define schema for navigation options
 */
interface NavOptions {
	id: number;
	text: string;
	icon: string;
	path: string;
}

/**
 * Main navbar class
 */
export class MainNav {
	/**
	 * Define options for the navbar
	 */
	public navOptions: Array<NavOptions> = [
		{id: 1, text: "Home", icon: "home", path: "/"},
		{id: 2, text: "My Projects", icon: "folder", path: "/projects"},
		{id: 3, text: "Showcase", icon: "film", path: "/showcase"},
		{id: 4, text: "Guides", icon: "book_open", path: "/guides"},
		{id: 5, text: "Classroom", icon: "users", path: "/classroom"},
		{id: 6, text: "Settings", icon: "cog", path: "/settings"},
	]
}