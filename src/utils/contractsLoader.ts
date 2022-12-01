import { HAaveHandler, proxyMockHandler } from "../contracts/Aava";
import { hsCompoundHandler } from "../contracts/Compound";

interface IContracts {
  [key: string]: Function;
}

const contractsLoader: IContracts = {
  "0x9ce5504a17f839F84D6F78Dc68dB4A50F266D30d": HAaveHandler,
  "0xDcDafE091Ac43e1F41CBbbcF78aCB5F4260ff52C": proxyMockHandler,
  "0xaA90D77577fC4626058C23AE6919200410dEAB87": hsCompoundHandler,
};

export default contractsLoader;