$("#but1").on("click", function(event) {
    
  event.preventDefault();
    var city = $("#city").val();

   
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=fbc075b80da88bbbf4c9e85f7c031ee9";
      

   



    $.ajax({
      url: queryURL,
      method: "GET"

    }) .then(function(response) {
          console.log(response);

        $("#results").empty();
        var res = $("<h3>").html( response.name );
        var temp =$("<div>").text( "Temperature:" + response.main.temp);
        var humid = $("<div>").text( "Humidity:" + response.main.humidity);
        var Wspeed=$("<div>").text("Wind Spped:"+ response.wind.speed);
         var UV= $("<div>").text("UV Index:" + response.main.uvIndex);

        var temp1 = (response.main.temp -273.15)* 1.80 + 32;
        temp.text("Temperature (F): " + temp1);

        $ ("#results").append(res,temp,humid,Wspeed,UV);

          console.log(results);
         
          $("listNames").append(city);
       
          // var list= $("<li>");
        //list.appendChild(city);
         // $("#listNames").prepend(list);


        
})});
