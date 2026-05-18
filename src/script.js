let balance = 0; 

// Hämta element
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balanceElement = document.getElementById("balance");

function addTransaction(type) {
  // Hämta värden
  const desc = descInput.value.trim();
  const amountText = amountInput.value.trim();
  const amount = Number(amountText);

  // Validering av tomma fält och ogiltigt belopp
  if (desc === "" || amountText === "" || !Number.isFinite(amount)) {
    return;
  }

  const li = document.createElement("li");

  // Uppdatera listor och saldo
  if (type === "income") {
    li.textContent = `${desc} - ${amountText} kr (Inkomst)`;
    incomeList.appendChild(li);
    balance += amount;
  } else {
    li.textContent = `${desc} - ${amountText} kr (Utgift)`;
    expenseList.appendChild(li);
    balance -= amount;
  }

  balanceElement.textContent = String(balance);

  // Töm inmatningsfält
  descInput.value = "";
  amountInput.value = "";
}

// Klickhändelse för inkomst
incomeBtn.addEventListener("click", function () {
  addTransaction("income");
});

// Klickhändelse för utgift
expenseBtn.addEventListener("click", function () {
  addTransaction("expense");
});