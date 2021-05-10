export const URLS = {

}

export const getJSON: (url: string) => Promise<any> = async (url) => {
    return new Promise(resolve => {
        fetch(url)
            .then((response) => {
                resolve(response.json())
            });
    })
}

export const isValidAddress: (address: string) => boolean = (address) => {
    return address.length === 42;
}