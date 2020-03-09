### NS8 assessment

This project is forked from https://github.com/microsoft/TypeScript-Node-Starter/tree/master/src the configuration files (typescript, eslint, jest, prettier, .vscode/\*) are a slightly modified. All files in the `src/` folder are my submission for NS8's assessment.

### Project setup

1. add `.env` file in project root folder
   - NODE_ENV=development

- PORT=8000 (defaults to 8443)

1. `npm ci`
1. `npm start`

> VSCode users: `.vscode/launch.json` can launch an in-IDE debugger for convienience

### Entities

- Users

### Services

- Events
- Authentication

### Endpoints

1.  POST `/authentication/login` - login

    ```javascript
    // request body
    {
    	email: 'test@test.com',
    	password: 'swordfish',
    	...
    	// for new user
    	phoneNumber: '111-222-3333'
    }
    ```

1.  GET `/events/users?today=true`

1.  GET `/events/users/:id`

1.  GET `/authentication/credentials` - This "table" stores the password separate form the User entity. In a production app, I would not expose this to an endpoint

### Jest Test

1. I only added Unit tests for models and controllers for time reasons and routes (depending on how they are written) can sometimes more integration tests, than unit tests.

1. I had some trouble with TypeScript and mocking modules (specifically each model's datastructure), I ran out of time while looking into the issue

### Validation

1. I ran into an error in validations with joi, so I commented them out. I hope to address them ASAP
   > "Cannot read property '\_tracer' of undefined"

### future improvements

1. Add Authentication (cookies, http-only and secure)
1. Add Authorization (https://casbin.org/)
1. More Robust:
   - Response Headers and status
   - Error handling
   - Validation
