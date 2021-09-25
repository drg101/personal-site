import firebase from "firebase/app";

export default interface GlobalState {
    page: string,
    user: firebase.User | null | undefined,
    darkMode: boolean
}