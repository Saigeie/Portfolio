import "../styling/_components/navbar.css"

export default function() {
    return (
      <div className="navbar">
        <div></div>
        <div className="list">
          <ul>
            <li>
              <a href="https://github.com/Saigeie">Github</a>
            </li>
            <li>
              <a href="https://rubybots.co/community">Community</a>
            </li>
            <li>
              <a href="https://discord.com/users/462936117596127232">Discord</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <a href="https://rubybots.co/community" className="btn primary">
            Contact
          </a>
        </div>
      </div>
    );
}