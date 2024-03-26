/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useCart } from '../../context/CartContext';

function Checkout() {
  const { cart } = useCart();

  console.log(cart);
  const Total = cart.reduce((p, c) => (p += c.Quantity * c.price), 0);
  const Taxes = Total * 0.18;
  const SubTotal = Total - Taxes;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <section className="min-h-fit px-container pb-4 pt-24">
      <HashLink smooth to="/shop">
        &lt; Back to Shoping
      </HashLink>
      {/* <hr className="my-2 size-full h-2" /> */}
      <div class="my-3 h-1 w-full border-b border-black"></div>
      <div className="flex flex-col justify-between gap-5 pt-10 lg:flex-row">
        <div className="lg:w-[55%]">
          <p className="px-2 text-2xl font-medium">Address</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-2 xsm:grid-cols-2"
          >
            <Label htmlFor="fname">
              FirstName
              <span className="text-lg text-red-500">*</span>
              <Input
                {...register('fname', { required: true })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="text"
                name="fname"
                id="fname"
              />
              {errors.fname && (
                <span className="text-red-400">First Name is required</span>
              )}
            </Label>
            <Label htmlFor="lname">
              LastName<span className="text-lg text-red-500">*</span>
              <Input
                {...register('lname', { required: true })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="text"
                name="lname"
                id="lname"
              />
              {errors.lname && (
                <span className="text-red-400">Last Name is required</span>
              )}
            </Label>
            <Label htmlFor="email">
              Email<span className="text-lg text-red-500">*</span>
              <Input
                {...register('email', { required: true })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="email"
                name="email"
                id="email"
              />
              {errors.email && (
                <span className="text-red-400">Email is required</span>
              )}
            </Label>
            <Label htmlFor="mobile">
              Mobile No<span className="text-lg text-red-500">*</span>
              <Input
                {...register('mobile', { required: true })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="tel"
                name="mobile"
                id="mobile"
              />
              {errors.mobile && (
                <span className="text-red-400">Mobile number is required</span>
              )}
            </Label>
            <Label htmlFor="postalcode">
              Postal Code<span className="text-lg text-red-500">*</span>
              <Input
                {...register('postalcode', { required: true })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="number"
                name="postalcode"
                id="postalcode"
              />
              {errors.postalcode && (
                <span className="text-red-400">This field is required</span>
              )}
            </Label>
            <Label htmlFor="city">
              City<span className="text-lg text-red-500">*</span>
              <Input
                {...register('city', { required: true })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="tel"
                name="city"
                id="city"
              />
              {errors.city && (
                <span className="text-red-400">City is required</span>
              )}
            </Label>
            <Label className="xsm:col-span-2" htmlFor="address">
              Address
              <Input
                {...register('address', { required: true })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="text"
                name="address"
                id="address"
              />
              {errors.address && (
                <span className="text-red-400">Address is required</span>
              )}
            </Label>
            <Button
              type="submit"
              className="ml-2 mt-4 rounded-full bg-[#ff6565] px-10 text-white hover:bg-[#9a3c3c]"
            >
              Place Order
            </Button>
          </form>
        </div>
        <div className="pt-5 lg:w-[35%]">
          <p className="px-2 text-2xl font-medium">In Your Cart</p>
          <div class="my-3 h-1 w-full border-b border-black"></div>
          <div className="mb-2 flex justify-between">
            <p>Sub Total</p>
            <span className="">
              &#8377; {SubTotal.toLocaleString('en-IN')}.00
            </span>
          </div>
          <div className="mb-2 flex justify-between">
            <p>Shipping</p>
            <span className="">&#8377; 0.00</span>
          </div>
          <div className="mb-2 flex justify-between">
            <p>Taxes</p>
            <span className="">&#8377; {Taxes.toLocaleString('en-IN')}.00</span>
          </div>
          <div class="my-3 h-1 w-full border-b border-black"></div>
          <div className="mb-2 flex justify-between text-2xl font-bold">
            <p className="">Total</p>
            <span className="">&#8377; {Total.toLocaleString('en-IN')}.00</span>
          </div>
          <div class="my-3 h-1 w-full border-b border-black"></div>
          {cart.map(x => (
            <div className="flex items-center justify-between pb-3">
              <img
                className="aspect-square h-16 rounded-md border border-black"
                src={x.imageUrl}
                alt=""
              />
              <p className="flex-1 pl-2">{x.title}</p>
              <div className="flex flex-col items-end">
                <div className="text-sm">
                  {x.Quantity} x &#8377;{x.price.toLocaleString('en-IN')}.00
                </div>
                <div className="font-bold">
                  &#8377;{(x.price * x.Quantity).toLocaleString('en-IN')}.00
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Checkout;
