export default function UrlParams(){
    const urlParams = new URLSearchParams(window.location.search);
    return {
        page: urlParams.get("page"),
        goTo: window.location.hash?.substr(1) ?? null
    }
}