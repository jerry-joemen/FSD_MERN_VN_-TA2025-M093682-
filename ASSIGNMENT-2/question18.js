
function startExam(callback) {
  setTimeout(() => {
    console.log("Exam started");
    if (typeof callback === "function") callback();
  }, 500);
}
function evaluateExam(callback) {
  setTimeout(() => {
    console.log("Evaluating answers");
    if (typeof callback === "function") callback();
  }, 1000); 
}
function declareResult() {
  setTimeout(() => {
    console.log("Result declared");
  }, 1500); 
}
startExam(() => evaluateExam(() => declareResult()));

