function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
}

// Test Data
console.log(calculateInvoice(100, 0.08, 5)); // Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected output: "Total Invoice: $530.00"
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

// Test Data
console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"
const calculateLoyaltyDiscount = (amount, years) => {
    let discount;
    if (years >= 5) {
        discount = 0.15;
    } else if (years >= 3) {
        discount = 0.10;
    } else {
        discount = 0.05;
    }
    let discountedPrice = amount * (1 - discount);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

// Test Data
console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost;
    let perLbCost;

    if (location === "USA") {
        baseCost = 5;
        perLbCost = 0.5;
    } else if (location === "Canada") {
        baseCost = 10;
        perLbCost = 0.7;
    } else {
        return "Invalid location"; // If an unknown location is provided
    }

    let shippingCost = baseCost + (weight * perLbCost);

    if (expedited) {
        shippingCost += 10; // Add expedited shipping fee
    }

    return `Shipping Cost: $${shippingCost.toFixed(2)}`;
}

function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

// Test Data
let transactions = [500, 1200, 3000, 800, 2200];
console.log(filterHighValueTransactions(transactions, amount => amount > 1000));
// Expected output: [1200, 3000, 2200]

function createBudgetTracker() {
    let balance = 0;

    return function(expense) {
        balance -= expense;
        return `Current Balance: $${balance}`;
    };
}

// Test Data
let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"

function calculateGrowth(years, revenue) {
    if (years === 0) {
        return `Projected Revenue: $${revenue.toFixed(2)}`;
    }
    return calculateGrowth(years - 1, revenue * 1.05);
}

// Test Data
console.log(calculateGrowth(8, 1000));  // Expected output: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5, 5000));  // Expected output: "Projected Revenue: $6381.41"
