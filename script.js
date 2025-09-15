function insert_Row() {
    let ele= document.getElementById("sampleTable")
    let n=ele.childElementCount
    console.log(n)
    let newTr=document.createElement("tr")
    let newTd1=document.createElement("td")
    let newTd2=document.createElement("td")
    newTd1.innerHTML=`Row${n+2} cell1`
    newTd2.innerHTML=`Row${n+2} cell2`
    newTr.appendChild(newTd1)
    newTr.appendChild(newTd2)
    ele.appendChild(newTr)
}
