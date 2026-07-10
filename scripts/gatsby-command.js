const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const command = process.argv[2] || "develop";
const args = process.argv.slice(3);
const bin = require.resolve("gatsby/cli.js");
const localConfigHome = path.join(process.cwd(), ".gatsby-user-config");
const localCacheHome = path.join(process.cwd(), ".gatsby-user-cache");

fs.mkdirSync(localConfigHome, { recursive: true });
fs.mkdirSync(localCacheHome, { recursive: true });

const result = spawnSync(process.execPath, [bin, command, ...args], {
  stdio: "inherit",
  env: {
    ...process.env,
    XDG_CONFIG_HOME: localConfigHome,
    XDG_CACHE_HOME: localCacheHome,
    GATSBY_TELEMETRY_DISABLED: "1",
    GATSBY_FEEDBACK_DISABLED: "1",
  },
});

process.exit(result.status || 0);
