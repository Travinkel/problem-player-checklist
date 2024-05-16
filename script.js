function evaluatePlayer() {
    const form = document.getElementById('checklist-form');
    const formData = new FormData(form);
    let totalScore = 0;

    for (let value of formData.values()) {
        totalScore += parseInt(value);
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Total Score: ${totalScore}`;

    let evaluation = '';

    if (totalScore >= 30) {
        evaluation = 'Severe problem player. Immediate action needed.';
    } else if (totalScore >= 20) {
        evaluation = 'Significant issues. Address as soon as possible.';
    } else if (totalScore >= 10) {
        evaluation = 'Moderate problems. Consider addressing soon.';
    } else {
        evaluation = 'Minor or no issues. Continue monitoring.';
    }

    resultDiv.textContent = `Total Score: ${totalScore}\n${evaluation}`;
}
