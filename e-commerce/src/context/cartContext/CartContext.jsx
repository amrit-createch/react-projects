import { Children, createContext, useContext, useReducer, useState } from "react";
import { faker, Faker } from "@faker-js/faker";
import { cartReducer } from "./Cartreducer";

const CartContext = createContext()

const CartContextProvider = ({children}) =>{
    const products = [...Array(20)].map((_) => ({
       id: faker.string.uuid(),
       productName: faker.commerce.productName(),
       productDescription: faker.commerce.productDescription(),
       price:faker.commerce.price({min:100,max:5000}),
       image:faker.image.urlPicsumPhotos({
        width:300,
        height:300
    }),
       inStock:faker.helpers.arrayElement([0,5,10,15,20]),
       fastDelivery:faker.datatype.boolean(),
       new:faker.datatype.boolean(),
       rating:faker.helpers.arrayElement([1,2,3,4,5])
    }))
    const [state,dispatch] = useReducer(cartReducer,{
        products,
    })
    return(
        <CartContext.Provider value={state}>{children}</CartContext.Provider>
    )
}

const useCartContext = () => {
   return useContext(CartContext)
}

export {useCartContext,CartContextProvider}