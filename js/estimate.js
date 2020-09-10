function getInputValue(){
            // Selecting the input element and get its value 
            var inputVal = document.getElementById("area").value;
			var inputVal2 = document.getElementById("floorCount").value;
			var inputVal3 = document.getElementById("plan").value;
			var rs = "₹";
            document.getElementById("demo").innerHTML = inputVal * inputVal2 *inputVal3;
           document.getElementById("ground-bud").innerHTML = rs +(inputVal * 949);
		   document.getElementById("total-bud").innerHTML = rs +(inputVal * inputVal2 *949);
		   document.getElementById("ground-basic").innerHTML = rs +(inputVal *1295);
		   document.getElementById("total-basic").innerHTML = rs +(inputVal * inputVal2 *1295);
		   document.getElementById("ground-pro").innerHTML = rs +(inputVal *1450);
		   document.getElementById("total-pro").innerHTML = rs +(inputVal * inputVal2 *1450);
		   document.getElementById("ground-prem").innerHTML = rs +(inputVal *1950);
		   document.getElementById("total-prem").innerHTML = rs +(inputVal * inputVal2 *1950);
		    if(inputVal2 > 1){ document.getElementById("floor-bud").innerHTML = rs +(inputVal * (inputVal2-1) *949);
		   document.getElementById("floor-basic").innerHTML = rs +(inputVal * (inputVal2-1) *1295);
		   document.getElementById("floor-pro").innerHTML = rs +(inputVal * (inputVal2-1) *1450);
		   document.getElementById("floor-prem").innerHTML = rs +(inputVal * (inputVal2-1) *1950);}
		   if(inputVal2 > 1){
			   if(inputVal2 == 2){
				   document.getElementById("floors-bud").innerHTML = (inputVal2 - 1) +(" Floor");
				   document.getElementById("floors-basic").innerHTML = (inputVal2 - 1) +(" Floor");
		           document.getElementById("floors-pro").innerHTML = (inputVal2 - 1) +(" Floor");
		           document.getElementById("floors-prem").innerHTML = (inputVal2 - 1) +(" Floor");}
			   else{document.getElementById("floors-bud").innerHTML = (inputVal2 - 1) +(" Floors");
		   document.getElementById("floors-basic").innerHTML = (inputVal2 - 1) +(" Floors");
		   document.getElementById("floors-pro").innerHTML = (inputVal2 - 1) +(" Floors");
		   document.getElementById("floors-prem").innerHTML = (inputVal2 - 1) +(" Floors");}}
		  
		   
		   
        }