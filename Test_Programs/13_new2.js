
function categorizeError(message) {
const normalizedMessage = message
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  let category;

  if (normalizedMessage.includes("timeout")) {
    category = "TIMEOUT";
  } else if (normalizedMessage.includes("locator")) {
    category = "LOCATOR";
  } else {
    category = "GENERAL";
  }

  console.log(category);
}
  categorizeError("   Error:   Locator   not found   after timeout   ");