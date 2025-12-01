"use client";
import "@/app/contact-us/contact.css";
import home from "../../../../frontendnew/src/images/house.png";
import phone from "../../../../frontendnew/src/images/phone.png";
import emailContact from "../../../../frontendnew/src/images/emailContact.png";
import bannerImg from "../../../../frontendnew/src/images/Rectangle.png";
import decoration from "../../../../frontendnew/src/images/Decoration.png";
// import { BASE_URL } from "../../constants/urls";

// import MapComponent from "../../components/GoogleMap";
import GoogleMap from "@/components/GoogleMap";
import Image from "next/image";
import { useState } from "react";
function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/v1/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
            } else {
                alert(result.message || "Failed to send message.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="contactUs">
  
                <section className="contactUs-section">
                    <div className="section-header">
                        <div className="contactUs-container">
                            <h2>Contact Us</h2>
                            <p>
                                Launching on a digital journey? Seeking to
                                create a solid website, an exceptional
                                e-commerce store, or an advanced mobile app, or
                                do you want to climb the heights of Google with
                                dedicated backend support? Let&apos;s together make
                                your goals a reality and ensure your success.
                            </p>
                        </div>
                    </div>

                    <div className="contactUs-container">
                        <div className="contactUs-row">
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        {/* <Image
                                            src={home}
                                            className="contact-info-icon-img"
                                            alt="home"
                                        /> */}
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>Address</h4>
                                        <p>
                                            <a
                                                href="https://www.google.com/maps/place/Infinity+Solution/@22.8079684,75.904755,164m/data=!3m1!1e3!4m9!1m2!2m1!1sHE-23+Super+city+Singapore+Township+Indore!3m5!1s0x39631db8b3c35651:0xd4cf38892f387052!8m2!3d22.8079682!4d75.9055515!16s%2Fg%2F11w_h5mw99?entry=ttu&g_ep=EgoyMDI1MDYwMi4wIKXMDSoASAFQAw%3D%3D"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    color: "inherit",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                HE-23, Super city, <br />
                                                Singapore Township, <br />
                                                Indore
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        {/* <Image
                                            src={phone}
                                            className="contact-info-icon-img"
                                            alt="phone"
                                        /> */}
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>Phone</h4>
                                        <p>+91-8435204953, 0731-4280572</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        {/* <Image
                                            src={emailContact}
                                            className="contact-info-icon-img"
                                            alt="email"
                                        /> */}
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>Email</h4>
                                        <p>
                                            <a
                                                href="mailto:info@samprakshiinfinitysolution.com"
                                                style={{
                                                    color: "inherit",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                info@samprakshiinfinitysolution.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form">
                                <form onSubmit={handleSubmit} id="contact-form">
                                    <h2>Send Message</h2>

                                    <div className="input-box">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span>Full Name</span>
                                    </div>

                                    <div className="input-box">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span>Email</span>
                                    </div>

                                    <div className="input-box">
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span>Phone</span>
                                    </div>

                                    <div className="input-box">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                        <span>Type your Message...</span>
                                    </div>

                                    <div className="input-box">
                                        <input
                                            type="submit"
                                            value={
                                                loading ? "Sending..." : "Send"
                                            }
                                            disabled={loading}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <Image
                    style={{ marginTop: "-70px" }}
                    className="banner-img"
                    src={bannerImg}
                    alt="banner"
                /> */}
                {/* <Image className="banner-img" src={decoration} alt="decoration" /> */}
            </div>
            <GoogleMap />
            {/* <GoogleMap /> */}
        </>
    );
}

export default ContactUs;
