$(document).ready(function(){
    
    $("section").fadeIn(2000, function(){

    	 $("textarea").focus();
    }); 

	$("button").click(function(){
		llamarada();
	});    
});

function llamarada(){
	$.ajax({
	    url: "https://api.spotify.com/v1/search",
	    data: {
	      type: 'album',
	      q : 'The Rolling Stones'
	    }
	})
    .done(function(data) {
		// do things w/ oData (JS object)
		var $albumArtista = $('#Album');
		$.each(data.albums.items, function(key, value){
			html = "<article><p><strong>Nombre del album:</strong> "+value.name+"</p><img src='"+value.images[0].url+"'></article>'";
			$albumArtista.append(html);
			console.log(value.name);
		});
		console.log(data.album.items );
	});
}



   