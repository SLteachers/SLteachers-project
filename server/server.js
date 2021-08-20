const app = require("./app");

//port init 
const port = process.env.PORT || 8080;

//start the server 
app.listen(port, () => {
	console.log(`the app is running at ${port}`);
});
