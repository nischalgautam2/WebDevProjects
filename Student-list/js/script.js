function displayStudentData(i, studentList){
    //Create elements for each student's information  
    const li = document.createElement('li'); 
    const studentDetailsDiv = document.createElement('div');
    const img = document.createElement('img');
    const fullName = document.createElement('h3');
    const emailSpan = document.createElement('span');
    const dateSpan = document.createElement('span');

    //Update class names and attributes for the elements
    li.className = "student-item cf";
    studentDetailsDiv.className = "student-details";

    img.className = "avatar";
    img.src = data[i].picture.thumbnail; 
    img.alt = "Profile Picture";

    emailSpan.className = "email";
    dateSpan.className = "date";

    //Updating the contents with student details
    fullName.innerHTML = `${data[i].name.first} ${data[i].name.last}`;
    emailSpan.innerHTML = data[i].email; 
    dateSpan.innerHTML = `Joined ${data[i].registered.date}`;

    //append
    studentList.append(li);
    li.appendChild(studentDetailsDiv);
    studentDetailsDiv.append(img, fullName, emailSpan, dateSpan);
}


function searchButton(list){
    const header = document.getElementsByClassName('header')[0];

    const label = document.createElement('label');
    const nameSpan = document.createElement('span');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const img = document.createElement('img');

    label.for = 'search';
    label.className = 'student-search';
    input.id = 'search';
    input.placeholder = "Search by name...";
    input.type = "text";
    button.type = "button";
    img.src = "img/icn-search.svg";
    img.alt = "Search icon";

    header.appendChild(label);
    label.append(nameSpan, input, button);
    button.appendChild(img);

    button.addEventListener('click', () => {
        let searchedName = document.getElementById('search').value.toUpperCase();
        const studentList = document.getElementsByClassName('student-list')[0];
        studentList.innerHTML = ``;

        for(let i = 0; i < list.length; i++){
            let firstName = data[i].name.first.toUpperCase();
            let lastName = data[i].name.last.toUpperCase();
            let fullName = `${firstName} ${lastName}`.toUpperCase();
            let isSearchedName = fullName.includes(searchedName);
            if(isSearchedName){
                displayStudentData(i, studentList);
            }
        }
    });
}


/*
The `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page){
    //Create start and end index for the number of students to display on each page. 
    const startIndex = (page * 9) - 9; 
    const endIndex = page * 9 - 1;
    const studentList = document.getElementsByClassName('student-list')[0];
    studentList.innerHTML = ``;

    for(let i = 0; i < list.length; i++) {
        if(i >= startIndex && i <= endIndex) {
            //Update the contents only when i is between startIndex and endIndex
            //If i not between the startIndex and the endIndex then the loop doesn't do anything
            displayStudentData(i, studentList);
        }
    }
}

/*
The `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

    //Variable to store number of pagination buttons required
    const paginationButtons = Math.ceil(list.length / 9);
    //Variable to contain the element for pagination buttons
    const linkList = document.getElementsByClassName("link-list")[0];

    linkList.innerHTML = '';

    //Loop to add the buttons and append it to the ul
    for(i = 0; i < paginationButtons; i++) {
        //Create and add each button one by one to the ul
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.type = "button";
        button.innerHTML = `${i+1}`;
        //Append the button to the ul
        linkList.append(li);
        li.append(button);
    }

    linkList.addEventListener("click", (e) => {
        if(e.target.tagName === 'BUTTON') {
            document.querySelector('.active').classList.remove('active');
            e.target.className = "active";
            const pageNumberClicked = e.target.textContent; 
            //Call the showPage function to display the contents of the required page
            showPage(list, pageNumberClicked);
        }
    });

    // Create the variable and place the active class on the first button. 
    let active = document.getElementsByTagName('button')[0];
    active.className = "active";
}

// Call the functions
searchButton(data);
showPage(data, 1);
addPagination(data);

