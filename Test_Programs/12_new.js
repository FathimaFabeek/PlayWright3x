function Users(names, roles) {
  return names.map((name, index) => {
    const username = name.toLowerCase().replaceAll(" ", "_");

    return {
      username: username,
      email: username + "@playwrightbatch.com",
      role: roles[index]
    };
  });
}
const names = ["FATHIMA", "FABEEK", "dua", "Yahya"];
const roles = ["User", "Manager", "admin", "editor"];

console.log(Users(names, roles));