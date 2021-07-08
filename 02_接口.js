function greeter(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "kaifeng", lastName: "xue" };
document.body.innerHTML = greeter(user);
