var todosLocal =[];
var usersLocal = [];

$(document).ready(function(){

    $.getJSON("https://jsonplaceholder.typicode.com/todos", function(todos){
        todosLocal=todos;
        $.getJSON("https://jsonplaceholder.typicode.com/users", function(users){
            usersLocal=users;
            render();
        })
    })
 
})

function render(){
    $(".todos").children().remove();
    $(".todos").append(`<tr>
    <th>Todo</th>
    <th>Name</th>
    <th>Username</th>
    <th>Email</th>
    <th></th>
</tr>
    `)
    $.each(todosLocal, function(key, todo){
        $.each(usersLocal, function(key, user){
            if(todo.userId == user.id){
                $(".todos").append(createRow(todo, user));
            }
        })
    })
}

function createRow(todo, user){
    if(todo.completed){
        return `<tr class='green'>
               <td>`+todo.title+`</td> 
               <td>`+user.name+`</td> 
               <td>`+user.username+`</td> 
               <td>`+user.email+`</td> 
               <td><button value=`+todo.id+` onclick='deleteTodo(`+todo.id+`)'>Delete</button></td>
        </tr>`;
    } else {
        return `<tr class='red'>
               <td>`+todo.title+`</td> 
               <td>`+user.name+`</td> 
               <td>`+user.username+`</td> 
               <td>`+user.email+`</td> 
               <td><button value=`+todo.id+` onclick='deleteTodo(`+todo.id+`)'>Delete</button></td>
        </tr>`;
    }
}

function deleteTodo(id){
    todosLocal = todosLocal.filter(function(item){
        return item.id != id;
    })
    render();
}