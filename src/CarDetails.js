import React, { useRef, useEffect } from "react";

const CarDetails = ({ initialData = {} }) => {
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.reset();
  }, [initialData]);

  return (
    <form ref={formRef}>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          defaultValue={initialData.model || ""}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          defaultValue={initialData.year || ""}
        />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          defaultValue={initialData.color || ""}
        />
      </div>
    </form>
  );
};

export default CarDetails;