function getData () {
    const data =  JSON.parse(localStorage.getItem("tasks")) 

    if(!data) {
        return;
    } else {

        const list = document.getElementById("list");
    
        for (let i = 0; i < data.length; i++) {
            var li = document.createElement('li')
            var value = data[i]
            li.innerHTML = value;
            list.appendChild(li)        
        }

    }

}

getData()


function login() {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    
    if(username.value === "admin" && password.value === "admin") {
        window.location.href = './pages/home.html';
    } else {
        const errorMessage = document.getElementById("errorMessage")
        errorMessage.classList.remove('invisible')
    }
}

const taskList = [];

function insertTask() {
    
    const taskForm = document.getElementById("taskForm")
    // const name = document.getElementById("name")
    // const list = document.getElementById("list");
    // const li = document.createElement("li");

    // if(name.value === "") {

    //     const errorMessage = document.getElementById("errorMessage")
    //     errorMessage.classList.remove('invisible')
       
    // } else {

    //     const errorMessage = document.getElementById("errorMessage")
    //     errorMessage.classList.add('invisible')
        
    //     list.appendChild(li)
    //     li.append(name.value)
  
    //     taskList.push(name.value)

    //     create(name.value)

    //     name.value = '';

    // }


    const task = {
        title: taskForm[0].value,
        description: taskForm[1].value,
        date: taskForm[2].value,
        progress: taskForm[3].value,
    }

    console.log('%c⧭', 'color: #ffcc00', task);
    
}

const create = (data) => {
    let _data = JSON.parse(localStorage.getItem("tasks"));
       
    _data ? _data.push(data) : _data = [data];

    localStorage.setItem("tasks", JSON.stringify(_data));

    return {code: 200, response: 'Dato Creado Correctamente'};
}


// window.onbeforeunload = function(e) {
//     return "Tienes algunos cambios no guardados";
// };