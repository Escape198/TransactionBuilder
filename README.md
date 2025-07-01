# 🧩 Transaction Builder

A web interface to build and sign Ethereum raw transactions **offline**.

## ✨ Features

- RLP encoding of transactions
- Local private key management (never stored on disk)
- Offline signing without sending to the network
- Live preview of the serialized transaction

## 📚 Tech Stack

- React (TypeScript)
- ethers.js
- Vite
- ESLint + Prettier

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/transaction-builder.git
cd transaction-builder
```

### 2. Install dependencies

```bash
yarn
```

### 3. Start the dev server

```bash
yarn dev
```
Open http://localhost:5173 in your browser.

## 🛠 Usage

Fill in transaction fields: nonce, to, value, gas, data.

Paste your private key (only stored in memory).

Click Sign Transaction.

Copy the raw signed transaction hex.

![image](https://github.com/user-attachments/assets/7661d404-4b81-40c8-bd50-847ee6d7ba71)

