import React, { useRef } from 'react';
import { Button } from '@mui/material';

const StudentsCSA = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <Button variant="contained" onClick={() => scrollToSection(section1Ref)}>KKEM March CSA</Button>
        <Button variant="contained" onClick={() => scrollToSection(section2Ref)}>KKEM March DSA</Button>
        <Button variant="contained" onClick={() => scrollToSection(section3Ref)}>KKEM March MLAI</Button>
        <Button variant="contained" onClick={() => scrollToSection(section4Ref)}>KKEM March FSD</Button>
        <Button variant="contained" onClick={() => scrollToSection(section5Ref)}>KKEM March DSA ST</Button>
        <Button variant="contained" onClick={() => scrollToSection(section6Ref)}>KKEM March DSA</Button>
      </div>

      <div ref={section1Ref} style={{ width: '100%', height: '200vh', backgroundColor: 'red',padding:"5px" }}>KKEM March CSA
<table className="table align-middle mb-0 bg-white">
<thead className="bg-light">
  <tr>
    <th>Name</th>
    <th>Title</th>
    <th>Status</th>
    <th>Position</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">John Doe</p>
          <p className="text-muted mb-0">john.doe@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Software engineer</p>
      <p className="text-muted mb-0">IT department</p>
    </td>
    <td>
      <span className="badge badge-success rounded-pill d-inline">Active</span>
    </td>
    <td>Senior</td>
    <td>
    <Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/6.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Alex Ray</p>
          <p className="text-muted mb-0">alex.ray@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Consultant</p>
      <p className="text-muted mb-0">Finance</p>
    </td>
    <td>
      <span className="badge badge-primary rounded-pill d-inline">Onboarding</span>
    </td>
    <td>Junior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
  <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">Kate Hunington</p>
          <p className="text-muted mb-0">kate.hunington@gmail.com</p>
        </div>
      </div>
    </td>
    <td>
      <p className="fw-normal mb-1">Designer</p>
      <p className="text-muted mb-0">UI/UX</p>
    </td>
    <td>
      <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
    </td>
    <td>Senior</td>
    <td>
<Button>MAIL</Button>
    </td>
  </tr>
</tbody>
</table> 
      </div>

      <div ref={section2Ref} style={{ width: '100%', height: '100vh', backgroundColor: 'blue' }}>KKEM March DSA</div>
      
      <div ref={section3Ref} style={{ width: '100%', height: '100vh', backgroundColor: 'green' }}>KKEM March MLAI</div>

      <div ref={section4Ref} style={{ width: '100%', height: '100vh', backgroundColor: 'yellow' }}>KKEM March FSD</div>
      
      <div ref={section5Ref} style={{ width: '100%', height: '100vh', backgroundColor: 'purple' }}>KKEM March DSA ST</div>

      <div ref={section6Ref} style={{ width: '100%', height: '100vh', backgroundColor: 'orange' }}>KKEM March DSA</div>
    </div>
  );
};

export default StudentsCSA;




