/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Active7DaysFundingCycleBallot,
  Active7DaysFundingCycleBallotInterface,
} from "../Active7DaysFundingCycleBallot";

const _abi = [
  {
    inputs: [],
    name: "duration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "reconfigurationDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_configured",
        type: "uint256",
      },
    ],
    name: "state",
    outputs: [
      {
        internalType: "enum BallotState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class Active7DaysFundingCycleBallot__factory {
  static readonly abi = _abi;
  static createInterface(): Active7DaysFundingCycleBallotInterface {
    return new utils.Interface(_abi) as Active7DaysFundingCycleBallotInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Active7DaysFundingCycleBallot {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Active7DaysFundingCycleBallot;
  }
}