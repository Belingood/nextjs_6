import Image from "next/image";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div
                className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <h1 className="title1">Blocks</h1>
            </div>

            <div className="flex font-sans">
                <div className="flex-none w-48 relative">
                    <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/moon1.jpg"
                        alt="Next.js Logo"
                        width={300}
                        height={0}
                        priority
                    />
                </div>
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                            The Moon
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            $9,999,999,999,999.99
                        </div>
                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            In stock
                        </div>
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <div className="space-x-2 flex text-sm">
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    XS
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="s"/>
                                <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    S
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="m"/>
                                <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    M
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="l"/>
                                <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    L
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="xl"/>
                                <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    XL
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                                Buy now
                            </button>
                            <button
                                className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                type="button">
                                Add to bag
                            </button>
                        </div>
                        <button
                            className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                            type="button" aria-label="Like">
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-slate-700">
                        Free shipping on all continental US orders.
                    </p>
                </form>
            </div>



            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                <a
                    href="/"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold text-red-800">
                        Main{" "}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &lt;-
            </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Back to the main page.
                    </p>
                </a>
            </div>
        </main>
    );
}
