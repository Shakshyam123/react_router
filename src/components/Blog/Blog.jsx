import { useState } from "react";
import "./blog.css";

function Blog() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [pass, setPass] = useState("");
  const [conf, setConf] = useState("");
  const [country, setCountry] = useState("");

  const [nameError, setNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [passError, setPassError] = useState("");
  const [confError, setConfError] = useState("");
  function onSubmit() {
    // console.log(name);
    // console.log(email);
    // console.log(gender);
    // console.log(pass);
    // console.log(conf);
    // console.log(cou);
    if (!name) {
      setNameError("!please enter your name!");
    } else {
      setNameError("");
    }
    if (!gender) {
      setGenderError("!please enter your gender!");
    } else {
      setGenderError("");
    }
    if (!email) {
      setEmailError("!please enter your email!");
    } else {
      setEmailError("");
    }
    if (!country) {
      setCountryError("!please select a country!");
    } else {
      setCountryError("");
    }
    if (!pass) {
      setPassError("!please enter password!");
    } else {
      setPassError("");
    }
    if (!conf) {
      setConfError("!please re-enter your password!");
    } else {
      setConfError("");
    }
  }

  return (
    <div>
      <h1 className="coc">Fill this form</h1>
      <div className="blog">
        <div className="class">
          <form>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <span className="mistake">{nameError}</span>

            <label>Gender:</label>
            <br />
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => setGender(e.target.value)}
            />

            <label>male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => setGender(e.target.value)}
            />
            <label>female</label>

            <br />
            <span className="mistake">{genderError}</span>

            <label>Email:</label>
            <input
              type="gmail"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <span className="mistake">{emailError}</span>

            <select
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              value={country}
            >
              <option value="">Select...</option>
              <option value="nep">nepal</option>
              <option value="china">china</option>
              <option value="ind">india</option>
            </select>
            <br />
            <span className="mistake">{countryError}</span>

            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              value={pass}
            />

            <br />
            <span className="mistake">{passError}</span>

            <label>Confirm password:</label>
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) => {
                setConf(e.target.value);
              }}
              value={conf}
            />

            <br />
            <span className="mistake">{confError}</span>
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
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
