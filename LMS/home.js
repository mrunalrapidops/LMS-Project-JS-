
window.onload = function(e){    
    for(var i=0;i<data.length;i++){
    	var object = data[i];//each object
   		//console.log(typeof(object));
      var row = student_Details.insertRow();
      var cell1 = row.insertCell();
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cell1.appendChild(cb);
   		for (var key in object) {
   			var value = object[key];
   		  var cell1 = row.insertCell();
        cell1.innerHTML = value;              
	     }
       for(let i=0;i<3;i++){
         var cell1 = row.insertCell();

         var btn = document.createElement("BUTTON");
         switch(i) {
            case 0:
               var t = document.createTextNode("Search"); 
              break;
            case 1:
               var t = document.createTextNode("Edit"); 
              break;
              case 2:
               var t = document.createTextNode("Delete"); 
              break;
            default:
              console.log("default");
          } 
        
         btn.appendChild(t);
         cell1.appendChild(btn);          
       }
       
      }
};
function dd(){//defaultdata
  console.log("dd call");
   document.getElementById('un').onkeyup = function ()  
        {
            document.getElementById('mail').value = this.value+"@g.com";
            document.getElementById('pass').value = this.value+"123";
        }  
            
          
    
  document.getElementById("iid").value = newid();
  document.getElementById("course").value= b_course() //+ "[Basic,1(HTML)]";
  document.getElementById("batch").value= cyear() ;
  document.getElementById("mail").value= "@g.com" ;
  

}
function newid(){
  var newid = data[data.length-1].id;//old id
  no = newid.split("",2);//split "u" and "3" into 2 parts
  newidno = Number(no[1])+1 //convert into no
  var newid = no[0].concat(newidno)// concate id 
  return newid;
}
function cyear(){
   var d = new Date();
   var y = d.getFullYear();
   return y; 
}
function b_course(){
  cou = []
  var type = Object.keys(courses[0]);
  console.log(type[0]);//Basic
  cou.push(type[0],1);
  console.log(typeof(cou));
  console.log(Array.isArray(cou));
  return(cou)//+"["+courses[0].Basic[0]+"]");
  //return(courses[0].Basic[0]);
  //console.log(courses[0].Basic[0]);
}
function insertdata(){

data.push({
    "id" : document.getElementById("iid").value,
    "userName" : document.getElementById("un").value,
    "passWord":  document.getElementById('pass').value ,
    "admin": "false",
    "email":  document.getElementById('mail').value,
    "course" : document.getElementById("course").value ,
    "batch" : document.getElementById("batch").value
  });
window.location.href = `convert.php?data=${data}`;
console.log(data);
}

 //document.getElementById("student_Details").appendChild(x);
        //document.createElement("BUTTON").appendChild(x);

      /*vay2*/
      //newRow.insertCell(value); 
//   console.log(value);
      //  console.log("appaend Data")
      /*vay1*/
        /*var x = document.createElement("TD");
        var t = document.createTextNode(value);
        x.appendChild(t);
        document.getElementById("student_Details").appendChild(x);*/

/*
var x = document.createElement("TR");
      x.setAttribute("id","id");
      document.getElementById("student_Details").appendChild(x);
var x = document.getElementById("student_Details").rows.length;
      console.log(x); 
      newRow =  student_Details.insertRow(student_Details.length);
      console.log(typeof(newRow));*/
//console.log("appaend Row");
      //console.log(student_Details.length);
      //var x = document.getElementById("student_Details").rows.length;
      //console.log(x); 
      /*newRow =  student_Details.insertRow(student_Details.length);
*/    
    //console.log(data[i].id);

    /*for (  in obj) {
		    //var value = obj[key];
			console.log(Object.keys(data[i]));		    
		}*/

    	//console.log(Object.keys(data[i]));
    //var key="id";
    	//console.log(data[i].key[i]);
    	//console.log(Object.keys(data[i]));	
   		
    /*for(var property in data){ 
    	var obj = data[property];
    	var eachkey=Object.keys(obj);
    	console.log(eachkey);
    	//var d = data[property];
    	//console.log(d.eachkey[0]);
    	console.log(obj.id);
    	console.log(obj.userName);
    	console.log(obj.passWord);
    	console.log(obj.admin);
    	console.log(obj.email);
    	console.log(obj.course);
    	console.log(obj.batch);
  };*/



  //	console.log(data[property].[0]);
  	/*var x = document.createElement("TD");
			var t = document.createTextNode(data[property].key);
  			x.appendChild(t);
  			document.getElementById("student_Details").appendChild(x);
*/  	//}
  

/*  for(var i=0; i<eachkey.length;i++){
  	var x = document.createElement("TD");
			var t = document.createTextNode(1);
  			x.appendChild(t);
  			document.getElementById("student_Details").appendChild(x);
  }
*/
//var row = document.createElement("TR");
/*var x = document.createElement("TD");
		var t = document.createTextNode(data[property].id);
  		x.appendChild(t);
  		document.getElementById("student_Details").appendChild(x);*/
 	/*for(var i = 0;i<Object.keys(data[property]).length;i++);
    	{
    		var x = document.createElement("TD");
    		var t = document.createTextNode(data[property].id);	
    	}
  	}*/
  	/*document.createElement("TR");*/
  	/*for (var i=0;i<Object.keys(obj).length;i++)  {
  			//var x = document.createElement("TD");
  			//var t = document.createTextNode(data[property].id);
  			console.log(data[property].id);
    	}*/

    	//console.log(eachkey.length);
    	/*for(var i=0; i<=eachkey.length;i++){
  			var x = document.createElement("TD");
			var t = document.createTextNode(1);
  			x.appendChild(t);
  			document.getElementById("student_Details").appendChild(x);
  			console.log("hi");			  		
    	}*/
    	//console.log(eachkey[i]);
/*    	 console.log(eachkey.length);
  for(var j=0;j<eachkey.length;j++){
  		console.log(data[property]);
  	 }
  });
*/