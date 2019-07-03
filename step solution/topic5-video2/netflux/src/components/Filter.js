import React from 'react';

const Filter = (props) => {
  return (
    <section className="section filter">
      <div className="container">
        <form>
          <label className="movieTypeLabel" htmlFor="movieType">{props.type}</label>
          <select className="movieTypeSelect" id="movieType">
            <option value="">{props.optionText}</option>
            <option value="الأكشن">الأكشن</option>
            <option value="الغموض">الغموض</option>
            <option value="الدراما">الدراما</option>
            <option value="الكوميدي">الكوميدي</option>
          </select>
        </form>
      </div>
    </section>
  );
}

export default Filter;