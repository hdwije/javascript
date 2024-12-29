function greetLater(name) {
  const greeting = "Hello";

  setTimeout(function () {
    console.log(`${greeting}, ${name}`);
  }, 1000);
}

greetLater("Alice");
