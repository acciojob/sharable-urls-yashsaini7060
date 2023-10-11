document.getElementById("myForm").addEventListener("submit", 
    function(event){
      event.preventDefault()
      var name = document.getElementById("name").value;
      var year = document.getElementById("year").value;
      if(name!="" && year!=""){
        document.getElementById("url").innerHTML = "https://localhost:8080/?name=" + name + "&year=" + year;
      } else if(name!="" && year==""){
        document.getElementById("url").innerHTML = "https://localhost:8080/?name=" + name;
      } else if(name=="" && year!=""){
        document.getElementById("url").innerHTML = "https://localhost:8080/?" + "year=" + year;
      }
      
    }
  );