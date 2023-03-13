
// // // // // // // logics:
// // // // //		// operator => 
	// // // // // // // 1=>not able to give as first
	// // // // // // // 2=>not able to give continiously
// // // // // // // numbers =>
	// // // // // // // 1=>After entered one number able to give operators
	// // // // // // // 2=>After entered operator ,just before operator values calculat asper the given operator 
 	


const operator=document.querySelectorAll(".onetd");
const number=document.querySelectorAll(".number");
const getValue=document.querySelector(".setoutput");
const setValue=document.querySelector(".sethere");
const clear=document.querySelector(".clear");
const equalEl=document.querySelector(".enter");
const removeEl=document.querySelector(".remove");
const table=document.getElementsByTagName("td");
const br=document.createElement("brbr");
let equalBt=document.querySelector(".equal");
let ableToPress=true;
let pressedOperaotr='+';
let tempStore=0;
let mainStore=0;
let thirdValue=0;
let currentSoring="";
let arrForMainValue=[];
let countingPressedOperator=0;
let storeOperator=[];
let storeCurrent=[];
for(let i of operator)
{
	i.addEventListener("click",(e)=>
	{
		if(getValue.textContent=="")
		{
			
		}
		else
		{
			if(ableToPress)
			{
				pressedOperaotr=i.textContent;
				calculate(pressedOperaotr,true);
				display(i.textContent);
				ableToPress=false;
				storeOperator.push(i.textContent);
				
			}
		}
	}
	);
}
for(let i of number)
{
	i.addEventListener("click",(e)=>
	{
			currentSoring+=i.textContent;
			calculate(parseInt(currentSoring));
			display(i.textContent);
			ableToPress=true;
		
	}
	);
}

function calculate(value,check)
{
	if(check)
	{
		
		storeCurrent.push(currentSoring);
		mainStore=thirdValue;
		arrForMainValue.push(mainStore);
		tempStore=0;
		if(countingPressedOperator===0)storeCurrent.push(currentSoring);
		
		currentSoring="";
		if(isNaN(thirdValue))
		{
			thirdValue=mainStore;
		}
		displayInSet(thirdValue);
		
	}
	else
	{
		tempStore=value;
		operatorSelection(pressedOperaotr,mainStore,tempStore);
		if(isNaN(thirdValue))
		{
			thirdValue=mainStore;
		}
		
		displayInSet(thirdValue);
	}
}


function operatorSelection(pressedOperaotr,mainStore,tempStore)
{
	switch(pressedOperaotr)
	{
		case '+':thirdValue=mainStore+tempStore;
				 break;				 	
		case '-':thirdValue=mainStore-tempStore;
				break;
					
		case '*':thirdValue=mainStore*tempStore;
				break;
					
		case '/':thirdValue=mainStore/tempStore;
				break;
	}
}

function display(value)
{
			getValue.textContent +=value;
				
}
function displayInSet(value)
{
			setValue.textContent =value;
				
}
// function clear
clear.addEventListener("click",()=>{
	for(let i=0;i<=arrForMainValue.length;i++)
	{
		arrForMainValue.pop();
	}
	for(let i=0;i<=storeOperator.length;i++)
	{
		storeOperator.pop();
	}
	pressedOperaotr='+';
	tempStore=0;
	 mainStore=0;
	 thirdValue=0;
	 currentSoring="";
	 getValue.textContent="";
	 displayInSet("");
}
);

equalEl.addEventListener("click",equal);
equalBt.addEventListener("click",equal);
function equal()
{
		for(let i=0;i<=arrForMainValue.length;i++)
		{
			arrForMainValue.pop();
		}
		for(let i=0;i<=storeOperator.length;i++)
		{
			storeOperator.pop();
		}
		pressedOperaotr='+';
		ableToPress=true;
		mainStore=0;
		tempStore=0;
		currentSoring=thirdValue;
		getValue.textContent =currentSoring;
}

removeEl.addEventListener("click",()=>{
	let lastValue=getValue.textContent.substring(getValue.textContent.length-1,getValue.textContent.length);
	let spliting=getValue.textContent;
	spliting=[...spliting];
	let copycurrent=currentSoring;
	if(lastValue=='+'|| lastValue=='-' || lastValue=='*' || lastValue=='/')
	{
		
		for(let i=0;i<spliting.length-2;i++)
		{
			if(spliting[i]=='+'|| spliting[i]=='-' || spliting[i]=='*' || spliting[i]=='/')
			{
				countingPressedOperator=i;
			}
		}
		currentSoring="";
		for(let i=countingPressedOperator+1;i<spliting.length-1;i++)
		{
				currentSoring+=spliting[i];
				
		}
		
		mainStore=arrForMainValue[arrForMainValue.length-2];
		if(mainStore==undefined )
		{
			mainStore=0;
		}
		arrForMainValue.pop();
		storeOperator.pop();
		pressedOperaotr=storeOperator[storeOperator.length-1];
		ableToPress=true;
		if(countingPressedOperator==0)
		{
			currentSoring=storeCurrent[0];
			pressedOperaotr='+';
		}
	}
	
		
	else
	{
		if(getValue.textContent.substring(getValue.textContent.length-2,getValue.textContent.length-1)==('+'||'-'||'*'||'/'))
		{
			ableToPress=false;
		}
		else
		{
			ableToPress=true;
		}
		//getting Position of Last operator
		for(let i=0;i<spliting.length;i++)
		{
			if(spliting[i]=='+'|| spliting[i]=='-' || spliting[i]=='*' || spliting[i]=='/')
			{
				countingPressedOperator=i;
			}
		}
		//getting Value from  Last operator
		
		currentSoring="";
		for(let i=countingPressedOperator+1;i<getValue.textContent.length-1;i++)
		{
			currentSoring+=spliting[i];
		}
		if(countingPressedOperator==0)
		{
			if(copycurrent.length>1)
			currentSoring=copycurrent.substring(0,copycurrent.length-1);
			
		}
	}
	
	//printing String from first to last - one char
	getValue.textContent=getValue.textContent.substring(0,getValue.textContent.length-1);
	calculate(parseInt(currentSoring));
	countingPressedOperator=0;
}
);
const tableone=document.querySelectorAll(".alltr td");
const tableEqual=document.querySelectorAll(".alltr th");
aniamtion(tableone);
aniamtion(tableEqual);
function aniamtion(table)
{
	for(let i of table)
	{
		i.addEventListener("click",(e)=>{
			e.target.classList.toggle("touch");
			setTimeout((es)=>{	
			e.target.classList.toggle("touch");
			},1000);
		});
}

}
equalBt=equalEl;