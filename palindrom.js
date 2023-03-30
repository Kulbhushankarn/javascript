
	function isPalindrome(str)
	{
		let len = str.length;
	

	if (len == 1)
		return true;
	

	let ptr1 = 0;
	

	let ptr2 = len-1;
	
	while (ptr2 >= ptr1)
	{
		if (str[ptr1] != str[ptr2])
			return false;
		ptr1++;
		ptr2--;
	}
	
	return true;
	}
	

	function noOfAppends(s)
	{
		if (isPalindrome(s.split("")))
			return 0;


	s=s.substring(1);

	return 1 + noOfAppends(s);
	}
	
	// Driver code
	let s = "abede";
	document.write(noOfAppends(s));
console.log(isPalindrome("abede"))
