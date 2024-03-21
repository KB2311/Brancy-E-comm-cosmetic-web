import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import ShopContext from '../../context/shopContext';
import PlushIcon from '../../icons/plus-round-icon.svg';
import MinusIcon from '../../icons/minus-round-icon.svg';

function Cart() {
  const { Cart, UpdateCart, RemoveCartItem } = useContext(ShopContext);
  return (
    <section className="min-h-96 pt-20" id='cart'>
      <div className="mx-2 flex flex-col items-center gap-5 md:mx-20">
        {Cart.length > 0 ? (
          Cart.map(x => (
            <div
              className="mx-auto w-full items-center gap-2 rounded-lg bg-slate-500 p-5 font-bold text-black md:flex"
              key={x.id}
            >
              <div className="flex w-full justify-center md:w-fit">
                <img
                  className="rounded-xl md:aspect-square  md:w-32"
                  src={x.imageUrl}
                  alt="img_logo"
                />
              </div>

              <div className="flex-1 md:flex md:w-full">
                <div className="mt-3 flex flex-1 flex-col gap-5 md:ml-5">
                  <p className="text-2xl text-white">{x.title}</p>
                  <div className="flex items-center justify-between gap-5 rounded-lg bg-slate-100 p-2 px-10 text-xl md:w-fit">
                    <button
                      aria-label="button"
                      className=""
                      type="button"
                      onClick={() =>
                        UpdateCart({ ...x, Quantity: x.Quantity + 1 })
                      }
                    >
                      <PlushIcon height={25} className="fill-[#ff6565]" />
                    </button>
                    {x.Quantity}
                    <button
                      aria-label="button"
                      className=""
                      type="button"
                      onClick={() => {
                        if (x.Quantity === 1) {
                          RemoveCartItem({ ...x });
                          window.location.reload();
                        } else {
                          UpdateCart({ ...x, Quantity: x.Quantity - 1 });
                        }
                      }}
                    >
                      <MinusIcon height={25} className="fill-[#ff6565]" />
                    </button>
                  </div>
                </div>
                <div className="mt-3 flex flex-col gap-5 md:ml-5">
                  <p className="text-xl text-white">
                    Price : &#8377; {x.price}.00
                  </p>
                  <button
                    className="rounded-lg bg-slate-200 p-3 hover:bg-[#ff6565] hover:text-white"
                    type="button"
                    onClick={() => {
                      RemoveCartItem({ ...x });
                      window.location.reload();
                    }}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="text-xl font-bold">Cart is Empty</div>
            <HashLink className="text-blue-500 underline" to="/shop">
              Countinue Shoping
            </HashLink>
          </>
        )}
      </div>
    </section>
  );
}

// Cart.map(x => (
//   <div
//     className="mx-auto w-full items-center gap-2 rounded-lg bg-slate-500 p-5 font-bold text-black md:flex"
//     key={x.id}
//   >
//     <div className="flex w-full justify-center md:w-fit">
//       <img
//         className="rounded-xl md:aspect-square  md:w-32"
//         src={x.imageUrl}
//         alt="img_logo"
//       />
//     </div>

//     <div className="flex-1 md:flex md:w-full">
//       <div className="mt-3 flex flex-1 flex-col gap-5 md:ml-5">
//         <p className="text-2xl text-white">{x.title}</p>
//         <div className="flex items-center justify-between gap-5 rounded-lg bg-slate-100 p-2 px-10 text-xl md:w-fit">
//           <button aria-label="button" className="" type="button">
//             <PlushIcon height={25} className="fill-[#ff6565]" />
//           </button>
//           {x.Quantity}
//           <button aria-label="button" className="" type="button">
//             <MinusIcon height={25} className="fill-[#ff6565]" />
//           </button>
//         </div>
//       </div>
//       <div className="mt-3 flex flex-col gap-5 md:ml-5">
//         <p className="text-xl text-white">
//           Price : &#8377; {x.price}.00
//         </p>
//         <button
//           className="rounded-lg bg-slate-200 p-3 hover:bg-[#ff6565] hover:text-white"
//           type="button"
//         >
//           Remove Item
//         </button>
//       </div>
//     </div>
//   </div>
// ))
export default Cart;
