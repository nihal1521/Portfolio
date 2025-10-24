const { execSync } = require("child_process");

// Check if we should skip the fetch step
const skipFetch = process.env.SKIP_FETCH === "true";

try {
  if (skipFetch) {
    console.log("⏩ SKIP_FETCH=true → Skipping fetch.js step");
  } else {
    console.log("🚀 Running fetch.js to generate profile data...");
    execSync("node fetch.js", { stdio: "inherit" });
  }
} catch (err) {
  console.error("❌ Error during fetch.js:", err.message);
  
  // If FETCH_FAIL_ON_ERROR is true, fail the build
  if (process.env.FETCH_FAIL_ON_ERROR === "true") {
    process.exit(1);
  } else {
    console.warn("⚠️ Continuing build without fetched data");
  }
}

// Run the build step with CI=false to prevent treating warnings as errors
console.log("📦 Running build...");
execSync("CI=false react-scripts build", { stdio: "inherit" });