export default interface PageInfo {
    pages: string[],
    currentPage: string,
    defaultPage: string,
    setCurrentPage?: (newName: string) => void
}