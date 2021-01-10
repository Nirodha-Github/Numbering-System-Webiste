function converter(n) {

    //first drop down
    var numSystemOne = document.getElementById('numSystemOne').value;

    //second drop down
   var numSystemTwo = document.getElementById('numSystemTwo').value;

    //input text
	var number = document.getElementById('number').value;

    var num;

	if ( number == "" || numSystemOne == "" || numSystemTwo == ""  ) {
        alert("Please select or enter value");
		return false;

	}
   
    else{

    	//decimal->divison method
    	if (numSystemOne== "Decimal") {

    		if (numSystemTwo == "Binary") {
    			num=parseInt(number + '', 10).toString(2);
    			//return true;

    		}
    		else if (numSystemTwo == "Octal") {
    			num=parseInt(number + '', 10).toString(8);
    			//return true;

    		}
    		else if(numSystemTwo == "Hexadecimal") {
    			num=parseInt(number + '', 10).toString(16);
    			//return true;

    		}
    		else{
    			num=number;
    			//return true;
    		}
    	
        

    	}

    	//decimal<-multification method
    	else if (numSystemTwo== "Decimal") {

    		if (numSystemOne == "Binary") {
    			num=parseInt(number + '', 2).toString(10);
    			//return true;

    		}
    		else if (numSystemOne == "Octal") {
    			num=parseInt(number + '', 8).toString(10);
    			//return true;

    		}
    		else if(numSystemOne == "Hexadecimal") {

    			num=parseInt(number + '', 16).toString(10);
    			//alert(num);
    			//return true;
    			

    		}
    		else{
    			num=number;
    			//return true;
    		}
    		
       

    	}

    	else if (numSystemOne == "Binary") {
    		if (numSystemTwo == "Octal") {
    			num=parseInt(number + '', 2).toString(8);
    			//return true;

    		}
    		else if (numSystemTwo == "Hexadecimal") {
    			num=parseInt(number + '', 2).toString(16);
    			//return true;
    		}
    		else{
    			num=number;
    			//return true;
    		}
    	
    	}

    	else if (numSystemOne == "Octal") {
    		if (numSystemTwo == "Binary") {
    			num=parseInt(number + '', 8).toString(2);
    			//return true;

    		}
    		else if (numSystemTwo == "Hexadecimal") {
    			num=parseInt(number + '', 8).toString(16);
    			//return true;
    		}
    		else{
    			num=number;
    			//return true;
    		}
    		
    	}

    	else if (numSystemOne == "Hexadecimal") {
    		if (numSystemTwo == "Binary") {
    			num=parseInt(number + '', 16).toString(2);
    			//return true;

    		}
    		else if (numSystemTwo == "Octal") {
    			num=parseInt(number + '',16).toString(8);
    			//return true;
    		}
    		else{
    			num=number;
    			
    			
    		}
    		
    	}
    alert(num);
	//document.getElementById("answertext").innerHTML = num;
    return true;
		
    }

		

}


//carousel
$(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carousel-pause").click(function(){
                $("#mycarousel").carousel('pause');
            });
            $("#carousel-play").click(function(){
                $("#mycarousel").carousel('cycle');
            });
        });