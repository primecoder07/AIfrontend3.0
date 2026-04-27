let currentStep = 1;

function nextStep() {
  document.getElementById("step" + currentStep).classList.remove("active");
  currentStep++;
  document.getElementById("step" + currentStep).classList.add("active");
}
