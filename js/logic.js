function validar(){
    //vamos a adquirir los valores obtenidos :)
    var nombre = document.getElementById("nombre").value;
    var despacho = document.getElementById("despacho").value;
    var puesto = document.getElementById("puesto").value;
    var edad = document.getElementById("edad").value;
    var sueldo = document.getElementById("sueldo").value;
    var retencion = document.getElementById("retencion").value;

    var name = window.encodeURI(nombre)
    fetch("https://almita-particion-express.cyclic.app/particion/?name=" +name, {method : 'GET',})
    .then(function(response) {
        return response.json(); })
        .then(function(json) {
        var data=json.data
        console.log(data)
    })
}