import { Grid, Typography, Button } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import blackLogo from '../static/images/TokenHub_white.svg';
import { useContext, useState } from 'react';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import Constants from '../globalState/Constants'
declare const window: any;


let connectingToWallet = false;

export default function Header(props: PageInfo) {
    const { globalState, setGlobalState } = useGlobalState();

    function metamaskSignIn(key: number) {
        const globalAddressExists = globalState.address.length;
        return wrapHeaderItem(
            <Button variant="contained" onClick={async () => {
                const ethereum = window?.ethereum;
                if (!connectingToWallet && !globalAddressExists && ethereum) {
                    connectingToWallet = true;
                    const accounts: string[] = await ethereum.request({ method: 'eth_requestAccounts' });
                    if (accounts[ 0 ]) {
                        setGlobalState({ address: accounts[ 0 ] });
                    }
                    connectingToWallet = false;
                }
                else if (globalAddressExists) {
                    setGlobalState({ page: 'account' });
                }
            }}>
                {globalAddressExists ? `${globalState.address.substr(0, 8)}...` : "Connect"}
            </Button>
            , key);
    }

    function wrapHeaderItem(item: JSX.Element, key: number = 0) {
        return <Grid item xs={12} sm={4} md={3} lg={2} xl={1} key={key}>{item}</Grid>
    }

    function createHeaderItem(pageName: string, key: number) {
        return wrapHeaderItem(
            <Typography variant="h4" onClick={() => { setGlobalState({ page: pageName }) }} className="headerItem">
                {pageName}
            </Typography>
            , key);
    }

    function createHeaderItems() {
        let headerKey = 1;
        return props.pages.filter(pageName => pageName !== Constants.defaultPage).map(pageName => {
            const displayName = pageName.replace(/(?:^|\s)\S/g, function (a: string) { return a.toUpperCase(); });
            return createHeaderItem(pageName, headerKey++);
        }).concat([ metamaskSignIn(headerKey++) ])
    }

    return <Grid container className="Header">
        {wrapHeaderItem(<img
            src={blackLogo}
            alt="TokenHub"
            className="logo"
            onClick={() => { setGlobalState({ page: Constants.defaultPage }) }}
        />)
        }
        {createHeaderItems()}
    </Grid>
}