import React from 'react'
import {
    RiCloseLine,
    RiDeleteBin6Line
   } from 'react-icons/ri'

export const Car = (props) => {
    const {showOrder,setShowOrder} = props
  return (
    <div 
        className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full 
          transition-all z-50
        ${showOrder ? "right-0" : "-right-full" }`}>
        {/*ordenes*/}
        <div className='relative pt-16 lg:pt-8 text-gray-300 p-8 h-full'>
          <RiCloseLine 
            onClick={() => setShowOrder(false)} 
            className='lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl'/>
          <h1 className='text-2xl my-4'>Orders #12211</h1>
          {/* pillis */}
          <div className='flex items-center gap-4 flex-wrap mb-8'>
            <button className='bg-[#EC7C6A] text-white py-2 px-4 rounded-xl'>
              Dine in
            </button>
            <button className='text-[#EC7C6A] py-2 px-4 rounded-xl border border-gray-500'>
              To Go
            </button>
            <button className='text-[#EC7C6A] py-2 px-4 rounded-xl border border-gray-500'>
              Delivery
            </button>
          </div>
          {/*Carrito*/}
          <div>
            <div className='grid grid-cols-6 mb-4 p-4'>
              <h5 className='col-span-4'>Item</h5>
              <h5>Qty</h5>
              <h5>Price</h5>
            </div>
          {/*Productos Carrito*/}
          <div className='h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll'>
            {/*Producto carrito*/}
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
            <div className='grid grid-cols-6 mb-4'>
              {/*Descripcion del producto*/}
              <div className='col-span-4 flex items-center gap-2'>
                <img src='platillo1.png' className='w-10 h-10 object-cover'/>
                <div>
                  <h5 className='text-sm'>Space seasonc..</h5>
                  <p className='text-xs text-gray-500'>$2.69</p>
                </div>
              </div>
              {/*cantidad*/}
              <div>
                <span>2</span>
              </div>
              {/*precio*/}
              <div>
                <span>$4.20</span>
              </div>
            </div>
            {/*notas del platillo*/}
            <div className='grid grid-cols-6 text-center gap-2'>
              <form className='col-span-5'>
                <input 
                  type='text' 
                  className='bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none'
                  placeholder='Order note...'
                />
              </form>
              <div>
                <button className='border border-red-500 p-2 rounded-lg'>
                  <RiDeleteBin6Line className='text-red-500'/>
                </button>
              </div>
            </div>
            </div>
            {/*Producto carrito*/}
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
            <div className='grid grid-cols-6 mb-4'>
              {/*Descripcion del producto*/}
              <div className='col-span-4 flex items-center gap-2'>
                <img src='platillo1.png' className='w-10 h-10 object-cover'/>
                <div>
                  <h5 className='text-sm'>Space seasonc..</h5>
                  <p className='text-xs text-gray-500'>$2.69</p>
                </div>
              </div>
              {/*cantidad*/}
              <div>
                <span>2</span>
              </div>
              {/*precio*/}
              <div>
                <span>$4.20</span>
              </div>
            </div>
            {/*notas del platillo*/}
            <div className='grid grid-cols-6 text-center gap-2'>
              <form className='col-span-5'>
                <input 
                  type='text' 
                  className='bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none'
                  placeholder='Order note...'
                />
              </form>
              <div>
                <button className='border border-red-500 p-2 rounded-lg'>
                  <RiDeleteBin6Line className='text-red-500'/>
                </button>
              </div>
            </div>
            </div>
            {/*Producto carrito*/}
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
            <div className='grid grid-cols-6 mb-4'>
              {/*Descripcion del producto*/}
              <div className='col-span-4 flex items-center gap-2'>
                <img src='platillo1.png' className='w-10 h-10 object-cover'/>
                <div>
                  <h5 className='text-sm'>Space seasonc..</h5>
                  <p className='text-xs text-gray-500'>$2.69</p>
                </div>
              </div>
              {/*cantidad*/}
              <div>
                <span>2</span>
              </div>
              {/*precio*/}
              <div>
                <span>$4.20</span>
              </div>
            </div>
            {/*notas del platillo*/}
            <div className='grid grid-cols-6 text-center gap-2'>
              <form className='col-span-5'>
                <input 
                  type='text' 
                  className='bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none'
                  placeholder='Order note...'
                />
              </form>
              <div>
                <button className='border border-red-500 p-2 rounded-lg'>
                  <RiDeleteBin6Line className='text-red-500'/>
                </button>
              </div>
            </div>
            </div>
            {/*Producto carrito*/}
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
            <div className='grid grid-cols-6 mb-4'>
              {/*Descripcion del producto*/}
              <div className='col-span-4 flex items-center gap-2'>
                <img src='platillo1.png' className='w-10 h-10 object-cover'/>
                <div>
                  <h5 className='text-sm'>Space seasonc..</h5>
                  <p className='text-xs text-gray-500'>$2.69</p>
                </div>
              </div>
              {/*cantidad*/}
              <div>
                <span>2</span>
              </div>
              {/*precio*/}
              <div>
                <span>$4.20</span>
              </div>
            </div>
            {/*notas del platillo*/}
            <div className='grid grid-cols-6 text-center gap-2'>
              <form className='col-span-5'>
                <input 
                  type='text' 
                  className='bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none'
                  placeholder='Order note...'
                />
              </form>
              <div>
                <button className='border border-red-500 p-2 rounded-lg'>
                  <RiDeleteBin6Line className='text-red-500'/>
                </button>
              </div>
            </div>
            </div>
          </div>
          </div>
          {/*Envio al pago*/}
          <div className='bg-[#262837] absolute w-full bottom-0 left-0 p-4'>
            <div className='flex items-center justify-between mb-4'>
              <span className='text-gray-400'>Descuento</span>
              <span>$0</span>
            </div>
            <div className='flex items-center justify-between mb-6'>
              <span className='text-gray-400'>Subtotal</span>
              <span>$201.03</span>
            </div>
            <button className='bg-[#EC7C6A] w-full py-2 px-4 rounded-lg'>
              Continuar compra
            </button>

          </div>
        </div>
      </div>
  )
}

export default Car;