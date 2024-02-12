import { useState } from "react";
import "./blog.css";

function Blog() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [gender, setGender] = useState("");
  // const [pass, setPass] = useState("");
  // const [conf, setConf] = useState("");
  // const [country, setCountry] = useState("");

  // const [nameError, setNameError] = useState("");
  // const [genderError, setGenderError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [countryError, setCountryError] = useState("");
  // const [passError, setPassError] = useState("");
  // const [confError, setConfError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    country: "",
    pass: "",
    conf: "",
  });
  const [formDataError, setFormDataError] = useState({
    nameError: "",
    genderError: "",
    emailError: "",
    countryError: "",
    passError: "",
    confError: "",
  });
  console.log(formData);

  function onSubmit(e) {
    e.preventDefault();
    setFormDataError({
      nameError: "",
      genderError: "",
      countryError: "",
      passError: "",
      confError: "",
    });
    if (!formData.name) {
      setFormDataError((state) => {
        return { ...state, nameError: "!please enter your name!" };
      });
    }

    if (!formData.gender) {
      setFormDataError((state) => {
        return { ...state, genderError: "Please select a gender" };
      });
    }
    if (!formData.email) {
      setFormDataError((state) => {
        return { ...state, emailError: "!please enter your email!" };
      });
    }
    if (!formData.country) {
      setFormDataError((state) => {
        return { ...state, countryError: "!please select a country!" };
      });
    }
    if (!formData.pass) {
      setFormDataError((state) => {
        return { ...state, passError: "!please enter password!" };
      });
    }
    if (!formData.conf) {
      setFormDataError((state) => {
        return { ...state, confError: "!please re-enter your password!" };
      });
    }
    if (formData.pass !== formData.conf && formData.conf !== "") {
      setFormDataError((state) => {
        return { ...state, confError: "!passwords do not match!" };
      });
    }
  }

  return (
    <div className="out">
      <h1 className="coc">Fill this form</h1>
      <div className="blog">
        <div className="class">
          <form>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
            <span className="mistake">{formDataError.nameError}</span>

            <label>Gender:</label>
            <br />
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />

            <label>male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />
            <label>female</label>

            <br />
            <span className="mistake">{formDataError.genderError}</span>

            <label>Email:</label>
            <input
              type="gmail"
              placeholder="Email"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              value={formData.email}
            />
            <span className="mistake">{formDataError.emailError}</span>

            <select
              onChange={(e) => {
                setFormData({ ...formData, country: e.target.value });
              }}
              value={formData.country}
            >
              <option value="">Select...</option>
              <option value="nep">nepal</option>
              <option value="china">china</option>
              <option value="ind">india</option>
            </select>
            <br />

            <span className="mistake">{formDataError.countryError}</span>

            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setFormData({ ...formData, pass: e.target.value });
              }}
              value={formData.pass}
            />
            <span className="mistake">{formDataError.passError}</span>

            <br />

            <label>Confirm password:</label>
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) => {
                setFormData({ ...formData, conf: e.target.value });
              }}
              value={formData.conf}
            />

            <span className="mistake">{formDataError.confError}</span>

            <button
              onClick={(e) => {
                onSubmit(e);
              }}
              className="button"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Blog;
