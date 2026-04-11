function calculateRisk() {
    let score = 0;

    let smoker = document.getElementById("smoker").value;
    let exercise = document.getElementById("exercise").value;
    let diet = document.getElementById("diet").value;
    let alcohol = document.getElementById("alcohol").value;
    let sleep = parseFloat(document.getElementById("sleep").value);
    let stress = parseFloat(document.getElementById("stress").value);

    let breakdown = [];

    // ✅ VALIDATION GOES HERE
    if (isNaN(sleep) || isNaN(stress)) {
        alert("Please enter valid sleep and stress values.");
        return;
    }

    if (smoker === "Yes") {
    score += 2;
    breakdown.push("Smoking increases risk (+2)");
}

if (exercise === "None") {
    score += 2;
    breakdown.push("No exercise (+2)");
}

if (diet === "Poor") {
    score += 2;
    breakdown.push("Poor diet (+2)");
}

if (sleep < 6) {
    score += 1;
    breakdown.push("Low sleep (+1)");
}

if (stress > 7) {
    score += 2;
    breakdown.push("High stress (+2)");
}

if (alcohol === "High") {
    score += 2;
    breakdown.push("High alcohol consumption (+2)");
} 
else if (alcohol === "Moderate") {
    score += 1;
    breakdown.push("Moderate alcohol consumption (+1)");
}

    let category = "";
    let recommendation = "";
    let color = "";

    if (score <= 2) {
    category = "Low Risk";
    recommendation = "Maintain your healthy lifestyle.";
    color = "#00FFB2";
    } 
else if (score <= 5) {
    category = "Moderate Risk";
    recommendation = "Focus on improving diet, exercise, and reducing stress.";
    color = "#FFD166";
    } 
else {
    category = "High Risk";
    recommendation = "Immediate action needed: reduce smoking/alcohol, improve activity, and manage stress.";
    color = "#FF6B6B";
    }

    document.getElementById("result").innerText =
        "Risk Score: " + score + " (" + category + ")";

    document.getElementById("recommendation").innerText =
        recommendation;

    document.getElementById("resultBox").style.background = color;

    let box = document.getElementById("resultBox");
    box.classList.add("show");

    let breakdownList = document.getElementById("breakdown");
breakdownList.innerHTML = "";

breakdown.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    breakdownList.appendChild(li);
});

}

