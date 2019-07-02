import React from 'react';

const Filter = () => {
  return (
    <section className="section filter">
      <div className="container">
        <form>
          <label className="movieTypeLabel" htmlFor="movieType">أفلام</label>
          <select className="movieTypeSelect" id="movieType">
            <option value="">نوع الفيلم</option>
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