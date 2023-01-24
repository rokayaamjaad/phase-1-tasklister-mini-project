document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit',(e) => {
  e.preventDefault()
  let written= document.getElementById ('new-task-description')
  buildToDo(written.value)
  form.reset();
})
});

function buildToDo(task) {
  let li = document.createElement ('li');
  let p =document.createElement('p')
  let btn = document.createElement ('button');

  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  } )
  btn.textContent='X';
  p.textContent=`${task} `;
  li.appendChild(p);
  li.appendChild(btn);
  console.log(li);
  document.querySelector('ul').appendChild(li)

  let forms =document.createElement('form')

  let selected =document.createElement('select')
  let optionOne = document.createElement('option')
  let optionTwo = document.createElement('option')
  let optionThree = document.createElement('option')
  optionOne.textContent='Easy';
  optionOne.value='Easy';
  optionTwo.textContent='So and So';
  optionTwo.value='So and So'
  optionThree.textContent='Hard';
  optionThree.value='Hard'
  selected.appendChild(optionOne);
  selected.appendChild(optionTwo);
  selected.appendChild(optionThree);
  forms.appendChild(selected);
  li.appendChild(forms);

 selected.addEventListener('click', () => {
    console.log(selected.value)
    if (selected.value === 'Easy'){
      console.log("true")
      p.style.backgroundColor= `blue` ;
    }
    else if  (selected.value== 'So and So'){
      p.style.backgroundColor= `grey` ;
    }
    else if(selected.value == 'Hard'){
      p.style.backgroundColor = `red`;
    }
     })

  }
