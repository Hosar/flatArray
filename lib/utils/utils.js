/**
 * Flat and array e.g.[1,2,3,[4,5,6]] => [1,2,3,4,5,6]
 * @param {Array} arr - An array with nested inner arrays to be flatten
 */
export const flatArray = (arr = []) =>{
    if(!Array.isArray(arr)) throw new Error('Please provide an array value');

    return arr.reduce((acc,val) => acc.concat(Array.isArray(val) ? flatArray(val) : val),[])
};