import { useGlobalState } from '../../globalState/GlobalStateProvider'
import { Grid, Typography } from '@material-ui/core';
import { getJSON, isValidAddress } from '../../lib/Util';
import { useEffect, useState } from 'react';
import Constants from '../../globalState/Constants';
import AddressInfo from '../../interfaces/AddressInfo';
import { MyResponsivePie } from './charts/ResponsivePie';


enum addressStatusEnum {
    loading,
    bad,
    done
}

export default function Account() {
    const { globalState, setGlobalState } = useGlobalState();
    const { address } = globalState;
    const [ addressStatus, setAddressStatus ] = useState(addressStatusEnum.loading);
    const [ addressInfo, setAddressInfo ] = useState({} as AddressInfo[ "result" ]);

    function renderLoading() {
        return <Grid container>
            <Grid item>
                <Typography>Loading...</Typography>
            </Grid>
        </Grid>
    }

    function renderIt() {
        let data: any[] = [];
        if(addressInfo?.tokenBook){
            data = Object.entries(addressInfo?.tokenBook).map(([symbol, data]) => {
                return {
                    "id": symbol,
                    "label": symbol,
                    "value": data?.valUSD ?? 0
                }
            });
        }
        return <Grid container>
            <Grid item xs={12}>
                <Typography variant="h3" align="left">Your Account</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2" align="left">{`$${addressInfo?.valueUSD.toFixed(2)}`}</Typography>
            </Grid>
            <Grid item xs={12} style={{height: "600px"}}>
                <MyResponsivePie data={data} />
            </Grid>
        </Grid>
    }

    function renderAccount() {
        switch (addressStatus) {
            case addressStatusEnum.loading:
                return renderLoading();
            case addressStatusEnum.bad:
                return <div>Error, something went horribly wrong!</div>
            case addressStatusEnum.done:
                return renderIt();
        }
    }

    useEffect(() => {
        if (!isValidAddress(address)) {
            setAddressStatus(addressStatusEnum.bad);
            return;
        }

        (async () => {
            const response: AddressInfo = await getJSON(Constants.addressInfo(address));
            if (response.result) {
                setAddressInfo(response.result);
                setAddressStatus(addressStatusEnum.done);
                return;
            }
            setAddressStatus(addressStatusEnum.bad)
        })();
    }, [ address ]);

    return renderAccount();
}


