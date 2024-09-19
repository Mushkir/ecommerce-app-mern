import React from "react";

const TheFooter = () => {
  return (
    <footer className="bg-slate-200">
      <div className="container mx-auto p-4">
        <p className="font-bold text-center">
          Dynamic coding with Mushkir &copy;{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default TheFooter;
