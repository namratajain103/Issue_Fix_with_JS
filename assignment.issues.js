/* 
Author: @namrata
Date: 01-11-2020
*/

function showName() {
    var name = prompt("Enter your name");
    //removed unwanted string with name 
    document.getElementById('uname').innerHTML = name;
}

function calculateNum(num_1, num_2, calc_type) {
    /** Calculate two numbers as per calulation type, and show result in the text box */
    var result;
    //@namrata added break
    switch (calc_type) {
        case 'add':
            result = Number(num_1) + Number(num_2);
            break;
        case 'minus':
            result = Number(num_1) - Number(num_2);
            break;
        case 'mul':
            result = Number(num_1) * Number(num_2);
            break;
        case 'div':
            result = Number(num_1) / Number(num_2);
            break;
        case 'mod':
            result = Number(num_1) % Number(num_2);
    }

    document.getElementById('output_box').value = result;
    console.log(result);
}

function changeTitle() {
    var all_titles = document.getElementsByClassName('title-text');

    /*
    for (var val of all_titles) {
        val.classList.remove('text-secondary');
        val.innerHTML = "Successfully Changed titles";
    }
    */

    for (var i = 0; i < all_titles.length; i++) {
        all_titles[i].innerHTML = "Successfully Changed titles";
        all_titles[i].classList.remove('text-secondary');
    }
}


function printPage() {
    var choice = confirm("Do you want to print?");
    if (choice) {
        window.print();
    }
}

function greetUser() {
    alert("Hello and Welcome to our website"); // added bracket because alert is a function
}