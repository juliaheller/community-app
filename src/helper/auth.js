class Auth {
	constructor() {
		this.authenticated = false;
	}
	login(cb) {
		this.authenticated = true;
		cb();
	}

	logout(cb) {
		this.authenticated = false;
		window.localStorage.removeItem("token");

		cb();
	}
	isAuthenticated() {
		let token = window.localStorage.getItem("token");

		if (token) {
			this.authenticated = true;
		}
		return this.authenticated;
	}
	getAuthHeader() {
		return {
			authorization: "Bearer " + window.localStorage.getItem("token"),
		};
	}
}

export default new Auth();
