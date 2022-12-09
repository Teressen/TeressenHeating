import { Grid, Container, Box, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Banner from '../public/areas/area2.webp'
import { BlueFilledBtn, CommonBanner } from '../components/components'
import NorthVancouverLoc from '../public/north-vancouver/North-Vancouver.webp'
import Image from 'next/legacy/image'
import { Different, Locations, FaqAndForm, CertificationSlider } from '../sections/sections'
import Link from 'next/link'

const NorthVancouver = () => {
  const makeDiff = ["We assure 24*7*365 days of service.", "We have years of experience", "We have a certified team of experts.", "We service all major brands.", "We assure you of the best competitor price match."]

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
        <title>Air Conditioning Services in North Vancouver | Teressenheating</title>
        <meta name="description" content="Teressen Heating Canada offers comprehensive heating, ventilation and air conditioning services to commercial and residential clients in North Vancouver." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/north-vancouver/" />
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
      <main>
        <CommonBanner bg={Banner} title="Heating and air conditioning North Vancouver" color="#fff" variant="h1" />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Image layout='responsive' src={NorthVancouverLoc} alt="North Vancouver Mountains" title='North Vancouver Mountains' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h2'>Teressen&apos;s heating and air conditioning services are now in North Vancouver</Typography>
                      <Typography className='para'>To find the best installation and replacement services in North Vancouver, you need expert guidance. Teressen&apos;s best heating and air conditioning services, repairs, and tune-ups in North Vancouver are indeed one of the best services. We have certified experts who look after everything. They also make sure that you live a stress-free life. So, when you have <Link href="/boilers/">installation, repair, and maintenance</Link> related issues, we are just a call away. We will serve you with the best installation, maintenance, and repairing services. Our clients have also reviewed us as one of the <Link href="/air-conditioning-service/">best air conditioning services</Link> in North Vancouver.</Typography>
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
        <Different title="Why Teressen's heating and cooling services are the best?" titleVariant="h2" titleAlign="center" list={makeDiff} />
        <CertificationSlider />
        <Locations />
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Typography className='para'> So, whenever you have any issues related to installation, maintenance, and repair, you always need an expert solution for this. Do not forget, we are just a call away for expert guidance.</Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
        <FaqAndForm faq={true} faqBlackTitle="Heating & Cooling" faqBlueTitle="FAQ" faqtitleAlign="center" faqVariant="h2" faqArr={arrayFaq} form={true} formBlackTitle="Get a Free" formBlueTitle="Quote" formVariant="h2" formtitleAlign="center" />
      </main>
    </>
  )
}

export default NorthVancouver