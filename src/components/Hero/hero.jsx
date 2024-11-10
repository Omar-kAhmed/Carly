import "./hero.css";

function Hero() {
  return (
    <div className="main">
      <div className="Home">


        <img className="car1" src="Home_Image.png" alt="Car 1" />
        <img className="air" src="air.png" alt="Air" />
        <img className="black" src="black.png" alt="Black" />

        <h3 className="title">
          Car<span className="ly">ly</span>
        </h3>

        <h3 className="head1">
          Maintenance made <span className="easy">easy</span>
        </h3>
        
        <button className="Start">Start Now</button>
      </div>

  


      <div className="our_mission">
        <h2 className="our">
          Our <span class="mission"> Mission</span>
        </h2>
        <hr width="20%" color="red" />

        <img className="driver" src="driver.png" alt="" />

        <p>
          At Carly, we simplify how you care for your car, ensuring it's always
          in top condition. We believe that maintaining your vehicle should be
          stress-free, affordable, and tailored to your needs. Our platform
          tracks your car’s kilometers, informs you of the next maintenance and
          gives you accurate cost estimates. At Carly, we strive to make your
          relationship with your car smooth and worry-free, allowing you to
          focus more on the road ahead. Whether you're a DIY enthusiast or
          prefer professional services, Carly helps you stay connected with your
          car ensuring every drive is safe and enjoyable.
        </p>
      </div>
       

      <div className="services">


    <h2 className="ours">Explore <span class="services1">Our Features</span></h2> 
    <hr className="serhr" width="20%" color="red" />

   
    <div className="service1">
        <img className="service1i" src="cost.png" alt="service1" />
        <h3 className="service1h"> <span className="f">Mileage</span> Tracking</h3>
        <p className="service1p">Track your car's kilometers and receive reminders for your next maintenance.</p>
        </div>

        <div className="service2">
        <img className="service2i" src="maintainance.png" alt="service2" />
        <h3 className="service2h"><span className="f">Maintenance</span> Schedule</h3>
        <p className="service2p">Receive alerts for upcoming maintenance and schedule appointments with local service providers.</p>
        </div>

        <div className="service3">
        <img className="service3i" src="chat.png" alt="service3" />
        <h3 className="service3h"><span className="f">Cost</span> Estimates</h3>
        <p className="service3p">Get accurate cost estimates for maintenance and repairs based on your car's make and model.</p>
        </div>

        <div className="service4">
        <img className="servicei" src="DIY.png" alt="service4" />
        <h3 className="service4h"><span className="f">Online</span>  Consultation </h3>
        <p className="service4p">View your car's service history and keep track of all maintenance performed.</p>
        </div>


</div>

<div className="how">
    <h2 className="howit"> <span className="f">How</span> It Works </h2>
    <hr className="howhr" width="20%" color="red" />

    <div className="number1 number">
        1
    </div>

<h2 className="step1">Sign Up and Add Your Car Details</h2>
<p className="step1p">Create your Carly account and add details about your car’s make and model to get started.</p>
<button>
    <span class="box">
       Let's Take Care of Your Car
    </span>
</button>

    <hr className="splitter" width="20%" color="red" />
    <div className="number2 number">
        2
        </div>
    <h2 className="step2">Relax and Access Maintenance Tips</h2>
    <p className="step2p">Relax knowing that Carly has your car’s care covered with personalized maintenance schedules, DIY guides, and cost estimates..

</p>
</div>

</div>

    


  );
}

export default Hero;
