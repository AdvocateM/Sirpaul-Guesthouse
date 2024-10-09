import React from 'react'

function Category() {
    return (
        <div className="all__sidebar-item">
        <h5>Category</h5>
        <div className="all__sidebar-item-category">
          <ul>
            <li>
              <a href="services-details.html">
                <i className="far fa-angle-double-right"></i>Family Unit
                <span>(R800)</span>
              </a>
            </li>
            <li>
              <a href="services-details.html">
                <i className="far fa-angle-double-right"></i>Twin Room
                <span>(R700)</span>
              </a>
            </li>
            <li>
              <a className="active" href="services-details.html">
                <i className="far fa-angle-double-right"></i>Standard
                <span>(R600)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Category
