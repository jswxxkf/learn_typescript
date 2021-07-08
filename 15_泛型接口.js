function identity(value, message) {
    console.log(value + " " + typeof value);
    console.log(message + " " + typeof message);
    return {
        value: value,
        message: message
    };
}
console.log(identity(26, 'xkf'));
