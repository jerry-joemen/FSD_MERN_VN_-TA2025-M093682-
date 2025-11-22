
let monthlyExpenses = [2000, 1500, 3500, 4000];

function calculateTotal(expenses) {
  let total = expenses.reduce((acc, val) => acc + val, 0);
  console.log("Total money spent: ₹" + total);
  return total;
}
calculateTotal(monthlyExpenses); 