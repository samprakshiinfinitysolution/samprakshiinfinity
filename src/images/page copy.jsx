import React from "react";
import "./AmazonService.css";
import { Link } from "react-router-dom";
import firstImg from "../../images/close-up-delivery-guy-car.jpg";
import secondImg from "../../images/modern-woman-using-credit-card-online-payment-close-up.jpg";
import { MdOutlineSavedSearch } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiMailStarLine } from "react-icons/ri";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { TbChecklist } from "react-icons/tb";
import { TbBulb } from "react-icons/tb";
import { Helmet } from "react-helmet";

function AmazonService() {
    return (
        <div className="amazonService">
            <Helmet>
  <title>Amazon Product Listing Services | Optimize Your Store with Samprakshi Infinity Solution</title>
  <meta
    name="description"
    content="Maximize your Amazon sales with Samprakshi Infinity Solution's expert product listing, SEO-driven keyword research, and brand optimization services tailored for growth."
  />
  <meta
    name="keywords"
    content="Amazon listing services, Amazon SEO, product listing optimization, Amazon store management, Samprakshi Infinity Solution"
  />
  <meta name="author" content="Samprakshi Infinity Solution Team" />
  <link rel="canonical" href="https://www.samprakshiinfinitysolution.com/#/amazonServices" />
</Helmet>
            <div className="amazonService-background">
                <header
                    id="profile-header"
                    style={{ height: "165px" }}
                ></header>
            </div>

            <div className="amazonService-container">
                <div className="amazonService-head-box">
                    <h2>
                        "BEST PLACE TO GET BOSS (Back Office Support Services)
                        TO TAKE CARE OF YOUR DATA."{" "}
                    </h2>
                    <Link to="/contactUs">
                        <div className="amazonService-button">Get Quote</div>
                    </Link>
                </div>
                <div className="amazonService-body">
                    <div className="amazonService-heading">
                        <h3>AMAZON PRODUCT LISTING</h3>
                        <p className="amazonService-body-p">
                            Samprakshi Infinity Solution team of Amazon store management
                            accurately design the list of keywords that are
                            essential to fetch the traffic on your product
                            offerings. Also, this practice helps in driving the
                            traffic towards conversions. Picking and deploying
                            the right keywords is the foundation of your store’s
                            growth, and that is why we conduct SEO based keyword
                            analysis specially tailored for your Amazon products
                            offering. Proper keyword selection and insertion
                            ease the journey of potential shoppers searching for
                            the kind of products that you offer on Amazon. We
                            also ensure that our professional copywriters
                            integrate these keywords naturally to make your
                            store optimized as per the SERP norms.{" "}
                        </p>
                    </div>
                </div>
                <div className="amazonService-sections">
                    <div className="amazonService-section-container">
                        <div className="amazonService-section">
                            <div className="amazonService-section-img">
                                <img
                                    className="amazonService-section-img-tag"
                                    src={firstImg}
                                />
                            </div>
                            <div className="amazonService-section-content">
                                <h4>
                                    Customized Keyword Research dedicated to
                                    your Amazon Product Offerings
                                </h4>
                                <p>
                                    Are you an Ecommerce entrepreneur managing
                                    an eStore? If yes, our ecommerce support
                                    services will entice your business. Our
                                    service basket includes ecommerce services
                                    like website development, product catalog
                                    management, product image optimization,
                                    product description, review generation, and
                                    product data entry services. we are well
                                    versed with several ecommerce platforms like
                                    BigCommerce, Magento, Shopify, WooCommerce,
                                    and 3DCart. Even we hold expertise in
                                    offering ecommerce admin support. If this
                                    influences you, connect with us and take the
                                    first step to fly high with your business.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="amazonService-section">
                            <div className="amazonService-section-content">
                                <h4>
                                    Strategic Amazon Brand Copywriting Content
                                </h4>
                                <p>
                                    Your Amazon product listing content requires
                                    a strategic approach as your content is the
                                    crucial parameter through which the users
                                    reach your page. We thoroughly understand
                                    your product offerings, identify your target
                                    audience. Not only this, but we also
                                    understand what they are actually looking
                                    for and how will they search the required
                                    product. After minutely analyzing the entire
                                    process, we write compelling content
                                    incorporating the most promising keywords,
                                    including the LSI keywords. We give special
                                    attention to deliver captivating
                                    keyword-oriented content, which includes
                                    clickable product title, easy-to-understand
                                    product features, and optimized product
                                    description with maximum keywords.
                                </p>
                            </div>
                            <div className="amazonService-section-img">
                                <img
                                    className="amazonService-section-img-tag"
                                    src={secondImg}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="amazonService-array-section">
                    <div className="amazonService-array">
                        <div className="amazonService-array-head">
                            <h2>
                                Array of Samprakshi Infinity Solution Product Listing and
                                Optimization Services
                            </h2>
                        </div>
                        <div className="amazonService-array-boxes">
                            <div className="amazonService-array-box ">
                                <MdOutlineSavedSearch size={60} />
                                <h3>Increased Visibility</h3>
                            </div>
                            <div className="amazonService-array-box">
                                <HiOutlineClipboardList size={60} />

                                <h3>Product Listing</h3>
                            </div>
                            <div className="amazonService-array-box">
                                <RiMailStarLine size={60} />
                                <h3>Designing brand message</h3>
                            </div>
                            <div className="amazonService-array-box">
                                <RiMailStarLine edSearch size={60} />

                                <h3>A+ content copywriting</h3>
                            </div>
                            <div className="amazonService-array-box">
                                <MdOutlineContentPasteSearch />
                                <h3>EBC Enhanced Brand Content</h3>
                            </div>
                            <div className="amazonService-array-box">
                                <TbBulb size={60} />

                                <h3>Product Photography</h3>
                            </div>
                            <div className="amazonService-array-box">
                                <TbChecklist size={60} />
                                <h3>Amazon listing optimization</h3>
                            </div>
                            <div className="amazonService-array-box">
                                <IoStorefrontOutline size={60} />

                                <h3>Amazon Store Growth</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AmazonService;
