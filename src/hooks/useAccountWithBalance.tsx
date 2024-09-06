import {useAccount, useBalance} from 'wagmi';

export default function useAccountWithBalance(){
    const {address, isConnecting,isConnected, isDisconnected, connector} = useAccount();
    const {data}= useBalance({address : address, unit : 'ether'});
    return {address, isConnecting,isConnected, isDisconnected, connector,data};
}
