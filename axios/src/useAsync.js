import { useReducer, useEffect } from "react";

function reducer(state, action){
    switch(action.type){
        case 'LOADING':
            return {
                loading: true, 
                data: null, 
                error: null
            };

    }
}


// deps-
function useAsync(callback, deps =[]){

}