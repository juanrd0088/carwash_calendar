function setPassword(){
 oldp=document.getElementById("oldpass").value;
 newp=document.getElementById("newpass").value;
 var xhr = new XMLHttpRequest();
 xhr.open("POST", 'carwash-env.eu-west-1.elasticbeanstalk.com/carwash/change_pwd', true);

 //Send the proper header information along with the request
 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

 xhr.onreadystatechange = function() {//Call a function when the state changes.
     if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
         // Request finished. Do processing here.
     }
 }
 xhr.send("user=jose.javier_garcia.aranda@nokia.com&old_pwd="+oldp+"&newpwd="+newp);
 // xhr.send('string');
 // xhr.send(new Blob());
 // xhr.send(new Int8Array());
 // xhr.send({ form: 'data' });
 // xhr.send(document);*/
}
