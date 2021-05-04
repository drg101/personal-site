export default function UrlParams(){
    const urlParams = new URLSearchParams(window.location.search);
    return {
        address: urlParams.get("address"),
        contract: urlParams.get("contract")
    }
}