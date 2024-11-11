import React from "react";
import { Link } from "react-router-dom";

const TheFooter = () => {
  return (
    <footer className="bg-slate-200">
      <div className="container mx-auto p-4">
        <p className="font-bold text-center">
          Dynamic coding with{" "}
          <Link
            className="hover:underline"
            to={"https://github.com/Mushkir/ecommerce-app-mern"}
            target="_blank"
          >
            Mushkir
          </Link>{" "}
          &copy;
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default TheFooter;
