import  React from 'react'
import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import "../assets/styles/components/Footer.css"

const Footer =() =>(
    <footer className='Footer'>
    <p>2020 Hello blue palet dot</p>
    <div className="Footer__social">
        <FaSpotify/>
        <FaInstagram/>
        <FaTwitter/>
        <FaFacebookF/>   
        <FaTelegram/>           
    </div> 


    </footer>
)

export default Footer