import React from "react";
import { useParams } from "react-router";

const Book = () => {
  const { bookingId } = useParams();
  return (
    <div>
      <p className="w-75 p-5 text-success">
        {" "}
        <span className="text-primary">Your booking :</span>
        {bookingId}
      </p>
    </div>
  );
};

export default Book;
