## Features

- Basic JavaScript utility functions
- Unit testing with Jest
- Code linting with ESLint
- Code formatting with Prettier
- Modern JavaScript practices

## Getting Started

### Prerequisites

- Node.js (v14.x or higher recommended)
- npm (v7.x or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd jsbasicslab
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

- **Run the application**:
  ```bash
  node src/index.js
  ```

- **Run tests**:
  ```bash
  npm test
  ```

- **Run tests in watch mode**:
  ```bash
  npm run test:watch
  ```

- **Generate test coverage report**:
  ```bash
  npm run test:coverage
  ```

- **Lint code**:
  ```bash
  npm run lint
  ```

- **Fix linting issues**:
  ```bash
  npm run lint:fix
  ```

- **Format code with Prettier**:
  ```bash
  npm run format
  ```

## Testing

This project uses Jest for testing. Tests are located in the `src/__tests__` directory.

Examples of test cases:
- Basic arithmetic operations testing
- String manipulation testing
- Asynchronous code testing

## Code Quality Tools

### ESLint

ESLint is configured to enforce code quality and consistency. The configuration can be found in `.eslintrc.json`.

### Prettier

Prettier is used for consistent code formatting. Configuration is in `.prettierrc.json`.
