import { useEffect } from "react";
import { useSelector } from "react-redux";


const Cart = ({toggleCart}) => {
    const courses = useSelector(state => state.cart.value);
    useEffect(()=>{

        // localStorage.setItem("courses",JSON.stringify(courses));
        // const courses=localStorage.getItem("courses",JSON.parse(courses));
        // localStorage.removeItem("courses");
        // localStorage.clear();

    },[courses]);
    return (
    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true" >
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true" />
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div className="pointer-events-auto w-screen max-w-md">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title" >
                                            Shopping cart
                                        </h2>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                             onClick={()=>toggleCart(false)}
                                            >
                                                <span className="absolute -inset-0.5" />
                                                <span className="sr-only">Close panel</span>
                                             <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6 18 18 6M6 6l12 12"
                                                    />
                                             </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {
                                                    courses.map((c, i) => <CartItem key={i} course={c} />)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>$262.00</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">
                                        Shipping and taxes calculated at checkout.
                                    </p>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                                        >
                                            Checkout
                                        </a>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or
                                            <button
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Continue Shopping
                                                <span aria-hidden="true"> →</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;

const CartItem = ({course}) => {
    
    return (
        <li className="flex py-6">
            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={course.imageUrl}
                    alt={course.description}
                    className="size-full object-cover"
                />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">{course.courseName}</a>
                        </h3>
                        <p className="ml-4">Rs.{course.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{course?.category}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>
                    <div className="flex">
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}