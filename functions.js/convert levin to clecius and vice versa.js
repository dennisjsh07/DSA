function convertTemp(temperatureValue,conversionUnit)
{
if(conversionUnit=='K')
{
  temperatureValue=temperatureValue+273;
  return (temperatureValue);
}

else if(conversionUnit=='C')
{
  temperatureValue=temperatureValue-273;
  return (temperatureValue);
}
}

var temperatureValue=35;
var conversionUnit='K';
console.log(convertTemp(temperatureValue,conversionUnit));

// can passconsole.log(convertTemp(35,'K'));






