    function login() {
      const enteredPhone = document.getElementById("number").value.trim();
      const enteredPass = document.getElementById("password").value.trim();
      const result = document.getElementById("res");

      // Simulated "database"
      const validPhone = "1234";
      const validPass = "test";

      function checkPhone(inputPhone) {
        return new Promise((resolve, reject) => {
          if (inputPhone === validPhone) {
            resolve(true);
          } else {
            reject("Invalid user");
          }
        });
      }

      function checkPass(inputPass) {
        return new Promise((resolve, reject) => {
          if (inputPass === validPass) {
            resolve(true);
          } else {
            reject("Invalid pass");
          }
        });
      }

      // Clear previous message
      result.textContent = "";

      // Authenticate
      checkPhone(enteredPhone)
        .then(() => checkPass(enteredPass))
        .then(() => {
          alert("Login success");
        })
        .catch((error) => {
          alert(error);
          result.textContent = error;
        });
    }