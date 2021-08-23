//import data from data.js
const tableData=data;
console.log(tableData)
// we are telling js to look <tbody> tags in the html
var tbody=d3.select("tbody")

function buildTable(data){
    //this line of code is using for clearing the data and it will work as creating a blank canvas
    tbody.html("");
    //this will iretate throutgh an array which means data rows
    //data row bellow is object
    data.forEach((dataRow)=>{
    // now we want ti create a variable that will append a row to the table body
    //this line of code will do a lot it will tells html to find a  tbody and we will add tr for each row
    //tr will wrap each row 
        let row =tbody.append("tr");
    //now we want to loop through each row and it will give us table data and we will wrap it in td tag
    //val below represent each value of the object
        Object.values(dataRow).forEach((val)=>{
            let cell=row.append("td");
            cell.text(val);

    });
    });
}