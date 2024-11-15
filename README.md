# Transaction Tracker App

This is a simple transaction tracker app that allows you to manage, display, and remove transactions like income and expenses. It includes features like:

- Displaying transaction details with color-coded amounts (green for income and red for expenses).
- The ability to remove transactions.
- Conditional rendering of `+` for income and `-` for expenses to indicate the type of transaction clearly.

## Features

- **Transaction Display**: Transactions are displayed with clear labels and formatting, where:
  - **Income** transactions are shown with a **green** border and `+` sign before the amount.
  - **Expense** transactions are shown with a **red** border and `-` sign before the amount.
  
- **Transaction Removal**: Each transaction has a "Remove" button that allows the user to delete it.

- **Responsive Design**: The app is styled to provide a smooth user experience with hover effects and transitions.

## Components

### `TransactionItem`

This component represents a single transaction item.

- **Props**:
  - `transaction`: An object that contains details of the transaction.
    - `details`: A string representing the details of the transaction.
    - `amount`: The amount associated with the transaction (in INR).
    - `transType`: The type of transaction. Can be `income` or `expense`.
  - `removeTransaction`: A function to remove the transaction.

- **Features**:
  - Conditional styling for the border color (green for income, red for expense).
  - Displays `+ ₹` for income and `- ₹` for expenses before the amount.
  - Provides a "Remove" button to delete the transaction.

### `TransactionsContainer`

This component contains a list of all transactions and allows searching/filtering by transaction details.

- **Props**:
  - `transactions`: An array of transaction objects.
  - `removeTransaction`: A function to remove a transaction from the list.

- **Features**:
  - Search input to filter transactions by the details field.
  - Displays the list of transactions with the ability to remove individual transactions.

## How to Use

1. Clone the repository to your local machine.
2. Install dependencies:

   ```bash
   npm install