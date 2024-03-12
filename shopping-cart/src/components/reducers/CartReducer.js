export const initialState = []

export function CartReducer (state, action) {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const indexInCart = state.findIndex((product) => {
        return product.id === id
      })
      actionPayload.isOnCart = true
      if (indexInCart >= 0) {
        return state.map((product, index) =>
          index === indexInCart
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      }
      return [...state, { ...actionPayload, quantity: 1 }]
    }
    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newState = state.filter(product => product.id !== id)
      actionPayload.isOnCart = false
      return newState
    }
    case 'DECREASE_QUANTITY': {
      const { id } = actionPayload
      const indexInCart = state.findIndex(product => product.id === id)
      if (state[indexInCart].quantity === 1) {
        actionPayload.isOnCart = false
        return state.filter((product) => product.id !== id)
      } else {
        return state.map((product, index) =>
          index === indexInCart
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      }
    }
    case 'CLEAR_CART': {
      return initialState
    }
  }

  return state
}
