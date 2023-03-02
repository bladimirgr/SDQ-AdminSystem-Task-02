function getData () {
    const data = JSON.parse(localStorage.getItem("tasks"));


    console.log('%c⧭', 'color: #ace2e6', data);
    if(!data) {
        return;
    } else {

        headers = ['Titulo','Descripción', 'Fecha', 'Progreso']

        var body = document.getElementById('list');
        var tbl = document.createElement('table');
        tbl.style.width = '50%';
        // tbl.setAttribute('border', '1');
        
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        thead.appendChild(tr);

        for (var i = 0; i < headers.length; i++) {
            var th = document.createElement('th');
            th.setAttribute('scope', 'col')
            th.innerText = headers[i]
            tr.appendChild(th)
        }
        
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        tbody.appendChild(tr);

        for (var i = 0; i < 4; i++) {
            var td = document.createElement('td');
            // td.appendChild()

            tr.appendChild(td);
        }

        tbl.appendChild(thead);
        tbl.appendChild(tbody);
        body.appendChild(tbl);
    
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

    const task = {
        title: taskForm[0].value,
        description: taskForm[1].value,
        date: taskForm[2].value,
        progress: taskForm[3].value,
    }

    create(task)
    
}

const create = (data) => {
    let _data = JSON.parse(localStorage.getItem("tasks"));
       
    _data ? _data.push(data) : _data = [data];

    localStorage.setItem("tasks", JSON.stringify(_data));

    return {code: 200, response: 'Dato Creado Correctamente'};
}