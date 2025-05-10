# Scaffold-Node-Express-Typescript

## 1. Initialize Your Project

```shell
mkdir my-express-ts-app
cd my-express-ts-app
npm init -y
```

## 2. Install Dependencies

```shell
npm install express
npm install -D @types/node @types/express tsx
npm install -g typescript
```

## 3. Create Configuration

```shell
npx tsc --init
```

Or, Copy the config mentioned below in a file called: `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "sourceMap": true, // Useful for debugging: allows you to map errors in JS back to TS
    "noUncheckedIndexedAccess": true, // For safer index signatures
    "forceConsistentCasingInFileNames": true, // For cross-platform consistency.
    "incremental": true, // Speeds up compilation by caching build info
    "resolveJsonModule": true // If you ever need to import JSON files
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## 4. Set up Project Structure

```shell
mkdir src
touch src/index.ts
```

## 5. Add `.env` file

Create a .env file in your root directory:

```
PORT=3000
```

## 6. Update package.json scripts

- Please modify the `UV_THREADPOOL_SIZE` according to your core count
- The `NODE_COMPILE_CACHE` mentioned here will only work for macOS/Linux, please use `set` for Windows

```json
"scripts": {
    "start": "NODE_COMPILE_CACHE=./.node_compile_cache UV_THREADPOOL_SIZE=8 tsx watch --env-file=.env src/index.ts",
    "prod": "tsc && NODE_COMPILE_CACHE=./.node_compile_cache UV_THREADPOOL_SIZE=8 node --env-file=.env dist/index.js"
}
```

## Loading Environment variables automatically - Node 20+

Node.js added native support for loading .env files starting with version 20.6.0, using the --env-file flag on the command line. This feature allows you to load environment variables from a file without needing the dotenv package. For example:

```shell
node --env-file=.env app.js
```

### Can we skip dotenv package from now on?

- If you need features not yet supported natively (like variable expansion, multiline values, or loading .env files programmatically in older Node.js versions), you may still want to use dotenv

- If your Node.js version is below 20.6.0, you still need dotenv
