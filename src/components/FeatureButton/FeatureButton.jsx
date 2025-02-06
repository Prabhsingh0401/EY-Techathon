export function Button() {
    return(
    <a class="relative inline-flex items-center justify-center p-6 px-16 py-2 lg:p-4 lg:px-5 lg:py-2 overflow-hidden font-medium text-indigo-600 rounded-[10px] shadow-2xl group mt-10 lg:mt-[11vw]">
        <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
        <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
    </span>
    <span class="relative text-white lg:text-sm text-2xl font-extrabold">Try it out {">"}</span>
    </a>
)
}