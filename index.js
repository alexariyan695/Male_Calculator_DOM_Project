const totaljoma1 = document.getElementById("total");
const totalbazer1 = document.getElementById("bazer");
const totalmeal1 = document.getElementById("meal2");
const date1 = document.getElementById("date");
const showdate1 = document.getElementById("showdate");
const takaaca1 = document.getElementById("takaaca");
const mealrate1 = document.getElementById("rate");
const allrate1 = document.getElementById("all-rate");

allrate1.addEventListener("click", () => {
  const date = document.getElementById("date");
  document.getElementById("showdate").innerText = date.value;

  const totaljoma1 = parseInt(total.value);
  const totalbazer1 = parseInt(bazer.value);
  const totalmeal1 = parseInt(meal2.value);

  const sum1 = totaljoma1 - totalbazer1;
  takaaca1.innerText = sum1;

  const permale = totalbazer1 / totalmeal1;
  mealrate1.innerText = permale;
});

const name1 = document.getElementById("name");
const jomatk = document.getElementById("jomatk");
const usemeal = document.getElementById("usemeal");
const addmember = document.getElementById("addmember");

addmember.addEventListener("click", () => {
  const nameValue = name1.value;
  const jomatkValue = jomatk.value;
  const usemealVlaue = usemeal.value;

  const mealrateValue = mealrate1.innerText;

  const khojojTk = mealrateValue * usemealVlaue;

  const finalValue = jomatkValue - khojojTk;

  let dibe = 0;
  let pabe = 0;

if(finalValue==0){
    pabe=finalValue
    dibe=finalValue
}
else if(finalValue>0){
    pabe=finalValue

}
else{
    dibe=finalValue
}

  const tr = document.createElement("tr");
  tr.innerHTML = `
           <td>${tbody.children.length + 1}</td>
              <td>${nameValue}</td>
              <td>${jomatkValue}</td>
              <td>${khojojTk}</td>
              <td>${usemealVlaue}</td>
              <td>${dibe}</td>
              <td>${pabe}</td>
          `;
  tbody.appendChild(tr);

  //         console.log(tr)
});

// =======================

var number = '11';

// number == 10 ? console.log("number same") : console.log("number not same");
// number === 10 ? console.log("number same") : console.log("number not same");

number !== 11 ? console.log('soman noi amon value show koro') : console.log('number soman');

console.log(number);
