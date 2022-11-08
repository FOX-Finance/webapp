import FOX from './json/FOX.json'
import FOXFARM from './json/FoxFarm.json'
import WETH from './json/WETH.json'
import FOXS from './json/FOXS.json'
import SIN from './json/SIN.json'
import address from './json/address.json'

const DECIMAL = 10**18;
const DECIMAL10 = BigInt(10**10);
const PRECISION = 10**8;
const DECIMAL14 = BigInt(10**14);
const PRECISION4 = 10**4;
const FIXED = 4;

const FOX_CONTRACT_ADDR = address.FOX;
const FOXFARM_CONTRACT_ADDR = address.FoxFarm;
const WETH_CONTRACT_ADDR = address.WETH;
const FOXS_CONTRACT_ADDR = address.FOXS;
const SIN_CONTRACT_ADDR = address.SIN;

const FOX_CONTRACT_ABI = FOX.abi;
const FOXFARM_CONTRACT_ABI = FOXFARM.abi;
const WETH_CONTRACT_ABI = WETH.abi;
const FOXS_CONTRACT_ABI = FOXS.abi;
const SIN_CONTRACT_ABI = SIN.abi;

export { DECIMAL, DECIMAL10, DECIMAL14, PRECISION, PRECISION4, FIXED, FOX_CONTRACT_ADDR, FOX_CONTRACT_ABI, FOXFARM_CONTRACT_ADDR, FOXFARM_CONTRACT_ABI, WETH_CONTRACT_ADDR, FOXS_CONTRACT_ADDR, SIN_CONTRACT_ADDR, WETH_CONTRACT_ABI, FOXS_CONTRACT_ABI, SIN_CONTRACT_ABI };