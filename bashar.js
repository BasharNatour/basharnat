const Express = require("express");
const Path    = require("path");

const App     = Express();

App.use(Express.static(Path.resolve(__dirname, "public")));
App.disabled("x-powered-by");
App.listen(3001, () => {
	console.log("Basharnat.me is up and running on PORT 3001");
});