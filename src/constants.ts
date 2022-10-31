import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
  AVAX_TESTNET = 43113,
  MUMBAI = 80001,
  FTMTESTNET = 4002,
  RINKEBY = 4,
  CRONOSTESTNET = 338,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x1216e811ab89d48A71Fd6651Bb07455350ae67d4'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: '0x1216e811ab89d48A71Fd6651Bb07455350ae67d4',
  [ChainId.AVAX_TESTNET]: '0x90f885Ee34A1368bd36F567230f128b0C900D0E2',
  [ChainId.MUMBAI]: '0x64e5cbcFbC45A57513B4BB853d18338100D4f1c2',
  [ChainId.FTMTESTNET]: '0x889e737553aa9A0e29fC7ee5E10533D7Fd71A154',
  [ChainId.RINKEBY]: '0x68A0A5B0d78fF6d75CBdb31b470834E5e193491c',
  [ChainId.CRONOSTESTNET] : '0x64e5cbcFbC45A57513B4BB853d18338100D4f1c2',
}

export const INIT_CODE_HASH = '0x11ad23d709fe4da4b13aa65b8937a1600e8724ac9f5ff7c43a82dc94380aa589'

export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: '0x11ad23d709fe4da4b13aa65b8937a1600e8724ac9f5ff7c43a82dc94380aa589',
  [ChainId.AVAX_TESTNET]: '0x11ad23d709fe4da4b13aa65b8937a1600e8724ac9f5ff7c43a82dc94380aa589',
  [ChainId.MUMBAI]: '0x11ad23d709fe4da4b13aa65b8937a1600e8724ac9f5ff7c43a82dc94380aa589',
  [ChainId.FTMTESTNET]: '0x11ad23d709fe4da4b13aa65b8937a1600e8724ac9f5ff7c43a82dc94380aa589',
  [ChainId.RINKEBY]: '0x11ad23d709fe4da4b13aa65b8937a1600e8724ac9f5ff7c43a82dc94380aa589',
  [ChainId.CRONOSTESTNET]: '0x11ad23d709fe4da4b13aa65b8937a1600e8724ac9f5ff7c43a82dc94380aa589',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
