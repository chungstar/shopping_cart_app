import{
    CART_LIST_REQUEST,
    CART_LIST_SUCCESS,
    CART_LIST_FAIL,
    CART_ITEM_ADD_REQUEST,
    CART_ITEM_ADD_SUCCESS,
    CART_ITEM_ADD_FAIL,
    CART_ITEM_REMOVE_REQUEST,
    CART_ITEM_REMOVE_SUCCESS,
    CART_ITEM_REMOVE_FAIL,
    CART_ITEM_UPDATE_REQUEST,
    CART_ITEM_UPDATE_SUCCESS,
    CART_ITEM_UPDATE_FAIL,
} from '../constants/cartConstants'
import db from '../firebase/config'
import{
    collection,
    getDocs,
    doc,
    setDoc,
    getDoc,
    deleteDoc,
    updateDoc,
} from 'firebase/firestore'


export const listCartItem = () => async(dispatch)=>{
    let cartData = []

    async function getCartItem(db){
        const cartCol = collection(db,'cartItems')
        const cartSnapshot = await getDocs(cartCol)
        const cartList = cartSnapshot.docs.map((doc)=>doc.data())
        return cartList
    }
    try(
        dispatch({type: CART_LIST_REQUEST})
    )catch(error){

    }
}