'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { logout } from "@/actions/useAction";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

function Header({ isAuthenticated, user }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [showDigitalDropdown, setShowDigitalDropdown] = useState(false);
  const [showBackOfficeDropdown, setShowBackOfficeDropdown] = useState(false);
  const [showDevelopmentDropdown, setShowDevelopmentDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/blogs`);
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

 const digitalMarketingBlogs = Array.isArray(blogs)
  ? blogs.filter((blog) => blog.category === "digitalMarketing")
  : [];

const backOfficeBlogs = Array.isArray(blogs)
  ? blogs.filter((blog) => blog.category === "backOffice")
  : [];

  return (
    <div className="header">
      <div className="header-container">
        <Link href="/">
          {/* Logo */}
          <div className="header-logo">
            <Image
              src="/logo.png"
              alt="samprakshiinfinitysolution-logo.svg"
              loading="lazy"
              className="header-logo-img"
            />
          </div>
        </Link>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>

        <ul className={`header-items ${menuOpen ? "open" : ""}`}>
          {!user || user?.role !== "admin" ? (
            <>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <li>Home</li>
              </Link>

              {/* Digital Marketing Dropdown */}
              <div
                className="dropdown"
                onMouseEnter={() => setShowDigitalDropdown(true)}
                onMouseLeave={() => setShowDigitalDropdown(false)}
              >
                <Link href="/digitalMarketingServices">
                  <li>Digital Marketing Services</li>
                </Link>

                {showDigitalDropdown && digitalMarketingBlogs.length > 0 && (
                  <ul
                    className="dropdown-menu"
                    onMouseEnter={() => setShowDigitalDropdown(true)}
                    onMouseLeave={() => setShowDigitalDropdown(false)}
                  >
                    {digitalMarketingBlogs.map((blog) => (
                      <li key={blog._id}>
                        <Link href={`/blog/${blog._id}`}
                          onClick={() => {
                            setMenuOpen(false);
                            setShowDigitalDropdown(false);
                          }}
                        >
                          {blog.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Back Office Services Dropdown */}
              <div
                className="dropdown"
                onMouseEnter={() => setShowBackOfficeDropdown(true)}
                onMouseLeave={() => setShowBackOfficeDropdown(false)}
              >
                <Link href="/backOfficeServices">
                  <li>Back Office Services</li>
                </Link>

                {showBackOfficeDropdown && backOfficeBlogs.length > 0 && (
                  <ul
                    className="dropdown-menu"
                    onMouseEnter={() => setShowBackOfficeDropdown(true)}
                    onMouseLeave={() => setShowBackOfficeDropdown(false)}
                  >
                    {backOfficeBlogs.map((blog) => (
                      <li key={blog._id}>
                        <Link href={`/blog/${blog._id}`}
                          onClick={() => {
                            setMenuOpen(false);
                            setShowBackOfficeDropdown(false);
                          }}
                        >
                          {blog.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Link href="/amazonServices" onClick={() => setMenuOpen(false)}>
                <li>Amazon Service</li>
              </Link>

              {/* Development Dropdown */}
              <div
                className="dropdown"
                onMouseEnter={() => setShowDevelopmentDropdown(true)}
                onMouseLeave={() => setShowDevelopmentDropdown(false)}
              >
                <li className="cursor-pointer">Development</li>

                {showDevelopmentDropdown && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        href="/webdevelopment"
                        onClick={() => {
                          setMenuOpen(false);
                          setShowDevelopmentDropdown(false);
                        }}
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/appdevelopment"
                        onClick={() => {
                          setMenuOpen(false);
                          setShowDevelopmentDropdown(false);
                        }}
                      >
                        App Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/machine-learning-and-ai-solutions"
                        onClick={() => {
                          setMenuOpen(false);
                          setShowDevelopmentDropdown(false);
                        }}
                      >
                        Machine Learning & AI
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* About Dropdown */}
              <div
                className="dropdown"
                onMouseEnter={() => setShowAboutDropdown(true)}
                onMouseLeave={() => setShowAboutDropdown(false)}
              >
                <li className="cursor-pointer">About Us</li>

                {showAboutDropdown && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        href="/about"
                        onClick={() => {
                          setMenuOpen(false);
                          setShowAboutDropdown(false);
                        }}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        onClick={() => {
                          setMenuOpen(false);
                          setShowAboutDropdown(false);
                        }}
                      >
                        Career With Us
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <Link
                href="/contact-us"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <li>Contact Us</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/admin/products" onClick={() => setMenuOpen(false)}>
                <li>Add Products</li>
              </Link>
              <Link href="/admin/categories" onClick={() => setMenuOpen(false)}>
                <li>Category</li>
              </Link>
              <Link href="/admin/contact-info" onClick={() => setMenuOpen(false)}>
                <li>Contact Info</li>
              </Link>
              <Link href="/admin/blogs" onClick={() => setMenuOpen(false)}>
                <li>Blogs</li>
              </Link>
              <Link href="/admin/review" onClick={() => setMenuOpen(false)}>
                <li>Review</li>
              </Link>
              <li style={{ cursor: "pointer" }} onClick={handleLogout}>
                Log out
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
