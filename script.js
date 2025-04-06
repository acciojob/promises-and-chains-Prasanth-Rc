//your JS code here. If required.
const form = document.getElementById("voteForm");
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from refreshing

      const name = nameInput.value.trim();
      const age = ageInput.value.trim();

      // Validation for empty fields
      if (name === "" || age === "") {
        alert("Please enter valid details");
        return;
      }

      // Promise for voting eligibility
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (parseInt(age) > 18) {
            resolve(name);
          } else {
            reject(name);
          }
        }, 4000); // 4 second delay
      })
      .then((name) => {
        alert(`Welcome, ${name}. You can vote.`);
      })
      .catch((name) => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      });
    });