import {
    ADD_TO_CART,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    ADD_TO_CART_DUPLICATE,

    GET_CART_ITEMS,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_FAIL,

    REMOVE_CART_ITEM,
    REMOVE_CART_ITEM_SUCCESS,
    REMOVE_CART_ITEM_FAIL,

    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAIL,

    GET_CART_SIZE,
} from './types'


const INITIAL_STATE = {
    isLoading: null,
    cart: [],
    cartSize: 0,
};

function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case PLACE_ORDER_REQUEST:
        case GET_CART_ITEMS:
        case ADD_TO_CART:
        case REMOVE_CART_ITEM:
            return {
                ...state,
                isLoading: true,
            };


        case GET_CART_ITEMS_SUCCESS:
            return {
                ...state,
                cart: action.payload.cart,
                isLoading: false,
            };


        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                cart: [...state.cart, action.payload.newAddedCartItem],
                cartSize: state.cartSize + 1,
                isLoading: false,
            };

        case ADD_TO_CART_DUPLICATE:
            return {
                ...state,
                cart: state.cart.map(item => item._id !== action.payload.id ? { ...item, quantity: item.quantity + 1 } : item),
                isLoading: false,
            }

        case REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                cart: [...state.cart.slice(0, action.payload.index), ...state.cart.slice(action.payload.index + 1)],
                cartSize: state.cartSize - 1,
                isLoading: false,
            };

        case GET_CART_SIZE:
            return {
                ...state,
                cartSize: action.payload.cartSize,
            }

        case PLACE_ORDER_SUCCESS:
            return {
                ...state,
                cart: [],
                cartSize: 0,
                isLoading: false,
            }

        case PLACE_ORDER_FAIL:
        case ADD_TO_CART_FAIL:
        case GET_CART_ITEMS_FAIL:
        case REMOVE_CART_ITEM_FAIL:
            return {
                ...state,
                isLoading: false,
            }

        default:
            return state
    }
}

export {
    cartReducer,
}