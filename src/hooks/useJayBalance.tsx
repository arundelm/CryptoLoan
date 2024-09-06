import { Address, formatEther} from 'viem';
import { JayContract } from '../providers/contracts';
import { useAccount, useReadContract } from 'wagmi';


export default function useJayBalance() {
  const { abi, address } = JayContract;
  const { address: _address } = useAccount();

  const { data, isSuccess, isError, error, isPending, refetch } = useReadContract({
    abi,
    address: address as Address,
    functionName: 'balanceOf',
    args: [_address]
  });
  //@ts-expect-error
  const balance = data ? formatEther(data) : undefined;
  return { data: balance, isSuccess, isPending, isError, error, refetch };
}