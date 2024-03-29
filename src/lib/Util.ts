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

export const toURIString = (str: string) => {
    return str.replaceAll(' ', '_').replaceAll(',', "_").toLocaleLowerCase()
}

export const isValidAddress: (address: string) => boolean = (address) => {
    return address.length === 42;
}

export interface imageSizeType {
    width: number,
    height: number
}

export const getImageSize = async (url: string): Promise<imageSizeType> => {
    return new Promise<imageSizeType>(resolve => {
        const img = new Image();
        img.onload = function () {
            const { height, width } = img;
            resolve({ height, width })
        }
        img.src = url;
    })
}