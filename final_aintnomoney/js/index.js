function total() {
  var rentValue = document.budgetForm.rentUtilities.value;
  var savingsValue = document.budgetForm.savings.value;
  var cellValue = document.budgetForm.cellphone.value;
  var foodValue = document.budgetForm.food.value;
  var otherValue = document.budgetForm.other.value;
  var salaryValue = document.budgetForm.salary.value;

  if (isNaN(rentValue) || isNaN(savingsValue) || isNaN(cellValue) || isNaN(foodValue) || isNaN(otherValue) || isNaN(salaryValue)) {
    alert('numbers only foo');
    total = "$0.00";
  } else if (rentValue < 1 && savingsValue < 1 && cellValue < 1 && foodValue < 1 && otherValue < 1 && salaryValue < 1) {
    total = "$0.00";
  } else {
    var expenses = Number(rentValue) + Number(savingsValue) + Number(cellValue) + Number(foodValue) + Number(otherValue);
    var total = expenses;
    var spend = Number(salaryValue) - expenses;
    document.getElementById("answer").value = '$' + total + '.00';
    document.getElementById("answer2").value = '$' + spend + '.00';

  }
}
