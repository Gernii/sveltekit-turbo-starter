# Sveltekit Turbo

This is a cutting-edge template for creating Sveltekit monorepos using the latest tools available in the ecosystem (propably already outdated).

## Tools

- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [NPM](https://www.npmjs.com/) (nodejs packages manager)
- [Turborepo](https://turbo.build/repo) (incremental bundler and build system)
- [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) (automated version management)
- [Inlang](https://inlang.com/) for I18n

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **NodeJS**: Make sure you have NodeJS installed on your system. You can download it from [NodeJS](https://nodejs.org/en).

## Getting Started

To get started with this template, follow these steps:

1. Clone this repository:

   ```bash
   git clone git@github.com:Gernii/sveltekit-turbo-starter.git
   ```

2. Change into the project directory:

   ```bash
   cd sveltekit-turborepo-starter
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the the `web` development servers.

## Project Structure

This template follows a TurboRepo structure for managing multiple packages within a single repository. Here's a brief overview of the project structure:

- `apps/`: This directory **contains the various applications** within your turborepo. Each app is a complete sveltekit web application.

- `packages/`: This directory **contains the various packages** within your turborepo.

## Development

1. Create new sveltekit apps in `apps/`

   ```
   npm create svelte@latest my-app
   ```

2. Add your monorepo `packages/` dependencies inside your new apps package.json files

   ```
   "dependencies": {
   	"@repo/eslint-config": "*"
   },
   ```

3. Enjoy building scalable sveltekit monorepos.

## Versioning and Releases

This template is configured to use Semantic Release for versioning and creating releases. Make sure to follow the commit message conventions outlined in the Semantic Release documentation (made easier with the `bun commit` command).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io)
- [NPM](https://www.npmjs.com/)
- [Turborepo](https://turbo.build/repo)
- [Semantic Release](https://semantic-release.gitbook.io/semantic-release/)
- [Inlang](https://inlang.com/)

Enjoy building your SvelteKit application with TurboRepo, ESLint, Prettier, Inlang,and Semantic Release! If you have any questions or need assistance, please refer to the documentation of the respective tools or seek help from the community.
