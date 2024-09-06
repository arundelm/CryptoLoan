import { Address} from 'viem';
import { JayContract } from '../providers/contracts';
import { useAccount, useReadContract } from 'wagmi';


export default function useLoanByAddress() {
  const { abi, address } = JayContract;
  const { address: _address } = useAccount();

  const {data} = useReadContract({
    abi,
    address: address as Address,
    functionName: 'getLoanByAddress',
    args: [_address]
  });

  return {data};
}