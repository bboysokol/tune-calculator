import cookie from "vue-cookies";

const SESSION_COOKIE_NAME = "common_token";
const APP_DOMAIN = process.env.VUE_APP_NODE_ENV === "prod" ? "v-rp.pl" : "";

const defaultParams = {
	expires: "72h",
};

export function hasSessionCookie() {
	return !!cookie.get(SESSION_COOKIE_NAME);
}

export function setSessionCookie() {
	cookie.set(
		SESSION_COOKIE_NAME,
		true,
		defaultParams.expires,
		"/",
		APP_DOMAIN
	);
}
