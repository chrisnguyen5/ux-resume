import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import yam from "public/images/yamaha.jpg";
import yam1 from "public/images/yamaha1.jpg";
import boeing from "public/images/boeing.jpg";
import bb from "public/images/bb.jpg";
import ct from "public/images/ct.jpg";

export const products = [
  {
    href: "https://www.yamaha.com/us/yvn/",
    title: "Yamaha YVN",
    description:
      "A landing page that caters to targeted audience.",
    thumbnail: yam,
    images: [yam],
    stack: ["Bootstap"],
    slug: "yamaha",
    content: (
      <div>
        <p>
        Competely designed and built the YVN website from concept to end-to-end product. 
        Site was mocked-up in Photoshop and executed with hand-coded Html5/CSS3/jQuery/Bootstrap. 
        Site is intended to target wholesale dealers.{" "}
        </p>
        
      </div>
    ),
  },
  {
    href: "http://staging1.rowdydesign.com/clients/boeing/flight-services-catalog/current/flight-services/",
    title: "Boeing Flight Catalog",
    description:
      "Online catalog for training and maintenance.",
    thumbnail: boeing,
    images: [boeing],
    stack: ["CustomJS", "Custom CSS"],
    slug: "boeing",
    content: (
      <div>
        <p>
        My goal for this project was to create an interactive experience for internal 
        Boeing employees to consume data. The purpose of this site was to replicate a 
        native app experience so that pilots can digitally search a platform without 
        having to travel with suitcases full of hard copy manuals. Assets and front-end 
        development were built from the ground up.{" "}
        </p>
        
      </div>
    ),
  },
  {
    href: "https://www.beachbody.com",
    title: "Beachbody",
    description:
      "Redesigned E-commerce platform",
    thumbnail: bb,
    images: [bb],
    stack: ["Bootstrap", "CustomJS"],
    slug: "beachbody",
    content: (
      <div>
        <p>
        I brainstormed with a group of designers to help create a fluid and responsive 
        E-commerce redesign. We approached every angle in user experience to help build 
        a quick and simple guest checkout. User Experience, assets, and site-map were 
        built from the ground up.{" "}
        </p>
        
      </div>
    ),
  },
  {
    href: "https://vimeo.com/33738006",
    title: "Lexus CT app",
    description:
      "A beautiful and comprehensive iPad app.",
    thumbnail: ct,
    images: [ct],
    stack: ["CustomCSS"],
    slug: "lexus",
    content: (
      <div>
        <p>
        I was very fortunate to be part of the launch of the first Lexus CT iPad app. 
        My involvement was assisting in designing and laying out the composition of 
        countless pages for this app.{" "}
        </p>
        
      </div>
    ),
  },
];
