(function () {
  const myFunction = function (a: string) {
    return a.toUpperCase();
  };

  const myArrowFunction = (a: string) => a.toUpperCase();

  // console.log(myFunction("Normal"));
  // console.log(myArrowFunction("Arrow"));

  const sum = function (a: number, b: number) {
    return a + b;
  };

  const sumArrow = (a: number, b: number) => a + b;

  // console.log(sum(2, 5));
  // console.log(sumArrow(2, 3));

  const hulk = {
    name: "Hulk",
    smash() {
      setTimeout(() => {
        console.log(`${this.name} smash!!!`); // arrow function no modifican a lo que apunta this. Por lo tanto sigue apuntando a Hulk.
      }, 1000);
    },
  };
  hulk.smash();
})();
