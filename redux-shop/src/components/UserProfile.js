import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useState, useEffect } from "react";
import user from '../img/user.png';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(result => {
        const randomIndex = Math.floor(Math.random() * result.length);
        setProfile(result[randomIndex]); // 👈 seleziona un profilo casuale
      });
  }, []);

  if (!profile) {
    return <div className='Gradient p-3 mb-4'><h1>Loading profile...</h1></div>;
  }

  return (
    <div className='Gradient p-3 mb-4'>
      <h1 style={{ margin: "15px" }}>My Account</h1>
      <div className="col-md-3 d-flex justify-content-center" style={{ marginBottom: '30px' }}>
        <Card style={{ height: "400px", width: '28rem', marginBottom: '20px', marginTop: "100px", textAlign: "center" }}>
          <div className="text-start" style={{ marginTop: "30px" , marginLeft: "80px" }}>
            <img src={user} alt="User avatar" style={{ height: '50px', }} />
          </div>
          <Card.Body style={{ marginTop: "10px", textAlign: "left", marginLeft: "40px" }}>
            <Card.Title style={{color:'CornflowerBlue', fontSize:'32px'}}>{profile.username}</Card.Title>
            <Card.Text>Name: {profile.name.firstname} {profile.name.lastname}</Card.Text>
            <Card.Text>Address: {profile.address.city}, {profile.address.street}</Card.Text>
            <Card.Text>Phone: {profile.phone}</Card.Text>
            <Card.Text>Email: {profile.email}</Card.Text>
            <Card.Text>Password: *****</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
