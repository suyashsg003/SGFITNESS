import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Push your limits with our most popular training sessions designed to
          build strength, stamina, and confidence.
        </p>
        <img src="/img22.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Discover our intense bootcamp programs that help you transform your body,
          boost your energy, and stay motivated throughout your fitness journey.
        </p>
        <div className="bootcamps">
          <div>
            <h4>High-Intensity Interval Training (HIIT)</h4>
            <p>
              Burn fat and improve endurance with short bursts of intense exercises
              followed by quick recovery periods.
            </p>
          </div>
          <div>
            <h4>Strength & Conditioning Bootcamp</h4>
            <p>
              Focus on building core strength, muscle tone, and physical performance
              with structured resistance training.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Camp</h4>
            <p>
              Elevate your heart rate with dynamic movements that improve cardiovascular
              health and burn calories.
            </p>
          </div>
          <div>
            <h4>Full-Body Functional Training</h4>
            <p>
              Boost real-life movement with workouts that enhance flexibility, balance, and coordination
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
