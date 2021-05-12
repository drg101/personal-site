export default {
    defaultPage: "home",
    pages: ["home","page1"],
    addressInfo: (address: string) => `http://tokenhub.xyz/info?a=${address}` 
}