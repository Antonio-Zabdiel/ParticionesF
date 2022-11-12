function validar(){
    //vamos a adquirir los valores obtenidos :)
    var nombre = document.getElementById("nombre").value;
    var despacho = document.getElementById("despacho").value;
    var puesto = document.getElementById("puesto").value;
    var edad = document.getElementById("edad").value;
    var sueldo = document.getElementById("sueldo").value;

    console.log("sigue funcionando");

    //preparamos las variables para usar el fetch
    var name = window.encodeURI(nombre);
    var desp = window.encodeURI(despacho);
    var puest = window.encodeURI(puesto);
    var age = window.encodeURI(edad);
    var net = window.encodeURI(sueldo);

    //mandamos las variables al fetch
    fetch("https://almita-particion-express.cyclic.app/particion/?name=" +name+"&desp="+desp+"&puest="+puest+"&age="+age+"&net="+net, {method : 'GET',})
    .then(function(response) {
        return response.json(); })
        .then(function(json) {
        var data=json.data
        console.log(data)
    })
}