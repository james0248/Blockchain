const expect = require('chai').expect;
const Blockchain = require('./blockchain.js');

const bitcoin = new Blockchain();
let previousBlockHash = 'shadkh3y78y2398ws98dyq823';
let currentBlockData = [
    {
        amount: 101,
        sender: '78atw3gw8fao783g2',
        recipient: '902uns98yq8o82zm3eoa28y'
    },
    {
        amount: 287,
        sender: 'ahfra9wu3m9x498w39r',
        recipient: 'WNEXRYAW3M94Y9QY23'
    },
    {
        amount: 8271,
        sender: 'ajdisrnyw83ymox3xq',
        recipient: 'ahdh38Q7YN4I3I2NI'
    }
];
let difficulty = 5;

it('Should have 0s in the beginning', (done) => {
    expect(bitcoin.proofOfWork(previousBlockHash, currentBlockData, difficulty).substring(0, difficulty))
    .to.be.string('0'.repeat(difficulty));
    done();
}).timeout(100000);