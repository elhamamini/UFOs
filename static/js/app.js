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

function handleClick(){
    let date=d3.select("#datetime").property("value");
    let filteredData=tableData;
    if(date){
        //this line will tell show only rows where the date is equal to the date filter we created above
        filteredData=filteredData.filter(row=>row.datetime===date);
    }
    // now we are creating another table here wiht filter data and if event doesnt occure filter data will be original data
    buildTable(filteredData);
  
   
}
  //our selectore string contains the id for another html tag. well assign a unique id to button elemnt in the html called "filter-btn"
   // we are telling d3 to execute our handleClick() when the button with an is of "filter-btn" is clicked
d3.selectAll("#filter-btn").on("click",handleClick);
//build the table when the page loads;
buildTable(tableData);