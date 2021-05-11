const data = [ "Sri Dharshini",  "John", "Doe"];
let i = 0;

function myFunction() {
    const result = data.map(currentValue =>{
    i++;
    return {
    number: i,
    firstName: currentValue,
    age: 21,
}; 
  });

console.log("",result);

const myTable = document.querySelector('#table');
const headers = ['S.No' , 'Name' , 'Age'];

const table = document.createElement('table');
const rows = document.createElement('tr');

headers.map(heading => {
    const header = document.createElement('th');
    const textNode = document.createTextNode(heading);
    header.appendChild(textNode);
    rows.appendChild(header);
});

table.appendChild(rows);

result.map(details => {
    const row = document.createElement('tr');
    Object.values(details).map(text => {
        const cell = document.createElement('td');
        const textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);  
    });
    table.appendChild(row);
});
myTable.appendChild(table);
}
myFunction();

