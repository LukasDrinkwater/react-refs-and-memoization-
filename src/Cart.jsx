import { useMemo } from "react";

// useMemo is the same syntax as useEffect. It saves what it put in as an argument
// and only recalculated it when the dependancy array changes.

function Cart({ products }) {
  const totalPrice = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [products]);

  return (
    <div>
      <p>
        Total Price: <strong>${totalPrice}</strong>
      </p>
    </div>
  );
}

export default Cart;

// function Cart({ products }) {
//   const totalPrice = products.reduce(
//     (total, product) => total + product.price * product.quantity,
//     0
//   );

//   return (
//     <div>
//       <p>
//         Total Price: <strong>${totalPrice}</strong>
//       </p>
//     </div>
//   );
//   }
