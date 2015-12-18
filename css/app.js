$.getJSON('http://vps227573.ovh.net/u-5.json', function(data){
var ele = $("[elt]"); //to get all elements in attr -- elt
for(var i=0; i<ele.length;i++){   // une boucle avec chacun de ses élements
	var attribut = $(ele[i]).attr("elt"); // lire l'attribut elt de cet élément
    var valuer = data[attribut];
    $(ele[i]).html(valuer);
}
});

