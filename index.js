const { ETH_RPC_API_KEY, ETH_RPC_URL, ETH_ADDRESS, CONTRACT_ADDRESS, TOKEN_ADDRESS} = require("./config.json")
const ABI = require("./config/abi.json")
const Web3 = require('web3')
const rpcURL = ETH_RPC_URL + ETH_RPC_API_KEY
const web3 = new Web3(rpcURL)
const address = ETH_ADDRESS

const coin = () =>{
    console.log("Coin eco")
    web3.eth.getBalance(address, (err, wei) => {
        balance = web3.utils.fromWei(wei, 'ether')
        console.log("balance", balance)
    })
}

const token = () => {
    // token check
    console.log("Token Eco")
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
    contract.methods.totalSupply().call((err, result) => { console.log("totalSupply", result) })
    contract.methods.name().call((err, result) => { console.log("name", result) })
    contract.methods.symbol().call((err, result) => { console.log("symbol", result) })
    contract.methods.balanceOf(TOKEN_ADDRESS).call((err, result) => {console.log("balanceOf", result) })
}

coin()
token()