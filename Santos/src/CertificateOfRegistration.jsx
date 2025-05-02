import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import FreeTuitionImage from "./assets/FTimage.png";
import EaristLogo from "./assets/EaristLogo.png";


const CertificateOfRegistration = () => {
  const [data, setdata] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedSignature, setUploadedSignature] = useState(null);
  const [currentDate, setCurrentDate] = useState("");

  const getEmployeeNumFromToken = () => {
    const token = localStorage.getItem("token"); // Get token from localStorage
    if (token) {
      const decoded = jwtDecode(token);
      console.log("Decoded Token: ", decoded);
      return decoded.employeeNumber; // Get the employeeNumber
    }
    return null;
  };


  const employeeNum = getEmployeeNumFromToken();

useEffect(() => {
      axios
        .get("http://localhost:5000/api/data")
        .then((response) => {
          console.log("Fetched Data:", response.data); 
          setdata(response.data);
          
        })
            
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);


  const filteredData = data.filter((item) => String(item.employeeID) === String(employeeNum));

  console.log("Filtered Data:", filteredData);

  const handleSignatureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedSignature(reader.result);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = "";
  };


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
     event.target.value = "";
  };


  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";


      const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
      setCurrentDate(formattedDate);
    };


    updateDate();
    const interval = setInterval(updateDate, 1000);
    return () => clearInterval(interval);
  }, []);


  const containerStyle = {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    backgroundColor: "#f8f9fa",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
    marginTop: "50px",
    color: "Black",
    overflowY: "scroll",
  };


  const contentStyle = {
    color: "black",
    width: "100%",
    maxWidth: "800px",
    paddingBottom: "90px",
  };

  const studentData = filteredData.length > 0 ? filteredData[0] : {};

  return (


    <div style={containerStyle}>
      <div style={contentStyle}>
        <form
          style={{
            border: "1px solid black",
            padding: "0.25in",
            width: "8in",
            marginBottom: "7%",
            height: "fit-content",
            position: "relative",
          }}
        >
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              fontFamily: "Arial Narrow, Arial, sans-serif",
              width: "8in",
              position: "relative",
              tableLayout: "fixed",
            }}
          >
            <tbody>
              <tr>
                <td colSpan={2} style={{ height: "0.1in", fontSize: "72.5%" }}>
                  <b>


                  </b>
                </td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
              </tr>
              <tr>
                <td colSpan={2} style={{ height: "0.1in", fontSize: "62.5%" }}>
                  <b>


                  </b>
                </td>
              </tr>
              <tr>


                <td colSpan={40} style={{ height: "0.5in", textAlign: "center" }}>
                  <table width="100%" style={{ borderCollapse: "collapse", fontFamily: "Arial Narrow, Arial, sans-serif" }}>
                    <tbody>
                      <tr>
                       
                        <td style={{ width: "20%", textAlign: "center" }}>
                          <img src={EaristLogo} alt="Earist Logo" style={{marginLeft: "25px", width: "150px", height: "110px" }} />
                        </td>


                        {/* Center Column - School Information */}
                        <td style={{ width: "60%", textAlign: "center", lineHeight: "1" }}>
                          <div>Republic of the Philippines</div>
                          <b>Eulogio "Amang" Rodriguez</b><br />
                          <b>Institute of Science and Technology</b><br />
                          Nagtahan St. Sampaloc, Manila<br />
                          <br />
                          <br />
                          <b style={{ fontSize: "16px", }}>CERTIFICATE OF REGISTRATION</b>
                        </td>


                        {/* Right Column - 2x2 Picture */}
                        <td
                          colSpan={4}
                          rowSpan={6}
                          style={{
                            textAlign: "center",
                            position: "relative",
                            width: "3.5cm",
                            height: "4.5cm", // Ensuring 2x2 size
                          }}
                        >
                          <div
                            style={{
                              width: "3.8cm",
                              height: "3.8cm",
                              marginRight: "30px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              position: "relative",
                            }}
                          >
                            {uploadedImage ? (
                              <img
                                src={uploadedImage}
                                alt="Uploaded"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  fontSize: "10px",
                                  lineHeight: "1.2",
                                  cursor: "pointer",
                                  textAlign: "center",
                                }}
                              >
                                Click to Upload Image
                              </div>
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                opacity: 0,
                                cursor: "pointer",
                              }}
                              title="Upload ID Picture"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>


              </tr>
              <tr>
                <td colSpan={15} style={{ height: "0.3in", fontSize: "62.5%" }}>




                </td>
              </tr>
              <tr>
                <td colSpan={10} style={{ height: "0.1in", fontSize: "55%" }}>
                  <i>
                    <b style={{ fontFamily: 'Arial Narrow, Arial, sans-serif', fontSize: '12px', color: "black",  margin: "0px 0px 0px 4px" }}>
                      Registration No:
                      <span style={{ color: "red", marginLeft: "5px"}}>
                        {studentData.registration_no || ""}
                      </span>
                    </b>
                  </i>
                </td>


                <td
                  colSpan={29}
                  style={{
                    height: "0.1in",
                    fontSize: "50%",
                    textAlign: "right",
                  }}
                >
                  <b style={{ fontFamily: 'Arial Narrow, Arial, sans-serif', fontSize: '12px', color: "black" }}>
                    Academic Year/Term : <span style={{ color: "red" }}>
                      {studentData.academic_year_term || ""}
                    </span>
                  </b>


                </td>
              </tr>
              <tr>
                <td
                  colSpan={40}
                  style={{
                    height: "0.2in",
                    fontSize: "72.5%",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <b>
                    <i style={{
                      color: "black", fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px', textAlign: "center", display: "block"
                    }}>
                      STUDENT GENERAL INFORMATION
                    </i>
                  </b>
                </td>
              </tr>
              

              <tr>
              <td
                colSpan={4}
                style={{
                }}
              >
                <input
                  type="text"
                  value={"Student No:"}
                  style={{
                    fontWeight: "bold",
                    fontFamily: 'Arial Narrow, Arial, sans-serif',
                    fontSize: '12px',
                    color: "black",
                    width: "98%",
                    border: "none",
                    outline: "none",
                    background: "none"
                  }}
                />
              </td>
              <td
                colSpan={12}
                style={{
                  fontSize: "62.5%",
                }}
              >
                <input
                  type="text"
                  value={studentData.student_no || ""}
                
                  style={{
                    fontFamily: "Arial",
                    color: "black",
                    width: "98%",
                    fontFamily: 'Arial Narrow, Arial, sans-serif',
                    fontSize: '12px',
                    border: "none",
                    outline: "none",
                    background: "none"
                  }}
                />
              </td>
              <td
                colSpan={3}
                style={{
                  fontSize: "62.5%",
                }}
              >
                <input
                  type="text"
                  value={"College:"}
                  style={{
                    fontWeight: "Bold",
                    color: "black",
                    width: "98%",
                    fontFamily: 'Arial Narrow, Arial, sans-serif',
                    fontSize: '12px',
                    border: "none",
                    outline: "none",
                    background: "none"
                  }}
                />
              </td>
              <td
                colSpan={14}
                style={{
                  fontSize: "62.5%"
                }}
              >
                <input
                  type="text"
                  value={studentData.college || ""}
                   
                  style={{
                    color: "black",
                    width: "98%",
                    border: "none",
                    fontFamily: 'Arial Narrow, Arial, sans-serif',
                    fontSize: '12px',
                    outline: "none",
                    background: "none"
                  }}
                />
              </td>
              </tr>

              <tr>
                <td
                  colSpan={3}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Name:"}
                    style={{
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      color: "black",
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={13}
                  style={{


                    fontSize: "62.5%",


                  }}
                >
                  <input
                    type="text"
                    value={studentData.name || ""}
                     
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={3}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Program:"}
                    style={{
                      color: "black",
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      fontWeight: "Bold",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={17}
                  style={{


                    fontSize: "62.5%",


                  }}
                >
                  <input
                    type="text"
                    value={studentData.program || ""}
                      
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    value={"Gender :"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={13}
                  style={{


                    fontSize: "50%",


                  }}
                >
                  <input
                    type="text"
                    value={studentData.gender || ""}
                      
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={11}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    value={"Major:"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>


                <td
                  colSpan={5}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Curriculum:"}
                    style={{
                      color: "black",
                      width: "98%",
                      fontWeight: "Bold",
                      border: "none",
                      textAlign: "left",
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={5}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                   <input
                      type="text"
                      value={studentData.curriculum || ""}
                      
                      style={{
                        color: "black",
                        fontFamily: 'Arial Narrow, Arial, sans-serif',
                        fontSize: '12px',
                        width: "98%",
                        border: "none",
                        textAlign: "left",
                        outline: "none",
                        background: "none",
                      }}
                    />
                  </td>


              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    value={"Age :"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={14}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    value={studentData.age || ""}
                     
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    value={"Year Level:"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={7}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    value={studentData.year_level || ""}
                    
                    style={{
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={8}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    value={"Scholarship/Discount : "}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                    colSpan={5}
                    style={{
                      fontSize: "50%",
                    }}
                  >
                    <input
                      type="text"
                      value={studentData.scholarship_discount || ""}
                       
                      style={{
                        color: "black",
                        width: "100%",
                        border: "none",
                        fontFamily: 'Arial Narrow, Arial, sans-serif',
                        fontSize: '12px',
                        outline: "none",
                        background: "none",
                      }}
                    />
                  </td>
              </tr>

              <tr>
                <td
                  colSpan={5}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    value={"Email Address:"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={20}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                      type="text"
                      value={ studentData.email_address || ""}
                      style={{
                        color: "black",
                        width: "98%",
                        border: "none",
                        outline: "none",
                        fontFamily: 'Arial Narrow, Arial, sans-serif',
                        fontSize: '12px',
                        background: "none"
                      }}
                    />
                  </td>
              </tr>

              <tr>

              </tr>
              <tr>


                <td
                  colSpan={4}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial Narrow, Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",


                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  CODE
                </td>
                <td
                  colSpan={12}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial Narrow, Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  SUBJECT TITLE
                </td>


                <td
                  colSpan={6}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial Narrow, Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  UNIT
                </td>


                <td
                  colSpan={5}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial Narrow, Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  SECTION
                </td>
                <td
                  colSpan={7}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontSize: "12px",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  SCHEDULE/ROOM


                </td>
                <td
                  colSpan={6}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial Narrow, Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  FACULTY
                </td>
              </tr>
              <tr>
                <td
                  colSpan={1}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Lec
                </td>


                <td
                  colSpan={1}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Lab
                </td>
                <td
                  colSpan={2}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Credit
                </td>
                <td
                  colSpan={2}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Tuition
                </td>
              </tr>


              {Array.from({ length: 12 }).map((_, index) => {  // change length for rows
                const item = filteredData[index] || {};
                return (
                  <tr key={index}>
                    <td
                      colSpan={4}
                      style={{
                        height: "0.25in",
                        fontSize: "62.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={item.subject_code || ""}
                         
                        style={{
                          color: "black",
                          width: "98%",
                          border: "none",
                          outline: "none",
                          background: "none",
                          fontSize: "12px",
                          textAlign: "center",
                          fontFamily: "Arial Narrow, Arial, sans-serif"
                        }}
                      />
                    </td>
                    <td
                      colSpan={12}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black",
                        wordWrap: "break-word",
                        whiteSpace: "normal",
                      }}
                    >
                       <div
                          style={{
                            color: "black",
                            width: "100%",
                            border: "none",
                            outline: "none",
                            background: "none",
                            fontSize: "12px",
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                            margin: "0px 0px 0px 4px"
                          }}
                          >
                            {item.subject_title || ""}
                          </div>
                    </td>
                    <td
                      colSpan={1}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={item.lec_units || ""}
                          
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          border: "none",
                          outline: "none",
                          background: "none",
                          fontSize: "12px",
                          fontFamily: "Arial Narrow, Arial, sans-serif"
                        }}
                      />
                    </td>
                    <td
                      colSpan={1}
                      style={{
                        height: "0.25in",
                        fontSize: "62.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={item.lab_units || ""}
                          
                        style={{
                          color: "black",
                          width: "98%",
                          border: "none",
                          outline: "none",
                          background: "none", 
                          fontSize: "12px",
                          textAlign: "center",
                          fontFamily: "Arial Narrow, Arial, sans-serif"
                        }}
                      />
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={item.credit_units || ""}
                          
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          border: "none",
                          outline: "none",
                          background: "none",
                          fontSize: "12px",
                          fontFamily: "Arial Narrow, Arial, sans-serif"
                        }}
                      />
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={item.tuition_units || ""}
                          
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          fontSize: "0.45rem",
                          border: "none",
                          outline: "none",
                          background: "none",
                          fontSize: "12px",
                          fontFamily: "Arial Narrow, Arial, sans-serif"
                        }}
                      />
                    </td>
                    <td
                      colSpan={5}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={item.subject_section || ""}
                         
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          fontSize: "0.45rem",
                          border: "none",
                          outline: "none",
                          background: "none",
                          fontSize: "12px",
                          fontFamily: "Arial Narrow, Arial, sans-serif"
                        }}
                      />
                    </td>
                    <td
                      colSpan={7}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        value={item.subject_schedule_room || ""}
                          
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          fontSize: "0.45rem",
                          border: "none",
                          outline: "none",
                          background: "none",
                          fontSize: "12px",
                          fontFamily: "Arial Narrow, Arial, sans-serif"
                        }}
                      />
                    </td>
                    <td
                      colSpan={6}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black",
                      }}
                    >
                      <div
                          style={{
                            color: "black",
                            width: "100%",
                            border: "none",
                            outline: "none",
                            background: "none",
                            fontSize: "12px",
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                            margin: "0px 0px 0px 4px"
                          }}
                          >
                            {item.subject_faculty || ""}
                          </div>
                    </td>
                  </tr>
                );
              })}


              <tr>
                <td
                  colSpan={10}
                  style={{
                    height: "0.1in",
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <b style={{fontSize: "10px"}}>
                    <i>Note: Subject marked with
                      "*" is Special Subject.</i>
                  </b>
                </td>
                <td
                  colSpan={6}
                  style={{
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                    fontSize: "12px"
                  }}
                >
                  <b>Total Unit(s)</b>
                </td>

                <td
                    colSpan={1}
                    style={{
                      fontSize: "55%",
                      color: "black",
                      textAlign: "center",
                      border: "1px solid black",
  
                    }}
                  >
                    <input
                      type="text"
                      value={"14"}
                      style={{
                        color: "black",
                        width: "100%",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "0.8rem",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontFamily: "Arial Narrow, Arial, sans-serif"
                      }}
                    />
                    
                    
                    
                
  
                  </td>
                  <td
                    colSpan={1}
                    style={{
                      fontSize: "55%",
                      color: "black",
                      textAlign:"center",
                      border: "1px solid black",
                    }}
                  >
                    <input
                      type="text"
                      value={"5"}
                      style={{
                        color: "black",
                        width: "100%",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "0.8rem",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontFamily: "Arial Narrow, Arial, sans-serif"
                      }}
                    />
                  </td>
                  <td
                    colSpan={2}
                    style={{
                      fontSize: "55%",
                      color: "black",
                      textAlign: "center",
                      border: "1px solid black",
                    }}
                  >
                    <input
                      type="text"
                      value={"20"}
                      style={{
                        color: "black",
                        width: "100%",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "0.8rem",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontFamily: "Arial Narrow, Arial, sans-serif"
                      }}
                    />
                  </td>
                  <td
                    colSpan={2}
                    style={{
                      height: "0.1in",
                      fontSize: "55%",
                      color: "black",
                      textAlign: "center",
                      border: "1px solid black",
                    }}
                  >
                    <input
                      type="text"
                      value={"20"}
                      style={{
                        color: "black",
                        width: "100%",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "0.8rem",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontFamily: "Arial Narrow, Arial, sans-serif"
                      }}
                    />
                  </td>
                  <td
                    colSpan={2}
                    style={{
                      height: "0.1in",
                      fontSize: "55%",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                  </td>
                  <td
                    colSpan={2}
                    style={{
                      height: "0.1in",
                      fontSize: "55%",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                  </td>
                  <td
                    colSpan={3}
                    style={{
                      height: "0.1in",
                      fontSize: "55%",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                  </td>
                </tr>

                <tr
                  colSpan={12}
  
                  style={{
                    color: "white",
                    height: "0.1in",
                    fontSize: "62.5%",
                    backgroundColor: "gray",
                    textAlign: "center",
                  }}
                >
                </tr>

                <tr>
                <td
                  colSpan={19}
                  style={{
                    fontSize: "62.5%",
                    border: "1px solid black",
                    backgroundColor: "gray",
                  }}
                >
                  <input
                    type="text"
                    value={"A S S E S S E D  F E E S"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif"
                    }}
                  />
                </td>
                <td
                  colSpan={8}
                  style={{
                    fontSize: "62.5%",
                    color: "black",
                    textAlign: "center",
                  }}
                ></td>
              </tr>
              <tr>
                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Tuition (20 unit(s)) "}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 5px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"2,000.00"}
                    style={{
                      textAlign: "left",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>

                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"RULES OF REFUND"}
                    style={{
                      textAlign: "center",
                      color: "black",
                      marginLeft: "40px",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "10px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Athletic Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 5px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"50.00"}
                    style={{
                      textAlign: "left",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={
                      "1. Full refund of tuition fee - Before the start of classes"
                    }
                    style={{
                      textAlign: "left",
                      color: "black",
                      marginLeft: "40px",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "10px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Cultural Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 5px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"50.00"}
                    style={{
                      textAlign: "left",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={18}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={
                      "2. 80% refund of tuition fee - within 1 week from the start of classes"
                    }
                    style={{
                      textAlign: "left",
                      color: "black",
                      marginLeft: "40px",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "10px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Developmental Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 5px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"80.00"}
                    style={{
                      textAlign: "left",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={
                      "3. 50% refund - within 2 weeks from the start of classes."
                    }
                    style={{
                      textAlign: "left",
                      color: "black",
                      marginLeft: "40px",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "10px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Guidance Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 5px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"30.00"}
                    style={{
                      textAlign: "left",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"4. No refund - after the 2nd week of classes."}
                    style={{
                      textAlign: "left",
                      color: "black",
                      marginLeft: "40px",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "10px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Library Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 5px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"100.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Medical and Dental Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 5px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"130.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={20}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"PLEDGE UPON ADMISSION"}
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Registration Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 5px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"50.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={20}
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "black",
                    fontFamily: "Arial Narrow, Arial, sans-serif",
                    fontSize: "10px",
                  }}
                >
                  "As a student of EARIST, I do solemnly promise that I will
                </td>
              </tr>
              <tr>
                <td
                  colSpan={15}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Computer Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 5px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"500.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={20}
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "black",
                    fontFamily: "Arial Narrow, Arial, sans-serif",
                    fontSize: "10px",
                  }}
                >
                  comply with the rules and regulations of the Institution."
                </td>
              </tr>
              <tr>
                <td
                  colSpan={1}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",
                  }}
                >
                  <input
                    type="text"
                    value={""}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={13}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",
                  }}
                >
                  <input
                    type="text"
                    value={""}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={5}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={""}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                ></td>
                <td
                  colSpan={13}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Total Assessment : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 30px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"2990.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                ></td>
                <td
                  colSpan={13}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Less Financial Aid : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 30px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"2990.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                ></td>
                <td
                  colSpan={13}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Net Assessed : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 30px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>

                <td colSpan={20}>
                  <input
                    type="text"
                    value={"_________________________________"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                      textDecoration: "underline",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                ></td>
                <td
                  colSpan={13}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Credit Memo : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 30px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>

                <td colSpan={20}>
                  <input
                    type="text"
                    value={"Student's Signature"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                ></td>
                <td
                  colSpan={13}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Total Discount : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 30px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                ></td>
                <td
                  colSpan={13}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Total Payment : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 30px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                ></td>
                <td
                  colSpan={13}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Outstanding Balance : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                      margin: "0px 0px 0px 30px"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={19}
                  style={{
                    fontSize: "62.5%",
                    border: "1px solid black",
                    backgroundColor: "gray",
                  }}
                >
                  <input
                    type="text"
                    value={"S C H E D U L E  O F  P A Y M E N T"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"APPROVED BY : "}
                    style={{
                      color: "black",
                      textAlign: "left",
                      marginLeft: "20px",
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif"
                    }}
                  />
                </td>
                <td
                  colSpan={8}
                  style={{
                    fontSize: "55%",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "3.5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    {uploadedSignature ? (
                      <img
                        src={uploadedSignature}
                        alt="Signature"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <label
                        htmlFor="signatureUpload"
                        style={{
                          fontSize: "10px",
                          color: "gray",
                          cursor: "pointer",
                          padding: "5px",
                        }}
                      >
                        Click to upload your Signature
                      </label>
                    )}
                  </div>

                  {/* Hidden File Input */}
                  <input
                    id="signatureUpload"
                    type="file"
                    accept="image/*"
                    onChange={handleSignatureUpload}
                    style={{
                      display: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"1st Payment/Due"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={6}
                  style={{
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"2nd Payment/Due"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={6}
                  style={{
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"3rd Payment/Due"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={20}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"_______________________________"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      textDecoration: "underline",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                       fontFamily: "Arial Narrow, Arial, sans-serif"
                    }}
                  />
                </td>
                <td
                  colSpan={6}
                  style={{
                    fontSize: "62.5%",
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif"
                    }}
                  />
                </td>
                <td
                  colSpan={6}
                  style={{
                    fontSize: "62.5%",
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={"0.00"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      width: "98%",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif"
                    }}
                  />
                </td>
                <td
                  colSpan={20}
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <input
                    type="text"
                    value={"Registrar"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      width: "98%",
                      fontWeight: "bold",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={12}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Payment/Validation Date : "}
                    style={{
                      color: "black",
                      textAlign: "ledt",
                      width: "98%",
                      fontWeight: "bold",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={7}
                  style={{
                    height: "0.3in",
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={""}
                    style={{
                      textDecoration: "underline",
                      color: "black",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={12}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Official Receipt :"}
                    style={{
                      color: "black",
                      textAlign: "left",
                      width: "98%",
                      fontWeight: "bold",
                      border: "none",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={"Scholar  _____"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      width: "98%",
                      fontWeight: "bold",
                      fontFamily: "Arial Narrow, Arial, sans-serif",
                      fontSize: "12px",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ width: "20%", textAlign: "center" }}>
                  <img
                    src={FreeTuitionImage}
                    alt="EARIST MIS FEE"
                    style={{
                      marginTop: "10px",
                      width: "200px",
                      height: "150px",
                      marginLeft: "150px",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={40}
                  style={{
                    height: "0.25in",
                    fontSize: "62.5%",
                    textAlign: "right",
                    verticalAlign: "middle", // Centers vertically
                  }}
                >
                  <input
                    type="text"
                    value={currentDate}
                    
                    style={{
                      color: "black",
                      textAlign: "right", // Centers text inside the input
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={40}
                  style={{
                    height: "0.2in",
                    fontSize: "72.5%",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <b>
                    <i
                      style={{
                        color: "black",
                        textAlign: "center",
                        display: "block",
                        fontFamily:"Arial Narrow, Arial, sans-serif"
                      }}
                    >
                      KEEP THIS CERTIFICATE. YOU WILL BE REQUIRED TO PRESENT
                      THIS IN ALL YOUR DEALINGS WITH THE COLLEGE.
                    </i>
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default CertificateOfRegistration;

