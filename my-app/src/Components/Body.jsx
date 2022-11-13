import Accordion_UI from "./Accordion";
import Accordion_two from "./Accordion_two";
import Footer from "./Footer";
import Input_UI from "./Input_UI";

function Body() {
  return (
    <>
      {/* first */}
      <div
        style={{
          width: "100%",
          height: "500px",
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ width: "40%", height: "77%" }}>
          <h1
            style={{ fontSize: "50px", fontWeight: "bold", lineHeight: "56px" }}
          >
            Connect everything. Achieve anything.
          </h1>
          <br />
          <h1 style={{ fontSize: "20px" }}>
            Accelerate work and unlock potential with powerful apps that connect
            your data, workflows and teams.
          </h1>
          <br />
          <Input_UI></Input_UI>
          <h1>No credit card required</h1>
        </div>
        <div style={{ width: "44%", height: "100%" }}>
          <img
            style={{ height: "100%", width: "100%" }}
            src="https://images.ctfassets.net/wl95ljfippl8/46aMTnfLaa6Xzj3ZKpI7rN/cc1c4bf25d14ca5f65294ea336eabd1a/4-3_Hero-Trydot-C.jpg?w=3840"
            alt=""
          />
        </div>
      </div>
      {/* second */}
      <div
        style={{
          width: "80%",
          margin: "auto",
          height: "100px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "20px" }}>
          Trusted by leading companies of all sizes
        </h1>
        <img
          style={{ width: "10%" }}
          src="https://images.ctfassets.net/wl95ljfippl8/7pKtkFBKIr5OWbcHfcFmZo/5d93a573d1968875b111b5fb0efca65b/Netflix_2.svg?w=3840"
          alt=""
        />
        <img
          style={{ width: "10%" }}
          src="https://images.ctfassets.net/wl95ljfippl8/Z43qrrJSE9UkX3loDZKXj/36f27ede0a865dbd82afa43f4460e55d/Time_2.svg?w=3840"
          alt=""
        />
        <img
          style={{ width: "10%" }}
          src="https://images.ctfassets.net/wl95ljfippl8/6ncbs7NER6atSr6hxMUIPq/4e0954383a2dac58f70acb36aa592adc/Buzzfeed_2.svg?w=3840"
          alt=""
        />
        <img
          style={{ width: "10%" }}
          src="https://images.ctfassets.net/wl95ljfippl8/654l9KVweY5skKNdQtiBki/f6844f92e3199b987622f82aa30d2cf7/Shopify_2.svg?w=3840"
          alt=""
        />
      </div>
      {/* third */}
      <div
        style={{
          width: "80%",
          margin: "auto",
          height: "120px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{ fontSize: "40px", lineHeight: "37px", fontWeight: "bold" }}
        >
          Create solutions that mirror your business
        </h1>
        <h1>
          Move work forward faster with no-code apps that perfectly match your
          team’s agility and scale.
        </h1>
      </div>

      {/* fourth */}
      <div
        style={{
          margin: "auto",
          width: "80%",
          marginTop: "100px",
          height: "400px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ width: "40%", height: "77%" }}>
          <h1
            style={{ fontSize: "50px", fontWeight: "bold", lineHeight: "56px" }}
          >
            Unite every stream of work.
          </h1>
          <br />
          <h1 style={{ fontSize: "20px" }}>
            Create a single source of truth that’s tailored precisely to how
            your teams work. Include everything you need, nothing you don’t.
          </h1>
          <br />
          <h1 style={{ color: "blue" }}>Explore the product --></h1>
        </div>
        <div style={{ width: "44%", height: "100%" }}>
          <img
            style={{ height: "100%", width: "100%" }}
            src="https://images.ctfassets.net/wl95ljfippl8/4Y4FuH47t9OIljWwvQzeXI/a73057ce6e1d9316eae5f067247152f4/Homepage_Anim_02_Unite_FINAL.gif?w=3840"
            alt=""
          />
        </div>
      </div>

      {/* fifth */}
      <div
        style={{
          width: "80%",
          marginTop: "100px",
          margin: "auto",
          height: "400px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ width: "44%", height: "100%" }}>
          <img
            style={{ height: "100%", width: "100%" }}
            src="https://images.ctfassets.net/wl95ljfippl8/3nngLvRshd7vQf1sybaEIo/eee246fb660ac792277bdfd694ae7ec9/Homepage_Anim_03_TurnInformation_FINAL.gif?w=3840"
            alt=""
          />
        </div>
        <div style={{ width: "40%", height: "77%" }}>
          <h1
            style={{ fontSize: "50px", fontWeight: "bold", lineHeight: "56px" }}
          >
            Interface with work in a new way
          </h1>
          <br />
          <h1 style={{ fontSize: "20px" }}>
            Create custom interfaces that give each and every teammate the
            relevant information they need, and a simple way to take action.
          </h1>
          <br />
          <h1 style={{ color: "blue" }}>Learn about Interface designer</h1>
        </div>
      </div>

      {/* fifth */}
      <div
        style={{
          margin: "auto",
          width: "80%",
          marginTop: "100px",
          height: "300px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ width: "40%", height: "77%" }}>
          <h1
            style={{ fontSize: "50px", fontWeight: "bold", lineHeight: "56px" }}
          >
            Bring all your data together
          </h1>
          <br />
          <h1 style={{ fontSize: "20px" }}>
            All your information. Always up to date. At your fingertips. Keep
            everything in sync across your organization.
          </h1>
          <br />
          <h1 style={{ color: "blue" }}>Learn about Sync</h1>
        </div>
        <div style={{ width: "44%", height: "100%" }}>
          <img
            style={{ height: "100%", width: "100%" }}
            src="https://images.ctfassets.net/wl95ljfippl8/2fOLirjicpezmKn0oNEL7P/e56bdd05b02c4ed0e0478e192988d578/2560x1440-Sync-Update.png?w=3840"
            alt=""
          />
        </div>
      </div>
      {/* sixth */}
      <div
        style={{
          width: "80%",
          margin: "auto",
          height: "100px",
          marginTop: "150px",
          display: "flex",
          justifyContent: "space-between",
          
        }}
      >
        <div
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            width: "30%",
            
          }}
        >
          Get started quickly
        </div>
        <div style={{ width: "40%" ,fontSize:"20px"}}>
          Begin building on day one. Airtable’s pre-made templates and intuitive
          design help you tackle even your most complex needs, right away.
        </div>
      </div>

      {/* accordion */}
      <div style={{width:"100%",height:"500px",marginTop:"50px",display:"flex",justifyContent:"space-around",gap:"20px"}}>
        <div style={{width:"36%"}}><Accordion_UI></Accordion_UI></div>
        <div style={{width:"54%"}}>
            <iframe style={{width:"100%",height:"100%"}} src="https://videos.ctfassets.net/wl95ljfippl8/7lHgyFaVthdy4O1pGpJAc3/5f05f9edac098070984f97ebc664627c/Homepage_Anim_05_SeeValueFast_FINAL__1_.mp4?autoplay=1&mute=1" frameborder="0"></iframe>
        </div>
      </div>
      
      {/* eight */}
      <div
        style={{
          width: "80%",
          margin: "auto",
          height: "100px",
          marginTop: "150px",
          display: "flex",
          justifyContent: "space-between",
          
        }}
      >
        <div
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            width: "50%",
            
          }}
        >
          Transform how teams work at scale
        </div>
        <div style={{ width: "40%" ,fontSize:"20px"}}>
        Discover deep integrations, advanced extensibility, expert support—everything your organization needs to reach new heights.
        </div>
      </div>

      {/* nine */}
      <div style={{width:"100%",height:"500px",marginTop:"100px",display:"flex",justifyContent:"space-around",gap:"20px"}}>       
        <div style={{width:"54%"}}>
           <img src="https://images.ctfassets.net/wl95ljfippl8/4wv9PrDMZbl9QJ0BgpHkdU/6764caec6be42dbfe91af5df984fd832/homepage-getsupport.jpg" alt="" />
        </div>
        <div style={{width:"36%"}}><Accordion_two></Accordion_two></div>
      </div>
{/* ten */}
<div
        style={{
          width: "80%",
          margin: "auto",
          height: "100px",
          marginTop: "150px",
          display: "flex",
          justifyContent: "space-between",
          
        }}
      >
        <div
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            width: "70%",
            
          }}
        >
          300,000+ innovative companies use Airtable every day. Join them.
        </div>
        <div style={{ width: "16%" ,fontSize:"20px"}}>
       <button style={{backgroundColor:"blue",color:"white",padding:"5px",borderRadius:"10px"}}>Sign up for free</button>
        </div>
      </div>

      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default Body;
