'use client'

import useCart from "@/hooks/use-cart";
import CartItemComponent from "./CartItemComponent";

const CartItem = () => {
  const cart = useCart();
  
  return (
    <div className="lg:col-span-7">
      {cart.items.length === 0 && <p className="text-neutral-500 dark:text-white">No items added to cart.</p>}
      <ul>
        {cart.items.map((item) => (
          <CartItemComponent key={item.id} data={item} />
        ))}
      </ul>
    </div>
  )
}
 
export default CartItem;
