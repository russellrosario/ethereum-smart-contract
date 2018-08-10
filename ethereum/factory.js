import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x5282EE5F618f75B40d763D33Fc3e40cB009b9661'
);

export default instance;
