function greet(){
   var a=document.getElementById('n1').value;
   var b=document.getElementById('n2').value;
   var c=document.getElementById('n3').value;
   var d=document.getElementById('n4').value;
   
   if(a==''||b==''||c==''||d=="")
   {
      alert("all fields are maindatory!");
      return false;
   }
   else if(b.length>10||b.length<10)
   {
      alert("number should be of 10 digits!");
      return false;
   }
   else if(isNaN(b))
   {
      alert("Only numbers are allowed!! ");
      return false;
   }
  
   else {
      alert("Thank You , We will get back to you soon !");
      return true;
   }
    

}

    function soon(){
      alert("Coming Soon!");
   }
   
   function message(){
      alert("fill the equiry form below!");
   }