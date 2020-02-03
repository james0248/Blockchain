class Blockchain {
    constructor() {
        this.chain = [];
        this.transaction = [];
    }

    createNewBlock(nonce, previousBlockHash, hash) {
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.newTransaction,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash
        };
        this.newTransaction = []; // Clear out new transactions for the next block
        this.chain.push(newBlock);
        return newBlock;
    }
}

module.exports = Blockchain;
