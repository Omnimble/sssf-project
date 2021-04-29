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
            var nameFilter = activities[i].previousElementSibling.getAttribute("name");
            var filteredArray = data.data.items.filter(function(el) {
                return el.activity.activityName == nameFilter;
            });
            console.log(filteredArray);

            var div1 = document.createElement("DIV"); // Create a <div> node
            div1.className = "modal-content black";
            var span1 = document.createElement("DIV"); // Create a <span> node
            span1.className = "close";
            span1.innerHTML = "&times;";
            var div2 = document.createElement("DIV"); // Create another <div> node
            div2.className = "name";
            div2.innerHTML = nameFilter;

            activities[i].appendChild(div1);
            div1.appendChild(span1);
            div1.appendChild(div2);

            span1.onclick = function() {
                activities[i].style.display = "none";
            }

            var div3 = document.createElement("DIV"); // Create a <div> node
            div3.className = "row-padding dark-grey padding-64 container";
            var div4 = document.createElement("DIV"); // Create a <div> node
            div4.className = "row items-list";

            div1.appendChild(div3);
            div1.appendChild(div4);


            for (let i = 0; i < filteredArray.length; i++) {
                var name = filteredArray[i].name;
                var obtained = filteredArray[i].obtained;
                var quantity = filteredArray[i].quantity;

                var a1 = document.createElement("A"); // Create a <a> node
                a1.className = "item col";

                var btn1 = document.createElement("BUTTON"); // Create a <button> node
                btn1.className = "item-container";

                var nameDiv = document.createElement("A"); // Create a <a> node
                nameDiv.className = "item-info";
                nameDiv.innerHTML = name;

                var quantityDiv = document.createElement("A"); // Create a <a> node
                quantityDiv.className = "item-info";
                quantityDiv.innerHTML = "Quantity: " + quantity;

                var span2 = document.createElement("A"); // Create a <span> node
                span2.className = "item";

                var span3 = document.createElement("A"); // Create a <span> node
                span3.className = "item";

                var span4 = document.createElement("A"); // Create a <span> node
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