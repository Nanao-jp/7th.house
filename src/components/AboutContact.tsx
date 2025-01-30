import { motion } from 'framer-motion';
import Section from './ui/Section';
import ContactForm from './ContactForm';
import CompanyInfo from './CompanyInfo';

const AboutContact = () => {
  return (
    <Section
      id="contact"
      className="py-20"
      disableDefaultBackground
      fullWidth
    >
      <div className="relative">
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              お問い合わせ
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8">
            <ContactForm />
            <CompanyInfo />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutContact; 