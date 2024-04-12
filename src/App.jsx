import React from "react";
import "./App.css";
import "typeface-poppins";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

import last from "../images/last.jpg";

const person = {
  check: "Online",
  status: true
  // status:false,
};

const App = () => {
  return (
    <>
      <div className="container">
        <section>
          <div className="header">
            <img
              style={{ marginLeft: "30px", marginTop: "20px" }}
              src="https://s3-alpha-sig.figma.com/img/6baa/a9c9/7cbb691d0bf8e4efbb09d8e91c2e986c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eVKRkgBouutMMUdNZ4ueKNPi9bMhMMLnISqKPW-dU~MBc42xjue~8j9hjcAqiIuzuss-XINFsTsBr3j3uYZDwiAg15nW1A6AFCj0dZFYt30YWmdEiODBg3FC3k~HdvMl18054D9LgeKrHAXqWUv4HmMsAIgytLrj7gdFK4vxRO1lXauNiVREtHHOM8PW768rYkYpoTkZc-excULb67QdJIr3rcTV-G4jUKPQjo5j9HDZr-fdphQ8APPByY75NO7uCpCwD9oZbGkJmKs6vuvoljm6Xyg7V0bDIoqte8kAnPTya7nVvumDK2an5YZcLGJtCwajrUFoTlmHjTu2gFSmBA__"
              width="40px"
              height="40px"
              className="img1"
            ></img>
            <span
              style={{
                fontSize: "40px",
                marginTop: "10px",
                position: "absolute",
                left: "640px",
              }}
              className="dot"
            >
              .
            </span>
            <div className="nav">
              <h3
                style={{
                  marginLeft: "10px",
                  marginTop: "22px",
                  display: "flex",
                  alignItems: "center",
                  color: "blue",
                }}
              >
                Timpu
                <span style={{ marginLeft: "5px" }}>
                  {" "}
                  {/* Adjust the margin as needed */}
                  <img
                    src={last}
                    width="15px"
                    height="15px"
                    style={{ backgroundColor: "transparent" }}
                  />
                </span>
              </h3>

              <div className="as">
                <p
                  style={{
                    marginLeft: "10px",
                    fontSize: "16px",
                    color: "blue",
                  }}
                >
                  Chat Assistant
                </p>
                {person.status===true ? 
                  <p
                  style={{
                    marginLeft: "70px",
                    fontSize: "16px",
                    color: "blue",
                  }}
                  className="par"
                >
                  <span style={{ fontSize: "18px" }}>.</span>Online
                </p>  
                :
                <p
                style={{
                  marginLeft: "70px",
                  fontSize: "16px",
                  color: "blue",
                }}
                className="par"
              >
                Offline
              </p>
                  
              }
                
              </div>
            </div>
          </div>

          <div className="div">
            <div className="box1">
              <p>
                Hi Sam! I am your personal shopping assistant , how can i help
                you today ?
              </p>
            </div>
            <p
              style={{ marginTop: "4px", marginLeft: "21px", fontSize: "10px" }}
            >
              4.45pm
            </p>
          </div>
          <div
            className="div1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "0px",
            }}
          >
            <div className="box2">
              <p>I am looking for a hand bag, with long strap </p>
            </div>
            <p
              style={{
                marginRight: "10px",
                marginTop: "3px",
                fontSize: "10px",
              }}
            >
              4.46pm
            </p>
          </div>
          <p
            style={{
              marginTop: "0px",
              marginLeft: "17px",
              color: "gray",
              marginBottom: "0px",
              fontSize: "13px",
            }}
          >
            Popular Tags for handbag
          </p>
          <button type="button" style={{ marginLeft: "16px" }}>
            Clutch
          </button>
          <button type="button">Fabric Lining</button>
          <button type="button">Baggit</button>
          <button type="button">Multi</button>
          <div className="main">
            <div className="small">
              <img
                src="https://s3-alpha-sig.figma.com/img/689e/2faf/68cf127f505e43e548e19296947c8d09?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvJHNTJnVTam5IbdgovtdJjs~9a8CoaetZ9TxA04XJcYBUZm1NceknHk1t7HmanN27TDiDVXjVQFTExU1nuugTqpCmV3TBzPvCClYwB1CK3X5M8J0WJox6-hRVZ4Cy8LqNcuMaR3MXuJxKbOgBYzqlqlnkL0eALLnh0C9nyMlzkoGrIRO-V6pOxocffZoGWw6M3-PFbA83NbfA-Qt9Sc4I8MWZ-QVjeTjuFvBim04A6I1amF4biHstH3OlSpJnd0wMkcj-dz5~6Lv8dBYLe6R32Hy9xGLSRHLU9WGKtKuvnuZzjlKpF~HK37yqkVCFl4XPjlzeIBWm6Udx8zBOTgtw__"
                className="bag"
              ></img>
              <p
                style={{ marginBottom: "0px", fontSize: "13px" }}
                className="bag1"
              >
                Bags on Timpu{" "}
                <span style={{ marginLeft: "1px", marginTop: "0px" }}>
                  {" "}
                  {/* Adjust the margin as needed */}
                  <img
                    src={last}
                    width="15px"
                    height="15px"
                    style={{ backgroundColor: "transparent" }}
                  />{" "}
                </span>
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "440px",
                  marginLeft: "100px",
                  fontSize: "13px",
                }}
              >
                1123 Products
              </p>
            </div>
            <p style={{ fontSize: "13px", marginTop: "0px" }}>
              Or set filter and help us choose the best bag for you
            </p>
            <p style={{ fontSize: "10px" }}>4.48pm</p>

            <p
              style={{
                marginTop: "0px",
                marginLeft: "3px",
                color: "gray",
                marginBottom: "0px",
                fontSize: "13px",
              }}
            >
              Select filters
            </p>
            <FontAwesomeIcon
              icon={faBars}
              style={{ position: "absolute", bottom: "160px", left: "830px" }}
            />
            <span
              style={{
                position: "absolute",
                bottom: "158px",
                left: "850px",
                color: "gray",
                fontSize: "13px",
              }}
            >
              Filter
            </span>
            {/* <div style={{display:"flex"}}> */}
            <button type="button" style={{ marginLeft: "5px" }}>
              Strap-long<span style={{ marginLeft: "5px" }}>X</span>
            </button>
            <button type="button" className="gray-but">
              Colour<span style={{ marginLeft: "5px" }}>X</span>
            </button>
            <button type="button" className="gray-but">
              Size <span style={{ marginLeft: "0px" }}>X</span>
            </button>
            <button type="button" className="gray-but">
              Brand <span style={{ marginLeft: "5px" }}>X</span>
            </button>
            <button type="button" className="gray-but">
              Material <span style={{ marginLeft: "5px" }}>X</span>
            </button>
          </div>
          <section className="foot">
            <footer>
              <input
                type="text"
                placeholder="Type your Message"
                class="in"
              ></input>
              <button type="submit" className="sub">
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  style={{ color: "white" }}
                />
              </button>
              <p
                style={{
                  position: "absolute",
                  top: "714px",
                  left: "690px",
                  fontSize: "10px",
                  color: "gray",
                }}
                className="krunk"
              >
                Powerd By Krunk.ai
              </p>
              <img
                src="https://s3-alpha-sig.figma.com/img/5892/49d3/6a1a3489e0ba38aabde99ead2c795714?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8AKgOqoKnzpIPr6rqevkApH3w0zB8IEZQQVMtMTWaTegk9coUDtupQ4Ihl60lyzmMPtaAtSwr6usk1vSD-nTRr1jYFRXvKhgCHOEFZXgmFRtGPi4taBQ0E7sGYbwn0BF-671WAoGLEmCeikM0I6whxJYu1mYbFYZI5O3ILPO-eJd7ANrmNUT0DBKNlBLxY8-gqPrET-BtkhhO~LdNad3OwCeISr5PIDaRmRiikEt49os3BL47L7f986yyd2qXfYvLsdI9mlXY4dSXItlDdFkuntsj3KCHxZHUXVFsREM9Opm8mv0J3OdgB8oYayMQuxCYvCAhagCPGsNlvDfkNyRg__"
                className="las"
              ></img>
            </footer>
          </section>
        </section>
      </div>
    </>
  );
};

export default App;
