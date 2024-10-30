- create an empty folder
- run `npm init -y` make the folder node environment
- run `git init` and then create a `.gitignore` file in the root directory
- add `node_modules` to the `.gitignore` list
- add `.env` to the `.gitignore` list

- run `npm i -D nodemon`
- update `package.json` script part to run `npm run dev` with `nodemon`
- run `npm i express`
- run `npm i morgan`
- run `npm i express morgan`

## index.js :

- require `express` `morgan`
- generate app from express `const app = express()`
- using the logger middleware : `const logger = app.use(morgan("dev"))`
- if we want to have a public folder, add : `app.use(express.static("path-to-folder"))`
- create a GET route for products :
  `app.get("/api/products", (req, res) => { res.json(some-json-data)} )`
- create a get route for getting product by id :
  `app.get("/api/products/:productID", (req, res) => { res.json(some-found-product-based-on-its-id)} )`
- run the app and listen to a specific port :
  `app.listen(PORT, () => {console.info("app is running on port")})`
