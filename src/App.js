import React, { useState } from "react";
import Footer from "./components/Footer";
import merch from "./images/content/ares-claim-merch.svg";
import rond from "./images/content/Ares-logo-rond.png";
import whitet from "./images/content/White-T-shirt.png";
import blackt from "./images/content/Black-T-shirt.png";
import redt from "./images/content/Red-T-shirt.png";
import greyt from "./images/content/Grey-T-shirt.png";
import whitecap from "./images/content/White-Cap.png";
import blackcap from "./images/content/Black-Cap.png";
import redcap from "./images/content/Red-Cap.png";
import greycap from "./images/content/Grey-Cap.png";
import Header from "./components/Header";
import "./App.css";
export default function App() {
  const [name, setName] = useState("");
  return (
   <>
   <div className="loading loading-homepage">
        <div className="loading-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="232.842"
            height="206.68"
            viewBox="0 0 232.842 206.68"
          >
           <defs>
                        <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#edd32e" />
                            <stop offset="1" stopColor="#e4b300" />
                        </linearGradient>
                    </defs> 
                    <g id="logo-preloader" transform="translate(8399.684 -7048.87)">
                        <g id="logo-preloader-fill" transform="translate(-8399 7049)">
                            <path
                                id="text"
                                d="M18.261,984.073a2.71,2.71,0,0,1-.42,1.775,2.021,2.021,0,0,1-1.529.458H11.629a2.021,2.021,0,0,1-1.529-.458,2.723,2.723,0,0,1-.42-1.775v-4.98a2.709,2.709,0,0,1,.42-1.775,2.041,2.041,0,0,1,1.529-.458h4.684q1.4,0,1.735.787a7.491,7.491,0,0,1,.214,2.344l-1.815.347v-1.793h-4.94v5.987h4.93V982.5l1.815.458Z"
                                transform="translate(-7.728 -779.819)"
                                fill="#e4b300"
                            />
                            <path
                                id="text-2"
                                data-name="text"
                                d="M126.524,984.073a2.72,2.72,0,0,1-.418,1.775,2.025,2.025,0,0,1-1.529.458H118.8a2.021,2.021,0,0,1-1.529-.458,2.725,2.725,0,0,1-.418-1.775v-4.98a2.719,2.719,0,0,1,.418-1.775,2.037,2.037,0,0,1,1.529-.458h5.781a2.033,2.033,0,0,1,1.529.458,2.708,2.708,0,0,1,.418,1.775Zm-1.825.458v-5.987h-6.023v5.987Z"
                                transform="translate(-93.28 -779.819)"
                                fill="#e4b300"
                            />
                            <path
                                id="text-3"
                                data-name="text"
                                d="M239.959,986.306h-2.622l-3.157-3.568h-1.735v3.57h-1.8V976.86h6.727q1.765,0,1.765,1.829v2.219q0,1.374-.912,1.7a7.868,7.868,0,0,1-1.888.127Zm-2.582-5.932V979.24c0-.319-.075-.524-.228-.623a1.007,1.007,0,0,0-.593-.127h-4.111v2.634h4.107a1.008,1.008,0,0,0,.593-.129C237.3,980.9,237.377,980.693,237.377,980.374Z"
                                transform="translate(-184.334 -779.819)"
                                fill="#e4b300"
                            />
                            <path
                                id="text-4"
                                data-name="text"
                                d="M346.384,980.8q0,1.83-1.765,1.832h-4.934v3.679h-1.8V976.86h6.723q1.765,0,1.765,1.829Zm-1.765-.549v-1.008c0-.319-.075-.525-.228-.623a1.008,1.008,0,0,0-.593-.127h-4.113v2.507h4.107a1.008,1.008,0,0,0,.593-.127c.153-.1.228-.3.228-.621Z"
                                transform="translate(-270.038 -779.819)"
                                fill="#e4b300"
                            />
                            <path
                                id="text-5"
                                data-name="text"
                                d="M449.524,984.073a2.719,2.719,0,0,1-.418,1.775,2.022,2.022,0,0,1-1.529.458H441.8a2.025,2.025,0,0,1-1.529-.458,2.712,2.712,0,0,1-.418-1.775v-4.98a2.719,2.719,0,0,1,.418-1.775,2.033,2.033,0,0,1,1.529-.458h5.781a2.029,2.029,0,0,1,1.529.458,2.707,2.707,0,0,1,.418,1.775Zm-1.826.458v-5.987h-6.023v5.987Z"
                                transform="translate(-351.526 -779.819)"
                                fill="#e4b300"
                            />
                            <path
                                id="text-6"
                                data-name="text"
                                d="M562.961,986.306h-2.622l-3.159-3.568h-1.735v3.57h-1.8V976.86h6.727q1.765,0,1.763,1.829v2.219q0,1.374-.912,1.7a7.854,7.854,0,0,1-1.886.127Zm-2.584-5.932V979.24a.693.693,0,0,0-.23-.623,1.008,1.008,0,0,0-.593-.127h-4.109v2.634h4.107a1.008,1.008,0,0,0,.593-.129Q560.377,980.852,560.377,980.374Z"
                                transform="translate(-442.473 -779.819)"
                                fill="#e4b300"
                            />
                            <path id="text-7" data-name="text" d="M661.349,986.306H659.3l-.944-2.068h-4.974l-.912,2.068H650.64l4.438-9.446h1.765Zm-3.758-3.77-1.688-3.847-1.749,3.847Z" transform="translate(-519.991 -779.819)" fill="#e4b300" />
                            <path id="text-8" data-name="text" d="M758.047,978.544h-3.631v7.762H752.6v-7.762H749V976.86h9.051Z" transform="translate(-598.596 -779.819)" fill="#e4b300" />
                            <path id="text-9" data-name="text" d="M853.555,986.306H851.74V976.86h1.815Z" transform="translate(-680.68 -779.819)" fill="#e4b300" />
                            <path
                                id="text-10"
                                data-name="text"
                                d="M936.256,984.073a2.719,2.719,0,0,1-.42,1.775,2.03,2.03,0,0,1-1.529.458h-5.781a2.016,2.016,0,0,1-1.527-.458,2.723,2.723,0,0,1-.42-1.775v-4.98a2.709,2.709,0,0,1,.42-1.775,2.037,2.037,0,0,1,1.527-.458h5.781a2.029,2.029,0,0,1,1.529.458,2.719,2.719,0,0,1,.42,1.775Zm-1.815.458v-5.987h-6.035v5.987Z"
                                transform="translate(-740.681 -779.819)"
                                fill="#e4b300"
                            />
                            <path id="text-11" data-name="text" d="M1049.542,986.306H1048.3l-5.765-5.85a6.274,6.274,0,0,1-.656-.769c.052.605.077,1.091.077,1.446V986.3h-1.642V976.86h1.246l5.523,5.565a9.688,9.688,0,0,1,.9,1.025c-.052-.877-.077-1.412-.077-1.628V976.86h1.642Z" transform="translate(-831.471 -779.819)" fill="#e4b300" />
                            <path id="title" d="M45.383,21.847v-5.46H13.621v10.92l-4.542-5.46v-5.46H4.544L0,10.927H45.383V5.467H4.544L0,0H45.383A4.061,4.061,0,0,1,48.6,1.608a5.838,5.838,0,0,1,1.329,3.859v5.46A5.815,5.815,0,0,1,48.6,14.786a4.033,4.033,0,0,1-3.206,1.6h4.531v10.92Z" transform="translate(60.075 162.666)" fill="#e4b300" />
                            <path
                                id="title-2"
                                data-name="title"
                                d="M617.869,811.906l4.538-5.466H577.031a4.022,4.022,0,0,0-3.207,1.614,5.816,5.816,0,0,0-1.331,3.859v16.381a5.85,5.85,0,0,0,1.331,3.861,4.022,4.022,0,0,0,3.207,1.6h40.838l4.546-5.466H577.031v-5.46h18.154l4.536-5.46h-22.69v-5.46Z"
                                transform="translate(-457.645 -643.774)"
                                fill="#e4b300"
                            />
                            <path
                                id="title-3"
                                data-name="title"
                                d="M893.63,817.367h-40.84v-5.46h40.84l4.538-5.466H852.784a4.025,4.025,0,0,0-3.207,1.614,5.815,5.815,0,0,0-1.331,3.859v5.46a5.849,5.849,0,0,0,1.331,3.861,4.022,4.022,0,0,0,3.207,1.6h40.84v5.46H848.24l4.538,5.46h40.84a4.039,4.039,0,0,0,3.209-1.6,5.833,5.833,0,0,0,1.329-3.861v-5.466a5.85,5.85,0,0,0-1.329-3.859A4.015,4.015,0,0,0,893.63,817.367Z"
                                transform="translate(-678.143 -643.774)"
                                fill="#e4b300"
                            />
                            <path id="title-4" data-name="title" d="M0,831.923H8.036l38.877-25.274h1.136v7.814H45.56L38.9,820.055l9.154.04v11.828H54.6V802.71H45.689Z" transform="translate(0 -640.796)" fill="#e4b300" />
                            <path
                                id="shape"
                                d="M355.089,121.673l-14.228-20.213,5.515-40.947.109-.807-.506-.605L295.271,0l47.373,60.775L337.98,95.408l-46-65.7-.892-1.388-.022-.034L246.83,93.552l-5.507-32.806L288.223.555,237.969,59.1l-.533.617.143.843,6.574,39.174-15.3,21.946-1.192,1.712,1.815.932,54.491,28.239-50.994-30.4L245.9,103.622,285.938,139l.161-4.611L274.162,123.8h0L249.68,102.064l18.45-27.11,1.228,17.607.016-.23,1.493-21.381h-.012l2.6-3.832,14.65-21.526,2.941,42.115.038-.557L294.006,45.3l16.625,23.634,1.458,2.074,1.5,21.559.016-.23L314.82,74.9l19.9,28.3L299.95,133.507c-.04-3.49-.087-7.292-.111-7.806q-.139-2.644-.325-5.281l-.2-2.636-.226-2.634-.022-.3-.2-.351-1.317-2.34c-.434-.783-.89-1.553-1.335-2.328s-.894-1.551-1.352-2.32l-1.374-2.31-1.517-2.56-.127-.216-1.533,2.838-1.251,2.318c-.413.771-.817,1.539-1.22,2.326s-.823,1.549-1.21,2.334l-1.21,2.344-.169.329-.032.258-.226,2.622c-.073.877-.133,1.755-.2,2.632q-.192,2.622-.323,5.273c-.034.674-.062,4.1-.089,7.155l1.716,1.523c.2-3.389,1.241-11.865,1.547-13.6.149-.869.307-1.735.448-2.6l.365-2.237,1.2-2.037c.448-.756.871-1.525,1.307-2.287.343-.605.682-1.194,1.009-1.8l.018-.032q.571.94,1.158,1.876c.474.758.938,1.523,1.424,2.275l1.285,2.017.359,2.207.448,2.606c.309,1.735,1.71,14.926,1.934,18.47l1.4-.922,38.641-33.669,12.326,17.514-50.97,30.391,54.491-28.239,1.815-.938Z"
                                transform="translate(-182.18)"
                                fill="url(#linear-gradient)"
                            />
                            <path id="shape-2" data-name="shape" d="M1111.182,810.211a4.571,4.571,0,1,0,0,3.559,4.609,4.609,0,0,0,0-3.568ZM1106.959,816a4.008,4.008,0,1,1,4.013-4.006A4.008,4.008,0,0,1,1106.959,816Z" transform="translate(-879.542 -644.869)" fill="#e4b300" />
                            <path
                                id="shape-3"
                                data-name="shape"
                                d="M1118.438,819.361a1.9,1.9,0,0,0-.524-.734,1.39,1.39,0,0,0,.752-1.29,1.338,1.338,0,0,0-.576-1.13,2.525,2.525,0,0,0-1.5-.407,7.877,7.877,0,0,0-1.4.142l-.079.014v5.226h.879v-2.235h.759c.635,0,1.048.725,1.234,2.151v.084h.87l-.016-.111A7.62,7.62,0,0,0,1118.438,819.361Zm-.881-1.378a1.428,1.428,0,0,1-.852.208h-.716v-1.582c.167-.016.371-.023.61-.023.829,0,1.231.26,1.231.8a.7.7,0,0,1-.273.6Z"
                                transform="translate(-889.303 -651.359)"
                                fill="#e4b300"
                            />
                        </g>
                        <g id="logo-preloader-stroke" transform="translate(-8399.5 7049)">
                            <path
                                id="text"
                                data-name="text"
                                d="M18.234,984.051a2.7,2.7,0,0,1-.418,1.77,2.015,2.015,0,0,1-1.524.456H11.622a2.015,2.015,0,0,1-1.524-.456,2.714,2.714,0,0,1-.418-1.77v-4.965a2.7,2.7,0,0,1,.418-1.77,2.035,2.035,0,0,1,1.524-.456h4.669q1.4,0,1.729.784a7.468,7.468,0,0,1,.213,2.337l-1.81.346v-1.788H11.5v5.968h4.914V982.48l1.81.456Z"
                                transform="translate(-7.18 -779.928)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.4"
                            />
                            <path
                                id="text"
                                data-name="text"
                                d="M126.494,984.051a2.711,2.711,0,0,1-.416,1.77,2.018,2.018,0,0,1-1.524.456H118.79a2.015,2.015,0,0,1-1.524-.456,2.716,2.716,0,0,1-.416-1.77v-4.965a2.711,2.711,0,0,1,.416-1.77,2.03,2.03,0,0,1,1.524-.456h5.763a2.026,2.026,0,0,1,1.524.456,2.7,2.7,0,0,1,.416,1.77Zm-1.82.456v-5.968h-6v5.968Z"
                                transform="translate(-92.85 -779.928)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.4"
                            />
                            <path
                                id="text"
                                data-name="text"
                                d="M239.93,986.277h-2.614l-3.147-3.557H232.44v3.559h-1.79V976.86h6.706q1.759,0,1.759,1.824V980.9q0,1.369-.909,1.7a7.842,7.842,0,0,1-1.882.127Zm-2.574-5.914v-1.13c0-.318-.074-.523-.227-.621a1,1,0,0,0-.591-.127h-4.1v2.626h4.094a1,1,0,0,0,.591-.129C237.278,980.888,237.356,980.681,237.356,980.363Z"
                                transform="translate(-183.65 -779.928)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.4"
                            />
                            <path
                                id="text"
                                data-name="text"
                                d="M346.358,980.783q0,1.824-1.759,1.826H339.68v3.668h-1.79V976.86h6.7q1.76,0,1.76,1.824Zm-1.759-.547v-1.005c0-.318-.074-.523-.227-.621a1,1,0,0,0-.591-.127h-4.1v2.5h4.094a1.006,1.006,0,0,0,.591-.127c.153-.1.227-.3.227-.619Z"
                                transform="translate(-269.389 -779.928)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.4"
                            />
                            <path
                                id="text"
                                data-name="text"
                                d="M449.494,984.051a2.711,2.711,0,0,1-.416,1.77,2.015,2.015,0,0,1-1.524.456H441.79a2.018,2.018,0,0,1-1.524-.456,2.7,2.7,0,0,1-.416-1.77v-4.965a2.711,2.711,0,0,1,.416-1.77,2.026,2.026,0,0,1,1.524-.456h5.763a2.023,2.023,0,0,1,1.524.456,2.7,2.7,0,0,1,.416,1.77Zm-1.82.456v-5.968h-6v5.968Z"
                                transform="translate(-350.85 -779.928)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.4"
                            />
                            <path
                                id="text"
                                data-name="text"
                                d="M562.932,986.277h-2.614l-3.149-3.557H555.44v3.559h-1.79V976.86h6.706q1.759,0,1.757,1.824V980.9q0,1.369-.909,1.7a7.828,7.828,0,0,1-1.88.127Zm-2.576-5.914v-1.13a.691.691,0,0,0-.229-.621,1,1,0,0,0-.591-.127h-4.1v2.626h4.094a1,1,0,0,0,.591-.129Q560.356,980.839,560.356,980.363Z"
                                transform="translate(-442.15 -779.928)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.4"
                            />
                            <path id="text" data-name="text" d="M661.315,986.277h-2.047l-.941-2.061h-4.959l-.909,2.061h-1.82l4.424-9.417h1.759Zm-3.746-3.758-1.683-3.835-1.743,3.835Z" transform="translate(-519.34 -779.928)" fill="none" stroke="#dcb533" strokeWidth="0.4" />
                            <path id="text" data-name="text" d="M758.018,978.539H754.4v7.738h-1.81v-7.738H749V976.86h9.022Z" transform="translate(-598.09 -779.928)" fill="none" stroke="#dcb533" strokeWidth="0.4" />
                            <path id="text" data-name="text" d="M853.55,986.277h-1.81V976.86h1.81Z" transform="translate(-680.24 -779.928)" fill="none" stroke="#dcb533" strokeWidth="0.4" />
                            <path
                                id="text"
                                data-name="text"
                                d="M936.226,984.051a2.71,2.71,0,0,1-.418,1.77,2.023,2.023,0,0,1-1.524.456H928.52A2.01,2.01,0,0,1,927,985.82a2.714,2.714,0,0,1-.418-1.77v-4.965a2.7,2.7,0,0,1,.418-1.77,2.031,2.031,0,0,1,1.522-.456h5.763a2.023,2.023,0,0,1,1.524.456,2.71,2.71,0,0,1,.418,1.77Zm-1.81.456v-5.968H928.4v5.968Z"
                                transform="translate(-740.261 -779.928)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.4"
                            />
                            <path
                                id="text"
                                data-name="text"
                                d="M1049.513,986.277h-1.243l-5.747-5.831a6.255,6.255,0,0,1-.654-.766c.052.6.076,1.088.076,1.442v5.146h-1.637V976.86h1.242l5.506,5.548a9.66,9.66,0,0,1,.895,1.021c-.052-.875-.076-1.407-.076-1.623V976.86h1.637Z"
                                transform="translate(-831.122 -779.928)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.4"
                            />
                            <path
                                id="title"
                                data-name="title"
                                d="M45.242,21.779V16.336H13.579V27.222L9.052,21.779V16.336H4.53L0,10.893H45.242V5.45H4.53L0,0H45.242a4.049,4.049,0,0,1,3.206,1.6A5.822,5.822,0,0,1,49.773,5.45v5.443a5.8,5.8,0,0,1-1.328,3.847,4.021,4.021,0,0,1-3.2,1.6h4.518V27.222Z"
                                transform="translate(60.5 162.663)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.4"
                            />
                            <path
                                id="title"
                                data-name="title"
                                d="M617.728,811.889l4.524-5.449H577.016a4.009,4.009,0,0,0-3.2,1.609,5.8,5.8,0,0,0-1.327,3.847v16.33a5.831,5.831,0,0,0,1.327,3.849,4.01,4.01,0,0,0,3.2,1.595h40.711l4.532-5.449H577.016v-5.443h18.1l4.522-5.443h-22.62v-5.443Z"
                                transform="translate(-457.372 -643.777)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.4"
                            />
                            <path
                                id="title"
                                data-name="title"
                                d="M893.489,817.333H852.776v-5.443h40.713l4.524-5.449H852.77a4.013,4.013,0,0,0-3.2,1.609,5.8,5.8,0,0,0-1.327,3.847v5.443a5.831,5.831,0,0,0,1.327,3.849,4.01,4.01,0,0,0,3.2,1.595h40.713v5.443H848.24l4.524,5.443h40.713a4.027,4.027,0,0,0,3.2-1.595A5.815,5.815,0,0,0,898,828.225v-5.449a5.832,5.832,0,0,0-1.325-3.847A4,4,0,0,0,893.489,817.333Z"
                                transform="translate(-677.674 -643.777)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.4"
                            />
                            <path id="title" data-name="title" d="M0,831.833H8.011l38.757-25.2H47.9v7.79H45.418L38.775,820l9.125.04v11.791h6.531V802.71H45.547Z" transform="translate(0.5 -640.796)" fill="none" stroke="#dcb533" strokeWidth="0.4" />
                            <path
                                id="shape"
                                data-name="shape"
                                d="M355.089,121.673l-14.228-20.213,5.515-40.947.109-.807-.506-.605L295.271,0l47.373,60.775L337.98,95.408l-46-65.7-.892-1.388-.022-.034L246.83,93.552l-5.507-32.806L288.223.555,237.969,59.1l-.533.617.143.843,6.574,39.174-15.3,21.946-1.192,1.712,1.815.932,54.491,28.239-50.994-30.4L245.9,103.622,285.938,139l.161-4.611L274.162,123.8h0L249.68,102.064l18.45-27.11,1.228,17.607.016-.23,1.493-21.381h-.012l2.6-3.832,14.65-21.526,2.941,42.115.038-.557L294.006,45.3l16.625,23.634,1.458,2.074,1.5,21.559.016-.23L314.82,74.9l19.9,28.3L299.95,133.507c-.04-3.49-.087-7.292-.111-7.806q-.139-2.644-.325-5.281l-.2-2.636-.226-2.634-.022-.3-.2-.351-1.317-2.34c-.434-.783-.89-1.553-1.335-2.328s-.894-1.551-1.352-2.32l-1.374-2.31-1.517-2.56-.127-.216-1.533,2.838-1.251,2.318c-.413.771-.817,1.539-1.22,2.326s-.823,1.549-1.21,2.334l-1.21,2.344-.169.329-.032.258-.226,2.622c-.073.877-.133,1.755-.2,2.632q-.192,2.622-.323,5.273c-.034.674-.062,4.1-.089,7.155l1.716,1.523c.2-3.389,1.241-11.865,1.547-13.6.149-.869.307-1.735.448-2.6l.365-2.237,1.2-2.037c.448-.756.871-1.525,1.307-2.287.343-.605.682-1.194,1.009-1.8l.018-.032q.571.94,1.158,1.876c.474.758.938,1.523,1.424,2.275l1.285,2.017.359,2.207.448,2.606c.309,1.735,1.71,14.926,1.934,18.47l1.4-.922,38.641-33.669,12.326,17.514-50.97,30.391,54.491-28.239,1.815-.938Z"
                                transform="translate(-181.739)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.4"
                            />
                            <path id="shape" data-name="shape" d="M1111.182,810.211a4.571,4.571,0,1,0,0,3.559,4.609,4.609,0,0,0,0-3.568ZM1106.959,816a4.008,4.008,0,1,1,4.013-4.006A4.008,4.008,0,0,1,1106.959,816Z" transform="translate(-878.999 -644.852)" fill="none" stroke="#dcb533" strokeWidth="0.2" />
                            <path
                                id="shape"
                                data-name="shape"
                                d="M1118.438,819.361a1.9,1.9,0,0,0-.524-.734,1.39,1.39,0,0,0,.752-1.29,1.338,1.338,0,0,0-.576-1.13,2.525,2.525,0,0,0-1.5-.407,7.877,7.877,0,0,0-1.4.142l-.079.014v5.226h.879v-2.235h.759c.635,0,1.048.725,1.234,2.151v.084h.87l-.016-.111A7.62,7.62,0,0,0,1118.438,819.361Zm-.881-1.378a1.428,1.428,0,0,1-.852.208h-.716v-1.582c.167-.016.371-.023.61-.023.829,0,1.231.26,1.231.8a.7.7,0,0,1-.273.6Z"
                                transform="translate(-888.761 -651.342)"
                                fill="none"
                                stroke="#dcb533"
                                strokeWidth="0.2"
                            />
                        </g>
                    </g>
                    
          </svg>
        </div>
      </div>
      <Header></Header>
      <div className="scroll-viewport">
        <div className="scroll-wrapper">
          <div className="page-backgorund claim"></div>
          <section className="section section-top">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <img
                    src={merch}
                    className="img-fluid has-animation-fade-in"
                    alt="Ares Claim Merch"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="claim-merch">
                    <div className="claim-merch-left has-animation-fade-in">
                      <div className="claim-merch-shirt-options">
                        <div className="claim-merch-background">
                          <img src={rond} className="img-fluid" alt="Ares" />
                        </div>
                        <div
                          id="option-white-t-shirt"
                          className="claim-merch-shirt-option active"
                        >
                          <img src={whitet} className="img-fluid" alt="" />
                        </div>
                        <div
                          id="option-black-t-shirt"
                          className="claim-merch-shirt-option"
                        >
                          <img src={blackt} className="img-fluid" alt="" />
                        </div>
                        <div
                          id="option-red-t-shirt"
                          className="claim-merch-shirt-option"
                        >
                          <img src={redt} className="img-fluid" alt="" />
                        </div>
                        <div
                          id="option-grey-t-shirt"
                          className="claim-merch-shirt-option"
                        >
                          <img src={greyt} className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="claim-merch-cap-options">
                        <div
                          id="option-white-cap"
                          className="claim-merch-cap-option active"
                        >
                          <img src={whitecap} className="img-fluid" alt="" />
                        </div>
                        <div
                          id="option-black-cap"
                          className="claim-merch-cap-option"
                        >
                          <img src={blackcap} className="img-fluid" alt="" />
                        </div>
                        <div
                          id="option-red-cap"
                          className="claim-merch-cap-option"
                        >
                          <img src={redcap} className="img-fluid" alt="" />
                        </div>
                        <div
                          id="option-grey-cap"
                          className="claim-merch-cap-option"
                        >
                          <img src={greycap} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="claim-merch-right has-animation-fade-in">
                      <h3 className="has-animation">
                        Signature polo with embrodery & Ares classic
                        baseball cap
                      </h3>
                      <div className="claim-merch-select">
                        <div className="claim-merch-select-item">
                          <a data-dropdown
                            href="#"
                            className="claim-merch-select-item-selected claim-merch-select-t-shirt-link"
                          >
                            Select T-Shirt color
                          </a>
                          <input
                            type="text"
                            id="claim-merch-selected-t-shirt"
                          />
                          <ul className="claim-merch-select-t-shirt">
                            <li>
                              <a
                                href="#"
                                data-input-val="white-tshirt"
                                data-select="#option-white-t-shirt"
                              >
                                <img
                                  src={whitet}
                                  className="img-fluid"
                                  alt=""
                                />
                                White
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-input-val="black-tshirt"
                                data-select="#option-black-t-shirt"
                              >
                                <img
                                  src={blackt}
                                  className="img-fluid"
                                  alt=""
                                />
                                Black
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-input-val="red-tshirt"
                                data-select="#option-red-t-shirt"
                              >
                                <img src={redt} className="img-fluid" alt="" />
                                Red
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-input-val="grey-tshirt"
                                data-select="#option-grey-t-shirt"
                              >
                                <img src={greyt} className="img-fluid" alt="" />
                                Grey
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="claim-merch-select-item">
                          <a
                            href="#"
                            className="claim-merch-select-item-selected claim-merch-select-cap-link"
                          >
                            Select Cap color
                          </a>
                          <input
                            type="text"
                            id="claim-merch-selected-cap"
                            style={{ display: "none" }}
                          />
                          <ul className="claim-merch-select-cap">
                            <li>
                              <a
                                href="#"
                                data-input-val="white-cap"
                                data-select="#option-white-cap"
                              >
                                {" "}
                                <img
                                  src={whitecap}
                                  className="img-fluid"
                                  alt=""
                                />
                                White
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-input-val="black-cap"
                                data-select="#option-black-cap"
                              >
                                {" "}
                                <img
                                  src={blackcap}
                                  className="img-fluid"
                                  alt=""
                                />
                                Black
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-input-val="red-cap"
                                data-select="#option-red-cap"
                              >
                                {" "}
                                <img
                                  src={redcap}
                                  className="img-fluid"
                                  alt=""
                                />
                                Red
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-input-val="grey-cap"
                                data-select="#option-grey-cap"
                              >
                                {" "}
                                <img
                                  src={greycap}
                                  className="img-fluid"
                                  alt=""
                                />
                                Grey
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="claim-merch-select-item">
                          <a
                            href="#"
                            className="claim-merch-select-item-selected claim-merch-select-size-link"
                          >
                            Select Size
                          </a>
                          <input
                            type="text"
                            id="claim-merch-selected-size"
                            style={{ display: "none" }}
                          />
                          <ul className="claim-merch-select-size">
                            <li>
                              <a href="#">S</a>
                            </li>
                            <li>
                              <a href="#">M</a>
                            </li>
                            <li>
                              <a href="#">L</a>
                            </li>
                            <li>
                              <a href="#">XL</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Each fine-textured, breathable polo shirt is crafted
                        with cotton and comes in various color shades to satisfy
                        every palette. This signature design is unique to our
                        Ares collection. Our retro cotton blend cap is made with
                        premium fabrics and designed to have a comfortable
                        silhouette. This signature Ares cap features a
                        structured crown and an adjustable closure to serve as a
                        staple piece in any wardrobe.
                      </p>

                      <a href="#" className="btn-fi claim-merch-next">
                        Next
                      </a>
                    </div>
                  </div>
                  <div className="claim-form">
                    <div className="claim-form-content">
                      <form method="post" acceptCharset="utf-8">
                        <div className="claim-form-row">
                          <div className="claim-form-col-2">
                            <div>
                            
                            <input
                              type="text"
                              id="name"
                              name="name"
                               className="form-control"
                              placeholder="Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              
                              />
                              </div>
                            
                          </div>
                          <div className="claim-form-col-2">
                          
                            <input
                              type="text"
                              id="surname"
                              name="surname"
                              className="form-control"
                              placeholder="Surname"
                               />
                          </div>
                        </div>
                        <div className="claim-form-row">
                          <div className="claim-form-col-1">
                           <input
                              type="text"
                              id="address"
                              name="address"
                              className="form-control"
                              placeholder="Address"
                              />
                          </div>
                        </div>
                        <div className="claim-form-row">
                          <div className="claim-form-col-1">
                         <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder=" E-mail"
                            />
                          </div>
                        </div>
                        <div className="claim-form-row">
                          <div className="claim-form-col-3">
                           
                            <input
                              type="text"
                              id="zip"
                              name="zip"
                              className="form-control"    
                              placeholder="zip"                         
                            />
                          </div>
                          <div className="claim-form-col-3"><select id="country" name="country"
                                                    class="form-control">
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Åland Islands">Åland Islands</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="American Samoa">American Samoa</option>
                                                    <option value="Andorra">Andorra</option>
                                                    <option value="Angola">Angola</option>
                                                    <option value="Anguilla">Anguilla</option>
                                                    <option value="Antarctica">Antarctica</option>
                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                    <option value="Argentina">Argentina</option>
                                                    <option value="Armenia">Armenia</option>
                                                    <option value="Aruba">Aruba</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Austria">Austria</option>
                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                    <option value="Bahamas">Bahamas</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Barbados">Barbados</option>
                                                    <option value="Belarus">Belarus</option>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Belize">Belize</option>
                                                    <option value="Benin">Benin</option>
                                                    <option value="Bermuda">Bermuda</option>
                                                    <option value="Bhutan">Bhutan</option>
                                                    <option value="Bolivia">Bolivia</option>
                                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina
                                                    </option>
                                                    <option value="Botswana">Botswana</option>
                                                    <option value="Bouvet Island">Bouvet Island</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="British Indian Ocean Territory">British Indian Ocean
                                                        Territory</option>
                                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                    <option value="Bulgaria">Bulgaria</option>
                                                    <option value="Burkina Faso">Burkina Faso</option>
                                                    <option value="Burundi">Burundi</option>
                                                    <option value="Cambodia">Cambodia</option>
                                                    <option value="Cameroon">Cameroon</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Cape Verde">Cape Verde</option>
                                                    <option value="Cayman Islands">Cayman Islands</option>
                                                    <option value="Central African Republic">Central African Republic
                                                    </option>
                                                    <option value="Chad">Chad</option>
                                                    <option value="Chile">Chile</option>
                                                    <option value="China">China</option>
                                                    <option value="Christmas Island">Christmas Island</option>
                                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands
                                                    </option>
                                                    <option value="Colombia">Colombia</option>
                                                    <option value="Comoros">Comoros</option>
                                                    <option value="Congo">Congo</option>
                                                    <option value="Congo, The Democratic Republic of The">Congo, The
                                                        Democratic Republic of The</option>
                                                    <option value="Cook Islands">Cook Islands</option>
                                                    <option value="Costa Rica">Costa Rica</option>
                                                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                    <option value="Croatia">Croatia</option>
                                                    <option value="Cuba">Cuba</option>
                                                    <option value="Cyprus">Cyprus</option>
                                                    <option value="Czech Republic">Czech Republic</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Djibouti">Djibouti</option>
                                                    <option value="Dominica">Dominica</option>
                                                    <option value="Dominican Republic">Dominican Republic</option>
                                                    <option value="Ecuador">Ecuador</option>
                                                    <option value="Egypt">Egypt</option>
                                                    <option value="El Salvador">El Salvador</option>
                                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                    <option value="Eritrea">Eritrea</option>
                                                    <option value="Estonia">Estonia</option>
                                                    <option value="Ethiopia">Ethiopia</option>
                                                    <option value="Falkland Islands (Malvinas)">Falkland Islands
                                                        (Malvinas)</option>
                                                    <option value="Faroe Islands">Faroe Islands</option>
                                                    <option value="Fiji">Fiji</option>
                                                    <option value="Finland">Finland</option>
                                                    <option value="France">France</option>
                                                    <option value="French Guiana">French Guiana</option>
                                                    <option value="French Polynesia">French Polynesia</option>
                                                    <option value="French Southern Territories">French Southern
                                                        Territories</option>
                                                    <option value="Gabon">Gabon</option>
                                                    <option value="Gambia">Gambia</option>
                                                    <option value="Georgia">Georgia</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Ghana">Ghana</option>
                                                    <option value="Gibraltar">Gibraltar</option>
                                                    <option value="Greece">Greece</option>
                                                    <option value="Greenland">Greenland</option>
                                                    <option value="Grenada">Grenada</option>
                                                    <option value="Guadeloupe">Guadeloupe</option>
                                                    <option value="Guam">Guam</option>
                                                    <option value="Guatemala">Guatemala</option>
                                                    <option value="Guernsey">Guernsey</option>
                                                    <option value="Guinea">Guinea</option>
                                                    <option value="Guinea-bissau">Guinea-bissau</option>
                                                    <option value="Guyana">Guyana</option>
                                                    <option value="Haiti">Haiti</option>
                                                    <option value="Heard Island and Mcdonald Islands">Heard Island and
                                                        Mcdonald Islands</option>
                                                    <option value="Holy See (Vatican City State)">Holy See (Vatican City
                                                        State)</option>
                                                    <option value="Honduras">Honduras</option>
                                                    <option value="Hong Kong">Hong Kong</option>
                                                    <option value="Hungary">Hungary</option>
                                                    <option value="Iceland">Iceland</option>
                                                    <option value="India">India</option>
                                                    <option value="Indonesia">Indonesia</option>
                                                    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of
                                                    </option>
                                                    <option value="Iraq">Iraq</option>
                                                    <option value="Ireland">Ireland</option>
                                                    <option value="Isle of Man">Isle of Man</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Italy">Italy</option>
                                                    <option value="Jamaica">Jamaica</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Jersey">Jersey</option>
                                                    <option value="Jordan">Jordan</option>
                                                    <option value="Kazakhstan">Kazakhstan</option>
                                                    <option value="Kenya">Kenya</option>
                                                    <option value="Kiribati">Kiribati</option>
                                                    <option value="Korea, Democratic People's Republic of">Korea,
                                                        Democratic People's Republic of</option>
                                                    <option value="Korea, Republic of">Korea, Republic of</option>
                                                    <option value="Kuwait">Kuwait</option>
                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                    <option value="Lao People's Democratic Republic">Lao People's
                                                        Democratic Republic</option>
                                                    <option value="Latvia">Latvia</option>
                                                    <option value="Lebanon">Lebanon</option>
                                                    <option value="Lesotho">Lesotho</option>
                                                    <option value="Liberia">Liberia</option>
                                                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya
                                                    </option>
                                                    <option value="Liechtenstein">Liechtenstein</option>
                                                    <option value="Lithuania">Lithuania</option>
                                                    <option value="Luxembourg">Luxembourg</option>
                                                    <option value="Macao">Macao</option>
                                                    <option value="Macedonia, The Former Yugoslav Republic of">
                                                        Macedonia, The Former Yugoslav Republic of</option>
                                                    <option value="Madagascar">Madagascar</option>
                                                    <option value="Malawi">Malawi</option>
                                                    <option value="Malaysia">Malaysia</option>
                                                    <option value="Maldives">Maldives</option>
                                                    <option value="Mali">Mali</option>
                                                    <option value="Malta">Malta</option>
                                                    <option value="Marshall Islands">Marshall Islands</option>
                                                    <option value="Martinique">Martinique</option>
                                                    <option value="Mauritania">Mauritania</option>
                                                    <option value="Mauritius">Mauritius</option>
                                                    <option value="Mayotte">Mayotte</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Micronesia, Federated States of">Micronesia,
                                                        Federated States of</option>
                                                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                                                    <option value="Monaco">Monaco</option>
                                                    <option value="Mongolia">Mongolia</option>
                                                    <option value="Montenegro">Montenegro</option>
                                                    <option value="Montserrat">Montserrat</option>
                                                    <option value="Morocco">Morocco</option>
                                                    <option value="Mozambique">Mozambique</option>
                                                    <option value="Myanmar">Myanmar</option>
                                                    <option value="Namibia">Namibia</option>
                                                    <option value="Nauru">Nauru</option>
                                                    <option value="Nepal">Nepal</option>
                                                    <option value="Netherlands">Netherlands</option>
                                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                    <option value="New Caledonia">New Caledonia</option>
                                                    <option value="New Zealand">New Zealand</option>
                                                    <option value="Nicaragua">Nicaragua</option>
                                                    <option value="Niger">Niger</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                    <option value="Niue">Niue</option>
                                                    <option value="Norfolk Island">Norfolk Island</option>
                                                    <option value="Northern Mariana Islands">Northern Mariana Islands
                                                    </option>
                                                    <option value="Norway">Norway</option>
                                                    <option value="Oman">Oman</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Palau">Palau</option>
                                                    <option value="Palestinian Territory, Occupied">Palestinian
                                                        Territory, Occupied</option>
                                                    <option value="Panama">Panama</option>
                                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                                    <option value="Paraguay">Paraguay</option>
                                                    <option value="Peru">Peru</option>
                                                    <option value="Philippines">Philippines</option>
                                                    <option value="Pitcairn">Pitcairn</option>
                                                    <option value="Poland">Poland</option>
                                                    <option value="Portugal">Portugal</option>
                                                    <option value="Puerto Rico">Puerto Rico</option>
                                                    <option value="Qatar">Qatar</option>
                                                    <option value="Reunion">Reunion</option>
                                                    <option value="Romania">Romania</option>
                                                    <option value="Russian Federation">Russian Federation</option>
                                                    <option value="Rwanda">Rwanda</option>
                                                    <option value="Saint Helena">Saint Helena</option>
                                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                    <option value="Saint Lucia">Saint Lucia</option>
                                                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon
                                                    </option>
                                                    <option value="Saint Vincent and The Grenadines">Saint Vincent and
                                                        The Grenadines</option>
                                                    <option value="Samoa">Samoa</option>
                                                    <option value="San Marino">San Marino</option>
                                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                                    <option value="Senegal">Senegal</option>
                                                    <option value="Serbia">Serbia</option>
                                                    <option value="Seychelles">Seychelles</option>
                                                    <option value="Sierra Leone">Sierra Leone</option>
                                                    <option value="Singapore">Singapore</option>
                                                    <option value="Slovakia">Slovakia</option>
                                                    <option value="Slovenia">Slovenia</option>
                                                    <option value="Solomon Islands">Solomon Islands</option>
                                                    <option value="Somalia">Somalia</option>
                                                    <option value="South Africa">South Africa</option>
                                                    <option value="South Georgia and The South Sandwich Islands">South
                                                        Georgia and The South Sandwich Islands</option>
                                                    <option value="Spain">Spain</option>
                                                    <option value="Sri Lanka">Sri Lanka</option>
                                                    <option value="Sudan">Sudan</option>
                                                    <option value="Suriname">Suriname</option>
                                                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen
                                                    </option>
                                                    <option value="Swaziland">Swaziland</option>
                                                    <option value="Sweden">Sweden</option>
                                                    <option value="Switzerland">Switzerland</option>
                                                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                    <option value="Taiwan">Taiwan</option>
                                                    <option value="Tajikistan">Tajikistan</option>
                                                    <option value="Tanzania, United Republic of">Tanzania, United
                                                        Republic of</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="Timor-leste">Timor-leste</option>
                                                    <option value="Togo">Togo</option>
                                                    <option value="Tokelau">Tokelau</option>
                                                    <option value="Tonga">Tonga</option>
                                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                    <option value="Tunisia">Tunisia</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="Turkmenistan">Turkmenistan</option>
                                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands
                                                    </option>
                                                    <option value="Tuvalu">Tuvalu</option>
                                                    <option value="Uganda">Uganda</option>
                                                    <option value="Ukraine">Ukraine</option>
                                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    <option value="United States">United States</option>
                                                    <option value="United States Minor Outlying Islands">United States
                                                        Minor Outlying Islands</option>
                                                    <option value="Uruguay">Uruguay</option>
                                                    <option value="Uzbekistan">Uzbekistan</option>
                                                    <option value="Vanuatu">Vanuatu</option>
                                                    <option value="Venezuela">Venezuela</option>
                                                    <option value="Viet Nam">Viet Nam</option>
                                                    <option value="Virgin Islands, British">Virgin Islands, British
                                                    </option>
                                                    <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                    <option value="Western Sahara">Western Sahara</option>
                                                    <option value="Yemen">Yemen</option>
                                                    <option value="Zambia">Zambia</option>
                                                    <option value="Zimbabwe">Zimbabwe</option>
                                                </select></div>
                        
                           
                         
                          <div className="claim-form-col-3">
                            
                            <input
                              type="text"
                              id="city"
                              name="city"
                              className="form-control"
                               placeholder="City"
                               />
                          </div>
                        </div>
                        <div className="claim-form-row claim-form-row-reverse">
                          <div className="claim-form-col-8">
                            <div className="claim-form-actions">
                              <a href="#" className="claim-merch-back">
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>{" "}
                                Back
                              </a>
                              <a
                                href="#"
                                className="btn-fi"
                                id="claim-form-submit"
                              >
                                Submit
                              </a>
                            </div>
                          </div>
                          <div className="claim-form-col-4">
                            <div className="form-checkbox">
                              <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                value="terms"
                              />
                              <label htmlFor="terms">
                                <p>
                                  by continuing you accept the general
                                  conditions and our{" "}
                                  <a href="#" className="open-terms">
                                    <u>privacy policy</u>
                                  </a>
                                </p>
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );

  }