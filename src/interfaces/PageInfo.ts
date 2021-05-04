export default interface PageInfo {
    pages: string[],
    currentPage: string,
    setCurrentPage?: (newName: string) => void
}