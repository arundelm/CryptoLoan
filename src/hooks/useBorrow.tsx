import {Address, parseEther} from "viem";
import { JayContract } from "../providers/contracts";
import useWriteContractAndWaitForConfirm from "./useWriteContractAndWaitForConfirm";


export default function useBorrow(){
    const {writeContract, isError, isSuccess, isConfirming, isPending, reset} = useWriteContractAndWaitForConfirm();
    const {abi, address} = JayContract;

    const borrow = (jay: string, ethAmount : string, days: number ) =>{
        const jayCollateral =  parseEther(jay.toString());
        const ethToBorrow=  parseEther(ethAmount.toString());
        writeContract({
            abi,
            address : address as Address,
            functionName: "borrow",
            args: [jayCollateral, ethToBorrow, days],
        });
    }
    return {borrow,isError, isSuccess, isConfirming, isPending, reset};
}