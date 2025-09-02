//Tested Ai to see what it could do!
"use client";
import React, { useState } from "react";

const mockData = {
    debitCard: {
        cardNumber: "1234 5678 9012 3456",
        balance: 2450.75,
        holder: "John Doe",
        expiry: "12/27",
    },
    accounts: {
        checking: 1800.5,
        savings: 650.25,
    },
};

export default function Homepage() {
    const [checking, setChecking] = useState(mockData.accounts.checking);
    const [savings, setSavings] = useState(mockData.accounts.savings);
    const [transferAmount, setTransferAmount] = useState("");

    const handleTransfer = (e: React.FormEvent) => {
        e.preventDefault();
        const amount = parseFloat(transferAmount);
        if (!isNaN(amount) && amount > 0 && amount <= checking) {
            setChecking(checking - amount);
            setSavings(savings + amount);
            setTransferAmount("");
        }
    };

    return (
        <main style={{ fontFamily: "sans-serif", background: "#f4f6fb", minHeight: "100vh", padding: 32 }}>
            <h1 style={{ marginBottom: 24 }}>Banking Dashboard</h1>
            {/* Debit Card Section */}
            <section
                style={{
                    background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
                    color: "#fff",
                    borderRadius: 16,
                    padding: 24,
                    maxWidth: 350,
                    marginBottom: 32,
                    boxShadow: "0 4px 16px rgba(78,84,200,0.15)",
                }}
            >
                <div style={{ fontSize: 18, marginBottom: 8 }}>Debit Card</div>
                <div style={{ fontSize: 28, fontWeight: "bold", marginBottom: 16 }}>
                    ${mockData.debitCard.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
                <div style={{ letterSpacing: 2, fontSize: 20, marginBottom: 8 }}>
                    {mockData.debitCard.cardNumber}
                </div>
                <div style={{ fontSize: 14 }}>
                    <span>Holder: {mockData.debitCard.holder}</span>
                    <span style={{ float: "right" }}>Exp: {mockData.debitCard.expiry}</span>
                </div>
            </section>

            {/* Transfer Section */}
            <section
                style={{
                    background: "#fff",
                    borderRadius: 12,
                    padding: 24,
                    maxWidth: 400,
                    marginBottom: 32,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
            >
                <h2 style={{ marginBottom: 16, fontSize: 20 }}>Transfer Money</h2>
                <form onSubmit={handleTransfer}>
                    <div style={{ marginBottom: 12 }}>
                        <label>
                            Amount to transfer from Checking to Savings:
                            <input
                                type="number"
                                min="0"
                                step="0.01"
                                value={transferAmount}
                                onChange={e => setTransferAmount(e.target.value)}
                                style={{
                                    marginLeft: 8,
                                    padding: 6,
                                    borderRadius: 4,
                                    border: "1px solid #ccc",
                                    width: 120,
                                }}
                                required
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        style={{
                            background: "#4e54c8",
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            padding: "8px 20px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                        disabled={
                            !transferAmount ||
                            isNaN(Number(transferAmount)) ||
                            Number(transferAmount) <= 0 ||
                            Number(transferAmount) > checking
                        }
                    >
                        Transfer
                    </button>
                </form>
            </section>

            {/* Accounts Balances */}
            <section
                style={{
                    display: "flex",
                    gap: 32,
                    maxWidth: 600,
                }}
            >
                <div
                    style={{
                        background: "#fff",
                        borderRadius: 12,
                        padding: 24,
                        flex: 1,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                >
                    <div style={{ fontSize: 16, marginBottom: 8 }}>Checking Account</div>
                    <div style={{ fontSize: 24, fontWeight: "bold" }}>
                        ${checking.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </div>
                </div>
                <div
                    style={{
                        background: "#fff",
                        borderRadius: 12,
                        padding: 24,
                        flex: 1,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                >
                    <div style={{ fontSize: 16, marginBottom: 8 }}>Savings Account</div>
                    <div style={{ fontSize: 24, fontWeight: "bold" }}>
                        ${savings.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </div>
                </div>
            </section>
        </main>
    );
}