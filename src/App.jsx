/* eslint-disable react/prop-types */
import "./styles/style.css";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
};

function Avatar() {
  return (
    <div className="avatar">
      <img
        src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t1.6435-9/91428752_2670673366500313_8193363081691136000_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TM0hVV7le74Q7kNvgFXZ7zs&_nc_ht=scontent.fjsr6-1.fna&oh=00_AYDlKNR3yuvjjTf97iHDQ37BYXroBzoGW19MJELgIc8FtQ&oe=66823F96"
        alt="my-picture"
      />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1 className="title">Md Rakibur Rahman</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum fugit
        repudiandae delectus voluptatum quae aliquam unde eos, ducimus quo, et
        aut error ipsum exercitationem!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="RECT" emoji="😍" color="red" />
      <Skill skill="Express" emoji="😭" color="orange" />
      <Skill skill="Javascript" emoji="😭" color="teal" />
      <Skill skill="Wordpress" emoji="😂" color="green" />
      <Skill skill="HTML CSS" emoji="😍" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span className="skill-name">{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
