export const getAlignmentClassName = (alignment:string) : string => {
    switch (alignment) {
        case "right":
            return "xl:col-[2]"
        case "full":
            return "xl:col-span-full"
        default:
            return "xl:col-[1]"
    }
}