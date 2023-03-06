import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { services } from '../interfaces/interfaces';
import { authorities } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  fiberservices:services[]= [{image:'https://cdn.pixabay.com/photo/2020/02/03/00/12/fiber-4814456__340.jpg',title:'Dark/Lit Fiber',description:'With out dark Fiber, You get Point-to-Point unmonitored Fiber connection tha has virtually unlimited capacity. The product allows you to bring your device to light up the Fiber'},{image:'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__340.jpg',title:'Leased Capacity',description:'Leased capacity gives you a dedicated Fiber link that interconnects two or more sites/locations. Our robust metro-Fiber network ensures maximum uptime, allowing for high level efficiency and productivity. With our leased capacity, you will have a protected connection with a minimum of 100mbps dedicated capacity'},{image:'https://cdn.pixabay.com/photo/2017/09/25/11/55/cyberspace-2784907__340.jpg', title:'Port Fiber', description:'Our port Fiber solution gives you access to a discounted dedicated Fiber link that interconnects two or more sites/locations. Designed to give you efficient service to low capacity users at an affordable rate, CSquared deploys and maintains the link for you.'},{image:'https://cdn.pixabay.com/photo/2014/03/25/16/27/radio-297183__340.png', title:'Data Center Connectivity', description:'We provide you with connectivity to all Data Centers within our respective coverage areas. Our cross connection services are built to help you with: Traffic Flow Management , Disaster Recovery , Latency Reduction, Global Networking'},{image:'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Fiber To The Home (FTTH)', description:'Be it for work, business or leisure, our Fiber to the home solution gives you high quality internet at home with reliable speeds. Leverage on our strong network to carry out your internet activities seemlessly'}];

  cloudservices: services[]= [{image:'https://media.istockphoto.com/id/1254718662/photo/cloud-computing-technology-and-online-data-storage-for-business-network-concept.jpg?b=1&s=170667a&w=0&k=20&c=Xha8yvsBiYzgRHIG5wrtvGP9nbmqllxh-dFtdXr9pvc=',title:'Cloud Security',description:"In partnership with Zscaler, the world's largest security cloud, we are enabling enterprises across Africa to secure digital transformation by leveraging a zero trust strategy. Zscaler delivers zero trust through the Zero Trust Exchange - an intergrated, cloud native platform that securely connects users, workloads, and devices to applications without connecting to the network. This unique approach eliminates the attack surface, prevents lateral threat movement, and protects against compromise and data loss. This is available across all our markets of operation."},{image:'https://cdn.pixabay.com/photo/2017/01/27/14/26/download-2013195__340.png',title:'SD-WAN',description:'Our cloud-based Software  Defined-WAN product will enable organizations with geographically distributed locations to securely break out to the public cloud, reducing their WAN costs, improving applications availability and performance and simplyfying management. We ensure that your network is safe and reliable. Currently available in Kenya and Uganda'},{image:'https://cdn.pixabay.com/photo/2018/02/11/23/45/cloud-3147119__340.png', title:'Edge Cloud', description:`Enable enterprises to leverage a computing platform for processing and storage of data as close to the source as possible leveraging our edge infrastructure for cases such as low latency, sta asovereignty that depends on location of compute and storage. Available in Kenya and Uganda from Mid 2023`},{image:'https://media.istockphoto.com/id/1313415001/photo/a-black-male-server-room-technician-working-at-business-reopening.jpg?b=1&s=170667a&w=0&k=20&c=zK_Uh9Z6bSbRB1bgN7_gEpH9U8j3O6FuDbhO5HnWWqM=', title:'Data Center Interconnect', description:'This connectivity-as-a-service offering will allow enterprises and wholesalers of connectivity services to consume connectivity between data centers across Africa on demand basis similar to how cloud compute and storage services are consumed. Available in Kenya and uganda from Mid 2023.'},{image:'https://media.istockphoto.com/id/1173891823/photo/fiber-optics-abstract-background-purple-blue-data-internet-technology-cable.jpg?b=1&s=170667a&w=0&k=20&c=k4xwqnkP0X-VxdBtx3HT8hadLwq2wybHrWtijHqUAjg=', title:'Direct On-ramp', description:'This facilitates low-latencty and secure dedicated connections that enable seamless movements of workloads between private and public clouds environments. The product is designed as a hosted service where CSquared will build direct cross-connections to the public cloud providers (Azure, AWS, Google Cloud) at their edge locations. Available in Kenya and Ugand from Mid 2023.'}];

  aboutpage: services []= [{image:'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600',title:'Overview', description:'As Africa undergoes digital transformation, the need for increased internet access becomes more urgent. Across the region, there is a high need for efficient internet infrastructure that serves both urban and rural areas. However, deployment costs can be extremely high, limiting the deployment of fiber optic cables. CSquared helps to minimize this cost by operating a shared infrastructure model that allows MNOs and ISPs to connect to our network. The end result is reduced installation costs for the MNOs and ISPs who are then able to offer broadband services and 4G data to end users at an affordable cost.'},{image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600',title:'Our Structure', description:"Since 2011, we have built more than 800 km of fiber in Kampala and Entebbe, Uganda; and more than 840 km of fiber in the Ghanaian cities of Accra, Tema, and Kumasi. To date, more than 25 internet service providers and mobile network operators now use our fiber networks to offer broadband services and 4G data to end users, with over 1,200 tower and commercial building sites connected directly to CSquared’s fiber infrastructure. CSquared is a private entity with 4 shareholders comprising Mitsui & Co, Convergence Partners and the International Finance Corporation(IFC).  We are currently present in six (6) countries across Africa – Uganda, Ghana, Liberia, Kenya, DR Congo and Togo- Live links to country pages. CSquared is a Wholesale, open-access FTTX provider with dark fiber, and lit fiber that serves ISPs and MNOs only. CSquared also has a cloud offering that includes simplified & tailored access, migration and consumption of multi-cloud services to businesses and social enterprises. CSquared offers a portfolio of products: • Dark/Lit Fiber • Managed Ethernet • Fiber to the home • Wi-Fi "},{image:'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Our Value Proposition', description:"Our Value Proposition We maintain the highest international standards in the deployment and management of our network. Our shared infrastructure helps you reduce capex & opex for transmission costs Our flexible payment options are designed to help service providers choose payment options that are best aligned with their plans and needs. Our shared infrastructure helps ease the burden of infrastructure management from you as a service provider so you can focus on service provision. With our singular focus on infrastructure, we make large scale, quality and timely deployments. "}]

  management: authorities[]= [{name:'Lanre Kolade',image:'./../../assets/Csquared/Team-001-Lanre.png',rank:'CEO', description:'Lanre has been the CSquared Group Chief Executive Officer since November 2018. He has over 21 years of experience in the telecommunications industry spanning both Francophone and Anglophone Africa. Before joining CSquared, he was Managing Director of Vodacom Business in Nigeria. He also previously served as Managing Director of Vodacom Business for the West, East, Central, & South-East regions in Africa. Lanre started his career at SITA, a business solutions company; he then went on to attain leadership roles in telecommunication firms GS Telecom and Gateway Communications. He is a graduate of Wits Business School, London Business School, and Obafemi Awolowo University, holding a BSc in Electrical Engineering/Telecoms.Lanre is passionate about Africa and he firmly believes that increased connectivity and digital transformation can have positive knock-on effects on economic development and growth, especially for the motivated and vibrant youth in all parts of the continent.'},{name:'Eddie Irungu', image:'./../../assets/Csquared/Team-002-Eddie.png', rank:'CFO', description:'Eddie Irungu has been the CSquared Group CFO since October 2019. He is a seasoned telecoms and finance professional with more than 20 years’ experience in Finance, Risk Management and Strategy with blue chip organizations in Africa and the United Kingdom. Before joining CSquared, Eddie was the CFO of American Tower in Uganda. Other senior roles prior to this include Finance Director of Airtel in Kenya, Chief Risk and Strategy Officer of Safaricom and Head of Audit and Assurance for East and Central Africa for BAT. Eddie holds a Bachelor of Science (Civil Engineering) Hons degree from the University of Nairobi. He trained with PWC in the UK and Ernst & Young in South Africa. He is a fellow of the Institute of Chartered Accountants in England and Wales, and a member of the South African Institute of Chartered Accountants and the Association of Certified Fraud Examiners based in the USA.'},{name:'Musa Musazi', image:'./../../assets/Csquared/Team-004-Musa.png', rank:'Group Chief Technical Officer', description:'Musa took up the Group Chief Technology Office in July 2021 after having acted in the same role since 2019. He has risen through the ranks becoming the Chief Technology Officer for Uganda since 2017. Musa holds a BSc. Electrical Engineering from Makerere University and a 2010 MBA graduate from ESAMI. Most recently, in 2021 he completed an Executive Leadership course, the CEO Apprenticeship Program at Strathmore Business School and CEO Summit Uganda His career spans over 20 years across 4 organizations including Celtel, MTN Uganda, Warid and Google/CSquared working in the fields of network/product design, deployment, operations and project management. Musa is a Chartered Engineer CEng of the Engineering Council of UK. A member of the Institution of Engineering & Technology IET MIET in the UK. He is a Registered Engineer with the Engineers’ Registration Board of Uganda REng, a member of the Uganda Institution of Professional Engineers MUIPE and a certified Project Management Professional PMP ® with the PMI.'},{name:'Adama Kane', image:'./../../assets/Csquared/Team-003-Adama.png',rank:'Group Head of Legal', description:'Adama has been the CSquared Group Head of Legal and Regulatory Affairs since July 2018. He is a lawyer, qualified in Senegal, with 17 years’ experience focusing on telecommunications/IT law, Intellectual Property, M&A and Corporate Governance. Before joining CSquared, he was Head of Legal Department at Sonatel/Orange Group, operating in 5 West African countries, in charge of supporting Growth and M&A activities, Corporate Governance, Intellectual Property and Regulatory compliance. He also used to be a partner in a reputed law firm in Senegal, leading the Tech/IT activities and supporting foreign investments through various African countries. Adama holds a Master’s degree in Economic and Business Law, together with an Advanced Master’s degree in Law and Management of IT. He speaks both English and French.'},{name:'Philip Sakwa', image:'./../../assets/Csquared/Team-006-Philip.png', rank:'Group Head of HR', description:'Philip Sakwa has been the CSquared Head of HR since August 2017. A Fellow of the Chartered Institute of Personnel & Development UK, Philip has over 18 years’ experience in large dynamic multinational organizations. He has extensive experience in managing end to end HR functions, with over 10 years of leading HR functions in the ICT and Tech environments in the UK and across Africa. An alumni of LSE, he has steered organizations through change and has managed M&A projects from the HR front in the telecom sector, most recently the merger between Nokia and Alcatel-Lucent. His biggest achievement was being part of the project team that planned and managed the setup of the 2012 London Olympic Delivery Authority. Philip is an Executive Coach and has sat on several panels around East Africa discussing topics pertaining to the People’s Agenda within the ICT sector. He served as an Executive Committee Member of the Federation of Uganda Employers for 4 years, contributing to the development of several employee policies/strategies with the private sector in Uganda'},{name:'Napoleon Mengot', image:'./../../assets/Csquared/Team-007-Napoleon.png',rank:'Group Strategy Manager', description:'Napoleon has been the CSquared Group Strategy Manager since June 2019. He has over 20yrs experience across multiple continents and several market sectors – Technology, Telecom, Oil & Energy. Furthermore, he has a multilingual skill set, speaking English, French & Spanish. Before joining CSquared, he was Regional Sales Manager at BIA, Operating across 18 African countries, in charge of Strategy, Sales, Marketing & Business Development activities. Prior to CSquared, highlights of Napoleon’s career include: being a Solutions Consultant for Sony Europe; Strategy & Project Manager for Cameroon Telecoms - where he project managed the feasibility studies with British Telecom for a National Backbone Fiber Network; Regional Operations Manager for Baker Hughes; Regional Operations Manager for NOV. Napoleon holds an M.Eng from Aston University, Birmingham, UK; and an MBA from the University of Brighton, UK. Sequel to these, Napoleon’s key ambition is to consolidate his diverse Strategic, Management & Leadership skill sets to optimize the impact & improve the profitability of a blue-chip company in a challenging & diverse cultured environment - Africa.' }, {name:'Estelle Akofio-Sowah', image:'./../../assets/Csquared/Team-005-Estelle.png',  rank:'West Africa Regional Manager, Ghana, Liberia, Togo', description:'Estelle Akofio-Sowah has been the CSquared West Africa Manager since April 2015. She has over 15 years of experience in the internet and business development industry in Ghana, including being the Managing Director of BusyInternet, Africa’s successful internet startup and being the Country Lead for Google’s operations in Ghana. Highlights of her leadership include launching an award winning ISP, implementing the Ghana chapter of the World Bank Incubator program and launching and promoting various products and programs aimed at making the internet an integral part of people’s lives. Estelle majored in Economics and Development Studies at the University of Sussex. Her contributions to the internet sector and commitment to excellence earned her selection as a 2008 Fellow of the African Leadership Initiative. She currently serves on the Board of Databank, Stanbic Bank, Zawadi Africa Educational Fund and the Ministerial Advisory Committee to Ghana’s Minister of Communications.'}, {name:'Alain Mambueni Malanda', image:'https://cdn.pixabay.com/photo/2019/11/03/23/28/black-businessman-4599847__340.jpg', rank:'Country Manager, Democratic Republic of Congo', description:'Alain is an accomplished executive with comprehensive strategy formulation and execution. He has been with CSquared since October 2021. He has over 20 years of experience in the telecommunications industry. Currently pursuing a Master of Laws (LLM) – Corporate Governance, he also holds a MSC in Information Systems Management (University of Salford, UK), an MBA (Management College of Southern Africa, SA) and several other professional accreditations and certificates. He has worked for companies like Vodacom, MTN, BCS, Smile Communications, Ingekora and NRZ. Alain implemented the DRC chapter of Digital Council Africa known as FTTx DRC Council promoting the adoption of quality broadband infrastructure thereby enhancing the lives of people. Alain is passionate about business information systems and technologies and how these address both digital and financial inclusion in Africa.'}, {name:'Ted Ogonda', image:'https://cdn.pixabay.com/photo/2019/11/03/23/28/black-businessman-4599847__340.jpg', rank:'Group Director, Cloud Services, Country Manager, Kenya', description:'Ted has been the CSquared Kenya Group Director, Cloud Services & Country Leader since January 2022. He joined CSquared in October 2021 as Group Director, Cloud Services. He has over 18 years’ experience in the I.T space having worked at Cisco for over 15 years in various technical & business roles spanning across The Maghreb, West & Eastern Africa, where he led technical experts to drive transformational initiatives & business outcomes for public sector, enterprise and service provider customers. Prior to joining CSquared, he was the Director, Products & Innovations at Telkom Kenya. Ted is a graduate of Strathmore Business School and the University of Nairobi with a B.Sc. in Electrical & Electronics Engineering from the University of Nairobi. He also holds several technical certifications from Cisco, Microsoft and AWS. Ted is focused on leveraging cloud technologies to drive digital transformation across Africa.'},{name:'Andrew Banturaki', image:'https://cdn.pixabay.com/photo/2019/11/03/23/28/black-businessman-4599847__340.jpg', rank:'Atg Country Manager Uganda',description:'Andrew Banturaki has been Acting Country Manager for CSquared Uganda since August 2022 He has extensive working experience in sales and marketing positions for over the last 20 years and has held leadership positions in multiple roles across Uganda,Tanzania and Burundi He has worked in the Telecommunications industry as a Business Leader for companies like Google/CSquared, MTN Uganda, Uganda Telecom, Orange and Sure Telecom. Andrew is also Chief Sales & Marketing Officer at CSquared Uganda and currently serves as a board member for Fund House Limited and BINS Uganda. He holds a BA (Hons) Political Science from Makerere University Kampala, an Executive MBA and a certificate in Business Intelligence & Data Analytics from Strathmore Business School.Andrew is passionate about transformational leadership and is signed up for the Executive Leadership Programme at Strathmore Business School.'}];


  constructor(private http:HttpClient) { }

  getFiberServices(){
    return this.fiberservices;
  }

  getCloudServices(){
    return this.cloudservices;
  }

  getOneCloudItem(index:number){
    return this.cloudservices[index];
  }

  getOneFiberItem(index:number){
    return this.fiberservices[index];
  }

  getAboutSection(){
    return this.aboutpage;
  }

  getManagement(){
    return this.management;
  }

  getTeamMember(index:number){
    return this.management[index];
  }
}
