function insert_Row() {
    let ele = document.getElementById("sampleTable");
    let newTr = document.createElement("tr");
    let newTd1 = document.createElement("td");
    let newTd2 = document.createElement("td");
    
    newTd1.innerHTML = `New Cell1`;
    newTd2.innerHTML = `New Cell2`;
    
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    
    // Instead of changing innerHTML, use appendChild
    ele.insertBefore(newTr, ele.firstChild);
}
