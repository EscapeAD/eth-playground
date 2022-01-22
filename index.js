const { ETH_RPC_API_KEY, ETH_RPC_URL, ETH_ADDRESS} = require("./config.json")
const Web3 = require('web3')
const rpcURL = ETH_RPC_URL + ETH_RPC_API_KEY
const web3 = new Web3(rpcURL)
const address = ETH_ADDRESS

web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
    console.log(balance)
})