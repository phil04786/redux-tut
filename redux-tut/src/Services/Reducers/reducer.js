import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

// Reducer:- Action se do data milta he usko store ke ander push karta he. Reducer filter out kar ke kis 'type' ka operation karna he usko store ke ander bhej dega or store se hame data dikh jayega. 1.) Initial data kya hoga store me. 2.) Switch cases lagegi action ki type pe. action ke type kya data rahega.

// cardData:[] :- action ke type se jo data ayega use cardData me store karege

const initialState = {
  cardData: [],
};

// cardItems(state = [], action) me jo action he usme jo action pata chlegi wo container se chalegi. Container action and reducer ko jodta he. action apne aap call hote he internally.

export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("reducer", action);
      return [...state, { cardData: action.data }];

    case REMOVE_TO_CART:
      // console.warn("reducer", action);
      state.pop();
      return [...state];
    default:
      return state;
  }
}
