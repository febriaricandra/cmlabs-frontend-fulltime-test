import React from "react";
import { Link } from "react-router-dom";

export default function Welcome({ title, description, img }) {
  return (
    <section>
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div class="flex flex-wrap items-center mx-auto max-w-7xl">
          <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div class="relative w-full max-w-lg">
                <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div class="relative">
                  <img
                    class="object-cover object-center mx-auto rounded-lg shadow-2xl"
                    alt="hero"
                    src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
              {" "}
              FoodMeal{" "}
            </span>
            <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl uppercase">
              Selamat Datang di FoodMeal
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-gray-500">
              Sebuah pekerjaan yang menyenangkan untuk mengolah layout dan
              interaksi antara komputer dan manusia
            </p>
            <div>
              <Link
               to="/ingredient"
               class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Check Ingredient!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
