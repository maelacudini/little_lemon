import { useContext } from 'react';
import styles from '../components/css/Cart.module.css'
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const CartItems = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const groupedItems = cartItems.reduce((groups, item) => {
      if (!groups[item.title]) {
        groups[item.title] = { ...item, quantity: 0 };
      }
      groups[item.title].quantity += item.quantity;
      return groups;
    }, {});
  
    const handleRemoveItem = (itemId) => {
      removeFromCart(itemId);
    };

    const calculateTotalAmount = () => {
        let total = 0;
        for (const item of Object.values(groupedItems)) {
          total += parseFloat(item.price) * item.quantity;
        }
        return total.toFixed(2);
    };

    return (
      <>
        <div className={styles.intro}>
          <h3>Thank you for choosing our restaurant!</h3>
          <p>
            Welcome to your Cart! <br /> 
            Here you can find a summary of your selected items from the online menu, you can remove items and view the total amount for your order.
            <br />
            Looking for something else to eat? Give our menu another try! 
          </p>
        </div>
        <div className={`card text-white ${styles.card}`}>
            {Object.values(groupedItems).map((item) => (
                <div key={item.id}>
                <h5><b>{item.title}</b></h5>
                <p>{item.price} x {item.quantity}</p>
                    <button className='btn btn-warning' onClick={() => handleRemoveItem(item.id)}>Remove</button>
                <hr />
                </div>
            ))}
            {Object.values(groupedItems).length === 0 && <p>Your cart is empty. </p>}
            {Object.values(groupedItems).length !== 0 &&
                <div>
                    <h5>Your total:</h5>
                    <p>{calculateTotalAmount()}€</p>
                </div>
            }
        </div>

        <div className={`checkout rounded ${styles.checkout}`}>
            <h5>Proceed to checkout</h5>
            {Object.values(groupedItems).length === 0 && <button className='btn btn-warning' disabled>Checkout</button>}
            {Object.values(groupedItems).length !== 0 && <button className='btn btn-warning'>Checkout</button>}
        </div>
      </>
    );
  };
  
  export default CartItems;