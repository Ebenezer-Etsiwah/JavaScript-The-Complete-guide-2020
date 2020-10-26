const task3Element = document.getElementById('task-3');

function alertmessage(){
    alert('This is assignment number two');
}

function alertmessageTwo(name){
    alert('Hi ' +name);
}



//alertmessage();
function genderMale(name1, name2, name3){
 const fullName = name1 +name2 +name3;
 alert(fullName); 
  return fullname;   
}

alertmessageTwo('Andrews');

task3Element.addEventListener('click', alertmessage);


 genderMale('Andrew', 'Yaw', 'Awotwe');
