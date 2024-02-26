import abi from "./abi.json";

var { Web3 } = require("web3");
var web3 = new Web3(process.env.NEXT_PUBLIC_INFURA_URL);

let c_address1 = "0x38028608746586a1b1FB5Bf4637E91181fC8E916";
let contract1 = new web3.eth.Contract(abi, c_address1);

export default async function getNZF(address: string) {
  try {
    const balance = await contract1.methods.balanceOf(address).call();
    console.log("NZF Balance:", balance);
    return balance;
  } catch (error) {
    console.error("Error fetching NZF balance:", error);
    throw error;
  }
}
