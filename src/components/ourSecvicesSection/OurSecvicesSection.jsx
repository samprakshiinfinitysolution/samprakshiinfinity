import React from 'react'
import "./OurSecvicesSection.css"
import { Helmet } from 'react-helmet'
function OurSecvicesSection() {
  return (
    <div className='ourServicesSection'>
        <Helmet>
        <title>Our Services | Infinity Solution</title>
        <meta 
          name="description" 
          content="Discover the services offered by Infinity Solution. We provide customized digital solutions to take your business from scratch to success and beyond." 
        />
        <meta 
          name="keywords" 
          content="Infinity Solution services, web development, IT solutions, mobile app development, AI services, digital transformation" 
        />
        <link rel="canonical" href="https://www.infinitysolution.org/services" />

        {/* Open Graph tags for Facebook */}
        <meta property="og:title" content="Our Services - Infinity Solution" />
        <meta property="og:description" content="Explore tailored services for your business growth offered by Infinity Solution." />
        <meta property="og:url" content="https://www.infinitysolution.org/services" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - Infinity Solution" />
        <meta name="twitter:description" content="Explore tailored services for your business growth offered by Infinity Solution." />
      </Helmet>
        <div className='ourServicesSection-head'>
            <h1>Our Services</h1>
        </div>
        <div className='ourServicesSection-para'>
        We take creative leaps and offer tailored solutions for the growth of your digital products. From scratch to success and beyond.
        </div>
        <div className='ourServicesSection-body'>
            <div className='ourServicesSection-card'>
                <div className='ourServicesSection-card-number'>(02)</div>
                <h2>Service 1</h2>
            </div>
            <div className='ourServicesSection-card'>
            <div className='ourServicesSection-card-number'>(02)</div>
            <h2>Service 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, diam vel dictum vestibulum, ipsum lectus faucibus quam, vel pharetra nisi ipsum at enim.</p>
            </div>
        </div>
    </div>
  )
}

export default OurSecvicesSection