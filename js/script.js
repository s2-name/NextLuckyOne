var allElement = document.getElementById('all');
var lastnames = document.querySelectorAll('.lastnames');

allElement.addEventListener('click', allOffOn);
document.getElementById('find').addEventListener('click', findLuckyOne);
lastnames.forEach(element => {
    element.addEventListener('click', updateAll);
});


function allOffOn(){
    if (allElement.checked){
        lastnames.forEach(function(element){
            element.checked = true;
        })
    }else{
        lastnames.forEach(function(element){
            element.checked = false;
        })
    }
}
function findLuckyOne(){
    var riskGroup = [];
    lastnames.forEach(function(lastname){
        if(lastname.checked == true){
            riskGroup.push(lastname);
        }
    });
    var arrLen = riskGroup.length;
    var randomNumber = parseInt(Math.random() * (arrLen - 0) + 0);
    document.getElementById('result').innerHTML = "Счастливчик: " + riskGroup[randomNumber].getAttribute('data-lastname');
    if(document.getElementById('autoUncheck').checked){
        riskGroup[randomNumber].checked = false;
        updateAll();
    }
}

function updateAll(){
    var isChecked = true;
    lastnames.forEach(function(element){
       if(element.checked != true){
           isChecked = false;
       }
    })
    if (isChecked){
        allElement.checked = true;
       }else{
        allElement.checked = false;
       }
}