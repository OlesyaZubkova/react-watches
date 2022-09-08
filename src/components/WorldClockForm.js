import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import { useState } from "react";

function WorldClockForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", timezone: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^UTC/.test(form.timezone)) {
      setForm((prevForm) => ({ ...prevForm, timezone: "UTC" }));
      return;
    }

    const clock = {
      id: shortid.generate(),
      name: form.name,
      timezone: form.timezone.slice(3),
    };

    onAdd(clock);
    setForm({ name: "", timezone: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-elem">
        <label className="input-description" htmlFor="name">
          Название
        </label>
        <input
          className="form-input"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-elem">
        <label className="input-description" htmlFor="timezone">
          Временная зона
        </label>
        <input
          className="form-input"
          id="timezone"
          name="timezone"
          placeholder="Например, UTC+3"
          value={form.timezone}
          onChange={handleChange}
          required
        />
      </div>
      <button className="btn add-btn" type="submit">
        Добавить
      </button>
    </form>
  );
}

WorldClockForm.propTypes = {
  onAdd: PropTypes.func,
};

export default WorldClockForm;
