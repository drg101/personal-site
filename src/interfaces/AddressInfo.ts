export default interface AddressInfo {
    result?: {
        address: string,
        tokenBook: {
            [contractAddress: string]: {
                bal: number,
                contractAddress: string,
                priceBNB?: number,
                valBNB?: number,
                priceUSD?: number,
                valUSD?: number,
            }
        },
        BNB: number,
        valueBNB: number,
        valueUSD: number,
        time: string
    },
    
    badRequest?: boolean
}