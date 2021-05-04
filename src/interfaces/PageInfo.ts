export default interface PageInfo {
    pages: string[],
    hiddenPages: string[],
    currentPage: string,
    defaultPage: string,
    setCurrentPage: (newName: string) => void
}