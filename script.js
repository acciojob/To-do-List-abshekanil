//your code here
let input = document.getElementById('newTodoInput');

let btn = document.getElementById('addTodoBtn');

let todolist = document.getElementById('todoList');

btn.addEventListener('click', function(){
	if(input.value === "")
	{
		alert("Please enter a value");
	}
	else
	{
		let liTag = document.createElement('li');
		liTag.innerText = input.value;
		todolist.appendChild(liTag);
		input.value = "";
	}
	
});

