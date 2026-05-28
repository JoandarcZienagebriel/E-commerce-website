export default function Cart({ cart, increaseQ, decreaseQ, removeItem }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#F8F5F1] px-6 py-10">

      {/* TITLE */}
      <h1 className="text-3xl font-semibold text-[#2A2522] mb-10">
        Your Cart
      </h1>

      {/* EMPTY STATE */}
      {cart.length === 0 ? (
        <p className="text-[#6E6A63]">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">

          {/* CART ITEMS */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-2xl shadow p-4"
            >

              {/* IMAGE + INFO */}
              <div className="flex items-center gap-4">

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />

                <div>
                  <h2 className="text-lg font-medium text-[#2A2522]">
                    {item.name}
                  </h2>

                  <p className="text-[#6E6A63]">
                    ${item.price}
                  </p>
                </div>
              </div>

              {/* QUANTITY CONTROLS */}
              <div className="flex items-center gap-3">

                <button
                  onClick={() => decreaseQ(item.id)}
                  className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-200"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQ(item.id)}
                  className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-200"
                >
                  +
                </button>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>

            </div>
          ))}

          {/* TOTAL */}
          <div className="mt-10 bg-white p-6 rounded-2xl shadow flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Total
            </h2>

            <p className="text-2xl font-bold text-[#8C6A5D]">
              ${totalPrice}
            </p>
          </div>

        </div>
      )}
    </div>
  );
}