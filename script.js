function calculateTipPerPerson(billAmount, serviceQuality, numberOfPeople) {
    return (billAmount * (serviceQuality / 100)) / numberOfPeople;
  }
  
  // Test Case 1
  let billAmount1 = 500;
  let serviceQuality1 = 5;
  let numberOfPeople1 = 2;
  let tipPerPerson1 = calculateTipPerPerson(billAmount1, serviceQuality1, numberOfPeople1);
  console.log(`Tip per person for Test Case 1: ${tipPerPerson1}`); // Should log: 12.5
  
  // Test Case 2
  let billAmount2 = 1000;
  let serviceQuality2 = 3;
  let numberOfPeople2 = 5;
  let tipPerPerson2 = calculateTipPerPerson(billAmount2, serviceQuality2, numberOfPeople2);
  console.log(`Tip per person for Test Case 2: ${tipPerPerson2}`); // Should log: 6
  