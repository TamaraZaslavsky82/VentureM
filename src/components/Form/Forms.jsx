import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Forms = () => {
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [fundraiseAmount, setFundraiseAmount] = useState("");
  const [preMoneyValuation, setPreMoneyValuation] = useState("");
  const [revenueHistory, setRevenueHistory] = useState("");
  const [industry, setIndustry] = useState("");
  const [leadershipTeam, setLeadershipTeam] = useState("");
  const [pitchDeck, setPitchDeck] = useState("");
  const [learnAbout, setLearnAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, such as send it to a backend server
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h3
        style={{
          backgroundColor: "rgb(185, 119, 14)",
          marginBottom: "80px",
          color: "whitesmoke",
          width:'300px',
          borderRadius:'10px',
          display:'flex',
          justifyContent:'center'
        }}
      >
        Investment Form
      </h3>
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="companyName">
          <Form.Label>Company Name:</Form.Label>
          <Form.Control
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country:</Form.Label>
          <Form.Control
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="companyDescription">
          <Form.Label>Company Description in 200 words or less:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="fundraiseAmount">
          <Form.Label>Fundraise Amount:</Form.Label>
          <Form.Control
            type="text"
            value={fundraiseAmount}
            onChange={(e) => setFundraiseAmount(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="preMoneyValuation">
          <Form.Label>Pre-Money Valuation If Set:</Form.Label>
          <Form.Control
            type="text"
            value={preMoneyValuation}
            onChange={(e) => setPreMoneyValuation(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="revenueHistory">
          <Form.Label>Revenue history:</Form.Label>
          <Form.Control
            type="text"
            value={revenueHistory}
            onChange={(e) => setRevenueHistory(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="industry">
          <Form.Label>Industry:</Form.Label>
          <Form.Control
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="leadershipTeam">
          <Form.Label>Leadership Team (include Linkedin links):</Form.Label>
          <Form.Control
            type="text"
            value={leadershipTeam}
            onChange={(e) => setLeadershipTeam(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="pitchDeck">
          <Form.Label>Attachments/ Pitch deck:</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setPitchDeck(e.target.files[0])}
          />
        </Form.Group>

        <Form.Group controlId="learnAbout">
          <Form.Label>How did you learn about Maiz Ventures?</Form.Label>
          <Form.Control
            type="text"
            value={learnAbout}
            onChange={(e) => setLearnAbout(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Forms;
