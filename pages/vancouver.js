import { Grid, Container, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Banner from '../public/areas/area2.webp'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import VancouverLoc from '../public/vancouver/vancouver.webp'
import Image from 'next/legacy/image'
import { Different, Locations, FaqAndForm, CertificationSlider } from '../sections/sections'
import Link from 'next/link'

const Vancouver = () => {

  const makeDiff = ["Licensed technicians.", "We give competitor price match guarantee", "We service all major brands and areas.", "We give you 24*7*365 days of assistance", "We have over 2 decades of work experience.", "We assure comfort."]

  const arrayFaq = [
    { id: "faq-1", que: "How do you maintain a heating and cooling system?", ans: "Here are a few tips on how you can maintain your home heating systems:.", list: ["Looking after your heating pump: Always schedule a tune-up before winter because there are chances that your heat pump might have got some damage during the last cooling season.", "Knowing your heating system's thermostat settings: Make sure that you always know three major thermostat settings-heating, cooling, and emergency heating.", "Cleaning the ducts: It is always recommended to check your heating system ducts every year. Duct cleaning is required in cases like pets, water damage, smoking, or reconstruction of your property."] },
    { id: "faq-2", que: "Can you combine heating and cooling system?", ans: "Yes, you can combine a cooling and heating system. Through this, you can save a lot of money and space with one unit. However, if you have existing systems, then you will be able to replace them with a new setup.", list: null },
    { id: "faq-3", que: "Should I leave my heat pump on all the time?", ans: "Heat pumps are an effective way to use electricity to heat your home during the winter. So, leaving them running day and night is not an economically feasible option. You should always switch off your heat pumps when you do not need them.", list: null },
    { id: "faq-4", que: "Can you use the same ducts for heating and cooling?", ans: "Yes, you can always use an add-on refrigerated cooling system as an add-on component to your ducted gas heating system. This allows you to run refrigerated air conditioning with the help of the same ducting and outlet systems.", list: null },
    { id: "faq-5", que: "How does geothermal heating and cooling work?", ans: "Geothermal heating works by moving temperature-conducting fluid through an underground loop of pipes beneath. This allows the fluid to collect the thermal energy which is deposited in the earth from the sun.", list: null },
    { id: "faq-6", que: "How does ductless heating and cooling work?", ans: "It works by using heat exchanger coils to move warm air from one location to another. During winter, the heat pump draws warm air from outside your home to increase temperatures inside. During the summer, the heat pump reverses the process, passing out warm air from your home.", list: null },
    { id: "faq-7", que: "How Much Does HVAC Installation Cost?", ans: "The cost to replace an HVAC system varies from $5,000 to $10,000, which comes to around $25 to $60 per square foot of coverage, depending on the brand and size. For a new installation, you might have to pay $1,500 to $12,500.", list: null },
    { id: "faq-8", que: "How Long Does HVAC Installation take?", ans: "Usually, it takes three to five days for installation.", list: null },
    { id: "faq-9", que: "	What Kinds of Warranties Come with My New HVAC Installation?", ans: "It has the following warranties:", list: ["HVAC Manufacturer Warranty.", "HVAC Extended Warranty.", "Homeowners Insurance.", "Home Warranty"] },
  ]

  const testimonial = [
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" },
    { id: "testimonial-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales suscipit elit, a laoreet neque porttitor sed. Sed dapibus, est eget pellentesque gravida, massa massa venenatis magna, at tempus quam turpis rhoncus leo. Sed sed libero enim. Vestibulum tristique tellus vel ultrices pretium.", customerName: "Wilson Trayer" }
  ]

  return (
    <>
      <Head>
        <title>Heating and Air Conditioning Services in Vancouver | Teressenheating</title>
        <meta name="description" content="In Vancouver, BC, we offer heating and air conditioning services to make sure you stay warm in the winter and cool during the summer. Contact us today !" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/vancouver/" />
      </Head>
      <script type="application/ld+json">
      {
        `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "How do you maintain a heating and cooling system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Looking after your heating pump: Always schedule a tune-up before winter because there are chances that your heat pump might have got some damage during the last cooling season.
        Knowing your heating system's thermostat settings: Make sure that you always know three major thermostat settings-heating, cooling, and emergency heating.
        Cleaning the ducts: It is always recommended to check your heating system ducts every year. Duct cleaning is required in cases like pets, water damage, smoking, or reconstruction of your property."
            }
          },{
            "@type": "Question",
            "name": "can you combine heating and cooling system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can combine a cooling and heating system. Through this, you can save a lot of money and space with one unit. However, if you have existing systems, then you will be able to replace them with a new setup."
            }
          },{
            "@type": "Question",
            "name": "Should I leave my heat pump on all the time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Heat pumps are an effective way to use electricity to heat your home during the winter. So, leaving them running day and night is not an economically feasible option. You should always switch off your heat pumps when you do not need them."
            }
          },{
            "@type": "Question",
            "name": "can you use the same ducts for heating and cooling?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can always use an add-on refrigerated cooling system as an add-on component to your ducted gas heating system. This allows you to run refrigerated air conditioning with the help of the same ducting and outlet systems."
            }
          },{
            "@type": "Question",
            "name": "How does geothermal heating and cooling works",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Geothermal heating works by moving temperature-conducting fluid through an underground loop of pipes beneath. This allows the fluid to collect the thermal energy which is deposited in the earth from the sun."
            }
          },{
            "@type": "Question",
            "name": "How does ductless heating and cooling works?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It works by using heat exchanger coils to move warm air from one location to another. During winter, the heat pump draws warm air from outside your home to increase temperatures inside. During the summer, the heat pump reverses the process, passing out warm air from your home."
            }
          },{
            "@type": "Question",
            "name": "How much Does HVAC installation Cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost to replace an HVAC system varies from $5,000 to $10,000, which comes to around $25 to $60 per square foot of coverage, depending on the brand and size. For a new installation, you might have to pay $1,500 to $12,500."
            }
          },{
            "@type": "Question",
            "name": "How long Does HVAC Installation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually, it takes three to five days for installation."
            }
          },{
            "@type": "Question",
            "name": "What kind of warranties come with my New HVAC installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It has the following warranties:
        
        HVAC Manufacturer Warranty.
        HVAC Extended Warranty.
        Homeowners Insurance.
        Home Warranty"
            }
          }]
        }`
      }
    </script>

    <script type="application/ld+json">
     {
       `{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Heating Services Vancouver",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Teressen Heating & Air Conditioning",
        "image": "https://teressenheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fvancouver.80604495.webp&w=1920&q=75",
        "@id": "https://teressenheating.ca/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fvancouver.80604495.webp&w=1920&q=75",
        "url": "https://teressenheating.ca/vancouver/",
        "telephone": "+1-604-363-6622",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2025 Willingdon Ave unit 900",
          "addressLocality": "Burnaby",
          "addressRegion": "BC",
          "postalCode": "V5C 0J3",
          "addressCountry": "CA"
        },
        "areaServed": {
          "@type": "City",
          "name": "Vancouver"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 49.265842,
          "longitude": -123.0035841
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"  
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=100088431184715",
          "https://twitter.com/BaymanShawqi",
          "https://www.pinterest.com.au/teressenheating/"
        ]
        }
      }`
     }
    </script>
      <main>
        <CommonBanner bg={Banner} title="24*7 Heating Services Vancouver" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image layout='responsive' src={VancouverLoc} alt="vancouver science world" title='vancouver science world' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Teressen&apos;s 24*7 heating services in Vancouver offer you a stress-free living</Typography>
                      <Typography className='para'>Teressen&apos;s heating and air conditioning services in Vancouver are probably one of the best services you will get in the Vancouver area. Installation and replacement for central <Link href="/heating-services/">home heating systems</Link>, installation, repairs, and tune-ups are one of the best things that can happen to our clients.</Typography>
                      <Typography className='para'>We provide <Link href="/furnace-inspection/">professional furnace installation</Link> from certified HVAC technicians near you, 24*7. We are the only HVAC suppliers in Vancouver you can easily count on. Our heating services in Vancouver are undoubtedly the best. With great services, quick assistance, and timely help you can always lead a happy life.</Typography>
                      <Box mt={3}>
                        <BlueFilledBtn btnlink="/contact-us/" btnTitle="Book An Appointment" navlink={true} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <Different title="What makes Teressen different?" titleVariant="h2" titleAlign="center" list={makeDiff} />
        <CertificationSlider />
        <Locations />
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  )
}

export default Vancouver