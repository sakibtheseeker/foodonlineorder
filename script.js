function hideDef() {
    document.getElementById("pizza").style.display = "flex";
    document.getElementById("burger").style.display = "none";
    document.getElementById("fries").style.display = "none";
    document.getElementById("sandwitch").style.display = "none";
    document.getElementById("beverages").style.display = "none";
    document.getElementById("salads").style.display = "none";
    document.getElementById("deserts").style.display = "none";
}

function pizza() {
var x = document.getElementById('pizza');
if (x.style.display == 'none') {
  x.style.display = 'flex';
  document.getElementById("burger").style.display = "none";
  document.getElementById("fries").style.display = "none";
  document.getElementById("sandwitch").style.display = "none";
  document.getElementById("beverages").style.display = "none";
  document.getElementById("salads").style.display = "none";
  document.getElementById("deserts").style.display = "none";
} else {
  x.style.display = 'none';
}
}

function burger() {
var x = document.getElementById('burger');
if (x.style.display == 'none') {
  x.style.display = 'flex';
  document.getElementById("pizza").style.display = "none";
  document.getElementById("fries").style.display = "none";
  document.getElementById("sandwitch").style.display = "none";
  document.getElementById("beverages").style.display = "none";
  document.getElementById("salads").style.display = "none";
  document.getElementById("deserts").style.display = "none";
} else {
  x.style.display = 'none';
}
}
function fries() {
var x = document.getElementById('fries');
if (x.style.display == 'none') {
  x.style.display = 'flex';
  document.getElementById("burger").style.display = "none";
  document.getElementById("pizza").style.display = "none";
  document.getElementById("sandwitch").style.display = "none";
  document.getElementById("beverages").style.display = "none";
  document.getElementById("salads").style.display = "none";
  document.getElementById("deserts").style.display = "none";
} else {
  x.style.display = 'none';
}
}
function sandwitch() {
var x = document.getElementById('sandwitch');
if (x.style.display == 'none') {
  x.style.display = 'flex';
  document.getElementById("burger").style.display = "none";
  document.getElementById("pizza").style.display = "none";
  document.getElementById("fries").style.display = "none";
  document.getElementById("beverages").style.display = "none";
  document.getElementById("salads").style.display = "none";
  document.getElementById("deserts").style.display = "none";
} else {
  x.style.display = 'none';
}
}

function beverages(){
var x = document.getElementById('beverages');
if (x.style.display == 'none') {
  x.style.display = 'flex';
  document.getElementById("burger").style.display = "none";
  document.getElementById("pizza").style.display = "none";
  document.getElementById("fries").style.display = "none";
  document.getElementById("sandwitch").style.display = "none";
  document.getElementById("salads").style.display = "none";
  document.getElementById("deserts").style.display = "none";
} else {
  x.style.display = 'none';
}
}

function salads(){
  var x = document.getElementById('salads');
  if (x.style.display == 'none') {
    x.style.display = 'flex';
    document.getElementById("burger").style.display = "none";
    document.getElementById("pizza").style.display = "none";
    document.getElementById("fries").style.display = "none";
    document.getElementById("sandwitch").style.display = "none";
    document.getElementById("beverages").style.display = "none";
    document.getElementById("deserts").style.display = "none";
  } else {
    x.style.display = 'none';
  }
  }

  function deserts(){
    var x = document.getElementById('deserts');
    if (x.style.display == 'none') {
      x.style.display = 'flex';
      document.getElementById("burger").style.display = "none";
      document.getElementById("pizza").style.display = "none";
      document.getElementById("fries").style.display = "none";
      document.getElementById("sandwitch").style.display = "none";
      document.getElementById("beverages").style.display = "none";
      document.getElementById("salads").style.display = "none";
    } else {
      x.style.display = 'none';
    }
    }

    