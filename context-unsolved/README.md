## Start Json-server:

- Run `npm install -g json-server`
- From the root, `cd` to context/db
- `json-server --watch formData.json --port 3002`

## Start React-app:

- From the root, `cd` to context/client
- `npm install`
- `npm start`
- Create a route in Route.js for form: _http://localhost:3000/form_
- In utils folder/API.js, create a getFormData method and point it to: _http://localhost:3002/data_
- In utils folder, create a file named FormContext.jsx, and instatiate Context object from React's Context API, create provider and consumer, and pass the returned data that you get from formData.json to the provider.
- In pages folder, create a file named FormPage.jsx, and provide context to Dashboard
- In components folder/Form.jsx, use FormContextConsumer to pass down value to InputField
