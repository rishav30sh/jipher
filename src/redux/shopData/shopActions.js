import shopActionTypes from './shopTypes'

const updateCollections=collectionMap=>({
    type:shopActionTypes.UPDATE_COLLECTIONS,
    payload:collectionMap
})

export default updateCollections