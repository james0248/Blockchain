const SHA256 = require("crypto-js/sha256");

class Blockchain {
    constructor() {
        this.chain = [];
        this.transaction = [];
        this.createNewBlock(0, '0', '0');
    }

    createNewBlock(nonce, previousBlockHash, hash) {
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash
        };
        this.pendingTransactions = []; // Clear out new transactions for the next block
        this.chain.push(newBlock);
        return newBlock;
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    createNewTransaction(amount, sender, recipient) {
        const newTransaction = {
            amount: amount,
            sender, sender,
            recipient: recipient
        };
        this.pendingTransactions.push(newTransaction);
        return this.getLastBlock()['index'] + 1; // returns the number of block which contains this transaction
    }

    hashBlock(previousBlockHash, currentBlockData, nonce) {
        const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
        const hash = SHA256(dataAsString).toString();
        return hash;
    }

    proofOfWork(previousBlockHash, currentBlockData, difficulty) {
        let nonce = 0;
        let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        while(hash.substring(0, difficulty) !== '0'.repeat(difficulty)) {
            nonce++;
            hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        }
        return hash;
    }
}

module.exports = Blockchain;
