import { Phone, Mail, MapPin, Star, Home, Users, TrendingUp, Search, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-serif font-bold text-slate-800">MARCI METZGER</div>
              <div className="text-lg font-light text-slate-600 italic">Homes</div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#listings" className="text-slate-600 hover:text-blue-600 transition-colors">
                Listings
              </a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <Image
            src="/background1.jpg"
            alt="Hero background"
            fill
            className="absolute inset-0 w-full h-full object-cover z-0"
            priority
          />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-6">
              <p className="text-blue-200 text-lg font-medium tracking-wide uppercase">
                Marci Metzger • The Ridge Realty Group
              </p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">
              PAHRUMP
              <span className="block text-blue-200">REALTOR</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg bg-black/30 rounded px-4 py-2 inline-block">
              Your trusted real estate partner with nearly three decades of experience in the Pahrump Valley
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Call 209-918-6086
              </Button>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Listings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Marci Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">MARCI METZGER</h2>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="ml-3 text-slate-600 font-medium">Realtor for Nearly 3 Decades!</span>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                With almost 30 years of experience in the Pahrump Valley real estate market, I bring unmatched expertise
                and dedication to every transaction. My commitment to excellence has made me one of the most trusted
                realtors in the region.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">29+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-600">Homes Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-slate-600">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <Image
                    src="/marci.webp"
                    alt="Marci Metzger - Professional Realtor"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">OUR SERVICES</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive real estate services tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Residential Sales</h3>
              <p className="text-slate-600 leading-relaxed">
                Expert guidance through buying and selling residential properties with personalized attention to detail.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Market Analysis</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive market evaluations and pricing strategies to maximize your property's value.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Buyer Representation</h3>
              <p className="text-slate-600 leading-relaxed">
                Dedicated advocacy for buyers with access to exclusive listings and negotiation expertise.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Property Search</h3>
              <p className="text-slate-600 leading-relaxed">
                Customized property searches matching your specific criteria and lifestyle preferences.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Investment Properties</h3>
              <p className="text-slate-600 leading-relaxed">
                Strategic guidance for real estate investments with market insights and ROI analysis.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Relocation Services</h3>
              <p className="text-slate-600 leading-relaxed">
                Complete relocation support including area information, schools, and community resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">GET IT SOLD</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proven results with personalized service. I don&#39;t just list your home—I get it sold.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Top Residential Sales Last 5 Years</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We helped nearly 90 clients in 2023, and closed 28.3 million in sales! Our team works hard every day to
                grow and learn, so that we may continue to excel in our markets. Our clients deserve our best, & we want
                to make sure our best is better every year.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">$28.3M</div>
                  <div className="text-sm text-slate-600">Sales Volume 2023</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">90</div>
                  <div className="text-sm text-slate-600">Clients Helped</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/sample1.webp"
                alt="Beautiful modern kitchen interior"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                width={640}
                height={320}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src="/sample2.webp"
                alt="Luxury home with pool at sunset"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                width={640}
                height={320}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Don't Just List It...</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                GET IT SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible
                buyer, getting you top dollar for your home.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Professional photography and virtual tours
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Strategic pricing and market analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Comprehensive marketing across all platforms
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Expert negotiation and closing support
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Guide to Buyers</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists,
                contractors on speed dial, &amp; more!
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Home className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">First-Time Buyer Support</h4>
                    <p className="text-slate-600 text-sm">Complete guidance through your first home purchase</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Market Analysis</h4>
                    <p className="text-slate-600 text-sm">Detailed insights to make informed decisions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Contractor Network</h4>
                    <p className="text-slate-600 text-sm">Trusted professionals for inspections and repairs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/sample3.webp"
                alt="House keys with red house keychain"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                width={640}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Search Section */}
      <section id="listings" className="py-20 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700"></div>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/pahrump-area-home.jpg"
            alt="Pahrump neighborhood aerial view"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">FIND YOUR DREAM HOME</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Search through our extensive listings in the Pahrump Valley and surrounding areas
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Search Listings</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pahrump">Pahrump</SelectItem>
                    <SelectItem value="las-vegas">Las Vegas</SelectItem>
                    <SelectItem value="henderson">Henderson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single-family">Single Family</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Bedrooms</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Number" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Bathrooms</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Number" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Min Price</label>
                <Input placeholder="$0" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Max Price</label>
                <Input placeholder="No Max" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Sort by</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Price: Low to High" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
              <Search className="w-5 h-5 mr-2" />
              Search Now
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">PHOTO GALLERY</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore some of the beautiful properties I've helped clients buy and sell in the Pahrump Valley
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/gallery1.webp"
                alt="Luxury desert home with mountain views"
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">Desert Luxury Home</h4>
                  <p className="text-sm">Pahrump Valley</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/gallery2.webp"
                alt="Modern luxury kitchen with marble countertops"
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">Modern Kitchen</h4>
                  <p className="text-sm">Recently Sold</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/gallery3.webp"
                alt="Traditional Pahrump home with desert landscaping"
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">Desert Oasis</h4>
                  <p className="text-sm">Family Home</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/gallery4.webp"
                alt="Luxury home exterior with swimming pool"
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">Pool Paradise</h4>
                  <p className="text-sm">Luxury Living</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/gallery5.webp"
                alt="Home with stunning mountain views"
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">Mountain Views</h4>
                  <p className="text-sm">Scenic Location</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/gallery6.webp"
                alt="Cozy family home with front yard"
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">Family Haven</h4>
                  <p className="text-sm">Perfect Starter Home</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">View All Properties</Button>
          </div>
        </div>
      </section>

      {/* Call or Visit Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">CALL OR VISIT</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get in touch today to discuss your real estate needs. I&#39;m here to help with personalized service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Call Section */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Call Me Today</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Ready to discuss your real estate goals? Give me a call and let's talk about how I can help you achieve
                them.
              </p>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">209-918-6086</div>
                <p className="text-slate-500 text-sm">Available 7 days a week</p>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Visit Section */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Visit My Office</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Prefer to meet in person? Visit me at The Ridge Realty Group office in Pahrump for a consultation.
              </p>
              <div className="space-y-4">
                <div className="text-lg font-semibold text-slate-800">The Ridge Realty Group</div>
                <div className="text-slate-600">
                  <div>Pahrump, Nevada</div>
                  <div className="text-sm text-slate-500 mt-2">Call for appointment</div>
                </div>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full bg-transparent"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          {/* WhatsApp and Email Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* WhatsApp Button */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">WhatsApp</h4>
              <p className="text-slate-600 text-sm mb-4">Quick messages and instant communication</p>
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message on WhatsApp
              </Button>
            </div>

            {/* Email Button */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Email</h4>
              <p className="text-slate-600 text-sm mb-4">Send detailed inquiries and documents</p>
              <Button className="bg-blue-500 hover:bg-blue-600 w-full">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-16 text-center">
            <div className="bg-blue-600 text-white rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Why Choose Marci Metzger?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">29+</div>
                  <div className="text-blue-100">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Homes Sold</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">MARCI METZGER</h3>
              <p className="text-slate-400 mb-4">
                Your trusted Pahrump Valley real estate professional with nearly three decades of experience.
              </p>
              <div className="flex items-center text-slate-400">
                <MapPin className="w-4 h-4 mr-2" />
                Pahrump, Nevada
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Residential Sales</li>
                <li>Buyer Representation</li>
                <li>Market Analysis</li>
                <li>Property Valuation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  209-918-6086
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact via phone
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-8 mb-4 md:mb-0">
                <img src="/ridge-realty-group-logo.png" alt="Ridge Realty Group" className="h-10" width={80} height={40} />
                <img src="/equal-housing-opportunity-logo.png" alt="Equal Housing Opportunity" className="h-10" width={80} height={40} />
                <img src="/mls-logo.png" alt="MLS" className="h-10" width={80} height={40} />
              </div>
              <p className="text-slate-400 text-sm">© 2024 Marci Metzger. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
