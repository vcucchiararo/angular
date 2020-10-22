(function () {
  function getAge() {
    return 100 + 100 + 300;
  }
  const NAME = "Vanesa";
  const LASTNAME = "Gomez";
  const AGE = 30;

  const person = `
  ${NAME} 
  ${LASTNAME} 
  (${getAge()})`;
  //Vanesa Gomez (Age: 30);

  console.log(person);
})();
