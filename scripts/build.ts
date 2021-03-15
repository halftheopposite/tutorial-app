import { build } from "esbuild";

/**
 * Generic options passed during build.
 */
interface BuildOptions {
  env: "production" | "development";
}

/**
 * A builder function for the app package.
 */
export async function buildApp(options: BuildOptions) {
  const { env } = options;

  await build({
    entryPoints: ["packages/app/src/index.tsx"],
    outfile: "packages/app/public/script.js",
    define: {
      "process.env.NODE_ENV": `"${env}"`,
    },
    bundle: true,
    minify: env === "production",
    sourcemap: env === "development",
  });
}

/**
 * A builder function for the server package.
 */
export async function buildServer(options: BuildOptions) {
  const { env } = options;

  await build({
    entryPoints: ["packages/server/src/index.ts"],
    outfile: "packages/server/dist/index.js",
    define: {
      "process.env.NODE_ENV": `"${env}"`,
    },
    external: ["express"],
    platform: "node",
    target: "node10.4",
    bundle: true,
    minify: env === "production",
    sourcemap: env === "development",
  });
}

/**
 * A builder function for all packages.
 */
async function buildAll() {
  await Promise.all([
    buildApp({
      env: "production",
    }),
    buildServer({
      env: "production",
    }),
  ]);
}

// This method is executed when we run the script from the terminal with ts-node
buildAll();
