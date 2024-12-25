const BalanceDisplay = ({ balance }) => (
    <div className="bg-white shadow rounded-lg p-4 text-center mb-6">
      <h2 className="text-xl font-semibold text-gray-700">Current Balance</h2>
      <p className={`text-2xl font-bold ${balance >= 0 ? "text-green-500" : "text-red-500"}`}>
        ${balance.toFixed(2)}
      </p>
    </div>
  );
  
  export default BalanceDisplay;
  