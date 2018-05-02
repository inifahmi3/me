import React from "react";

import $ from "jquery";
import easing from "jquery.easing";
import anime from "animejs";

import ReallySmoothScroll from "really-smooth-scroll";

import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Skill from "./Skill";
import Education from "./Education";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

class Main extends React.Component {

    componentDidMount() {
        ReallySmoothScroll.shim();
        $(".hamb").on("click", function () {
            $(this).toggleClass("active")
            $(".navbar").toggleClass("show")
        });
        $(".goto").click(function () {
            var goto = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(goto).offset().top
            }, 1000, 'easeInOutExpo');
        });
        $('.text-header').each(function () {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });
        anime.timeline({ loop: true })
            .add({
                targets: '.text-header .letter',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 1000,
                delay: function (el, i) {
                    return 150 * (i + 1)
                }
            })
            .add({
                targets: '.text-header',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $(".backToTop").css('opacity', '1')
                $(".navbar").addClass("sticky")
            } else {
                $(".backToTop").css('opacity', '0')
                $(".navbar").removeClass("sticky")
            }
        });
    }

    render() {
        return (
            <div className="landing-page">
                <Navbar/>
                <Header />
                <About />       
                <Skill />       
                <Education />       
                <Experience />       
                <Portfolio />       
                <Contact />       
                <Footer />       
            </div>
        )
    }
}

export default Main