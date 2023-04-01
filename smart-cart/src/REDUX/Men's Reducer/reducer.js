import { MENS_PRODUCT_REQUEST_MADE, MENS_PRODUCT_REQUEST_SUCCESS, MENS_PRODUCT_REQUEST_FAILURE, TOTAL_MENS_DATA } from "./actiontypes"

const Initial_State = {

    isLoading : false,

    Mens_Product : [],

    total : null,

    isError : false,

}

export const reducer = (state = Initial_State, {type, payload}) => {

    switch (type) {

        case MENS_PRODUCT_REQUEST_MADE : return {...state, isLoading : true};

        case MENS_PRODUCT_REQUEST_SUCCESS : return {...state, isLoading : false, Mens_Product : payload };

        case TOTAL_MENS_DATA : return {...state, total : payload}

        case MENS_PRODUCT_REQUEST_FAILURE : return {...state, isLoading : false, isError : true};

        default : return state;

    }


}

