import { useShopContext } from '../context/ShopContext';
import { CartItem } from '../types';

export const useAddToCart = () => {
  const { cartItems, setCartItems, setCartCount } = useShopContext();

  const handleAddToCart = (productId: number, currentSize: string) => {
    const cartItem: CartItem = { id: productId, quantity: 1, size: currentSize };

    if (!cartItems.some((item) => item.id === cartItem.id && item.size === cartItem.size)) {
      setCartItems((oldCartItems: CartItem[]) => [...oldCartItems, cartItem]);
    } else {
      setCartItems((oldCartItems: CartItem[]) =>
        oldCartItems.map((item: CartItem) =>
          item.id === cartItem.id && item.size === cartItem.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }

    setCartCount((oldCount: number) => oldCount + 1);
  };

  return handleAddToCart;
};