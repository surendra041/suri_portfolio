var  details = {};
var information=()=>{
      details.name=document.querySelector("#name").value;
      details.age=document.querySelector("#age").value;
      details.gender=document.querySelector("input[name=gender]:checked").value;
      details.qualification=[];
      var list=document.querySelectorAll("input[name=qualification]:checked");
      for(i=0;i<list.length;i++){
        details.qualification.push(list[i].value);
      }
      details.languages=[];
      var known=document.querySelectorAll("input[name=language]:checked");
      for(j=0;j<known.length;j++){
        details.languages.push(known[j].value);
      }
      details.course=document.querySelector("#course").value
      details.about=document.querySelector("textarea[name=urself]").value;
      var display=()=>{
        document.querySelector("#displaydetails").style.display="block";
        document.querySelector("#dname").innerHTML=details.name
        document.querySelector("#dage").innerHTML=details.age
        document.querySelector("#dgender").innerHTML=details.gender
        document.querySelector("#dlanguages").innerHTML=details.languages
        document.querySelector("#dqualifiaction").innerHTML=details.qualification
        document.querySelector("#dcourse").innerHTML=details.course
        document.querySelector("#dabout").innerHTML=details.about;
    }
    display();
}
