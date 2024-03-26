/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

function Checkout() {
  return (
    <section className="min-h-96 px-container pt-24">
      <HashLink smooth to="/shop">
        &lt; Back to Shoping
      </HashLink>
      {/* <hr className="my-2 size-full h-2" /> */}
      <div class="my-3 h-1 w-full border-b border-black"></div>
      <div className="flex flex-col justify-between gap-5 pt-10 lg:flex-row">
        <div className="lg:w-[55%]">
          <p className="px-2 text-2xl font-medium">Address</p>
          <div className="grid grid-cols-1 gap-5 px-1 pt-1 xsm:grid-cols-2 xsm:px-2 xsm:pt-2">
            <Label htmlFor="fname">
              FirstName<span className="text-lg text-red-500">*</span>:
              <Input className="" type="text" name="fname" />
            </Label>
            <Label htmlFor="lname">
              LastName<span className="text-lg text-red-500">*</span>:
              <Input className="" type="text" name="lname" />
            </Label>

            <Label htmlFor="email">
              Email<span className="text-lg text-red-500">*</span>:
              <Input className="" type="email" name="email" />
            </Label>

            <Label htmlFor="mobile">
              Mobile No<span className="text-lg text-red-500">*</span>:
              <Input className="" type="tel" name="mobile" />
            </Label>
          </div>
          <Button className="ml-2 mt-4 bg-[#ff6565] text-white hover:bg-[#ef8f8f]">
            Place Order
          </Button>
        </div>
        <div className="pt-5 lg:w-[35%]">
          <p className="px-2 text-2xl font-medium">In Your Cart</p>
          <div class="my-3 h-1 w-full border-b border-black"></div>
          <div className="mb-2 flex justify-between">
            <p>Sub Total</p>
            <span className="">
              {/* &#8377; {price.toLocaleString('en-IN')}.00 */}
              &#8377; 0.00
            </span>
          </div>
          <div className="mb-2 flex justify-between">
            <p>Shoping</p>
            <span className="">
              {/* &#8377; {price.toLocaleString('en-IN')}.00 */}
              &#8377; 0.00
            </span>
          </div>
          <div className="mb-2 flex justify-between">
            <p>Taxes</p>
            <span className="">
              {/* &#8377; {price.toLocaleString('en-IN')}.00 */}
              &#8377; 0.00
            </span>
          </div>
          <div class="my-3 h-1 w-full border-b border-black"></div>
          <div className="mb-2 flex justify-between text-2xl font-bold">
            <p className="">Total</p>
            <span className="">
              {/* &#8377; {price.toLocaleString('en-IN')}.00 */}
              &#8377; 0.00
            </span>
          </div>
          <div class="my-3 h-1 w-full border-b border-black"></div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
