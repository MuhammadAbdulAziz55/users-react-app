
import { useState } from 'react';
import './App.css';
import Cart from './Component/Cart';
import Users from './Component/Users';
import userData from './fakeData/userData';

function App() {
  const first15 = userData;
  const [users, setUsers] = useState(first15);
  const [cart, setCart] = useState([]);


  const handleAddUser = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);

  }


  return (
    <div className="App">
      <div className="user-container">
        {
          users.map(ud => <Users user={ud} handleAddUser={handleAddUser}></Users>)
        }
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>

    </div>
  );
}

export default App;
