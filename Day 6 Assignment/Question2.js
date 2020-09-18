window.onload = function () {
  let blankArray = [];

  if (localStorage.getItem("buses") == null) {
    localStorage.setItem("buses", JSON.stringify(blankArray));
  }
};

function display(superarray = undefined) {
  let tabledata = "";
  let buses;
  if (superarray == undefined) {
    buses = JSON.parse(localStorage.getItem("buses"));
  } else {
    buses = superarray;
  }

  buses.forEach(function (bus, index) {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.number}</td>
      <td>${bus.passengercapacity}</td>
      <td>
      <button onclick='deleteBus(${index})'>delete</button>
      <button onclick='showModal(${index})'>update</button>
      </td>
      </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display();

function addBus(e) {
  e.preventDefault();
  let bus = {};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let number = document.getElementById("number").value;
  let passengercapacity = document.getElementById("passengercapacity").value;
  bus.name = name;
  bus.source = source;
  bus.destination = destination;
  bus.number = Number(number);
  bus.passengercapacity = Number(passengercapacity);


  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.push(bus);
  localStorage.setItem("buses", JSON.stringify(buses));

  display();

  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("number").value = "";
  document.getElementById("passengercapacity").value = "";

}

function searchBySource() {
  let searchValue = document.getElementById("searchSource").value;
  let buses = JSON.parse(localStorage.getItem("buses"));
  let newdata = buses.filter(function (bus) {
    return (
      bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}

function searchByDestination() {
  let searchValue = document.getElementById("searchDestination").value;
  let buses = JSON.parse(localStorage.getItem("buses"));
  let newdata = buses.filter(function (bus) {
    return (
      bus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}

function deleteBus(index) {
  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.splice(index, 1);
  localStorage.setItem("buses", JSON.stringify(buses));
  display();
}

let updateIndex;

function copyBus(index) {
  let buses = JSON.parse(localStorage.getItem("buses"));
  updateIndex = index;
  let bus = buses[index];

  document.getElementById("upname").value = bus.name;
  document.getElementById("upsource").value = bus.source;
  document.getElementById("updestination").value = bus.destination;
  document.getElementById("upnumber").value = bus.number;
  document.getElementById("uppassengercapacity").value = bus.passengercapacity;
}

function updateBus(e) {
  e.preventDefault();
  let buses = JSON.parse(localStorage.getItem("buses"));
  let bus = buses[updateIndex];
  console.log(bus);
  let name = document.getElementById("upname").value;
  let source = document.getElementById("upsource").value;
  let destination = document.getElementById("updestination").value;
  let number = document.getElementById("upnumber").value;
  let passengercapacity = getElementById("uppassengercapacity").value;
  bus.name = name;
  bus.source = source;
  bus.destination = destination;
  bus.number = Number(number);
  bus.passengercapacity = Number(passengercapacity);

  localStorage.setItem("buses", JSON.stringify(buses));
  display(buses);

  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}

function showModal(index) {
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";

  copyBus(index);
}

function hideModal(event) {
  if (event.target.className == "modal") {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
}