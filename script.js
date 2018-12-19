var list = document.getElementById('list');

// add item
let addButton = document.getElementById('add'); // get the element from html
addButton.addEventListener('click', addTask); // add event listener

// remove item
let removeButton = document.getElementById('remove'); // get the element from html
removeButton.addEventListener('click', removeTask); // add event listener

function addTask() {
    console.log('Adding Task');

    // get input value from element
    let input = document.getElementById('input');
    let task = input.value;

    // create new child node for the label element
    let textNode = document.createTextNode(task);

    if (task === '') {
        return false;
    }

    // create new list item
    let listItem = document.createElement('li');

    // create checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', 'check');

    // create label
    let label = document.createElement('label');

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    label.appendChild(textNode);
    list.appendChild(listItem);

    list.insertBefore(listItem, list.childNodes[0]);

    setTimeout(() => {
        listItem.className = 'visual';
    })

    input.value = '';
}

function removeTask() {
    console.log('Removing checked task(s)');

    let listItems = list.children;
    for (let i = 0; i < listItems.length; i++) {
        let listElements = listItems[i].children;

        while (listItems[i] && listElements[0].checked) {
            list.removeChild(listItems[i]);
        }
    }
}