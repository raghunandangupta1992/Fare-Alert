

$.ajax({
type: 'GET',
url: 'http://api.phantomjscloud.com/single/browser/v1/0f3cfc2cb3d2de3a0c7f9b04840cee69ec0d79ef/?targetUrl=https://www.goibibo.com/minFareChart/20150515/BLR/DEL/80/&requestType=text',
success: function(data) {processData(data)},
error: function(XMLHttpRequest, textStatus, errorThrown) {}
})

function processData(data){
	console.log(data)
	var a = new DocumentFragment();

	$(a).append('<div id="crwlContent">' + data + '</div>');

	notify($(a.querySelector('#crwlContent .countBlue')).clone().children().remove().end().text());
	console.log(a)
	console.log($(a.querySelector('#crwlContent .countBlue')).clone().children().remove().end().text())
}

function notify(content){

if(!content){	
	return;
} else {

	$.ajax({
	      type: 'POST',
	      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
	      data: {
	        'key': 'zPg-ZzxlVH1axBya8hp6xA',
	        'message': {
	          'from_email': 'raghunandangupta1992@gmail.com',
	          'to': [
	              {
	                'email': 'raghunandangupta1992@gmail.com',
	                'name': 'raghunandan',
	                'type': 'to'
	              }
	            ],
	          'autotext': 'true',
	          'subject': content,
	          'html': content,
	        }
	      }
	     }).done(function(response) {

	       console.log(response); // if you're into that sorta thing

	     });

	}

}