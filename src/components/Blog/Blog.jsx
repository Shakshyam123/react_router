import "./blog.css";

function Blog() {
  return (
    <div>
      <h1 className="coc">Fill this form</h1>
      <div className="blog">
        <div className="class">
          <form>
            <label>Name:</label>
            <input type="text" placeholder="name" />
            <br />
            <label>Email:</label>
            <input type="gmail" placeholder="Email" />
            <br />
            <label>Password:</label>
            <input type="password" placeholder="password" />
            <br />
            <label>Confirm password:</label>
            <input type="password" placeholder="Confirm password" />
            <br />
            <button className="button">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Blog;
