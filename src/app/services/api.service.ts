import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { about_info, services } from '../interfaces/interfaces';
import { authorities } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "https://csquared-cms-api-32sagkwj6q-uc.a.run.app/";


  fiberservices: services[] = [
    {
      image: './assets/services/service-images/LeasedCapacity.jpg', title: 'Leased Capacity', subtitle: 'High capacity, fiber circuit adaptable to various needs', description: "CSquared's Leased Capacity interconnects business  sites and locations with unrivaled uptime and uninterrupted service. Our robust metro-Fiber network connects you to a dedicated fiber link with high data processing speeds. Unlock your team's full productivity potential with CSquared’s Leased Capacity.",
      bestfit: ['An efficient ISP core network connection', 'A high availability, reliable connection to base stations', 'High capacity fiber circuits that seamlessly connect your branches to your headquarters'],
      features: ['Full Redundancy', 'Flexible Bandwidth Options', 'Extensive Coverage', 'Low Latency', '24/7/365 Support', 'Dedicated Account Management'],
      benefits: [{ heading: 'Full redundancy', description: 'With sites deployed in a ring topology, our network has high availability and redundancy. This ensures maximum uptime leading to optimum productivity for your business.' }, { heading: 'Flexible Bandwidth Options', description: 'Our network offer scalable bandwidth options to suit your business needs' }, { heading: 'Extensive Coverage', description: 'Our 5000+KM footprint across Kenya, Uganda, Ghana, Liberia, DRC and Togo ensures that you are adequately covered and have access to a reliable and efficient network. Whether you’re looking for Metro or intercity connectivity, CSquared has you covered.' }, { heading: 'Low Latency', description: 'Our network infrastructure is built on an end to end fiber Infrastructure, optimized to ensure fast access and low latency for your mission critical applications' }, { heading: '24/7/365 NOC', description: 'Our team of experienced network engineers is well equipped and provides 24 hours monitoring and support to ensure you have a seamless experience with CSquared’s network infrastructure and services' }, { heading: 'Dedicated Account Management', description: 'CSquared has technical specialists on the ground who are equipped to walk you through our products and advise on the best product fit for your business.' }],
      support: '',
      logo:'/assets/services/leased-capacity.svg',
      contact: 'For more  information on our fiber solutions, visit http://www.csquared.com/leasedcapacity or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
      brochure: './assets/csquared-brochure.pdf'
    },

    {
      image: './assets/services/service-images/Portfiber.jpg', title: 'Port Fiber', subtitle: 'High quality broadband via open access shared infrastructure', description: "CSquared's Port Fiber solution offers high-quality, affordable broadband connectivity across our extensive metro fiber network. Our Port Fiber solution is a great fit for businesses that are looking for lightning-fast internet access with managed Ethernet.Revolutionize the way you connect and unleash your true potential.",
      bestfit: ['An efficient, reliable and fast broadband connectivity ', 'Affordable pricing', 'Low capacity '],
      features: ['SLA of 95% ', 'Automated ordering process', 'Simplified billing process', 'Scalable Solutions', 'Proactive service monitoring', 'Secure reliable FTTX solution'],
      benefits: [{ heading: 'Affordable', description: 'Port Fiber uses a cost effective monthly pricing based on bandwidth. With Port Fiber, users enjoy flexible bandwidth options ranging from 2 Mbps to 25 Mbps ' }, { heading: 'Reliability', description: 'Port fiber provides reliable and resilient services that are proactively monitored to provide optimum uptime.' }, { heading: 'Variety', description: 'Port fiber offers a variety of packages tailored to every business’ needs and budget with an extensive coverage' }, { heading: 'Low Latency Solution', description: 'Port Fiber offers low latency solution built on an end to end fiber infrastructure' }],
      support: 'CSquared has technical specialists on the ground who are equipped to walk you through our products and advise on the best product fit for your business.',
      logo:'/assets/services/port-fibersvg.svg',
      contact: 'For more information on our dark fiber solutions, visit http://www.csquared.com/portfiber or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
      brochure: './assets/csquared-PORT-FIBER.pdf'
    },
    {
      image: './assets/services/service-images/Fiberopticnetwork.jpg', title: 'Fiber To The Home (FTTH)', subtitle: 'High quality internet connectivity with reliable speeds', description: "Our wholesale FTTx solution delivers top-tier fiber connectivity to residential homes, apartments, and small offices. With its exceptional quality, affordable pricing, and scalable capacity, it's a perfect fit for anyone seeking efficient, reliable, and lightning-fast broadband connectivity. Experience seamless connectivity.",
      bestfit: ['An efficient, reliable and fast broadband connectivity', 'Affordable pricing', 'Scalable capacity depending on ones desired utilization'],
      features: ['WiFi enabled router/ ONU', 'One Time installation', 'Automated ordering process', 'Simplified billing process', 'Scalable Solutions', 'Proactive service monitoring', 'Secure reliable FTTH solution'],
      benefits: [{ heading: 'Affordable', description: 'FTTH is a relatively affordable product targeted for a residential/ household A low cost solution that enables the provisioning of Triple play services (Internet, Television and Telephone services) as well as the “New Normal”, work from home (WFH) growing requirement' }, { heading: 'Reliability', description: 'FTTH provides reliable and resilient services that are proactively monitored to provide optimum uptime.' }, { heading: 'Variety', description: 'CSquared’s infrastructure is a shared metro fiber network, the key advantage here is the fact that once the infrastructure has been deployed  one  has the liberty to approach NOT one but any ISP/MNO of their preference to provide service to them, without having to do additional installation/ civil works.' }, { heading: 'Low Latency Solution', description: 'FTTH offers low latency solution built on an end to end fiber infrastructure' }],
      support: 'CSquared has technical specialists on the ground who are equipped to walk you through our products and advise on the best product fit for your business.',
      logo:'/assets/services/ftth.svg',
      contact: 'For more information on our dark fiber solutions, visit http://www.csquared.com/FTTH or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
      brochure: './assets/csquared-FTTH.pdf'
    },

    {
      image: './assets/services/service-images/IPTransit.jpg', title: 'IP Transit', subtitle: 'IP Transit connectivity on our international Equiano Cable into other IXPs and other destinations', description: "CSquared's IP Transit solution seamlessly bridges the gap between West Africa and Europe, providing unparalleled connectivity for businesses. We harness the power of the Equiano subsea cable to provide carrier-grade IP connectivity, helping you connect to, and access global internet content at lightning-fast speeds. Connect with confidence, connect with CSquared.", bestfit: ['Connection to a high quality and efficient network that connects you to other markets', 'Traffic protection with minimal disruptions.'],
      features: ['Low latency', 'Simplified Capacity Allocation', 'Automated ordering process', 'Simplified billing process', 'Scalable Solutions', 'Proactive Services Monitoring', 'Secure Reliable Services', '24/7/365 Support'],
      benefits: [{ heading: 'Global Connectivity', description: 'With CSquared’s IP Transit, you can easily connect to the global internet and seamlessly engage or access regional and international organizations' }, { heading: 'Scalable activation', description: 'Our IP Transit allows you to quickly scale your bandwidth and have faster connectivity' }, { heading: 'Flexibility', description: 'CSquared’s IP Transit helps you to easily upgrade your range of Internet bandwidth accesses up to 100 Gbps' }, { heading: 'Reliability', description: 'Our IP Transit solution has fully redundant hardware and transmission systems to ensure that you have the highest QoS.' }, { heading: 'Support', description: 'Our team is fully equipped to provide you with a 24h, 365 days support service' }],
      support: 'CSquared has technical specialists on the ground who are equipped to walk you through our products and advise on the best product fit for your business.',
      logo:'/assets/services/iptransit.svg',
      contact: 'For more information on our dark fiber solutions, visit http://www.csquared.com/iptransit or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
      brochure: './assets/csquared-IP-TRANSIT.pdf'
    },

    {
      image: 'https://media.istockphoto.com/id/1313415001/photo/a-black-male-server-room-technician-working-at-business-reopening.jpg?b=1&s=170667a&w=0&k=20&c=zK_Uh9Z6bSbRB1bgN7_gEpH9U8j3O6FuDbhO5HnWWqM=', title: 'Fiber Backbone Service', subtitle: 'Open access wholesale infrastructure', description: "Our high-capacity open access fiber backbone service connects cities and metros across Africa with scalable capacities ranging from 1Gb to 100G+. Ideal for MNOs, ISPs, and data centers, CSquared’s backbone efficiently handles backhauling traffic, distributes capacity nationwide, and facilitates interconnections between data centers, hub sites, and base stations. Connect to an unrivaled high speed network.", bestfit: ['Small and medium enterprises (SMEs) located within proximity of each other.'],
      features: ['Bandwidth from 1G to 100G+', 'MRC or IRU billing options', 'Flexible Traffic Engineering', 'DWDM based solution', 'Proactive Monitoring'],
      benefits: [{ heading: 'Full redundancy', description: 'With sites deployed in a ring topology, our network has high availability and redundancy. This ensures maximum uptime leading to optimum productivity for your business.' }, { heading: 'Wider reach', description: 'Fiber optic can cover great distances with highest bandwidth for most means of communication. Fiber optics can transit large volumes of data, making it suitable for telecommunication rooms.' }, { heading: 'Durability', description: 'Fiber network backbone allows users to have fewer cables and repeaters, requiring the least amount of maintenance and power.' }, { heading: 'Consistency', description: 'Fiber backbone network allows users to link different devices such as CCTV, AV phones, internet and access controls, providing versatile cabling solutions.' }, { heading: 'Excellent Service Support -  24/7 @ 365 NOC', description: 'Our team of experienced network engineers is well equipped and provides 24 hours monitoring and support to ensure you have a seamless experience with CSquared’s network infrastructure and services' }, { heading: 'Dedicated Account Management', description: 'CSquared has technical specialists on the ground who are equipped to walk you through our products and advise on the best product fit for your business.' }],
      support: '',
      logo:'/assets/services/backbone.svg',
      contact: 'For more  information on our fiber solutions, visit http://www.csquared.com/leasedcapacity or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
      brochure: './assets/csquared-brochure.pdf'
    },

    {
      image: './assets/services/service-images/WifiHotspot.jpg', title: 'WI-FI Hotspot', subtitle: 'IP Transit connectivity on our international Equiano Cable into other IXPs and other destinations', description: "CSquared’s WI-FI Hotspot solution gives ISPs access to a wholesale public Wi-Fi network that is both affordable and incredibly convenient. Our cutting-edge technology  ensures seamless browsing in public spaces such as malls, hostels, universities, and business parks, revolutionizing internet connectivity on the move. Our WI-FI Hotspot is ideal for ISPs  who are looking to expand their services and deliver unparalleled connectivity and reliability to users. Experience the future of wireless connectivity today.", bestfit: ['Provide connectivity to users on the go in public places such as Malls, Hostels, Universities, Business  parks and Courtyards'],
      features: ['Speeds of up to 2mbps optimized for video streaming', '250 concurrent sessions per AP', 'Wide coverage', 'Seamless onboarding process ', 'Proactive service monitoring'],
      benefits: [{ heading: 'Affordable', description: 'Low cost service targeted at mobile users on the go. A variety of packages like daily, weekly and monthly bundles can be availed.' }, { heading: 'Reliability', description: 'All CSquared Wi-Fi hotspots are backhauled on CSquared robust metro fiber network that is fully redundant' }, { heading: 'Wide coverage', description: 'CSquared boasts of an extensively wide coverage, with over 200 hotspots deployed across the greater Kampala' }, { heading: 'Low  Latency Solution', description: 'CSquared’s Wi-Fi Hotspot offers low latency solution backhauled on an end to end fiber infrastructure' }],
      support: 'CSquared has technical specialists on the ground who are equipped to walk you through our products and advise on the best product fit for your business.',
      logo:'/assets/services/hotspot.svg',
      contact: 'For more information on our Wi-Fi Hotspot solution, visit http://www.csquared.com/portfiber or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
      brochure: './assets/csquared-brochure.pdf'
    },

    {
      image: './assets/services/service-images/Wi-Fi.jpg', title: 'Fixed Wi-Fi', subtitle: 'IP Transit connectivity on our international Equiano Cable into other IXPs and other destinations', description: "Our innovative point-to-multipoint wireless solution  provides lightning-fast high-speed wireless connectivity that seamlessly meets your capacity requirements. Designed specifically for SMEs and Enterprises, CSquared’s Fixed Wi-Fi solution has an exceptional blend of affordability, efficiency, and unwavering reliability. Tap into superior  wireless connectivity today.", bestfit: ['An efficient, reliable and fast wireless connectivity', 'Affordable pricing', 'Low Capacity'],
      features: ['Speeds of up to 10mbps ', 'Wide coverage', 'Quick delivery of service', 'Seamless onboarding process', 'Proactive service monitoring'],
      benefits: [{ heading: 'Affordable', description: 'Low cost service targeted at SMEs and Enterprises. Quick service delivery especially in the CBD without fiber build dependencies.' }, { heading: 'Reliability', description: 'All CSquared Wi-Fi Access points are backhauled on CSquared robust metro fiber network that is fully redundant' }, { heading: 'Wide coverage ', description: 'CSquared boasts of an extensively wide coverage, with over 200 hotspots deployed across the greater Kampala' }, { heading: 'Low  Latency Solution', description: 'CSquared’s Fixed Wi-Fi offers low latency solution backhauled on an end to end fiber infrastructure' }],
      support: 'CSquared has technical specialists on the ground who are equipped to walk you through our products and advise on the best product fit for your business.',
      logo:'/assets/services/wifi-white.svg',
      contact: 'For more information on our Wi-Fi Hotspot solution, visit http://www.csquared.com/portfiber or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
      brochure: './assets/csquared-FixedWi-Fi.pdf'
    },
    // {
    //   image: './assets/services/service-images/Darkfiber.jpg', title: 'Dark Fiber', subtitle: 'Unlimited capacity for Point-to-Point and Mobile Network Operator (MNO) unmonitored fiber connection', description: 'With out dark Fiber, You get Point-to-Point unmonitored Fiber connection tha has virtually unlimited capacity. The product allows you to bring your device to light up the Fiber',
    //   bestfit: ['An efficient ISP core network connection', 'A high availability, reliable connection to base stations', 'High capacity fiber circuits that seamlessly connect your branches to your headquarters'],
    //   features: ['99.99% SLA', 'Automated ordering process', 'Simplified billing process', 'Scalable Solutions', 'Scalable Solutions', 'Secure reliable service', 'Flexible bandwidth options', '24/7 365 NOC services'],
    //   benefits: [{ heading: 'Full redundancy', description: 'With sites deployed in a ring topology, our network has high availability and redundancy. This ensures maximum uptime leading to optimum productivity for your business.' }, { heading: 'Flexible Bandwidth Options', description: 'Our network offer scalable bandwidth options to suit your business needs' }, { heading: 'Extensive Coverage', description: 'Our 5000+KM footprint across Kenya, Uganda, Ghana, Liberia, DRC and Togo ensures that you are adequately covered and have access to a reliable and efficient network. Whether you’re looking for Metro or intercity connectivity, CSquared has you covered.' }, { heading: 'Low Latency Solution', description: 'Our network infrastructure is built on an end to end fiber Infrastructure, optimized to ensure fast access and low latency for your mission critical applications' }, { heading: 'Excellent Service Support -  24/7 @ 365 NOC', description: 'Our team of experienced network engineers is well equipped and provides 24 hours monitoring and support to ensure you have a seamless experience with CSquared’s network infrastructure and services' }, { heading: 'Dedicated Account Management', description: 'CSquared has technical specialists on the ground who are equipped to walk you through our products and advise on the best product fit for your business.' }],
    //   support: '',
    //   logo:'/assets/services/dark-fiber.svg',
    //   contact: 'For more  information on our fiber solutions, visit http://www.csquared.com/leasedcapacity or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
    //   brochure: './assets/csquared-brochure.pdf'
    // },
    
    // {
    //   image: './assets/services/service-images/Cloudconnectivity(1).jpg', title: 'Data Center Connectivity', subtitle: 'Seamless connection to multiple data centres across the globe', description: 'We provide you with connectivity to all Data Centers within our respective coverage areas. Our cross connection services are built to help you with: Traffic Flow Management , Disaster Recovery , Latency Reduction, Global Networking',
    //   bestfit: ['An efficient ISP core network connection', 'A high availability, reliable connection to base stations', 'High capacity fiber circuits that seamlessly connect your branches to your headquarters'],
    //   features: ['99.99% SLA', 'Automated ordering process', 'Simplified billing process', 'Scalable Solutions', 'Scalable Solutions', 'Secure reliable service', 'Flexible bandwidth options', '24/7 365 NOC services'],
    //   benefits: [{ heading: 'Full redundancy', description: 'With sites deployed in a ring topology, our network has high availability and redundancy. This ensures maximum uptime leading to optimum productivity for your business.' }, { heading: 'Flexible Bandwidth Options', description: 'Our network offer scalable bandwidth options to suit your business needs' }, { heading: 'Extensive Coverage', description: 'Our 5000+KM footprint across Kenya, Uganda, Ghana, Liberia, DRC and Togo ensures that you are adequately covered and have access to a reliable and efficient network. Whether you’re looking for Metro or intercity connectivity, CSquared has you covered.' }, { heading: 'Low Latency Solution', description: 'Our network infrastructure is built on an end to end fiber Infrastructure, optimized to ensure fast access and low latency for your mission critical applications' }, { heading: 'Excellent Service Support -  24/7 @ 365 NOC', description: 'Our team of experienced network engineers is well equipped and provides 24 hours monitoring and support to ensure you have a seamless experience with CSquared’s network infrastructure and services' }, { heading: 'Dedicated Account Management', description: 'CSquared has technical specialists on the ground who are equipped to walk you through our products and advise on the best product fit for your business.' }],
    //   support: '',
    //   logo:'/assets/services/data-center-connectivity.svg',
    //   contact: 'For more  information on our fiber solutions, visit http://www.csquared.com/leasedcapacity or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
    //   brochure: './assets/csquared-brochure.pdf'
    // },

  ];



  cloudservices: services[] = [{
    image: 'https://media.istockphoto.com/id/1254718662/photo/cloud-computing-technology-and-online-data-storage-for-business-network-concept.jpg?b=1&s=170667a&w=0&k=20&c=Xha8yvsBiYzgRHIG5wrtvGP9nbmqllxh-dFtdXr9pvc=', title: 'Cloud Security', subtitle: 'Digital transformation through zero trust solutions in collaboration with Zscaler', description: "We are working with Zscaler, creator of the Zero Trust Exchange platform and the largest security cloud on the planet, to make doing business and navigating change a simpler, faster, and more productive experience",
    bestfit: ['An efficient ISP core network connection', 'A high availability, reliable connection to base stations', 'High capacity fiber circuits that seamlessly connect your branches to your headquarters'],
    features: ['Stop Cyber Attacks', 'Prevent Data Exposure with Zero Trust', 'Secure Remote Access without VPN', 'Work from anywhere, securely', 'Optimize Digital Experiences'],
    benefits: [{ heading: 'Stop Cyber Attacks', description: 'The Zscaler Zero Trust Exchange™ is a supercharged security platform that delivers the protection you need without the hassle' }, { heading: 'Prevent Data Exposure with Zero Trust', description: 'Zscaler protects all users and devices, wherever they are, while controlling data across all sanctioned and unsanctioned applications with Zscaler Data Protection' }, { heading: 'Secure Remote Access without VPN', description: 'Zero trust network access (ZTNA) is the ideal VPN alternative, enabling secure access to private applications by establishing connectivity from user-to-application on a dynamic identity and context-aware basis' }, { heading: 'Work from anywhere, securely', description: 'Access to any app from anywhere, with better security. By providing policy-based access to external and internal applications, users can work securely from anywhere, on any device, and from any location by connecting to any of Zscaler’s 150 global data centres.' }, { heading: 'Optimize Digital Experiences', description: 'Get proactive. Identify and resolve digital experience issues before users complain. Zscaler improves user experiences while helping IT resolve issues with continuous performance monitoring and insights.' }],
    support: '',
    logo:'/assets/services/cloud-security.svg',
    contact: 'For more  information on our fiber solutions, visit http://www.csquared.com/leasedcapacity or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
    brochure: './assets/csquared-brochure.pdf'
  },

  {
    image: './assets/services/service-images/SD-WAN.jpg', title: 'SD-WAN', subtitle: 'Simplify management of your multisite WAN while enhancing user experience and optimising costs', description: 'Our cloud-based Software Defined-WAN enables organizations with geographically distributed locations to securely break out to the public cloud, reducing their WAN costs, improving applications availability and performance and simplifying management. We ensure that your network is safe and reliable. Available in Kenya',
    bestfit: ['An efficient ISP core network connection', 'A high availability, reliable connection to base stations', 'High capacity fiber circuits that seamlessly connect your branches to your headquarters'],
    features: ['Leverage broadband internet connectivity to reduce unnecessary MPLS traffic', 'Quick to Deploy', 'Full network visibility and control'],
    benefits: [{ heading: 'Leverage broadband internet connectivity to reduce unnecessary MPLS traffic', description: 'Use your valuable MPLS network capacity for mission critical applications and uses' }, { heading: 'Quick to Deploy', description: 'Quickly and easily add new sites to your WAN using existing network or internet connections' }, { heading: 'Full network visibility and control', description: 'A centralized self-service portal gives you visibility and control over all applications, reporting and troubleshooting background image' }],
    support: '',
    logo:'/assets/services/wan.svg',
    contact: 'For more  information on our fiber solutions, visit http://www.csquared.com/leasedcapacity or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
    brochure: './assets/csquared-brochure.pdf'
  },
  {
    image: 'https://media.istockphoto.com/id/1173891823/photo/fiber-optics-abstract-background-purple-blue-data-internet-technology-cable.jpg?b=1&s=170667a&w=0&k=20&c=k4xwqnkP0X-VxdBtx3HT8hadLwq2wybHrWtijHqUAjg=', title: 'Direct On-ramp', subtitle: 'Seamlessly navigate between public and private cloud environments with a low-latency and dependable connection', description: 'Connect your digital ecosystem securely and on your own terms, using Csquared and one of the world’s leading Network-as-a-Service platforms, Console Connect', bestfit: ['An efficient ISP core network connection', 'A high availability, reliable connection to base stations', 'High capacity fiber circuits that seamlessly connect your branches to your headquarters'],
    features: ['Connect everything to everywhere', 'Real-time management and control', 'Private and secure connectivity'],
    benefits: [{ heading: 'Connect everything to everywhere', description: 'High-performance connectivity between devices, applications, clouds, office locations and data centres.' }, { heading: 'Real-time management and control', description: 'Provision a network connection in minutes and flex bandwidth to meet the needs of your business.' }, { heading: 'Private and secure connectivity', description: 'Avoid the public internet and protect your mission-critical applications and workloads.' }],
    support: '',
    logo:'/assets/services/direct-on-ramp.svg',
    contact: 'For more  information on our fiber solutions, visit http://www.csquared.com/leasedcapacity or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
    brochure: './assets/csquared-brochure.pdf'
  },

  // {
  //   image: 'https://cdn.pixabay.com/photo/2018/02/11/23/45/cloud-3147119__340.png', title: 'Edge Cloud', subtitle: 'Distributed computing framework bringing enterprise applications closer to data sources.', description: `Enable enterprises to leverage a computing platform for processing and storage of data as close to the source as possible leveraging our edge infrastructure for cases such as low latency, sta asovereignty that depends on location of compute and storage. Available in Kenya and Uganda from Mid 2023`,
  //   bestfit: ['An efficient ISP core network connection', 'A high availability, reliable connection to base stations', 'High capacity fiber circuits that seamlessly connect your branches to your headquarters'],
  //   features: ['99.99% SLA', 'Automated ordering process', 'Simplified billing process', 'Scalable Solutions', 'Scalable Solutions', 'Secure reliable service', 'Flexible bandwidth options', '24/7 365 NOC services'],
  //   benefits: [{ heading: 'Full redundancy', description: 'With sites deployed in a ring topology, our network has high availability and redundancy. This ensures maximum uptime leading to optimum productivity for your business.' }, { heading: 'Flexible Bandwidth Options', description: 'Our network offer scalable bandwidth options to suit your business needs' }, { heading: 'Extensive Coverage', description: 'Our 5000+KM footprint across Kenya, Uganda, Ghana, Liberia, DRC and Togo ensures that you are adequately covered and have access to a reliable and efficient network. Whether you’re looking for Metro or intercity connectivity, CSquared has you covered.' }, { heading: 'Low Latency Solution', description: 'Our network infrastructure is built on an end to end fiber Infrastructure, optimized to ensure fast access and low latency for your mission critical applications' }, { heading: 'Excellent Service Support -  24/7 @ 365 NOC', description: 'Our team of experienced network engineers is well equipped and provides 24 hours monitoring and support to ensure you have a seamless experience with CSquared’s network infrastructure and services' }, { heading: 'Dedicated Account Management', description: 'CSquared has technical specialists on the ground who are equipped to walk you through our products and advise on the best product fit for your business.' }],
  //   support: '',
  //   logo:'/assets/services/edge-cloud.svg',
  //   contact: 'For more  information on our fiber solutions, visit http://www.csquared.com/leasedcapacity or leave your details on our website and someone from our team will reach out and support you on your connection journey.',
    // brochure: './assets/csquared-brochure.pdf'
  // },

  ];

  aboutpage: about_info[] = [{ image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Overview', subtitle: '', description: 'As Africa undergoes digital transformation, the need for increased internet access becomes more urgent. Across the region, there is a high need for efficient internet infrastructure that serves both urban and rural areas. However, deployment costs can be extremely high, limiting the deployment of fiber optic cables. CSquared helps to minimize this cost by operating a shared infrastructure model that allows MNOs and ISPs to connect to our network. The end result is reduced installation costs for the MNOs and ISPs who are then able to offer broadband services and 4G data to end users at an affordable cost.', }, { image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Our Structure', subtitle: '', description: "Since 2011, we have built more than 800 km of fiber in Kampala and Entebbe, Uganda; and more than 840 km of fiber in the Ghanaian cities of Accra, Tema, and Kumasi. To date, more than 25 internet service providers and mobile network operators now use our fiber networks to offer broadband services and 4G data to end users, with over 1,200 tower and commercial building sites connected directly to CSquared’s fiber infrastructure. CSquared is a private entity with 4 shareholders comprising Mitsui & Co, Convergence Partners and the International Finance Corporation(IFC).  We are currently present in six (6) countries across Africa – Uganda, Ghana, Liberia, Kenya, DR Congo and Togo- Live links to country pages. CSquared is a Wholesale, open-access FTTX provider with dark fiber, and lit fiber that serves ISPs and MNOs only. CSquared also has a cloud offering that includes simplified & tailored access, migration and consumption of multi-cloud services to businesses and social enterprises. CSquared offers a portfolio of products: • Dark/Lit Fiber • Managed Ethernet • Fiber to the home • Wi-Fi " }, { image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Our Value Proposition', subtitle: '', description: "Our Value Proposition We maintain the highest international standards in the deployment and management of our network. Our shared infrastructure helps you reduce capex & opex for transmission costs Our flexible payment options are designed to help service providers choose payment options that are best aligned with their plans and needs. Our shared infrastructure helps ease the burden of infrastructure management from you as a service provider so you can focus on service provision. With our singular focus on infrastructure, we make large scale, quality and timely deployments. " }]

  management: authorities[] = [{ name: 'Lanre Kolade', image: '/assets/csquaredTeam/Lanre.jpg', rank: 'CEO', description: 'Lanre has been the CSquared Group Chief Executive Officer since November 2018. He has over 21 years of experience in the telecommunications industry spanning both Francophone and Anglophone Africa. Before joining CSquared, he was Managing Director of Vodacom Business in Nigeria. He also previously served as Managing Director of Vodacom Business for the West, East, Central, & South-East regions in Africa. Lanre started his career at SITA, a business solutions company; he then went on to attain leadership roles in telecommunication firms GS Telecom and Gateway Communications. He is a graduate of Wits Business School, London Business School, and Obafemi Awolowo University, holding a BSc in Electrical Engineering/Telecoms.Lanre is passionate about Africa and he firmly believes that increased connectivity and digital transformation can have positive knock-on effects on economic development and growth, especially for the motivated and vibrant youth in all parts of the continent.' }, 
  // { name: 'Eddie Irungu', image: './../../assets/Csquared/Team-002-Eddie.png', rank: 'CFO', description: 'Eddie Irungu has been the CSquared Group CFO since October 2019. He is a seasoned telecoms and finance professional with more than 20 years’ experience in Finance, Risk Management and Strategy with blue chip organizations in Africa and the United Kingdom. Before joining CSquared, Eddie was the CFO of American Tower in Uganda. Other senior roles prior to this include Finance Director of Airtel in Kenya, Chief Risk and Strategy Officer of Safaricom and Head of Audit and Assurance for East and Central Africa for BAT. Eddie holds a Bachelor of Science (Civil Engineering) Hons degree from the University of Nairobi. He trained with PWC in the UK and Ernst & Young in South Africa. He is a fellow of the Institute of Chartered Accountants in England and Wales, and a member of the South African Institute of Chartered Accountants and the Association of Certified Fraud Examiners based in the USA.' }, 
  { name: 'Musa Musazi', image: '/assets/csquaredTeam/Musa.jpg', rank: 'Group Chief Technical Officer', description: 'Musa took up the Group Chief Technology Office in July 2021 after having acted in the same role since 2019. He has risen through the ranks becoming the Chief Technology Officer for Uganda since 2017. Musa holds a BSc. Electrical Engineering from Makerere University and a 2010 MBA graduate from ESAMI. Most recently, in 2021 he completed an Executive Leadership course, the CEO Apprenticeship Program at Strathmore Business School and CEO Summit Uganda His career spans over 20 years across 4 organizations including Celtel, MTN Uganda, Warid and Google/CSquared working in the fields of network/product design, deployment, operations and project management. Musa is a Chartered Engineer CEng of the Engineering Council of UK. A member of the Institution of Engineering & Technology IET MIET in the UK. He is a Registered Engineer with the Engineers’ Registration Board of Uganda REng, a member of the Uganda Institution of Professional Engineers MUIPE and a certified Project Management Professional PMP ® with the PMI.' }, { name: 'Adama Kane', image: '/assets/csquaredTeam/Adama.jpg', rank: 'Group Head of Legal', description: 'Adama has been the CSquared Group Head of Legal and Regulatory Affairs since July 2018. He is a lawyer, qualified in Senegal, with 17 years’ experience focusing on telecommunications/IT law, Intellectual Property, M&A and Corporate Governance. Before joining CSquared, he was Head of Legal Department at Sonatel/Orange Group, operating in 5 West African countries, in charge of supporting Growth and M&A activities, Corporate Governance, Intellectual Property and Regulatory compliance. He also used to be a partner in a reputed law firm in Senegal, leading the Tech/IT activities and supporting foreign investments through various African countries. Adama holds a Master’s degree in Economic and Business Law, together with an Advanced Master’s degree in Law and Management of IT. He speaks both English and French.' }, { name: 'Philip Sakwa', image: '/assets/csquaredTeam/Philip.jpg', rank: 'Group Head of HR', description: 'Philip Sakwa has been the CSquared Head of HR since August 2017. A Fellow of the Chartered Institute of Personnel & Development UK, Philip has over 18 years’ experience in large dynamic multinational organizations. He has extensive experience in managing end to end HR functions, with over 10 years of leading HR functions in the ICT and Tech environments in the UK and across Africa. An alumni of LSE, he has steered organizations through change and has managed M&A projects from the HR front in the telecom sector, most recently the merger between Nokia and Alcatel-Lucent. His biggest achievement was being part of the project team that planned and managed the setup of the 2012 London Olympic Delivery Authority. Philip is an Executive Coach and has sat on several panels around East Africa discussing topics pertaining to the People’s Agenda within the ICT sector. He served as an Executive Committee Member of the Federation of Uganda Employers for 4 years, contributing to the development of several employee policies/strategies with the private sector in Uganda' }, { name: 'Napoleon Mengot', image: '/assets/csquaredTeam/Napoleon.jpg', rank: 'Group Strategy Manager', description: 'Napoleon has been the CSquared Group Strategy Manager since June 2019. He has over 20yrs experience across multiple continents and several market sectors – Technology, Telecom, Oil & Energy. Furthermore, he has a multilingual skill set, speaking English, French & Spanish. Before joining CSquared, he was Regional Sales Manager at BIA, Operating across 18 African countries, in charge of Strategy, Sales, Marketing & Business Development activities. Prior to CSquared, highlights of Napoleon’s career include: being a Solutions Consultant for Sony Europe; Strategy & Project Manager for Cameroon Telecoms - where he project managed the feasibility studies with British Telecom for a National Backbone Fiber Network; Regional Operations Manager for Baker Hughes; Regional Operations Manager for NOV. Napoleon holds an M.Eng from Aston University, Birmingham, UK; and an MBA from the University of Brighton, UK. Sequel to these, Napoleon’s key ambition is to consolidate his diverse Strategic, Management & Leadership skill sets to optimize the impact & improve the profitability of a blue-chip company in a challenging & diverse cultured environment - Africa.' }, { name: 'Estelle Akofio-Sowah', image: '/assets/csquaredTeam/Estelle.jpg', rank: 'West Africa Regional Manager, Ghana, Liberia, Togo', description: 'Estelle Akofio-Sowah has been the CSquared West Africa Manager since April 2015. She has over 15 years of experience in the internet and business development industry in Ghana, including being the Managing Director of BusyInternet, Africa’s successful internet startup and being the Country Lead for Google’s operations in Ghana. Highlights of her leadership include launching an award winning ISP, implementing the Ghana chapter of the World Bank Incubator program and launching and promoting various products and programs aimed at making the internet an integral part of people’s lives. Estelle majored in Economics and Development Studies at the University of Sussex. Her contributions to the internet sector and commitment to excellence earned her selection as a 2008 Fellow of the African Leadership Initiative. She currently serves on the Board of Databank, Stanbic Bank, Zawadi Africa Educational Fund and the Ministerial Advisory Committee to Ghana’s Minister of Communications.' }, { name: 'Andrew Banturaki', image: '/assets/csquaredTeam/AndrewBanturaki.jpg', rank: 'Atg Country Manager Uganda', description: 'Andrew Banturaki has been Acting Country Manager for CSquared Uganda since August 2022 He has extensive working experience in sales and marketing positions for over the last 20 years and has held leadership positions in multiple roles across Uganda,Tanzania and Burundi He has worked in the Telecommunications industry as a Business Leader for companies like Google/CSquared, MTN Uganda, Uganda Telecom, Orange and Sure Telecom. Andrew is also Chief Sales & Marketing Officer at CSquared Uganda and currently serves as a board member for Fund House Limited and BINS Uganda. He holds a BA (Hons) Political Science from Makerere University Kampala, an Executive MBA and a certificate in Business Intelligence & Data Analytics from Strathmore Business School.Andrew is passionate about transformational leadership and is signed up for the Executive Leadership Programme at Strathmore Business School.' },
  // { name: 'Alain Mambueni Malanda', image: 'https://cdn.pixabay.com/photo/2019/11/03/23/28/black-businessman-4599847__340.jpg', rank: 'Country Manager, Democratic Republic of Congo', description: 'Alain is an accomplished executive with comprehensive strategy formulation and execution. He has been with CSquared since October 2021. He has over 20 years of experience in the telecommunications industry. Currently pursuing a Master of Laws (LLM) – Corporate Governance, he also holds a MSC in Information Systems Management (University of Salford, UK), an MBA (Management College of Southern Africa, SA) and several other professional accreditations and certificates. He has worked for companies like Vodacom, MTN, BCS, Smile Communications, Ingekora and NRZ. Alain implemented the DRC chapter of Digital Council Africa known as FTTx DRC Council promoting the adoption of quality broadband infrastructure thereby enhancing the lives of people. Alain is passionate about business information systems and technologies and how these address both digital and financial inclusion in Africa.' }, 
  // { name: 'Ted Ogonda', image: 'https://cdn.pixabay.com/photo/2019/11/03/23/28/black-businessman-4599847__340.jpg', rank: 'Group Director, Cloud Services, Country Manager, Kenya', description: 'Ted has been the CSquared Kenya Group Director, Cloud Services & Country Leader since January 2022. He joined CSquared in October 2021 as Group Director, Cloud Services. He has over 18 years’ experience in the I.T space having worked at Cisco for over 15 years in various technical & business roles spanning across The Maghreb, West & Eastern Africa, where he led technical experts to drive transformational initiatives & business outcomes for public sector, enterprise and service provider customers. Prior to joining CSquared, he was the Director, Products & Innovations at Telkom Kenya. Ted is a graduate of Strathmore Business School and the University of Nairobi with a B.Sc. in Electrical & Electronics Engineering from the University of Nairobi. He also holds several technical certifications from Cisco, Microsoft and AWS. Ted is focused on leveraging cloud technologies to drive digital transformation across Africa.' }
];


  constructor(private http: HttpClient) { }

  getFiberServices() {
    return this.fiberservices;
  }

  getCloudServices() {
    return this.cloudservices;
  }

  getOneCloudItem(index: number) {
    return this.cloudservices[index];
  }

  getOneFiberItem(index: number) {
    return this.fiberservices[index];
  }

  getAboutSection() {
    return this.aboutpage;
  }

  getManagement() {
    return this.management;
  }

  getTeamMember(index: number) {
    return this.management[index];
  }

  getNews() {
    return this.http.get(`${this.baseUrl}api/v1/posts`)
  }

  getImpacts() {
    return this.http.get(`${this.baseUrl}api/v1/impacts`)
  }

  getFeaturedNews(){
    return this.http.get(`https://csquared-cms-api-32sagkwj6q-uc.a.run.app/api/v1/featured-posts`)
  }

  getOneImpact(slug:string) {
    return this.http.get(`${this.baseUrl}api/v1/impact/${slug}`)
  }
  
  getOneNewsContent(slug:string) {
    return this.http.get(`${this.baseUrl}api/v1/post/${slug}`)
  }

  getCareers() {
    return this.http.get(`${this.baseUrl}api/v1/careers`)
  }

  ApplyCareer(details:any) {
    return this.http.post(`${this.baseUrl}api/v1/job-application`, details)
  }

  getKMLfile(){
    return this.http.get(`${this.baseUrl}api/v1/coverages`);
  }
}
