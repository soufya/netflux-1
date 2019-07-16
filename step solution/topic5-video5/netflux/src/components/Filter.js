import React from 'react'

class Filter extends React.Component {
  render() {
    return (
      <section className="section filter">
        <div className="container">
          <form>
            <label className="movieTypeLabel">أفلام</label>
            <select className="movieTypeSelect">
              <option value="">نوع الفيلم</option>
              <option value="Action">الأكشن</option>
              <option value="Thriller">الغموض</option>
              <option value="Drama">الدراما</option>
              <option value="Comedy">الكوميدي</option>
            </select>
          </form>
        </div>
      </section>
    );
  }
}

export default Filter;