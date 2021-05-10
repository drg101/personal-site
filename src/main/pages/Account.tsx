import { useGlobalState } from '../../globalState/GlobalStateProvider'
import { Grid } from '@material-ui/core';
import { getJSON, isValidAddress } from '../../lib/Util';
import { useEffect, useState } from 'react';
import Constants from '../../globalState/Constants';
import AddressInfo from '../../interfaces/AddressInfo';


enum addressStatusEnum {
    loading,
    bad,
    done
}

export default function Account() {
    const { globalState, setGlobalState } = useGlobalState();
    const { address } = globalState;
    const [ addressStatus, setAddressStatus ] = useState(addressStatusEnum.loading);
    const [ addressInfo, setAddressInfo ] = useState({} as AddressInfo["result"]);

    useEffect(() => {
        if (!isValidAddress(address)) {
            setAddressStatus(addressStatusEnum.bad);
            return;
        }

        (async () => {
            const response: AddressInfo = await getJSON(Constants.addressInfo(address));
            if(response.result){
                setAddressInfo(response.result);
                setAddressStatus(addressStatusEnum.done);
                return;
            }
            setAddressStatus(addressStatusEnum.bad)
        })
    }, [ address ]);
}



function render() {

}