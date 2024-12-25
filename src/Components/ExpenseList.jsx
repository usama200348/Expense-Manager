const ExpenseList = ({ transactions }) => (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Transaction History</h3>
      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions yet</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center mb-3 last:mb-0"
            >
              <span className="text-gray-700">{transaction.description}</span>
              <span
                className={`font-semibold ${
                  transaction.type === "cash-in" ? "text-green-500" : "text-red-500"
                }`}
              >
                {transaction.type === "cash-in" ? "+" : "-"}${transaction.amount.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
  export default ExpenseList;
  