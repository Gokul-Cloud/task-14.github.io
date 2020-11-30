/***********************************************************UI****************************************************************************/
const container1 = createElement('div', 'container mt-3');
const row1 = createElement('div', 'row') 
const rowCol1 = createElement('div', 'col-md-12 col-12')

const table1 = createElement('table', 'mt-3', 'outputTable');



rowCol1.append(table1);
row1.append(rowCol1);
container1.append(row1);
document.body.append(container1);


const container2 = createElement('div', 'container mt-5');
const row2 = createElement('div', 'row') 
const rowCol2 = createElement('div', 'col-md-12 col-12')

const table2 = createElement('table', 'mt-5 position-abs', 'inputTable');


const tr2 = createElement('tr');

const tdPrevious = createElement('td', 'section first');
const tdPreviousText = document.createTextNode('previous');
tdPrevious.append(tdPreviousText);
tdPrevious.setAttribute('onclick', 'showPrevious()');


const tr2td1 = createElement('td', 'section first', '1');
const tr2td1Text = document.createTextNode('1');
tr2td1.append(tr2td1Text);

tr2td1.setAttribute('onclick', 'showData(1)');

const tr2td2 = createElement('td', 'section first', '2');
const tr2td2Text = document.createTextNode('2');
tr2td2.append(tr2td2Text);
tr2td2.setAttribute('onclick', 'showData(2)');

const tr2td3 = createElement('td', 'section first', '3');
const tr2td3Text = document.createTextNode('3');
tr2td3.append(tr2td3Text);
tr2td3.setAttribute('onclick', 'showData(3)');

const tr2td4 = createElement('td', 'section first', '4');
const tr2td4Text = document.createTextNode('4');
tr2td4.append(tr2td4Text);
tr2td4.setAttribute('onclick', 'showData(4)');

const tr2td5 = createElement('td', 'section first', '5');
const tr2td5Text = document.createTextNode('5');
tr2td5.append(tr2td5Text);
tr2td5.setAttribute('onclick', 'showData(5)');

const tr2td6 = createElement('td', 'section first', '6');
const tr2td6Text = document.createTextNode('6');
tr2td6.append(tr2td6Text);
tr2td6.setAttribute('onclick', 'showData(6)');

const tr2td7 = createElement('td', 'section first', '7');
const tr2td7Text = document.createTextNode('7');
tr2td7.append(tr2td7Text);
tr2td7.setAttribute('onclick', 'showData(7)');

const tr2td8 = createElement('td', 'section first', '8');
const tr2td8Text = document.createTextNode('8');
tr2td8.append(tr2td8Text);
tr2td8.setAttribute('onclick', 'showData(8)');

const tr2td9 = createElement('td', 'section first', '9');
const tr2td9Text = document.createTextNode('9');
tr2td9.append(tr2td9Text);
tr2td9.setAttribute('onclick', 'showData(9)');

const tr2td10 = createElement('td', 'section first', '10');
const tr2td10Text = document.createTextNode('10');
tr2td10.append(tr2td10Text);
tr2td10.setAttribute('onclick', 'showData(10)');

const tdNext = createElement('td', 'section first');
const tdNextText = document.createTextNode('next');
tdNext.append(tdNextText);
tdNext.setAttribute('onclick', 'showNext()');

tr2.append(tdPrevious);
tr2.append(tr2td1);
tr2.append(tr2td2);
tr2.append(tr2td3);
tr2.append(tr2td4);
tr2.append(tr2td5);
tr2.append(tr2td6);
tr2.append(tr2td7);
tr2.append(tr2td8);
tr2.append(tr2td9);
tr2.append(tr2td10);
tr2.append(tdNext);

table2.append(tr2);
rowCol2.append(table2);
row2.append(rowCol2);
container2.append(row2);
document.body.append(container2);
function createElement(ele, eleClass='', eleId=''){
  const element = document.createElement(ele);
  element.setAttribute('class', eleClass);
  element.setAttribute('id', eleId); 
  return element;
}



/******************************************************************function****************************************************************/
let inputData = data;
let currentTen = 1;
let previousSection = 1;
populateOutputTable(1);

function showData(index){
  currentTen = index;
  populateOutputTable(index);
}

function showPrevious(){
  if(currentTen !== 1){
    currentTen--;
    showData(currentTen);
  }
}

function showNext(){
  if(currentTen !== 10){
    currentTen++;
    showData(currentTen);
  }
}

function populateOutputTable(index){
  if(previousSection !== 0){
    document.getElementById(previousSection).classList.remove('black');
    document.getElementById(index).classList.add('black');
  }
  previousSection = index;
  document.getElementById('inputTable').classList.remove('position-abs');
  document.getElementById('inputTable').classList.add('position-rel');
  let tr = createElement('tr');
  let td1 = createElement('td','font-weight-bold');
  let td1Text = document.createTextNode('ID');
  td1.append(td1Text);
  td1.style.textAlign = 'center';

  let td2 = createElement('td','font-weight-bold');
  let td2Text = document.createTextNode('NAME');
  td2.append(td2Text);
  td2.style.textAlign = 'center';

  let td3 = createElement('td','font-weight-bold');
  let td3Text = document.createTextNode('EMAIL');
  td3.append(td3Text);
  td3.style.textAlign = 'center';

  tr.append(td1, td2, td3);
  const outputTable = document.getElementById('outputTable');
  outputTable.innerHTML = '';
  outputTable.append(tr);

  for(let i = (index-1) * 10; i < index*10; i++){
    let tr = createElement('tr');
    let td1 = createElement('td');
    let td1Text = document.createTextNode(inputData[i].id);
    td1.append(td1Text);
    td1.style.textAlign = 'center';

    let td2 = createElement('td');
    let td2Text = document.createTextNode(inputData[i].name);
    td2.append(td2Text);
    td2.style.textAlign = 'center';

    let td3 = createElement('td');
    let td3Text = document.createTextNode(inputData[i].email);
    td3.append(td3Text);
    td3.style.textAlign = 'center';

    tr.append(td1,td2,td3);
    outputTable.append(tr);
  }

  
}