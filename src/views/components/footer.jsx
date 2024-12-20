import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="mx-auto w-full max-w-[1200px]">
                <div className="p-4 py-6 lg:py-8">
                    <div className="md:flex justify-between gap-12 mt-4 mb-14">
                        {/* Logo and Description */}
                        <div className="md:mb-0">
                            <a href="/" className="text-2xl font-bold mr-4">
                                <span className="text-black">DevAcademy</span>
                            </a>
                            <p className="mt-5 text-sm text-gray-600 max-w-md">
                                Jl. Kyai Moch. Syafei Gg 1 No.2450, RT.04/RW.08,
                                Kebondalem, Purwokerto Lor, Kec. Purwokerto
                                Tim., Kabupaten Banyumas, Jawa Tengah 53114
                            </p>
                            <div className="flex justify-between mt-4 w-[80px] md:w-1/4">
                                {/* Social Media Icons */}
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-blue-500 transition duration-300 ease-in-out">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">
                                        Facebook page
                                    </span>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-red-500 transition duration-300 ease-in-out">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">
                                        Instagram page
                                    </span>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-black transition duration-300 ease-in-out">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true">
                                        <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
                                    </svg>
                                    <span className="sr-only">X page</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-12">
                            <div>
                                <h2 class="mt-1 mb-4 text-sm font-semibold text-gray-900 uppercase">
                                    Company
                                </h2>
                                <ul class="text-gray-500">
                                    <li class="mb-2">
                                        <a
                                            href="/about-us"
                                            target="_blank"
                                            class="text-sm font-normal hover:text-blue-500 transition duration-300 ease-in-out">
                                            About Us
                                        </a>
                                    </li>
                                    <li class="mb-2">
                                        <a
                                            href="https://api.whatsapp.com/"
                                            target="_blank"
                                            class="text-sm font-normal hover:text-blue-500 transition duration-300 ease-in-out">
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/course"
                                            target="_blank"
                                            class="text-sm font-normal hover:text-blue-500 transition duration-300 ease-in-out">
                                            Our Course
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mt-1 mb-4 text-sm font-semibold text-gray-900 uppercase">
                                    Information
                                </h2>
                                <ul class="text-gray-500">
                                    <li class="mb-2">
                                        <a
                                            href="/blog"
                                            target="_blank"
                                            class="text-sm font-normal hover:text-blue-500 transition duration-300 ease-in-out">
                                            Blog
                                        </a>
                                    </li>
                                    <li class="mb-2">
                                        <a
                                            href="/program"
                                            target="_blank"
                                            class="text-sm font-normal hover:text-blue-500 transition duration-300 ease-in-out">
                                            Program
                                        </a>
                                    </li>
                                    <li class="">
                                        <a
                                            href="/faq"
                                            target="_blank"
                                            class="text-sm font-normal hover:text-blue-500 transition duration-300 ease-in-out">
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mt-1 mb-4 text-base font-semibold text-gray-900 uppercase">
                                    Teaching
                                </h2>
                                <ul class="text-gray-500">
                                    <li class="mb-2">
                                        <a
                                            href="/become-teacher"
                                            target="_blank"
                                            class="text-sm font-normal hover:text-blue-500 transition duration-300 ease-in-out">
                                            Become a Teacher
                                        </a>
                                    </li>
                                    <li class="mb-2">
                                        <a
                                            href="/rules-requirements"
                                            target="_blank"
                                            class="text-sm font-normal hover:text-blue-500 transition duration-300 ease-in-out">
                                            Rules & Requirements
                                        </a>
                                    </li>
                                    <li class="">
                                        <a
                                            href="/help-center"
                                            target="_blank"
                                            class="text-sm font-normal hover:text-blue-500 transition duration-300 ease-in-out">
                                            Help Center
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                    {/* Bottom Section */}
                    <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
                        <span class="font-normal text-sm text-gray-500 text-center">
                            © 2024{' '}
                            <a
                                href="/"
                                class="hover:underline text-blue-500 hover:text-blue-600">
                                DevAcademy™
                            </a>
                            . All Rights Reserved.
                        </span>
                        <div class="flex items-center">
                            <a
                                href="/terms"
                                target="_blank"
                                class="text-sm text-gray-500 text-center hover:underline">
                                Terms
                            </a>
                            <span class="mx-2 text-gray-500 text-center">
                                •
                            </span>
                            <a
                                href="/privacy"
                                target="_blank"
                                class="text-sm text-gray-500 text-center hover:underline">
                                Privacy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
