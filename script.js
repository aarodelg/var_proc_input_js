price=prompt("Enter the price of your meal:")
price=parseInt(price)

tax=0.07
taxAmount = price*tax

tip= 0.05
totalTip= (price+taxAmount)* tip

total=taxAmount+totalTip+price
document.write("The total cost including tax and tip is "+total+".")