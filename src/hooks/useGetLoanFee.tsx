import { Address} from 'viem';
import { JayContract } from '../providers/contracts';
import { useAccount, useReadContract } from 'wagmi';

export default function useGetLoanFee(days: number) {
    const { abi, address } = JayContract;
    const { address: _address } = useAccount();
    const {data, isSuccess, isPending, isError, error, refetch} = useReadContract({
            abi, 
            address : address as Address,
            functionName: "getLoanFee",
            args: [days],
    });

    return { data, isSuccess, isPending, isError, error, refetch };
}