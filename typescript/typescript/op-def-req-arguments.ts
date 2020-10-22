(function () {
  function activate(
    who: string,
    moment?: string,
    objeto: string = "bat signal"
  ) {
    if (moment) {
      console.log(`${who} activated the ${objeto} in the ${moment}`);
    } else {
      console.log(`${who} activated the ${objeto}`);
    }
  }

  activate("Gordon", "afternoon");
})();
