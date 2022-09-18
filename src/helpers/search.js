import { distance } from "fastest-levenshtein"


/**
 * @param {array} arr - The array to search in
 * @param {string} str - The substring to search for
 *
 * Returns
 *  
 * Array of indexes of items that contain the searched substring or have a small Levenshtein distance
 *
 * Example
 *
 * const arr = ["apple", "banana", "orange", "pineapple"];
 * const str = "apple"
 *
 * console.log(search(arr, str)) // [0, 3]
 */
export default function search(arr, str) {
    // str = what to search for
    // arr = where to search in

    const cleanse = input => input.toLowerCase()
        .replace(/ě/g, "e")
        .replace(/š/g, "s")
        .replace(/č/g, "c")
        .replace(/ř/g, "r")
        .replace(/ž/g, "z")
        .replace(/ý/g, "y")
        .replace(/á/g, "a")
        .replace(/í/g, "i")
        .replace(/é/g, "e")
        .replace(/ů/g, "u")
        .replace(/ú/g, "u")
        .replace(/ó/g, "o")
        .replace(/ť/g, "t")
        .replace(/ď/g, "d")
        .replace(/ň/g, "n")
        .replace(/[^a-z0-9 ]/g, "")

    const arrCleansed = arr.map(cleanse)
    const strCleansed = cleanse(str)

    let indexList = []

    // Get indexes of items that match the searched string
    arrCleansed.forEach((item, index) => {
        // First check for exact match
        if (item.includes(strCleansed)) indexList.push(index)

        // Then check words for small Levenshtein distance if query at least 4 characters long
        else if (strCleansed.length > 4) {
            const itemWords = item.split(" ").filter(word => word.length > 4)
            const strWords = strCleansed.split(" ").filter(word => word.length > 4)

            // Check if any word from `strCleansed` at least closely matches any word from `item`
            // (has a Levenshtein distance of a third or less of length of any word from `strCleansed`)
            if (itemWords.some(itemWord => {
                return strWords.some(strWord => distance(itemWord, strWord) <= Math.ceil(strWord.length / 3))
            })) {
                indexList.push(index)
            }
        }
})
    
    return indexList
}
