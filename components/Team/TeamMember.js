import Image from "next/image";
import NoAvtar from '../../public/noAvatar.png'

const TeamMember = ({ image, name, designation}) => {
  return (
    <div className="team-member col-lg-3">
      <div className="team-member-image">
        <Image src={image || NoAvtar} alt={name} />
      </div>
      <div className="info">
      <div className="team-member-name"><h2>{name}</h2></div>
      <div className="team-member-designation"><h3>{designation}</h3></div>
      <div className="social-links">

      </div>
      </div>
      </div>
  );
}
export default TeamMember