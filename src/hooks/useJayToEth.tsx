import { Address, formatEther} from 'viem';
import { JayContract } from '../providers/contracts';
import { useAccount, useReadContract } from 'wagmi';
import { parseEther } from 'viem';

export default function useJayToEth(jay: string) {
    const { abi, address } = JayContract;
    const { address: _address } = useAccount();
    const value = parseEther(jay.toString());
    const {data, isSuccess, isPending, isError, error, refetch} = useReadContract({
            abi, 
            address : address as Address,
            functionName: "JAYtoETH",
            args: [value],
    });

    //@ts-expect-error
    const balance = data ? formatEther(data) : "0";

    return { data: balance, isSuccess, isPending, isError, error, refetch };
}