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

    // `key` = what to replace, `value` = what to replace with
    const toBeReplaced = {
        "ě": "e", "š": "s",
        "č": "c", "ř": "r",
        "ž": "z", "ý": "y",
        "á": "a", "í": "i",
        "é": "e", "ů": "u",
        "ú": "u", "ó": "o",
        "ť": "t", "ď": "d",
        "ň": "n",
    }

    const cleanse = input => {
        let res = input.toLowerCase()
        Object.keys(toBeReplaced).forEach(key => {
            res = res.replace(new RegExp(key, "g"), toBeReplaced[key])
        })
        res = res.replace(/[^a-z0-9 -]/g, "")
        return res
    }

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
