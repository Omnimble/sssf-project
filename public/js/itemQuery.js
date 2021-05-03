'use strict';
let loadData = () => {

    // Add spinner, hide elements while loading
    let spinner = document.createElement("DIV");
    spinner.className = "loader";
    let menu = document.getElementById('menu');
    menu.appendChild(spinner);
    let options = document.getElementsByClassName('options');
    for (let i = 0; i < options.length; i++) {
        options[i].style.display = "none";
    }


    fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
            query {
                items {
                  id
                  name
                  obtained
                  quantity
                  activity {
                    activityName
                  }
                }
              }
                          
        `
            })
        })
        .then(res => res.json())
        .then(data => {
            // Store item list in local storage. Remove spinner and make elements visible
            localStorage.setItem('items', JSON.stringify(data.data));
            console.log("items in localStorage")
            spinner.remove();
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = "block";
            }

        });
};