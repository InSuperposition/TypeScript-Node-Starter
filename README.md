
### NS8 assessment
This project is forked from https://github.com/microsoft/TypeScript-Node-Starter/tree/master/src the configuration files (typescript, eslint, jest, prettier, .vscode/*) are a slightly modified. All files in the `src/` folder are my submission for NS8's assessment.

### Project setup
1. add `.env` file in project root folder
	- NODE_ENV=development
  - PORT=8000 (defaults to 8443)

1. `npm ci`
1. `npm start`

> VSCode users: `.vscode/launch.json` can launch an in-IDE debugger for convienience

### Endpoints

1. POST `/authentication/login` - login
	- body
	```javascript
	{
		email: 'test@test.com',
		password: 'swordfish',
		...
		// for new user
		phoneNumber: '111-222-3333'
	}
	```
1. GET `/events/users`
	```javascript
	{
		email: 'test@test.com',
		password: 'swordfish',
		...
		// for new user
		phoneNumber: '111-222-3333'
	}
	```

1. GET `/users`
	```javascript
	{
		email: 'test@test.com',
		password: 'swordfish',
		...
		// for new user
		phoneNumber: '111-222-3333'
	}
	```

	1. GET `/authentication/credentials` - in a production app, I would not expose this to an endpoint
	```javascript
	{
		email: 'test@test.com',
		password: 'swordfish',
		...
		// for new user
		phoneNumber: '111-222-3333'
	}
	```

### Jest test
1. I did not add tests for the `models` files since I'm mocking behavior of an ORM and to timebox the task


