import React, { useState } from 'react';
import { Button, Card, Tabs, Tab } from 'react-bootstrap';
import { FaBell, FaCreditCard, FaDollarSign, FaDownload, FaUpload, FaUser, FaRegPaperPlane } from 'react-icons/fa';
import './Transaction.css'; // Import custom CSS

// Dummy data for demonstration
const initialBalance = 5000;
const transactionHistory = [
    { id: 1, type: 'Deposit', amount: 1000, date: '2024-03-15' },
    { id: 2, type: 'Withdrawal', amount: 500, date: '2024-03-14' },
    { id: 3, type: 'Payment', amount: 75, date: '2024-03-13' },
];

export default function Transaction({ userName = "Yatish" }) {
    const [balance, setBalance] = useState(initialBalance);
    const [transactions, setTransactions] = useState(transactionHistory);
    const [key, setKey] = useState('transactions');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('');

    const handleTransaction = () => {
        const numAmount = Number(amount);
        if (isNaN(numAmount) || numAmount <= 0) return;

        let newBalance = balance;
        if (transactionType === 'deposit') {
            newBalance += numAmount;
        } else if (transactionType === 'withdraw') {
            if (numAmount > balance) return; // Prevent overdraft
            newBalance -= numAmount;
        }

        setBalance(newBalance);
        const newTransaction = {
            id: transactions.length + 1,
            type: transactionType === 'deposit' ? 'Deposit' : 'Withdrawal',
            amount: numAmount,
            date: new Date().toISOString().split('T')[0],
        };
        setTransactions([newTransaction, ...transactions]);
        setAmount('');
        setTransactionType('');
    };

    return (
        <div className="container p-4 bg-dark text-white">
            <h1 className="text-3xl font-bold">Welcome, {userName}</h1>

            <div className="row mb-4">
                <div className="col-md-3">
                    <Card className="custom-cards">
                        <Card.Body>
                            <Card.Title>Account Balance</Card.Title>
                            <FaDollarSign className="float-end" />
                            <h2 className="text-2xl font-bold">₹{balance.toFixed(2)}</h2>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="custom-cards">
                        <Card.Body>
                            <Card.Title>Recent Deposits</Card.Title>
                            <FaUpload className="float-end" />
                            <h2 className="text-2xl font-bold">
                                ₹{transactions.filter(t => t.type === 'Deposit').reduce((sum, t) => sum + t.amount, 0).toFixed(2)}
                            </h2>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="custom-cards">
                        <Card.Body>
                            <Card.Title>Recent Withdrawals</Card.Title>
                            <FaDownload className="float-end" />
                            <h2 className="text-2xl font-bold">
                                ₹{transactions.filter(t => t.type === 'Withdrawal').reduce((sum, t) => sum + t.amount, 0).toFixed(2)}
                            </h2>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="custom-cards">
                        <Card.Body>
                            <Card.Title>Notifications</Card.Title>
                            <FaBell className="float-end" />
                            <h2 className="text-2xl font-bold">5</h2>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-4">
                <Tab eventKey="transactions" title="Transactions">
                    <Card className="custom-cards">
                        <Card.Body>
                            <Card.Title>Recent Transactions</Card.Title>
                            <Card.Text>Your last 5 transactions</Card.Text>
                            <div className="mb-2">
                                {transactions.slice(0, 5).map(transaction => (
                                    <div key={transaction.id} className="d-flex align-items-center">
                                        <div className={`me-2 h-2 w-2 rounded ${transaction.type === 'Deposit' ? 'bg-success' : 'bg-danger'}`} />
                                        <div className="flex-grow-1">{transaction.type}</div>
                                        <div className="text-end">₹{transaction.amount.toFixed(2)}</div>
                                        <div className="ms-4 text-muted">{transaction.date}</div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="deposit-withdraw" title="Deposit/Withdraw">
                    <Card className="custom-cards">
                        <Card.Body>
                            <Card.Title>Deposit or Withdraw Funds</Card.Title>
                            <Card.Text>Manage your account balance</Card.Text>
                            <div className="mb-3">
                                <label htmlFor="amount" className="form-label">Amount</label>
                                <input
                                    id="amount"
                                    type="number"
                                    className="form-control bg-gray-600 text-black"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="Enter amount"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="transaction-type" className="form-label">Transaction Type</label>
                                <select
                                    id="transaction-type"
                                    className="form-select bg-gray-600 text-black"
                                    value={transactionType}
                                    onChange={(e) => setTransactionType(e.target.value)}
                                >
                                    <option value="">Select transaction type</option>
                                    <option value="deposit">Deposit</option>
                                    <option value="withdraw">Withdraw</option>
                                </select>
                            </div>
                            <Button variant="primary" onClick={handleTransaction}>Process Transaction</Button>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>

            <div className="row">
                <div className="col-md-4">
                    <Card className="custom-cards"> {/* Ensure consistent class name */}
                        <Card.Body>
                            <Card.Title>Quick Actions</Card.Title>
                            <div className="d-flex justify-content-between">
                                <Button variant="outline-primary" className="w-30">
                                    <FaRegPaperPlane className="me-2" /> Send
                                </Button>
                                <Button variant="outline-secondary" className="w-30">
                                    <FaCreditCard className="me-2" /> Cards
                                </Button>
                                <Button variant="outline-info" className="w-30">
                                    <FaUser className="me-2" /> Profile
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}
