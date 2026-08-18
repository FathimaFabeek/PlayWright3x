const user={
    name:"pramod",
    age:55,
    getName()
    {
        return this.name;
    }
}
console.log(user);
// accessing properties
console.log(user.name);
console.log(user["age"]);
//adding /modifying properties
user.city="nyc";
user.no=31;
console.log(user);