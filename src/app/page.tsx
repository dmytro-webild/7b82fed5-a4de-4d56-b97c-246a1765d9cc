"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "Programs",          id: "#programs"},
        {
          name: "Why Choose Us",          id: "#why-choose-us"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Gallery",          id: "#gallery"},
        {
          name: "Contact Us",          id: "#contact"},
      ]}
      brandName="Victorious Education Services"
      button={{
        text: "Enroll Now",        href: "#contact"}}
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogo
      logoText="Victorious Education Services"
      description="Building Discipline, Knowledge & Success\nProviding quality education for all age groups at affordable and flexible prices."
      buttons={[
        {
          text: "Enroll Now",          href: "#contact"},
        {
          text: "Contact Us",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/city-building_23-2148107101.jpg"
      imageAlt="Victorious Education Services school building and students"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="About Victorious Education Services"
      description="Victorious Education Services is a trusted educational center dedicated to teaching learners of all ages. We provide quality education, discipline, guidance, and personal growth in a safe and supportive environment. Our goal is to help every learner become responsible, confident, and successful in life."
      bulletPoints={[
        {
          title: "Quality Education Standards",          description: "Adhering to high academic benchmarks for comprehensive learning."},
        {
          title: "Personalized Guidance",          description: "Tailored support to meet individual student needs and foster potential."},
        {
          title: "Safe & Supportive Environment",          description: "A nurturing space where every learner feels secure to grow and thrive."},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EJXNFp1g43bPWHKz8F8ojVJjeD/uploaded-1779898036145-dd7ktgeu.png"
      imageAlt="Students participating in activities"
      mediaAnimation="opacity"
    />
  </div>

  <div id="programs" data-section="programs">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Early Childhood Learning",          description: "Engaging activities and foundational skills for our youngest learners.",          imageSrc: "http://img.b2bpic.net/free-photo/cute-girl-painting-with-bright-aquarelle-floor_23-2148037906.jpg",          imageAlt: "Toddlers learning in a colorful classroom"},
        {
          title: "Primary Education Support",          description: "Comprehensive academic assistance and enrichment for primary school students.",          imageSrc: "http://img.b2bpic.net/free-photo/they-always-everytinig-together_329181-8211.jpg",          imageAlt: "Primary school students studying"},
        {
          title: "Secondary Education Coaching",          description: "Specialized coaching and guidance for secondary students to excel academically.",          imageSrc: "http://img.b2bpic.net/free-photo/three-college-students-working-home-assignment-sitting-cafeteria-making-research-looking-required-information-internet-using-digital-tablet_273609-5794.jpg",          imageAlt: "Secondary school students in group study"},
        {
          title: "Adult Learning Programs",          description: "Flexible courses and training for adults seeking new skills or continued education.",          imageSrc: "http://img.b2bpic.net/free-photo/people-practicing-social-integration-workspace_23-2149405391.jpg",          imageAlt: "Adult students in a classroom discussion"},
        {
          title: "Discipline & Character Development",          description: "Fostering strong values, respect, and responsible behavior in all learners.",          imageSrc: "http://img.b2bpic.net/free-photo/female-teacher-helping-kids-with-their-medical-mask_23-2148925439.jpg",          imageAlt: "Students showing good behavior and respect"},
        {
          title: "Holiday and Vacation Classes",          description: "Engaging and educational programs during school breaks to keep minds active.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-mother-daughters-wrapping-christmas-presents_1098-22335.jpg",          imageAlt: "Children learning in holiday classes"},
      ]}
      title="Programs We Offer"
      description="Discover our diverse range of educational programs designed to foster holistic development and academic excellence for every age."
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Experienced Teachers",          description: "Our dedicated educators bring years of expertise and passion to the classroom.",          imageSrc: "http://img.b2bpic.net/free-photo/diverse-pupils-public-library-attending-video-conference-webinar-lesson_482257-118026.jpg",          imageAlt: "Experienced teacher interacting with students"},
        {
          title: "Affordable & Flexible Fees",          description: "Quality education accessible with pricing options designed for diverse family needs.",          imageSrc: "http://img.b2bpic.net/free-photo/piggy-bank-stack-book-concept-education-costs_93675-135509.jpg",          imageAlt: "Affordable education with a piggy bank and books"},
        {
          title: "Safe & Disciplined Environment",          description: "A secure and structured setting where students can learn and grow without distraction.",          imageSrc: "http://img.b2bpic.net/free-photo/diverse-adult-students-working-computer-classroom_74855-1766.jpg",          imageAlt: "Students in a disciplined classroom"},
        {
          title: "Friendly Learning Atmosphere",          description: "An inviting and collaborative space where students feel comfortable to ask, explore, and learn.",          imageSrc: "http://img.b2bpic.net/free-photo/elementary-students-receiving-support-from-tutor-working-homework_482257-118640.jpg",          imageAlt: "Happy students in a friendly classroom atmosphere"},
        {
          title: "Academic & Personal Growth",          description: "Focused on holistic development, enhancing both intellectual capabilities and character traits.",          imageSrc: "http://img.b2bpic.net/free-photo/international-day-education-cartoon-style_23-2151007416.jpg",          imageAlt: "Student showing academic progress"},
        {
          title: "Flexible Learning Support",          description: "Adaptive teaching methods and support to cater to individual learning styles and paces.",          imageSrc: "http://img.b2bpic.net/free-photo/friends-learning-study-group_23-2149257176.jpg",          imageAlt: "Flexible learning options"},
      ]}
      title="Why Parents Choose Victorious"
      description="We are committed to providing an exceptional learning journey that nurtures every student's potential for success and growth."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Mrs. Nalubega",          handle: "Parent of John",          testimonial: "Last year my son was a troublemaker and was suspended. But now he is the sweetest boy. Victorious Education Services taught him discipline and changed his behavior completely.",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-holding-book-close-up_23-2148396302.jpg",          imageAlt: "Photo of Mrs. Nalubega"},
        {
          id: "2",          name: "David S.",          handle: "Student",          testimonial: "Victorious is the best. It teaches my child how to be disciplined.",          imageSrc: "http://img.b2bpic.net/free-photo/young-adult-using-her-digital-tablet_23-2149064545.jpg",          imageAlt: "Photo of David S."},
        {
          id: "3",          name: "Mr. Okello",          handle: "Parent of Sarah",          testimonial: "My daughter's grades have improved dramatically since joining Victorious. Their personalized approach truly makes a difference.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-kid-woman-taking-selfie_23-2149514084.jpg",          imageAlt: "Photo of Mr. Okello"},
        {
          id: "4",          name: "Grace M.",          handle: "Student",          testimonial: "The teachers at Victorious make learning fun and easy. I feel more confident in school now!",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-blonde-reading-book-sunlight_23-2148208802.jpg",          imageAlt: "Photo of Grace M."},
        {
          id: "5",          name: "Ms. Kagimu",          handle: "Parent of Emily",          testimonial: "I highly recommend Victorious Education Services. They truly care about each child's success and well-being.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-plus-size-woman-posing-studio_23-2150738632.jpg",          imageAlt: "Photo of Ms. Kagimu"},
      ]}
      title="Hear From Our Valued Community"
      description="Authentic stories from parents and students who have experienced the transformative power of Victorious Education Services."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "gallery-1",          name: "School Building Exterior",          price: "",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EJXNFp1g43bPWHKz8F8ojVJjeD/uploaded-1779898036145-pswlk7e3.png",          imageAlt: "Victorious Education Services school building"},
        {
          id: "gallery-2",          name: "Graduation Ceremony Tents",          price: "",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EJXNFp1g43bPWHKz8F8ojVJjeD/uploaded-1779898036145-6anhl3f6.png",          imageAlt: "Graduation ceremony setup with tents"},
        {
          id: "gallery-3",          name: "Group Student Photo",          price: "",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EJXNFp1g43bPWHKz8F8ojVJjeD/uploaded-1779898036145-a62ptt8v.png",          imageAlt: "Group photo of happy students"},
        {
          id: "gallery-4",          name: "Students Learning Actively",          price: "",          imageSrc: "http://img.b2bpic.net/free-photo/female-teacher-teaching-kids-about-disinfecting_23-2148925433.jpg",          imageAlt: "Students engaged in a classroom activity"},
        {
          id: "gallery-5",          name: "Parents Attending Event",          price: "",          imageSrc: "http://img.b2bpic.net/free-photo/high-school-student-wearing-masks-their-way-home_53876-96187.jpg",          imageAlt: "Parents attending a school event"},
        {
          id: "gallery-6",          name: "School Campus Overview",          price: "",          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-residence-bukovinian-dalmatian-metropolitans-chernivtsi-national-university-chernivtsi-touristic-destination-western-ukraine_231208-45.jpg",          imageAlt: "Aerial view of Victorious Education Services campus"},
      ]}
      title="Our Campus Life & Achievements"
      description="Explore moments of learning, growth, and celebration within the Victorious Education Services community, showcasing our vibrant environment."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      tag="Connect With Us"
      title="Get in Touch Today"
      description="We're here to answer all your questions and help you take the next step towards educational success. Reach out to us directly or fill out our contact form below.\n\nPhone Number: 039 2176077\nAddress: No. 15 Namirembe Rd, Kampala\n\nWhatsApp: +256 39 2176077 (https://wa.me/256392176077)\nGoogle Maps: https://maps.app.goo.gl/YourGoogleMapsLink"
      inputPlaceholder="Enter your email"
      buttonText="Send Message"
      termsText="By sending a message, you agree to our privacy policy and terms of service."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Victorious Education Services"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
