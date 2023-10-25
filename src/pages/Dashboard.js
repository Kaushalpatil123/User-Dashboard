import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import "../dashboard.css";
import Header from "../Components/Header";
import TopCard from "../Components/TopCard";
import Bargraph from "../Components/Bargraph";
import Bottomcard from "../Components/Bottomcard";
import addUser from "../img/add user.png";

const Dashboard = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("basic");
  const [basicInputs, SetBasicInputs] = useState({
    Name: "",
    Email: "",
    Phone: "",
  });
  const [socialInputs, SetSocialInputs] = useState({
    instagram: "",
    youtube: "",
  });

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputInsta, setInputInsta] = useState("");
  const [inputYt, setInputYt] = useState("");

  const handleInputChange = (catagory, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (catagory == "basic") {
      SetBasicInputs({ ...basicInputs, [name]: value });
    } else if (catagory == "social") {
      SetSocialInputs({ ...socialInputs, [name]: value });
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormVisible(false);
    const enteredName = basicInputs.Name;
    const enteredEmail = basicInputs.Email;
    const enteredPhone = basicInputs.Phone;
    const enteredInsts = socialInputs.instagram;
    const enteredYt = socialInputs.youtube;
    setInputName(enteredName);
    setInputEmail(enteredEmail);
    setInputPhone(enteredPhone);
    setInputInsta(enteredInsts);
    setInputYt(enteredYt);
  };
  return (
    <div>
      <div className="mainboard">
        <div className="navigation">{<Sidebar />}</div>
        <div className="dashboard">
          {<Header />}
          {<TopCard />}
          {<Bargraph />}

          <div className="bottomcardcomponent">{<Bottomcard />}</div>
          <div className="bottomcardsright">
            <div className="adduser">
              {!isFormVisible && (
                <a onClick={() => setFormVisible(true)}>
                  <img src={addUser} alt="" />
                </a>
              )}
            </div>

            <div className="userform">
              {isFormVisible && (
                <form className="floating-form" onSubmit={handleFormSubmit}>
                  <h3 className="userformhead">Add New Profile</h3>
                  <div className="categories">
                    <div
                      className={`category ${
                        selectedCategory === "basic" ? "active" : ""
                      }`}
                      onClick={() => handleCategoryClick("basic")}
                    >
                      <h2 className="basic">Basic</h2>
                    </div>
                    <div
                      className={`category ${
                        selectedCategory === "social" ? "active" : ""
                      }`}
                      onClick={() => handleCategoryClick("social")}
                    >
                      <h2 className="social">Social</h2>
                    </div>
                  </div>
                  <hr />
                  <div className="userinputs">
                    {selectedCategory === "basic" && (
                      <div className="basic-inputs">
                        <label htmlFor="firstName">Enter Name:</label>
                        <br />
                        <input
                          className="inputfield"
                          type="text"
                          id="firstName"
                          name="Name"
                          value={basicInputs.Name}
                          required
                          onChange={(e) => handleInputChange("basic", e)}
                        />
                        <br />
                        <label htmlFor="lastName">Enter Email:</label>
                        <br />
                        <input
                          className="inputfield"
                          type="email"
                          id="lastName"
                          name="Email"
                          value={basicInputs.Email}
                          required
                          onChange={(e) => handleInputChange("basic", e)}
                        />
                        <br />
                        <label htmlFor="lastName">Enter Phone:</label>
                        <br />
                        <input
                          className="inputfield"
                          type="number"
                          id="lastName"
                          name="Phone"
                          value={basicInputs.Phone}
                          required
                          onChange={(e) => handleInputChange("basic", e)}
                        />
                      </div>
                    )}

                    {selectedCategory === "social" && (
                      <div className="social-inputs">
                        <label htmlFor="instagram">Instagram Link:</label>
                        <br />
                        <input
                          className="inputfield"
                          type="text"
                          id="instagram"
                          name="instagram"
                          value={socialInputs.instagram}
                          required
                          onChange={(e) => handleInputChange("social", e)}
                        />
                        <br />
                        <label htmlFor="youtube">Youtube Link:</label>
                        <br />
                        <input
                          className="inputfield"
                          type="text"
                          id="youtube"
                          name="youtube"
                          value={socialInputs.youtube}
                          required
                          onChange={(e) => handleInputChange("social", e)}
                        />
                      </div>
                    )}
                  </div>
                  <button className="useraddbtn" type="submit">
                    Add
                  </button>
                </form>
              )}
            </div>
            <h6 className="username">{inputName}</h6>
            <div className="info">
              <div className="basicdetails">
                <p className="contacts">{inputPhone}</p>
                <p className="contacts">{inputEmail}</p>
              </div>
              <div className="linksdetails">
                <p className="sociallink">{inputInsta}</p>
                <p className="sociallink">{inputYt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
