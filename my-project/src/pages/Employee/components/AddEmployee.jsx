import React, { useState } from "react";

const AddEmployee = ({ setShowModal }) => {
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [team, setTeam] = useState("");
  const [role, setRole] = useState("");

  // Dropdown options
  const teams = ["Tech Team", "PM Team", "Creative Team", "PM", "Finance"];
  const roles = ["Admin", "PM", "PM Employee", "System Admin"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic (e.g., send data to the server)
    console.log({ employeeName, email, designation, team, role });

    // Clear form fields after submission (optional)
    setEmployeeName("");
    setEmail("");
    setDesignation("");
    setTeam("");
    setRole("");
  };

  return (
    <div className="p-4 bg-white text-sm  ">
      <h2 className=" lg font-semibold mb-4 text-lg">Add New Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4 capitalize text-left">
        <div>
          <label className="block mb-1">Employee Name</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        
        <div>
          <label className="block mb-1">Designation</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        
        <div>
          <label className="block mb-1">Team</label>
          <select
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            required
            className="border rounded p-2 w-full"
          >
            <option value="">Select a team</option>
            {teams.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block mb-1">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="border rounded p-2 w-full"
          >
            <option value="">Select a role</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            className="bg-gradient-to-bl from-[#fa2912] to-[#880e00] text-white shadow-lg  white rounded px-4 py-2"
          >
            Add New User
          </button>
          <button
            type="button"
            onClick={()=>setShowModal(false)} // Close modal
            className="bg-gray-300  black rounded px-4 py-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
