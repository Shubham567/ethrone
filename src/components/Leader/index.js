import React from 'react';
import BWImage from "../BWImage";

const Leader = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <BWImage alt="A sample item" src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDA3ODV8MHwxfHNlYXJjaHwxfHxnaWZ0fGVufDB8fHx8MTY1NjE3MjI1Mw&ixlib=rb-1.2.1&q=80&w=1080"
                 className="max-w-sm rounded-lg shadow-2xl" height={400} width={260}/>
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">A bold step towards social well-being!</h1>
          <p className="pt-6">
            Good behaviour is often involving and therefore is not physically rewarding to individual,
            We change that via the use of technology. We are using the power of the internet to help people also to change their behaviour.
          </p>
          <p className="pb-6 pt-4">
            Tip: <span className="font-semibold">Hover images for color. Search functional.</span>
          </p>
          <a href="#main"><button className="btn">View Rewards</button> </a>
        </div>
      </div>
    </div>
  );
};

export default Leader;
