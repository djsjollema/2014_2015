function isInteger(input){
	result = false;
	if(input%1 == 0) result = true;
	return result;
}

function isNatural(input){
	result = false;
	if(input%1 == 0 && input>0) result = true;
	return result;
}