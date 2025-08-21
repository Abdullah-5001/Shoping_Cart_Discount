function discountCalculator(bill)
{
  if (bill >500)
  {
    return bill - (bill *20)/100;
  }
  else if(bill >200)
  {
    return bill - (bill*10)/100;
  }
  else{
    return bill;
  }
}
for(let i=1;i<=3;i++)
{
  let bill = Number(prompt(`Enter the price bill of  Customer ${i}`));
  if(isNaN(bill) || bill <=0)
  {
    console.log(`Enter the valid Number`);
  }
  else
  {
    let totalBill = discountCalculator(bill);
    console.log(`Customer number ${i} total bill after discount is ${totalBill}`);
  }

}