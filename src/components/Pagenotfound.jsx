import React from "react";
import { NavLink } from "react-router-dom";

export default function Pagenotfound() {
    return (
        <div className="mt-60 flex justify-center">
            <div className="top-60">
                <div className="mx-8 text-center text-6xl text-red-600">404</div>
                <div className="mx-8 text-center text-3xl text-blue-800">page not found !!!!</div>
                <NavLink to='/' className='text-2xl text-blue-400 underline mt-4'>
                    Click Here to get back to the home page
                </NavLink>
            </div>
        </div>
    );
}
