"use strict";
const activities = document.getElementsByClassName('modal');

fetch('https://collection-log.herokuapp.com/graphql', {
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
        console.log(data.data);
        for (let i = 0; i < activities.length; i++) {
            let nameFilter = activities[i].previousElementSibling.getAttribute("name");
            let filteredArray = data.data.items.filter(function(el) {
                return el.activity.activityName == nameFilter;
            });

            // Create elements for each activity
            let div1 = document.createElement("DIV");
            div1.className = "modal-content black";
            let span1 = document.createElement("DIV");
            span1.className = "close";
            span1.innerHTML = "&times;";
            let div2 = document.createElement("DIV");
            div2.className = "name";
            div2.innerHTML = nameFilter;

            activities[i].appendChild(div1);
            div1.appendChild(span1);
            div1.appendChild(div2);

            span1.onclick = function() {
                activities[i].style.display = "none";
            }

            let div3 = document.createElement("DIV");
            div3.className = "row-padding dark-grey padding-64 container";
            let div4 = document.createElement("DIV");
            div4.className = "row items-list";

            div1.appendChild(div3);
            div1.appendChild(div4);


            for (let i = 0; i < filteredArray.length; i++) {
                let name = filteredArray[i].name;
                let obtained = filteredArray[i].obtained;
                let quantity = filteredArray[i].quantity;

                // Create elements to hold item information
                let a1 = document.createElement("A");
                a1.className = "item col";

                let btn1 = document.createElement("BUTTON");
                btn1.className = "item-container";

                let nameDiv = document.createElement("A");
                nameDiv.className = "item-info";
                nameDiv.innerHTML = name;

                let quantityDiv = document.createElement("A");
                quantityDiv.className = "item-info";
                quantityDiv.innerHTML = "Quantity: " + quantity;

                let span2 = document.createElement("A");
                span2.className = "item";

                let span3 = document.createElement("A");
                span3.className = "item";

                let span4 = document.createElement("A");
                span4.className = "item";

                div4.appendChild(a1);
                a1.appendChild(btn1);

                btn1.appendChild(nameDiv);
                btn1.appendChild(quantityDiv);

                nameDiv.appendChild(span2);
                quantityDiv.appendChild(span4);

                if (obtained == 0) {
                    btn1.style.backgroundColor = "red";
                } else {
                    btn1.style.backgroundColor = "green";
                }
            }
        }
    });