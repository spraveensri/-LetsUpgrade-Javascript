let info = [
  {
    name: "Arun",
    age: 24,
    city: "Chennai",
    salary: 38000,
  },
  {
    name: "Drew",
    age: 27,
    city: "Newyork",
    salary: 80000,
    
  },
  {
    name: "Gosh",
    age: 30,
    city: "Mumbai",
    salary: 50000,
  },
  {
    name: "Harish",
    age: 29,
    city: "Chennai",
    salary: 60000,
  },
  {
    name: "Roy",
    age: 29,
    city: "Delhi",
    salary: 90000,
  },
];

function display(superarray) {
  let tabledata = "";

  superarray.forEach(function (person, index) {
    let currentrow = `<tr>
    <td>${index + 1}</td>
    <td>${person.name}</td>
    <td>${person.age}</td>
    <td>${person.city}</td>
    <td>${person.salary}</td>
    <td>
    <button onclick='deleteperson(${index})'>delete</button>
    <button onclick='showModal(${index})'>update</button>
    </td>
    </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  
}

display(info);

function searchByName() {
  let searchValue = document.getElementById("searchName").value;

  let newdata = info.filter(function (person) {
    return (
      person.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}
function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;
  
    let newdata2 = info.filter(function (person) {
      return (
        person.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata2);
  }
function deleteperson(index) {
  info.splice(index, 1);
  display(info);
}

let updateIndex;

function copyperson(index) {
  updateIndex = index;
  let person = info[index];

  document.getElementById("upname").value = person.name;
  document.getElementById("upage").value = person.age;
  document.getElementById("upcity").value = person.city;
  document.getElementById("upsalary").value = person.salary;
}

function updateperson(e) {
  e.preventDefault();
  let person = info[updateIndex];
  console.log(person);
  let name = document.getElementById("upname").value;
  let age = document.getElementById("upage").value;
  let city = document.getElementById("upcity").value;
  let salary = document.getElementById("upsalary").value;
  person.name = name;
  person.age = Number(age);
  person.city = city;
  person.salary = Number(salary);
  console.log(person);

  display(info);

  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}

function showModal(index) {
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";

  copySuperhero(index);
}

function hideModal(event) {
  if (event.target.className == "modal") {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
}