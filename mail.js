var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";

  var template_id = "template_fJ2jPkWy";
  emailjs.send(service_id, template_id, params);

})