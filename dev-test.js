// const Block = require("./block");

// const fooBlock = Block.mineBlock(Block.genesis(), "data-foot")
// console.log(fooBlock.toString())

// const Blockchain = require("./blockchain");

// const bc = new Blockchain();

// for (let i = 0; i < 100; i++) {
//     // const element = array[i];
//     console.log(bc.addBlock(`foo ${i}`).toString())
// }


const Wallet = require("./wallet")
const wallet = new Wallet()
console.log(wallet.toString())