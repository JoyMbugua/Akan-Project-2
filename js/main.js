function myFunction () {
	
    var myStringDate = document.getElementById("dateProvided").value;
    
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var maleAkan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    var femaleAkan = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
    var myDate = new Date(myStringDate);
    var dayOfWeek = myDate.getDay();
    
    var gender = document.querySelector('input[name="gender"]:checked').value
    
    if(gender === "male" && dayOfWeek === 6) {
           document.getElementById("message").innerHTML= 'Your Akan name is' + " " + maleAkan[6] + "!"
   } else if(gender === "male" && dayOfWeek === 5) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + maleAkan[5] + "!"
   } else if(gender === "male" && dayOfWeek === 4) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + maleAkan[4] + "!"
   } else if(gender === "male" && dayOfWeek === 3) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + maleAkan[3] + "!"
   } else if(gender === "male" && dayOfWeek === 2) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + maleAkan[2] + "!"
   } else if(gender === "male" && dayOfWeek === 1) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + maleAkan[1] + "!"
   } else if(gender === "male" && dayOfWeek === 0) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + maleAkan[0] + "!"
   }  else if(gender === "female" && dayOfWeek === 0) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + femaleAkan[0] + "!"
   } else if(gender === "female" && dayOfWeek === 1) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + femaleAkan[1] + "!"
   } else if(gender === "female" && dayOfWeek === 2) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + femaleAkan[2] + "!"
   } else if(gender === "female" && dayOfWeek === 3) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + femaleAkan[3] + "!"
   } else if(gender === "female" && dayOfWeek === 4) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + femaleAkan[4] + "!"
   } else if(gender === "female" && dayOfWeek === 5) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + femaleAkan[5] + "!"
   } else if(gender === "female" && dayOfWeek === 6) {
       document.getElementById("message").innerHTML= 'Your Akan name is' + " " + femaleAkan[6] + "!"
   }  else {
        document.getElementById("message").innerHTML= "oops! something seems wrong"
    }
}