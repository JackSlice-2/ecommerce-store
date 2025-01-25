import Container from '@/components/ui/container';
import Summary from './components/summary'
import CartItem from './components/cart-item';

export const revalidate = 0;

const CartPage = () => {

  return (
    <div className="dark:bg-gray-900 bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black dark:text-white">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <CartItem />
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  )
};

export default CartPage;