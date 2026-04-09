function calculateRisk() {
    let score = 0;

    let smoker = document.getElementById("smoker").value;
    let exercise = document.getElementById("exercise").value;
    let diet = document.getElementById("diet").value;
    let sleep = parseFloat(document.getElementById("sleep").value);
    let stress = parseFloat(document.getElementById("stress").value);

    if (smoker === "Yes") score += 2;
    if (exercise === "None") score += 2;
    if (diet === "Poor") score += 2;
    if (sleep < 6) score += 1;
    if (stress > 7) score += 2;

    let category = "";
    let recommendation = "";

    if (score <= 2) {
        category = "Low Risk";
        recommendation = "Maintain your healthy lifestyle.";
    } else if (score <= 5) {
        category = "Moderate Risk";
        recommendation = "Improve diet, exercise, and stress management.";
    } else {
        category = "High Risk";
        recommendation = "Immediate lifestyle changes recommended.";
    }

    document.getElementById("result").innerText =
        "Risk Score: " + score + " (" + category + ")";

    document.getElementById("recommendation").innerText =
        recommendation;
}
