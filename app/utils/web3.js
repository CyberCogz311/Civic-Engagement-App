import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

const contractABI = [ /* ABI from the smart contract */ ];
const contractAddress = '0xYourContractAddressHere'; // Replace with your contract address
const contract = new web3.eth.Contract(contractABI, contractAddress);

export const issueReward = async (userAddress, activityScore) => {
  const accounts = await web3.eth.getAccounts();
  const rewardAmount = activityScore * 10; // Example calculation

  await contract.methods.issueReward(userAddress, rewardAmount).send({ from: accounts[0] });
};
