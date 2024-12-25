pragma solidity ^0.8.0;

contract BodyActivityReward (
  address public owner;
  mapping(address =>uint) public activityRewards;

  event RewardIssued(address Indexed user, uint reward);

  constructo

  Function IssueReward(address user, uint activityScore) public {
  require(msg.sender == owner, "Only owner can issue rewards");
  unit rewardAmount = activityScore = 10;
  activityRewards[user] +- rewardAmount;
  emit RewardIssued(user, rewardAmount);
  }
  
  function checkRewardBalance(address user) public view returns (uint) {
        return activityRewards[user];
    }
