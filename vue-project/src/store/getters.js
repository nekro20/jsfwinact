export const cartProducts = state => {
  return state.cart.added.map(({ id }) => {
    const cat = state.cats.all.find(p => p.id === id)
    return {
      id: cat.id,
      name: cat.name,
      age: cat.age,
      color: cat.color,
      price: cat.price,
      image: cat.image
    }
  })
}
