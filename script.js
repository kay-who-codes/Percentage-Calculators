function calculate() {
    const numberA = parseFloat(document.getElementById("numberA").value);
    const numberB = parseFloat(document.getElementById("numberB").value);
    const resultsDiv = document.getElementById("results");
  
    // Clear previous results
    resultsDiv.innerHTML = "";
  
    if (isNaN(numberA) || isNaN(numberB)) {
      resultsDiv.innerHTML = "<p>Please enter valid numbers.</p>";
      return;
    }
  
    // Helper function to format numbers
    function formatNumber(value) {
      return value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
    }
  
// Perform calculations
const percentageAofB = (numberA / numberB) * 100;
const percentageBofA = (numberB / numberA) * 100;
const increaseAByBPercent = numberA * (1 + numberB / 100);
const decreaseAByBPercent = numberA * (1 - numberB / 100);
const increaseBByAPercent = numberB * (1 + numberA / 100);
const decreaseBByAPercent = numberB * (1 - numberA / 100);
const originalAIfBPercent = numberA / (numberB / 100);
const originalBIfAPercent = numberB / (numberA / 100);
const percentageOfA = (numberA * numberB) / 100; // Calculate A% of B
const percentageOfB = (numberB * numberA) / 100; // Calculate B% of A

// Append results with headings
const sections = [
  {
    heading: "Percentage Increase",
    results: [
      { text: `<strong>${numberA}</strong> increased by <strong>${numberB}%</strong> is ${formatNumber(increaseAByBPercent)}.`, value: increaseAByBPercent },
      { text: `<strong>${numberB}</strong> increased by <strong>${numberA}%</strong> is ${formatNumber(increaseBByAPercent)}.`, value: increaseBByAPercent },
    ],
  },
  {
    heading: "Percentage Decrease",
    results: [
      { text: `<strong>${numberA}</strong> decreased by <strong>${numberB}%</strong> is ${formatNumber(decreaseAByBPercent)}.`, value: decreaseAByBPercent },
      { text: `<strong>${numberB}</strong> decreased by <strong>${numberA}%</strong> is ${formatNumber(decreaseBByAPercent)}.`, value: decreaseBByAPercent },
    ],
  },
  {
    heading: "Percentage Difference",
    results: [
      { text: `<strong>${numberA}</strong> is ${formatNumber(percentageAofB)}% of <strong>${numberB}</strong>.`, value: percentageAofB },
      { text: `<strong>${numberB}</strong> is ${formatNumber(percentageBofA)}% of <strong>${numberA}</strong>.`, value: percentageBofA },
    ],
  },
  {
    heading: "Percentage Of",
    results: [
      { text: `<strong>${numberB}%</strong> of <strong>${numberA}</strong> is ${formatNumber(percentageOfB)}.`, value: percentageOfB },
      { text: `<strong>${numberA}%</strong> of <strong>${numberB}</strong> is ${formatNumber(percentageOfA)}.`, value: percentageOfA },
    ],
  },
  {
    heading: "Starting Value",
    results: [
      { text: `If <strong>${numberA}</strong> is <strong>${numberB}%</strong>, the original value is ${formatNumber(originalAIfBPercent)}.`, value: originalAIfBPercent },
      { text: `If <strong>${numberB}</strong> is <strong>${numberA}%</strong>, the original value is ${formatNumber(originalBIfAPercent)}.`, value: originalBIfAPercent },
    ],
  },
];
  
    sections.forEach((section) => {
      // Add section heading
      const heading = document.createElement("h3");
      heading.innerText = section.heading;
      resultsDiv.appendChild(heading);
  
      // Add results for the section
      section.results.forEach((result) => {
        const resultDiv = document.createElement("div");
        resultDiv.className = "result " + (result.value >= 0 ? "positive" : "negative");
        resultDiv.innerHTML = result.text; // Use innerHTML to parse <strong> tags
        resultsDiv.appendChild(resultDiv);
      });
    });
  }
  
  function reset() {
    document.getElementById("numberA").value = "";
    document.getElementById("numberB").value = "";
    document.getElementById("results").innerHTML = "";
  }
  
